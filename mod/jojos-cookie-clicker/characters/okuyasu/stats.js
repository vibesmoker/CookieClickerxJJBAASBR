/* Okuyasu Nijimura — The Hand
   Change any number below, save this file, then restart Cookie Clicker.
   'Lv1' / 'Lv100' pairs: the mod fills in every level in between.
   Cooldowns drop every 5 levels; uptime and strength grow every level. */
JojoCookieClicker.define('okuyasu', {
  STATS: {
    // ---- 1. STAT BONUSES ----
    nextClickPowerPercent: 10000,   // +10,000% on your next click (does NOT grow with level)
    // ---- 2. COOLDOWN ----
    cooldownSecondsLv1: 600,   // 10 minutes
    cooldownSecondsLv100: 480,   // only a slight reduction: 8 minutes at level 100
    // ---- 3. ABILITY UPTIME ----
    armedSecondsLv1: 30,   // how long the erased-space boost waits for your click
    armedSecondsLv100: 60
  },
  // ---- RECRUITING & FEEDING ----
  name: "Okuyasu Nijimura",
  stand: "The Hand",
  kit: "active",   // active, passive or active_and_passive
  abilityName: "Space Erasure",
  passiveName: null,
  description: "Ability: The Hand erases space, making your next click 10,000% stronger. Leveling only shortens the cooldown slightly.",
  unlock: {"type": "purchase"},
  recruitCost: 50000,   // cookies to hire once unlocked (0 = joins for free)
  feedBaseCost: 250,   // cookies for the first level-up
  feedCostGrowth: 1.6   // each level-up costs this many times more
});
