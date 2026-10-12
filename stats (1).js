/* Jotaro Kujo — Star Platinum
   Change any number below, save this file, then restart Cookie Clicker.
   'Lv1' / 'Lv100' pairs: the mod fills in every level in between.
   Cooldowns drop every 5 levels; uptime and strength grow every level. */
JojoCookieClicker.define('jotaro', {
  STATS: {
    // ---- 1. STAT BONUSES ----
    passiveClickPowerLv1: 0.001,   // +0.1% click power at level 1 (0.001 = 0.1%)
    passiveClickPowerLv100: 0.1,   // +10% click power at level 100
    // ---- 2. COOLDOWN ----
    cooldownSecondsLv1: 480,   // 8 minutes at level 1
    cooldownSecondsLv100: 180,   // 3 minutes at level 100 (drops every 5 levels)
    // ---- 3. ABILITY UPTIME ----
    uptimeSecondsLv1: 3,   // barrage length at level 1
    uptimeSecondsLv100: 10,   // barrage length at level 100
    // ---- 4. RANDOM / CHANCE VALUES ----
    clicksPerSecond: 15,   // Star Platinum clicks the cookie this many times per second
  },
  // ---- RECRUITING & FEEDING ----
  name: "Jotaro Kujo",
  stand: "Star Platinum",
  kit: "active_and_passive",   // active, passive or active_and_passive
  abilityName: "ORA ORA Rush",
  passiveName: "Star Platinum Precision",
  description: "Ability: Jotaro appears and Star Platinum unleashes a barrage of punches on the cookie, clicking it for you. Passive: small permanent click-power bonus.",
  unlock: {"type": "start"},
  recruitCost: 0,   // cookies to hire once unlocked (0 = joins for free)
  feedBaseCost: 100,   // cookies for the first level-up
  feedCostGrowth: 1.6   // each level-up costs this many times more
});
