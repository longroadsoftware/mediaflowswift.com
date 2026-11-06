/* Site-wide touches, loaded on every page (defer). Nothing here is needed to
   read or use a page: without it the header still stays at the top (CSS
   position: sticky), every section is visible and every link works.
   - the header darkens once the page scrolls, with a reading-progress line
   - on the home page, the menu link for the section on screen is lit
   - [data-reveal] blocks and the seven-step timeline animate in (motion allowed only)
   - feature cards get a light that follows the pointer
   - the hero's REC timecode runs, and the screenshot tilts flat as you scroll */
(function () {
  var root = document.documentElement;
  root.classList.add("js");
  var still = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Header: shadow and progress line
  var header = document.querySelector("header.top");
  var bar = null;
  if (header) {
    bar = document.createElement("div");
    bar.className = "scroll-progress";
    bar.setAttribute("aria-hidden", "true");
    header.appendChild(bar);
  }

  // Hero screenshot tilt
  var win = document.querySelector(".hero-shot .window");

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      ticking = false;
      var y = window.scrollY || 0;
      var max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      if (header) header.classList.toggle("scrolled", y > 8);
      if (bar) bar.style.setProperty("--progress", Math.min(1, y / max).toFixed(4));
      if (win && !still) {
        var t = Math.min(1, y / 420);
        win.style.setProperty("--tilt", (14 * (1 - t)).toFixed(2) + "deg");
        win.style.setProperty("--shrink", (0.94 + 0.06 * t).toFixed(4));
      }
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();

  // On phones the menu is one sideways-scrolling row: keep the lit link in view
  var menu = document.querySelector("nav.menu");
  function showInMenu(a) {
    if (!menu || !a || menu.scrollWidth <= menu.clientWidth) return;
    var left = a.offsetLeft - menu.offsetLeft, right = left + a.offsetWidth;
    if (left < menu.scrollLeft + 8 || right > menu.scrollLeft + menu.clientWidth - 28) {
      menu.scrollTo({ left: Math.max(0, left - 40), behavior: still ? "auto" : "smooth" });
    }
  }
  showInMenu(document.querySelector('nav.menu a[aria-current="page"]'));

  // Home page: light the menu link for the section on screen (#how, #plans)
  var path = location.pathname.replace(/index\.html$/, "");
  if (path === "/" && "IntersectionObserver" in window) {
    var links = {};
    document.querySelectorAll('nav.menu a[href^="/#"]').forEach(function (a) { links[a.getAttribute("href").slice(2)] = a; });
    var overview = document.querySelector('nav.menu a[href="/"]');
    var visible = {};
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { visible[e.target.id] = e.isIntersecting; });
      var current = null;
      Object.keys(links).forEach(function (id) { if (visible[id] && !current) current = id; });
      Object.keys(links).forEach(function (id) { links[id].classList.toggle("active", id === current); });
      if (current) showInMenu(links[current]);
      if (overview) {
        var how = document.getElementById("how");
        var atTop = !current && (!how || how.getBoundingClientRect().top > window.innerHeight * 0.5);
        if (atTop) overview.setAttribute("aria-current", "page");
        else overview.removeAttribute("aria-current");
      }
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(links).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) spy.observe(el);
    });
  }

  // Reveal on scroll
  var reveals = document.querySelectorAll("[data-reveal], .pipeline");
  if (still || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("in", "lit"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in", "lit"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  }

  // Pointer light on feature cards
  document.querySelectorAll(".grid > div").forEach(function (card) {
    card.addEventListener("pointermove", function (ev) {
      var r = card.getBoundingClientRect();
      card.style.setProperty("--mx", (ev.clientX - r.left) + "px");
      card.style.setProperty("--my", (ev.clientY - r.top) + "px");
    });
  });

  // REC timecode (hours:minutes:seconds:frames at 24 fps)
  var tc = document.querySelector("[data-timecode]");
  if (tc && !still) {
    var start = performance.now();
    var pad = function (n) { return (n < 10 ? "0" : "") + n; };
    (function frame(now) {
      var f = Math.floor((now - start) / (1000 / 24));
      var s = Math.floor(f / 24);
      tc.textContent = "REC " + pad(Math.floor(s / 3600)) + ":" + pad(Math.floor(s / 60) % 60) + ":" + pad(s % 60) + ":" + pad(f % 24);
      requestAnimationFrame(frame);
    })(start);
  }
})();
