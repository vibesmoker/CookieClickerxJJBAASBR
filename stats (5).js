/* Guido Mista — Sex Pistols
   Change any number below, save this file, then restart Cookie Clicker.
   'Lv1' / 'Lv100' pairs: the mod fills in every level in between.
   Cooldowns drop every 5 levels; uptime and strength grow every level. */
JojoCookieClicker.define('mista', {
  STATS: {
    // ---- 1. STAT BONUSES ----
    passiveClickPowerLv1: 0.002,   // +0.2% click power, always on
    passiveClickPowerLv100: 0.1,   // +10% at level 100
    abilityClickPowerLv1: 0.25,   // +25% click power while the Pistols are passing the bullet
    abilityClickPowerLv100: 1.5,   // +150% at level 100
    // ---- 2. COOLDOWN ----
    cooldownSecondsLv1: 420,   // 7 minutes
    cooldownSecondsLv100: 150,   // 2.5 minutes
    // ---- 3. ABILITY UPTIME ----
    uptimeSecondsLv1: 6,
    uptimeSecondsLv100: 20
  },
  // ---- RECRUITING & FEEDING ----
  name: "Guido Mista",
  stand: "Sex Pistols",
  kit: "active_and_passive",   // active, passive or active_and_passive
  abilityName: "Pass Pass Pass!",
  passiveName: "Six Bullets",
  description: "Passive: small click-power bonus. Ability: the Sex Pistols pass a bullet around the cookie and shoot it, boosting click power.",
  unlock: {"type": "cookie_clicks", "value": 1000},
  recruitCost: 0,   // cookies to hire once unlocked (0 = joins for free)
  feedBaseCost: 1000,   // cookies for the first level-up
  feedCostGrowth: 1.6   // each level-up costs this many times more
});
