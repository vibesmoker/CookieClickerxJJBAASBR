/* Iggy — The Fool
   Change any number below, save this file, then restart Cookie Clicker.
   'Lv1' / 'Lv100' pairs: the mod fills in every level in between.
   Cooldowns drop every 5 levels; uptime and strength grow every level. */
JojoCookieClicker.define('iggy', {
  STATS: {
    // ---- 1. STAT BONUSES ----
    napPassiveBonusLv1: 0.1,   // passive bonus of the character Iggy sleeps on: +10%
    napPassiveBonusLv100: 0.25,
    napCooldownReductionLv1: 0.2,   // cooldown of the character Iggy sleeps on: -20%
    napCooldownReductionLv100: 0.35,
    napUptimeBonusLv1: 0.1,   // uptime of the character Iggy sleeps on: +10%
    napUptimeBonusLv100: 0.25,
    // ---- 2. COOLDOWN ----
    digEverySeconds: 30,   // Iggy digs with The Fool this often
    // ---- 3. ABILITY UPTIME ----
    napSeconds: 600,   // nap length (10 minutes)
    // ---- 4. RANDOM / CHANCE VALUES ----
    gumChance: 0.2,   // 20% chance each dig finds coffee-flavored gum (otherwise a chocolate bar)
    gumPiecesToNap: 5,   // gum pieces Iggy eats before he naps
  },
  // ---- RECRUITING & FEEDING ----
  name: "Iggy",
  stand: "The Fool",
  kit: "passive",   // active, passive or active_and_passive
  abilityName: null,
  passiveName: "Coffee Gum Nap",
  description: "Wanders the screen digging with The Fool. After eating five pieces of coffee gum he naps on a teammate for ten minutes, boosting them.",
  unlock: {"type": "building_count", "building": "Grandma", "value": 60},
  recruitCost: 25000000,   // cookies to hire once unlocked (0 = joins for free)
  feedBaseCost: 2500,   // cookies for the first level-up
  feedCostGrowth: 1.6   // each level-up costs this many times more
});
