/* Paddle catalog and environment for mediaflowswift.com.
 *
 * Edit the tiers and price ids here; nothing else on the site knows about them.
 * Client-side tokens are public by design (they can only open checkouts and preview prices);
 * the API key stays in the licence service and is never on this site.
 *
 * Environment: production, unless the page URL carries ?sandbox=1. There is no silent default:
 * an environment whose token or price ids are blank shows a plain notice instead of prices.
 * Sandbox and live are separate accounts, so ids from one never work in the other.
 */
window.MediaFlowPaddle = (function () {
  var environments = {
    sandbox: {
      token: "test_d722e70ada0734b95ca60bcd10d",
      licenceService: "https://mediaflow-licence.mediaflow-licence.workers.dev", // the sandbox Worker, deployed 2026-09-23
      prices: {
        studio: { month: "pri_01m4mgp3bc5b6nfmng3m14z1st", year: "pri_01m4mgp3s30ryms10xj4k56jk8" },
        pro:    { month: "pri_01m4mgp59ad0rdbw6fcx24hsnw", year: "pri_01m4mgp5yt268k9bd4pp242nvh" }
      }
    },
    production: {
      token: "live_f5b3acbcf166c01adb719e99b9a", // client-side token "mediaflowswift.com", Long Road Software LLC account, made 2026-10-11
      licenceService: "https://mediaflow-licence-production.mediaflow-licence.workers.dev",
      prices: {
        studio: { month: "pri_01m4mhm37z25v41ja1x2pa76ks", year: "pri_01m4mhm3q1q66zjeze0f8g4aqa" },
        pro:    { month: "pri_01m4mhm4xr2es76r2xadgpp0d1", year: "pri_01m4mhm5fyefrj2wh81j3pqwh0" }
      }
    }
  };

  // What the plan cards say. Features here must agree with the manual's Plans topic.
  var tiers = [
    {
      id: "studio",
      name: "Studio",
      description: "All the file management",
      features: [
        "Import from cards, phones and folders",
        "Categorize, review, rate, tag",
        "Organize to the destination, proved copies",
        "Free Up Space, Archive and restore",
        "Proxies, editing drive, Library Moved",
        "Reports, Help, updates, problem reports"
      ]
    },
    {
      id: "pro",
      name: "Studio Pro",
      description: "Studio, plus publishing and the studio database",
      features: [
        "Everything in Studio",
        "Titles, descriptions, chapters and tags drafted for you",
        "Upload to YouTube as a private draft (advanced; needs your own Google Cloud project)",
        "Results read back from YouTube",
        "Shared database server across your Macs"
      ]
    }
  ];

  function isSandbox() {
    return new URLSearchParams(window.location.search).get("sandbox") === "1";
  }

  function environmentName() {
    return isSandbox() ? "sandbox" : "production";
  }

  function environment() {
    return environments[environmentName()];
  }

  /** Why this environment cannot sell yet, or null when it is complete. */
  function missing() {
    var env = environment();
    if (!env.token) return "no client token for " + environmentName();
    var blank = tiers.filter(function (t) {
      var p = env.prices[t.id];
      return !p || !p.month || !p.year;
    });
    if (blank.length) return "no " + environmentName() + " price ids for " + blank.map(function (t) { return t.name; }).join(", ");
    return null;
  }

  return { tiers: tiers, environmentName: environmentName, environment: environment, isSandbox: isSandbox, missing: missing };
})();
