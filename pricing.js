/* Plans section: local prices from Paddle, a monthly/yearly/forever toggle, and Buy buttons that open
 * Paddle's overlay checkout for exactly the price shown. Reads paddle-config.js.
 * Only Paddle's own formatted prices (before tax, matching the catalog) are displayed; nothing is calculated or reformatted here. */
(function () {
  var cfg = window.MediaFlowPaddle;
  var notice = document.getElementById("paddle-notice");
  var buttons = document.querySelectorAll("[data-buy]");
  var amounts = document.querySelectorAll("[data-price-for]");
  var pers = document.querySelectorAll("[data-per]");
  var choices = document.querySelectorAll(".billing-choice");
  var period = "year";
  var per = { month: "a month", year: "a year", forever: "once" };
  var prices = {}; // price id -> Paddle's formatted price before tax
  var ready = false;

  function say(text) {
    notice.textContent = text;
    notice.hidden = !text;
  }

  function refuse(reason) {
    say("Prices are not available right now (" + reason + "). Email support@mediaflowswift.com and we will sort it out.");
    amounts.forEach(function (el) { el.textContent = "—"; });
    buttons.forEach(function (b) { b.disabled = true; });
  }

  function priceId(tier) {
    return cfg.environment().prices[tier][period];
  }

  function render() {
    amounts.forEach(function (el) {
      var id = priceId(el.getAttribute("data-price-for"));
      el.textContent = prices[id] || "…";
    });
    pers.forEach(function (el) { el.textContent = per[period]; });
    choices.forEach(function (c) { c.setAttribute("aria-pressed", String(c.getAttribute("data-period") === period)); });
    buttons.forEach(function (b) { b.disabled = !ready || !prices[priceId(b.getAttribute("data-buy"))]; });
  }

  function theme() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function thanksUrl(transactionId) {
    var url = new URL("/thanks.html", window.location.origin);
    if (cfg.isSandbox()) url.searchParams.set("sandbox", "1");
    if (transactionId) url.searchParams.set("_ptxn", transactionId);
    return url.toString();
  }

  function open(tier) {
    // No successUrl here: Paddle does not add the transaction number to it, and the thank-you page needs it.
    // The checkout.completed event below carries the number, and we go to the thank-you page ourselves.
    var open = { items: [{ priceId: priceId(tier), quantity: 1 }],
      settings: { displayMode: "overlay", variant: "one-page", theme: theme(), showAddDiscounts: true } };
    var params = new URLSearchParams(window.location.search);
    var email = params.get("email");
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) open.customer = { email: email };
    // A code in the link (?discount=CODE) is applied before the checkout opens; the field stays for typing one.
    var code = params.get("discount");
    if (code && /^[A-Za-z0-9]{1,32}$/.test(code)) open.discountCode = code;
    Paddle.Checkout.open(open);
  }

  function loadPrices() {
    var env = cfg.environment();
    var items = [];
    cfg.tiers.forEach(function (t) {
      items.push({ priceId: env.prices[t.id].month, quantity: 1 });
      items.push({ priceId: env.prices[t.id].year, quantity: 1 });
      if (cfg.hasForever()) items.push({ priceId: env.prices[t.id].forever, quantity: 1 });
    });
    // No address: Paddle works out the visitor's country and currency itself.
    Paddle.PricePreview({ items: items }).then(function (result) {
      result.data.details.lineItems.forEach(function (item) {
        prices[item.price.id] = item.formattedTotals.subtotal;
      });
      ready = true;
      render();
    }).catch(function (error) {
      console.error("PricePreview failed", error);
      refuse("the price service did not answer");
    });
  }

  choices.forEach(function (c) {
    c.addEventListener("click", function () { period = c.getAttribute("data-period"); render(); });
  });
  buttons.forEach(function (b) {
    b.addEventListener("click", function () { open(b.getAttribute("data-buy")); });
  });

  if (!cfg) return refuse("the plan list is missing");
  var missing = cfg.missing();
  if (missing) return refuse(missing);
  if (!window.Paddle) return refuse("the payment script did not load");
  // The Forever choice appears only once both one-time prices exist in this environment.
  choices.forEach(function (c) { if (c.getAttribute("data-period") === "forever") c.hidden = !cfg.hasForever(); });

  if (cfg.isSandbox()) {
    Paddle.Environment.set("sandbox");
    say("Sandbox: test prices and test cards only. Nothing here is a real purchase.");
  }
  Paddle.Initialize({
    token: cfg.environment().token,
    eventCallback: function (event) {
      if (event.name === "checkout.completed") {
        var txn = event.data && (event.data.transaction_id || event.data.id);
        say("Payment complete. Fetching your licence key\\u2026");
        setTimeout(function () { window.location.href = thanksUrl(txn); }, 1500);
      }
      if (event.name === "checkout.error" || event.name === "checkout.payment-error") console.warn(event.name, event);
    }
  });
  render();
  loadPrices();
})();
