"""Generates characters/<id>/stats.js for every character.
Each file lists its numbers in this order: 1 stat bonuses, 2 cooldowns, 3 uptime, 4 random/chance values,
then the recruit/feed settings."""
import json, os
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'mod', 'jojos-cookie-clicker', 'characters')

# (section, key, value, comment)
C = {}
def char(cid, name, stand, kit, unlock, recruit_cost, feed_base, ability, passive, stats):
    C[cid] = dict(name=name, stand=stand, kit=kit, unlock=unlock, recruitCost=recruit_cost,
                  feedBaseCost=feed_base, feedCostGrowth=1.6, ability=ability, passive=passive, stats=stats)

S1, S2, S3, S4 = '1. STAT BONUSES', '2. COOLDOWN', '3. ABILITY UPTIME', '4. RANDOM / CHANCE VALUES'

char('jotaro', 'Jotaro Kujo', 'Star Platinum', 'active_and_passive', {'type': 'start'}, 0, 100,
     'ORA ORA Rush', 'Star Platinum Precision', [
    (S1, 'passiveClickPowerLv1', 0.001, '+0.1% click power at level 1 (0.001 = 0.1%)'),
    (S1, 'passiveClickPowerLv100', 0.10, '+10% click power at level 100'),
    (S2, 'cooldownSecondsLv1', 480, '8 minutes at level 1'),
    (S2, 'cooldownSecondsLv100', 180, '3 minutes at level 100 (drops every 5 levels)'),
    (S3, 'uptimeSecondsLv1', 3, 'barrage length at level 1'),
    (S3, 'uptimeSecondsLv100', 10, 'barrage length at level 100'),
    (S4, 'clicksPerSecond', 15, 'Star Platinum clicks the cookie this many times per second'),
])
char('joseph', 'Joseph Joestar', 'Hermit Purple', 'active', {'type': 'lifetime_cookies', 'value': 10000}, 0, 200,
     'Hermit Purple Bind', None, [
    (S1, 'abilityClickPowerLv1', 0.10, '+10% click power while Hermit Purple is wrapped around the cookie (level 1)'),
    (S1, 'abilityClickPowerLv100', 1.00, '+100% at level 100'),
    (S2, 'cooldownSecondsLv1', 300, '5 minutes'),
    (S2, 'cooldownSecondsLv100', 120, '2 minutes'),
    (S3, 'uptimeSecondsLv1', 8, ''),
    (S3, 'uptimeSecondsLv100', 25, ''),
])
char('okuyasu', 'Okuyasu Nijimura', 'The Hand', 'active', {'type': 'purchase'}, 50000, 250,
     'Space Erasure', None, [
    (S1, 'nextClickPowerPercent', 10000, '+10,000% on your next click (does NOT grow with level)'),
    (S2, 'cooldownSecondsLv1', 600, '10 minutes'),
    (S2, 'cooldownSecondsLv100', 480, 'only a slight reduction: 8 minutes at level 100'),
    (S3, 'armedSecondsLv1', 30, 'how long the erased-space boost waits for your click'),
    (S3, 'armedSecondsLv100', 60, ''),
])
char('giorno', 'Giorno Giovanna', 'Gold Experience', 'passive', {'type': 'buildings_owned', 'value': 10}, 0, 300,
     None, 'Life Giver', [
    (S1, 'passiveCpsLv1', 0.001, '+0.1% cookies per second at level 1'),
    (S1, 'passiveCpsLv100', 0.10, '+10% at level 100'),
])
char('jolyne', 'Jolyne Cujoh', 'Stone Free', 'active', {'type': 'purchase'}, 250000, 400,
     'Stone Free Rush', None, [
    (S2, 'cooldownSecondsLv1', 600, '10 minutes'),
    (S2, 'cooldownSecondsLv100', 120, '2 minutes'),
    (S3, 'uptimeSecondsLv1', 5, ''),
    (S3, 'uptimeSecondsLv100', 15, ''),
    (S4, 'clicksPerSecondLv1', 5, 'auto-clicks per second at level 1'),
    (S4, 'clicksPerSecondLv100', 20, 'auto-clicks per second at level 100'),
])
char('jonathan', 'Jonathan Joestar', 'Hamon', 'passive', {'type': 'buildings_owned', 'value': 25}, 0, 500,
     None, 'Hamon Breathing', [
    (S1, 'passiveCpsLv1', 0.001, '+0.1% cookies per second at level 1'),
    (S1, 'passiveCpsLv100', 0.10, '+10% at level 100'),
])
char('avdol', 'Muhammad Avdol', "Magician's Red", 'passive', {'type': 'purchase'}, 1000000, 750,
     None, 'Crossfire Hurricane', [
    (S1, 'passiveCpsLv1', 0.002, '+0.2% cookies per second at level 1'),
    (S1, 'passiveCpsLv100', 0.15, '+15% at level 100'),
    (S1, 'fireCpsBoostLv1', 0.20, 'while the cookie is on fire: +20% production (level 1)'),
    (S1, 'fireCpsBoostLv100', 0.30, '+30% at level 100'),
    (S2, 'fireCheckSecondsLv1', 30, 'rolls for fire every 30 seconds at level 1'),
    (S2, 'fireCheckSecondsLv100', 3, 'every 3 seconds at level 100 (steps down every 5 levels)'),
    (S3, 'fireSecondsLv1', 5, 'fire lasts 5 seconds at level 1'),
    (S3, 'fireSecondsLv100', 60, '60 seconds at level 100'),
    (S4, 'fireChance', 0.10, '10% chance each roll to set the cookie on fire'),
])
char('mista', 'Guido Mista', 'Sex Pistols', 'active_and_passive', {'type': 'cookie_clicks', 'value': 1000}, 0, 1000,
     'Pass Pass Pass!', 'Six Bullets', [
    (S1, 'passiveClickPowerLv1', 0.002, '+0.2% click power, always on'),
    (S1, 'passiveClickPowerLv100', 0.10, '+10% at level 100'),
    (S1, 'abilityClickPowerLv1', 0.25, '+25% click power while the Pistols are passing the bullet'),
    (S1, 'abilityClickPowerLv100', 1.50, '+150% at level 100'),
    (S2, 'cooldownSecondsLv1', 420, '7 minutes'),
    (S2, 'cooldownSecondsLv100', 150, '2.5 minutes'),
    (S3, 'uptimeSecondsLv1', 6, ''),
    (S3, 'uptimeSecondsLv100', 20, ''),
])
char('narancia', 'Narancia Ghirga', 'Aerosmith', 'active', {'type': 'purchase'}, 5000000, 1500,
     'Volare Via', None, [
    (S1, 'buildingBoostLv1', 0.50, '+50% production for the targeted building'),
    (S1, 'buildingBoostLv100', 3.00, '+300% at level 100'),
    (S2, 'cooldownSecondsLv1', 480, '8 minutes'),
    (S2, 'cooldownSecondsLv100', 180, '3 minutes'),
    (S3, 'uptimeSecondsLv1', 15, ''),
    (S3, 'uptimeSecondsLv100', 60, ''),
])
char('kingcrimson', 'King Crimson / Diavolo / Doppio', 'King Crimson', 'passive', {'type': 'all_buildings_once'}, 1000000000, 5000,
     None, 'Epitaph', [
    (S1, 'diavoloCooldownReductionLv1', 0.10, 'as Diavolo: Mista and Narancia cooldowns are 10% shorter'),
    (S1, 'diavoloCooldownReductionLv100', 0.30, '30% at level 100'),
    (S1, 'nailClickPowerPenalty', 0.05, 'each Doppio nail lowers click power by 5%'),
    (S2, 'nailCheckEverySeconds', 10, 'as Doppio: how often a nail can be summoned'),
    (S3, 'diavoloSeconds', 300, 'Diavolo lasts 5 minutes, then King Crimson returns'),
    (S4, 'freeBuildingChanceLv1', 0.005, '0.5% chance a building purchase costs nothing (upgrades excluded)'),
    (S4, 'freeBuildingChanceLv100', 0.50, '50% at level 100'),
    (S4, 'nailChance', 0.10, '10% chance each check to summon a nail'),
    (S4, 'nailsToBecomeDiavolo', 10, 'remove this many nails to turn Doppio into Diavolo'),
])
char('iggy', 'Iggy', 'The Fool', 'passive', {'type': 'building_count', 'building': 'Grandma', 'value': 60}, 25000000, 2500,
     None, 'Coffee Gum Nap', [
    (S1, 'napPassiveBonusLv1', 0.10, 'passive bonus of the character Iggy sleeps on: +10%'),
    (S1, 'napPassiveBonusLv100', 0.25, ''),
    (S1, 'napCooldownReductionLv1', 0.20, 'cooldown of the character Iggy sleeps on: -20%'),
    (S1, 'napCooldownReductionLv100', 0.35, ''),
    (S1, 'napUptimeBonusLv1', 0.10, 'uptime of the character Iggy sleeps on: +10%'),
    (S1, 'napUptimeBonusLv100', 0.25, ''),
    (S2, 'digEverySeconds', 30, 'Iggy digs with The Fool this often'),
    (S3, 'napSeconds', 600, 'nap length (10 minutes)'),
    (S4, 'gumChance', 0.20, '20% chance each dig finds coffee-flavored gum (otherwise a chocolate bar)'),
    (S4, 'gumPiecesToNap', 5, 'gum pieces Iggy eats before he naps'),
])
char('dragonsdream', "Dragon's Dream", "Dragon's Dream", 'active', {'type': 'purchase'}, 100000000, 10000,
     'Feng Shui Direction', None, [
    (S1, 'upgradeDiscount', 0.50, 'next JoJo upgrade costs 50% less when you pick the right arrow'),
    (S2, 'arrowCheckSecondsLv1', 120, 'checks for an arrow every 2 minutes'),
    (S2, 'arrowCheckSecondsLv100', 60, ''),
    (S3, 'answerSecondsLv1', 10, 'seconds you have to click the matching arrow'),
    (S3, 'answerSecondsLv100', 15, ''),
    (S4, 'arrowChanceLv1', 0.50, '50% chance an arrow appears on each check'),
    (S4, 'arrowChanceLv100', 0.75, ''),
])

def js(v):
    return json.dumps(v)

DESC = {
 'jotaro': "Ability: Jotaro appears and Star Platinum unleashes a barrage of punches on the cookie, clicking it for you. Passive: small permanent click-power bonus.",
 'joseph': "Ability: Hermit Purple wraps around the cookie and boosts click power while it holds.",
 'okuyasu': "Ability: The Hand erases space, making your next click 10,000% stronger. Leveling only shortens the cooldown slightly.",
 'giorno': "Passive: Gold Experience boosts all cookie production.",
 'jolyne': "Ability: Stone Free rushes the cookie, auto-clicking it for a few seconds.",
 'jonathan': "Passive: Hamon breathing boosts all cookie production.",
 'avdol': "Passive: Magician's Red boosts all cookie production and sets the milk on fire. Every so often he may set the cookie itself on fire, boosting production while it burns.",
 'mista': "Passive: small click-power bonus. Ability: the Sex Pistols pass a bullet around the cookie and shoot it, boosting click power.",
 'narancia': "Ability: Aerosmith flies at one of your cookie producers and boosts its production for a while.",
 'kingcrimson': "Passive: building purchases have a chance to cost nothing. When that happens he becomes Doppio, who summons nails into the cookie; remove ten to become Diavolo, who shortens Mista and Narancia's cooldowns for five minutes.",
 'iggy': "Wanders the screen digging with The Fool. After eating five pieces of coffee gum he naps on a teammate for ten minutes, boosting them.",
 'dragonsdream': "Every so often a giant arrow appears on the cookie. Click the matching direction in time to halve the cost of your next JoJo upgrade.",
}

def write(cid, c):
    lines = []
    lines.append(f"/* {c['name']} — {c['stand']}")
    lines.append("   Change any number below, save this file, then restart Cookie Clicker.")
    lines.append("   'Lv1' / 'Lv100' pairs: the mod fills in every level in between.")
    lines.append("   Cooldowns drop every 5 levels; uptime and strength grow every level. */")
    lines.append(f"JojoCookieClicker.define('{cid}', {{")
    lines.append("  STATS: {")
    sec = None
    for (s, k, v, com) in c['stats']:
        if s != sec:
            lines.append(f"    // ---- {s} ----")
            sec = s
        lines.append(f"    {k}: {js(v)},{'   // ' + com if com else ''}")
    lines[-1] = lines[-1].replace(',', '', 1) if lines[-1].strip().endswith(',') else lines[-1]
    lines.append("  },")
    lines.append("  // ---- RECRUITING & FEEDING ----")
    lines.append(f"  name: {js(c['name'])},")
    lines.append(f"  stand: {js(c['stand'])},")
    lines.append(f"  kit: {js(c['kit'])},   // active, passive or active_and_passive")
    lines.append(f"  abilityName: {js(c['ability'])},")
    lines.append(f"  passiveName: {js(c['passive'])},")
    lines.append(f"  description: {js(DESC[cid])},")
    lines.append(f"  unlock: {js(c['unlock'])},")
    lines.append(f"  recruitCost: {js(c['recruitCost'])},   // cookies to hire once unlocked (0 = joins for free)")
    lines.append(f"  feedBaseCost: {js(c['feedBaseCost'])},   // cookies for the first level-up")
    lines.append(f"  feedCostGrowth: {js(c['feedCostGrowth'])}   // each level-up costs this many times more")
    lines.append("});")
    txt = '\n'.join(lines) + '\n'
    # fix the trailing comma removal (only strip the comma right after the value)
    os.makedirs(f'{OUT}/{cid}', exist_ok=True)
    open(f'{OUT}/{cid}/stats.js', 'w', encoding='utf-8').write(txt)

for cid, c in C.items():
    # remove trailing comma properly on the last stat line
    write(cid, c)
print('ok', list(C))
