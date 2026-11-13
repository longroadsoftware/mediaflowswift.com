/* Analytics. In the EU, the rest of the EEA, the UK and Switzerland it is off
   until the visitor says yes (Mike, 2026-11-13: ask only where the law asks).

   No Google or HeyCatch code is in any page of this site; this file loads them.
   The site's Cloudflare Worker sets data-ask on this script tag from the
   visitor's country: "1" = ask first (EU/EEA/UK/CH, or country unknown),
   "0" = elsewhere. No data-ask (a copy served some other way) = ask first.

   Where we ask: nothing loads until the visitor presses Yes on the notice; no
   answer counts as no. Elsewhere: Google Analytics and HeyCatch load without a
   notice, unless the browser sends Global Privacy Control or Do Not Track, or
   the visitor has turned it off ("Don't count my visits" in the footer, or the
   privacy page). Answers are kept in localStorage, which sets no cookie.

   Pages load it with the measurement id on the tag:
     <script src="/analytics.js" data-ga="G-XXXXXXX" defer></script>
   An optional data-privacy="..." sets where the notice's link points,
   for the site whose privacy page lives on another domain.
*/
(function () {
  var tag = document.currentScript || document.querySelector("script[data-ga]");
  var id = tag && tag.getAttribute("data-ga");
  if (!id) return;
  var privacyUrl = (tag && tag.getAttribute("data-privacy")) || "/privacy.html";
  var store = "analytics-consent";
  var loaded = false;
  /* Ask first unless the Worker said this visitor is outside the EU/EEA/UK/CH. */
  var mustAsk = !(tag && tag.getAttribute("data-ask") === "0");
  /* The browser's own "don't track me" settings (Global Privacy Control, Do Not Track). */
  var browserSaysNo = navigator.globalPrivacyControl === true ||
    navigator.doNotTrack === "1" || window.doNotTrack === "1";

  /* HeyCatch (heycatch.ai): visits, clicks and where visitors came from,
     for our marketing. Same yes as Google Analytics. The key is a public
     project key, made to sit in pages. The version is pinned to the npm
     "latest" release; never a -dev or -beta build. */
  var hcKey = "hck_pk_Gmk9VtzfQcURl2mN-gu8HUT-wZgRafmM";
  var hcUrl = "https://esm.sh/@heycatch/sdk@0.8.3";
  var hc = null;

  function loadHeyCatch() {
    if (hc) {
      hc.then(function (a) { if (a) a.optInCapturing(); });
      return;
    }
    var importer;
    try { importer = new Function("u", "return import(u)"); } catch (e) { return; }
    hc = importer(hcUrl).then(function (m) {
      m.analytics.init({
        projectKey: hcKey,
        install: { framework: "web", agent: "other" },
        requestBatching: false,
        persistence: "localStorage",
        respectDnt: true
      });
      return m.analytics;
    }).catch(function () { return null; });
  }

  /* A no after a yes: stop HeyCatch on this page and forget its visitor id. */
  function stopHeyCatch() {
    if (hc) hc.then(function (a) { if (a) a.optOutCapturing(); });
    try {
      var stores = [window.localStorage, window.sessionStorage];
      for (var s = 0; s < stores.length; s++) {
        for (var k = stores[s].length - 1; k >= 0; k--) {
          var key = stores[s].key(k);
          if (key && key.indexOf("ph_") === 0) stores[s].removeItem(key);
        }
      }
    } catch (e) { /* storage blocked: nothing was kept */ }
  }

  /* What the visitor said on this page, when the browser will not keep it. */
  var saidHere = null;

  function answer() {
    try { return window.localStorage.getItem(store) || saidHere; } catch (e) { return saidHere; }
  }

  function remember(said) {
    saidHere = said;
    try { window.localStorage.setItem(store, said); } catch (e) { /* this page only */ }
  }

  function load() {
    loadHeyCatch();
    window["ga-disable-" + id] = false;
    if (loaded) {
      /* Said yes, then no, then yes again without reloading. Google's script
         is already here and the flag is clear, but nothing has been sent
         since the no, so this visit would go uncounted while the privacy
         page says no reload is needed. Ask for it again. */
      if (window.gtag) window.gtag("config", id);
      return;
    }
    loaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(id);
    document.head.appendChild(s);
    window.gtag("js", new Date());
    window.gtag("config", id);
  }

  /* Someone who says no after having said yes: stop sending, and clear
     what was set. Google reads this flag, so nothing more is sent without
     a reload. */
  function stop() {
    stopHeyCatch();
    window["ga-disable-" + id] = true;
    var names = ["_ga", "_ga_" + id.replace(/^G-/, ""), "_gid"];
    /* Google sets _ga on the registrable domain, not on the host, so clearing
       location.hostname alone would miss it if this site were ever served from
       www. The two-label guess is right for mediaflowswift.com; it would be
       wrong for a suffix like co.uk. */
    var labels = location.hostname.split(".");
    var registrable = labels.length > 2 ? labels.slice(-2).join(".") : location.hostname;
    for (var i = 0; i < names.length; i++) {
      document.cookie = names[i] + "=; Max-Age=0; path=/";
      document.cookie = names[i] + "=; Max-Age=0; path=/; domain=" + location.hostname;
      document.cookie = names[i] + "=; Max-Age=0; path=/; domain=." + registrable;
    }
  }

  /* The notice is fixed to the bottom of the window, so without this it sits
     over the footer links, including the privacy link, until the visitor
     answers. Hold the page open by the notice's own height while it shows. */
  var showing = null;

  function holdPageOpen() {
    if (showing) document.body.style.paddingBottom = showing.offsetHeight + "px";
  }

  function letPageClose() {
    showing = null;
    document.body.style.paddingBottom = "";
    window.removeEventListener("resize", holdPageOpen);
  }

  function ask() {
    var box = document.createElement("div");
    box.className = "consent";
    box.setAttribute("role", "region");
    box.setAttribute("aria-label", "Count this visit?");
    box.innerHTML =
      '<div class="consent-inner">' +
      "<h2>Count this visit?</h2>" +
      "<p>Google Analytics and HeyCatch would keep a random visitor id in your browser and be told " +
      "the pages, the buttons and links you click, where you came from, your browser and device, " +
      "and roughly where you are. Both stay off unless you say yes. Saying no changes nothing " +
      "on the site.</p>" +
      '<p class="consent-buttons">' +
      '<button type="button" data-said="yes">Yes, count my visit</button>' +
      '<button type="button" data-said="no">No</button>' +
      "</p>" +
      '<p class="consent-more">What we collect and why &mdash; our <a href="' +
      privacyUrl + '">privacy page</a>.</p>' +
      "</div>";
    box.addEventListener("click", function (event) {
      var said = event.target.getAttribute && event.target.getAttribute("data-said");
      if (!said) return;
      remember(said);
      if (said === "yes") load();
      if (box.parentNode) box.parentNode.removeChild(box);
      letPageClose();
      showChoice();
    });
    document.body.appendChild(box);
    showing = box;
    holdPageOpen();
    window.addEventListener("resize", holdPageOpen);
  }

  /* The privacy page carries <p id="analytics-choice">, so a visitor can
     see what they chose and change it. Other pages have no such element
     and this does nothing. */
  function showChoice() {
    var slot = document.getElementById("analytics-choice");
    if (!slot) return;
    var said = answer();
    if (said !== "yes" && said !== "no") {
      if (mustAsk) {
        slot.textContent = showing
          ? "You have not answered yet. Analytics is off; the notice at the bottom of the page asks."
          : "We have not asked you yet.";
        return;
      }
      if (browserSaysNo) {
        slot.textContent = "Your browser asks sites not to track you, so analytics is off. ";
        said = "no";
      } else {
        slot.textContent = "Analytics is on for this visit (outside the EU, UK and Switzerland we don't ask first). ";
        said = "yes";
      }
    } else {
      slot.textContent = said === "yes"
        ? "You said yes to analytics on this site. "
        : "You said no to analytics on this site. Nothing is sent. ";
    }
    var change = document.createElement("button");
    change.type = "button";
    change.className = "consent-change";
    change.textContent = said === "yes" ? "Turn it off" : "Turn it on";
    change.addEventListener("click", function () {
      var now = counting() ? "no" : "yes";
      remember(now);
      if (now === "yes") load(); else stop();
      showChoice();
      showOptOut();
    });
    slot.appendChild(change);
    slot.appendChild(document.createTextNode(" — no reload needed."));
  }

  /* Name the two moments that matter, so the analytics can count them as
     goals: someone pressing a download link, and someone opening checkout.
     Only after a yes; before that, nothing is loaded to send them to. */
  function counting() {
    return loaded && !window["ga-disable-" + id];
  }

  function goal(event) {
    if (!counting()) return;
    var el = event.target && event.target.closest && event.target.closest("a, button");
    if (!el) return;
    var href = el.getAttribute("href") || "";
    var name = null, props = {};
    if (el.hasAttribute("data-buy")) {
      name = "checkout_opened"; props.plan = el.getAttribute("data-buy");
    } else if (el.id === "get" || href === "/get" || href.indexOf("lrs-downloads") !== -1) {
      name = "trial_download_clicked";
    } else if (href === "/download.html" || href.indexOf("/download.html") === 0) {
      name = "download_page_clicked";
    }
    if (!name) return;
    props.page = location.pathname;
    if (hc) hc.then(function (a) { if (a && a.trackEvent) a.trackEvent(name, props); });
    if (window.gtag) window.gtag("event", name, props);
  }
  document.addEventListener("click", goal, true);

  /* Outside the EU/UK/CH there is no notice, so every page's footer carries the way out. */
  var optOut = null;
  function showOptOut() {
    if (mustAsk) return;
    var footer = document.querySelector("footer .wrap") || document.querySelector("footer");
    if (!footer) return;
    if (!optOut) {
      optOut = document.createElement("p");
      optOut.className = "consent-optout";
      footer.appendChild(optOut);
    }
    optOut.textContent = "";
    if (counting()) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "consent-change";
      b.textContent = "Don\u2019t count my visits";
      b.addEventListener("click", function () {
        remember("no");
        stop();
        showOptOut();
        showChoice();
      });
      optOut.appendChild(b);
    } else {
      optOut.appendChild(document.createTextNode("Your visits aren\u2019t counted by analytics. "));
      var a = document.createElement("a");
      a.href = privacyUrl;
      a.textContent = "Privacy";
      optOut.appendChild(a);
    }
  }

  function start() {
    var said = answer();
    if (said === "yes") load();
    else if (said === "no") { /* stays off */ }
    else if (mustAsk) ask();
    else if (!browserSaysNo) load();
    showChoice();
    showOptOut();
  }

  if (document.body) start();
  else document.addEventListener("DOMContentLoaded", start);
})();
