/* Muhammad Avdol — Magician's Red
   Change any number below, save this file, then restart Cookie Clicker.
   'Lv1' / 'Lv100' pairs: the mod fills in every level in between.
   Cooldowns drop every 5 levels; uptime and strength grow every level. */
JojoCookieClicker.define('avdol', {
  STATS: {
    // ---- 1. STAT BONUSES ----
    passiveCpsLv1: 0.002,   // +0.2% cookies per second at level 1
    passiveCpsLv100: 0.15,   // +15% at level 100
    fireCpsBoostLv1: 0.2,   // while the cookie is on fire: +20% production (level 1)
    fireCpsBoostLv100: 0.3,   // +30% at level 100
    // ---- 2. COOLDOWN ----
    fireCheckSecondsLv1: 30,   // rolls for fire every 30 seconds at level 1
    fireCheckSecondsLv100: 3,   // every 3 seconds at level 100 (steps down every 5 levels)
    // ---- 3. ABILITY UPTIME ----
    fireSecondsLv1: 5,   // fire lasts 5 seconds at level 1
    fireSecondsLv100: 60,   // 60 seconds at level 100
    // ---- 4. RANDOM / CHANCE VALUES ----
    fireChance: 0.1,   // 10% chance each roll to set the cookie on fire
  },
  // ---- RECRUITING & FEEDING ----
  name: "Muhammad Avdol",
  stand: "Magician's Red",
  kit: "passive",   // active, passive or active_and_passive
  abilityName: null,
  passiveName: "Crossfire Hurricane",
  description: "Passive: Magician's Red boosts all cookie production and sets the milk on fire. Every so often he may set the cookie itself on fire, boosting production while it burns.",
  unlock: {"type": "purchase"},
  recruitCost: 1000000,   // cookies to hire once unlocked (0 = joins for free)
  feedBaseCost: 750,   // cookies for the first level-up
  feedCostGrowth: 1.6   // each level-up costs this many times more
});
