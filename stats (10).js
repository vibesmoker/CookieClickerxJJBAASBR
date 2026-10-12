/* Joseph Joestar — Hermit Purple
   Change any number below, save this file, then restart Cookie Clicker.
   'Lv1' / 'Lv100' pairs: the mod fills in every level in between.
   Cooldowns drop every 5 levels; uptime and strength grow every level. */
JojoCookieClicker.define('joseph', {
  STATS: {
    // ---- 1. STAT BONUSES ----
    abilityClickPowerLv1: 0.1,   // +10% click power while Hermit Purple is wrapped around the cookie (level 1)
    abilityClickPowerLv100: 1.0,   // +100% at level 100
    // ---- 2. COOLDOWN ----
    cooldownSecondsLv1: 300,   // 5 minutes
    cooldownSecondsLv100: 120,   // 2 minutes
    // ---- 3. ABILITY UPTIME ----
    uptimeSecondsLv1: 8,
    uptimeSecondsLv100: 25
  },
  // ---- RECRUITING & FEEDING ----
  name: "Joseph Joestar",
  stand: "Hermit Purple",
  kit: "active",   // active, passive or active_and_passive
  abilityName: "Hermit Purple Bind",
  passiveName: null,
  description: "Ability: Hermit Purple wraps around the cookie and boosts click power while it holds.",
  unlock: {"type": "lifetime_cookies", "value": 10000},
  recruitCost: 0,   // cookies to hire once unlocked (0 = joins for free)
  feedBaseCost: 200,   // cookies for the first level-up
  feedCostGrowth: 1.6   // each level-up costs this many times more
});
