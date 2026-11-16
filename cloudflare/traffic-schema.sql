-- lrs-traffic (LON-3645): daily totals only. No IP, no full referrer, no user agent, no visitor id.
-- who: human | us (Mike/Sheri at home) | bot. day: America/Chicago date.
CREATE TABLE IF NOT EXISTS visits (
  day TEXT NOT NULL, site TEXT NOT NULL, who TEXT NOT NULL,
  source TEXT NOT NULL, medium TEXT NOT NULL, campaign TEXT NOT NULL, landing TEXT NOT NULL,
  country TEXT NOT NULL, device TEXT NOT NULL, n INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (day, site, who, source, medium, campaign, landing, country, device)
);
CREATE TABLE IF NOT EXISTS downloads (
  day TEXT NOT NULL, site TEXT NOT NULL, who TEXT NOT NULL,
  source TEXT NOT NULL, medium TEXT NOT NULL, campaign TEXT NOT NULL,
  country TEXT NOT NULL, device TEXT NOT NULL, n INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (day, site, who, source, medium, campaign, country, device)
);
