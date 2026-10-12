/* Dragon's Dream — Dragon's Dream
   Change any number below, save this file, then restart Cookie Clicker.
   'Lv1' / 'Lv100' pairs: the mod fills in every level in between.
   Cooldowns drop every 5 levels; uptime and strength grow every level. */
JojoCookieClicker.define('dragonsdream', {
  STATS: {
    // ---- 1. STAT BONUSES ----
    upgradeDiscount: 0.5,   // next JoJo upgrade costs 50% less when you pick the right arrow
    // ---- 2. COOLDOWN ----
    arrowCheckSecondsLv1: 120,   // checks for an arrow every 2 minutes
    arrowCheckSecondsLv100: 60,
    // ---- 3. ABILITY UPTIME ----
    answerSecondsLv1: 10,   // seconds you have to click the matching arrow
    answerSecondsLv100: 15,
    // ---- 4. RANDOM / CHANCE VALUES ----
    arrowChanceLv1: 0.5,   // 50% chance an arrow appears on each check
    arrowChanceLv100: 0.75
  },
  // ---- RECRUITING & FEEDING ----
  name: "Dragon's Dream",
  stand: "Dragon's Dream",
  kit: "active",   // active, passive or active_and_passive
  abilityName: "Feng Shui Direction",
  passiveName: null,
  description: "Every so often a giant arrow appears on the cookie. Click the matching direction in time to halve the cost of your next JoJo upgrade.",
  unlock: {"type": "purchase"},
  recruitCost: 100000000,   // cookies to hire once unlocked (0 = joins for free)
  feedBaseCost: 10000,   // cookies for the first level-up
  feedCostGrowth: 1.6   // each level-up costs this many times more
});
