/**
 * 武器攻撃力計算ユーティリティ
 * エルデンリングナイトレインの武器システムに基づく攻撃力計算
 */

import type { 
  Weapon, 
  WeaponAttackResult, 
  WeaponUpgrade, 
  StatScaling, 
  WeaponAttackPower,
  RelicEffect,
  WeaponRarity
} from '~/types'
import type { BaseStats } from '~/types/character'
import { MAX_UPGRADE_LEVELS, getUpgradedRarity } from '~/types/weapon'
import { applyMultipleEffects } from './relic-calculator'

/**
 * 能力補正ランクから数値倍率への変換
 * doc/能力値.mdの検証データに基づく
 */
const SCALING_MULTIPLIERS: Record<StatScaling, number> = {
  'S': 1.0,   // 最高補正
  'A': 0.8,   // 高補正
  'B': 0.6,   // 中補正
  'C': 0.4,   // 低補正
  'D': 0.2,   // 最低補正
  'E': 0.1,   // 微補正
  '-': 0.0    // 補正なし
}

/**
 * レアリティによる基本攻撃力倍率
 * doc/weapons/弓.mdの検証データに基づく
 */
const RARITY_MULTIPLIERS: Record<string, number> = {
  'コモン': 1.0,      // 基準
  'アンコモン': 1.57,  // +57%
  'レア': 1.85,       // +85%
  'レジェンド': 2.19    // +119%
}

/**
 * 武器強化レベルによる攻撃力倍率
 * レアリティ別最大強化回数に応じた攻撃力向上
 * 各レアリティに基づく攻撃力倍率を使用
 */
function getUpgradeMultiplier(level: number, baseRarity: WeaponRarity, maxLevel?: number): number {
  if (level <= 0) return 1.0
  
  const actualMaxLevel = maxLevel || MAX_UPGRADE_LEVELS[baseRarity]
  if (level >= actualMaxLevel) {
    level = actualMaxLevel
  }
  
  // レアリティ別攻撃力倍率を使用
  const currentRarity = getUpgradedRarity(baseRarity, level)
  return RARITY_MULTIPLIERS[currentRarity] || 1.0
}

/**
 * 武器強化レベルによる補正値倍率
 * 能力補正も強化レベルで向上する
 */
function getScalingUpgradeMultiplier(level: number, baseRarity: WeaponRarity, maxLevel?: number): number {
  if (level <= 0) return 1.0
  
  const actualMaxLevel = maxLevel || MAX_UPGRADE_LEVELS[baseRarity]
  if (level >= actualMaxLevel) {
    level = actualMaxLevel
  }
  
  // 強化レベルに応じた補正値向上
  return 1.0 + (level / Math.max(actualMaxLevel, 1)) * 0.5
}

/**
 * 能力値から補正値を計算
 * doc/能力値.mdの検証データに基づく計算式
 */
function calculateScalingBonus(
  statValue: number,
  scalingRank: StatScaling,
  upgradeLevel: number = 0,
  baseRarity: WeaponRarity = 'コモン'
): number {
  const baseMultiplier = SCALING_MULTIPLIERS[scalingRank]
  if (baseMultiplier === 0) return 0
  
  // 強化レベルによる補正値向上
  const upgradeMultiplier = getScalingUpgradeMultiplier(upgradeLevel, baseRarity)
  
  // 能力値による補正値計算
  // エルデンリングの補正値計算式を参考
  let scalingBonus = 0
  
  if (statValue <= 20) {
    // 低能力値域：線形的な増加
    scalingBonus = statValue * baseMultiplier * 0.8
  } else if (statValue <= 50) {
    // 中能力値域：効率が良い
    scalingBonus = 20 * baseMultiplier * 0.8 + (statValue - 20) * baseMultiplier * 1.2
  } else if (statValue <= 80) {
    // 高能力値域：効率低下
    scalingBonus = 20 * baseMultiplier * 0.8 + 30 * baseMultiplier * 1.2 + (statValue - 50) * baseMultiplier * 0.6
  } else {
    // 最高能力値域：微増
    scalingBonus = 20 * baseMultiplier * 0.8 + 30 * baseMultiplier * 1.2 + 30 * baseMultiplier * 0.6 + (statValue - 80) * baseMultiplier * 0.2
  }
  
  return Math.floor(scalingBonus * upgradeMultiplier)
}

/**
 * 遺物効果による武器攻撃力修正を計算
 */
function calculateRelicAttackBonus(
  baseAttack: WeaponAttackPower,
  scalingBonus: WeaponAttackPower,
  relicEffects: RelicEffect[]
): WeaponAttackPower {
  if (relicEffects.length === 0) {
    return {
      physical: 0,
      magic: 0,
      fire: 0,
      lightning: 0,
      holy: 0,
      total: 0
    }
  }

  // 遺物効果を修正値に変換
  const { modifiers } = applyMultipleEffects(relicEffects)
  
  // 各属性の攻撃力修正を計算
  const physicalBonus = calculateAttributeBonus(
    baseAttack.physical + scalingBonus.physical,
    modifiers.physicalAttack
  )
  
  const magicBonus = calculateAttributeBonus(
    baseAttack.magic + scalingBonus.magic,
    modifiers.magicAttack
  )
  
  const fireBonus = calculateAttributeBonus(
    baseAttack.fire + scalingBonus.fire,
    modifiers.fireAttack
  )
  
  const lightningBonus = calculateAttributeBonus(
    baseAttack.lightning + scalingBonus.lightning,
    modifiers.lightningAttack
  )
  
  const holyBonus = calculateAttributeBonus(
    baseAttack.holy + scalingBonus.holy,
    modifiers.holyAttack
  )

  return {
    physical: physicalBonus,
    magic: magicBonus,
    fire: fireBonus,
    lightning: lightningBonus,
    holy: holyBonus,
    total: physicalBonus + magicBonus + fireBonus + lightningBonus + holyBonus
  }
}

/**
 * 属性別の攻撃力ボーナス計算
 */
function calculateAttributeBonus(baseValue: number, modifiers: any[]): number {
  let bonus = 0
  
  modifiers.forEach(modifier => {
    switch (modifier.type) {
      case 'add':
        bonus += modifier.value
        break
      case 'multiply':
        bonus += Math.floor(baseValue * (modifier.value - 1))
        break
    }
  })
  
  return bonus
}

/**
 * 武器の基本攻撃力計算
 * 強化後のレアリティに基づいた攻撃力計算
 */
function calculateBaseAttackPower(weapon: Weapon, upgrade: WeaponUpgrade): WeaponAttackPower {
  // 強化後のレアリティによる攻撃力倍率を使用
  const upgradedMultiplier = upgrade.attackMultiplier
  
  return {
    physical: Math.floor(weapon.attackPower.physical * upgradedMultiplier),
    magic: Math.floor(weapon.attackPower.magic * upgradedMultiplier),
    fire: Math.floor(weapon.attackPower.fire * upgradedMultiplier),
    lightning: Math.floor(weapon.attackPower.lightning * upgradedMultiplier),
    holy: Math.floor(weapon.attackPower.holy * upgradedMultiplier),
    total: Math.floor(weapon.attackPower.total * upgradedMultiplier)
  }
}

/**
 * 武器の基本レアリティを取得（強化前のレアリティ）
 */
function getBaseRarity(weapon: Weapon, upgrade: WeaponUpgrade): WeaponRarity {
  // upgradeに元レアリティ情報がない場合は武器のレアリティを使用
  return weapon.rarity
}

/**
 * 能力補正による追加攻撃力計算
 */
function calculateScalingAttackPower(
  weapon: Weapon,
  characterStats: BaseStats,
  upgrade: WeaponUpgrade,
  twoHanded: boolean = false
): WeaponAttackPower {
  // 両手持ち時の筋力補正（1.5倍）
  const effectiveStrength = twoHanded ? Math.floor(characterStats.strength * 1.5) : characterStats.strength
  
  // 各能力値による補正値計算（武器の元レアリティを使用）
  const baseRarity = getBaseRarity(weapon, upgrade)
  const strengthBonus = calculateScalingBonus(effectiveStrength, weapon.scaling.strength, upgrade.level, baseRarity)
  const dexterityBonus = calculateScalingBonus(characterStats.dexterity, weapon.scaling.dexterity, upgrade.level, baseRarity)
  const intelligenceBonus = calculateScalingBonus(characterStats.intelligence, weapon.scaling.intelligence, upgrade.level, baseRarity)
  const faithBonus = calculateScalingBonus(characterStats.faith, weapon.scaling.faith, upgrade.level, baseRarity)
  const arcaneBonus = calculateScalingBonus(characterStats.arcane, weapon.scaling.arcane, upgrade.level, baseRarity)
  
  // 物理攻撃力は主に筋力・技量で決まる
  const physicalBonus = strengthBonus + dexterityBonus
  
  // 属性攻撃力は対応する能力値で決まる
  const magicBonus = intelligenceBonus
  const fireBonus = Math.floor((strengthBonus + intelligenceBonus + faithBonus) / 3) // 炎は複合
  const lightningBonus = Math.floor((strengthBonus + dexterityBonus) / 2) // 雷は筋力・技量
  const holyBonus = faithBonus
  
  // 神秘は状態異常に影響するが、ここでは攻撃力への影響は限定的
  const arcaneAttackBonus = Math.floor(arcaneBonus * 0.3)
  
  return {
    physical: physicalBonus + arcaneAttackBonus,
    magic: magicBonus,
    fire: fireBonus,
    lightning: lightningBonus,
    holy: holyBonus,
    total: physicalBonus + magicBonus + fireBonus + lightningBonus + holyBonus + arcaneAttackBonus
  }
}

/**
 * 武器攻撃力の総合計算
 */
export function calculateWeaponAttackPower(
  weapon: Weapon,
  characterStats: BaseStats,
  upgrade?: WeaponUpgrade,
  twoHanded: boolean = false,
  relicEffects: RelicEffect[] = []
): WeaponAttackResult {
  // upgradeが指定されていない場合はデフォルトを作成
  const actualUpgrade = upgrade || createDefaultWeaponUpgrade(0, weapon.rarity)
  
  // 基本攻撃力計算
  const baseAttack = calculateBaseAttackPower(weapon, actualUpgrade)
  
  // 能力補正による追加攻撃力計算
  const scalingBonus = calculateScalingAttackPower(weapon, characterStats, actualUpgrade, twoHanded)
  
  // 強化による追加攻撃力（基本攻撃力の増加分）
  const upgradeBonus: WeaponAttackPower = {
    physical: baseAttack.physical - weapon.attackPower.physical,
    magic: baseAttack.magic - weapon.attackPower.magic,
    fire: baseAttack.fire - weapon.attackPower.fire,
    lightning: baseAttack.lightning - weapon.attackPower.lightning,
    holy: baseAttack.holy - weapon.attackPower.holy,
    total: baseAttack.total - weapon.attackPower.total
  }
  
  // 遺物効果による修正計算
  const relicBonus = calculateRelicAttackBonus(baseAttack, scalingBonus, relicEffects)
  
  // 最終攻撃力計算
  const finalAttack: WeaponAttackPower = {
    physical: weapon.attackPower.physical + upgradeBonus.physical + scalingBonus.physical + relicBonus.physical,
    magic: weapon.attackPower.magic + upgradeBonus.magic + scalingBonus.magic + relicBonus.magic,
    fire: weapon.attackPower.fire + upgradeBonus.fire + scalingBonus.fire + relicBonus.fire,
    lightning: weapon.attackPower.lightning + upgradeBonus.lightning + scalingBonus.lightning + relicBonus.lightning,
    holy: weapon.attackPower.holy + upgradeBonus.holy + scalingBonus.holy + relicBonus.holy,
    total: 0 // 後で計算
  }
  
  // 総攻撃力を計算
  finalAttack.total = finalAttack.physical + finalAttack.magic + finalAttack.fire + finalAttack.lightning + finalAttack.holy
  
  return {
    baseAttack,
    scalingBonus,
    upgradeBonus,
    relicBonus,
    finalAttack,
    characterStats: {
      strength: twoHanded ? Math.floor(characterStats.strength * 1.5) : characterStats.strength,
      dexterity: characterStats.dexterity,
      intelligence: characterStats.intelligence,
      faith: characterStats.faith,
      arcane: characterStats.arcane
    }
  }
}

/**
 * 武器の必要能力値チェック
 */
export function canEquipWeapon(weapon: Weapon, characterStats: BaseStats): boolean {
  return (
    characterStats.strength >= weapon.requirements.strength &&
    characterStats.dexterity >= weapon.requirements.dexterity &&
    characterStats.intelligence >= weapon.requirements.intelligence &&
    characterStats.faith >= weapon.requirements.faith &&
    characterStats.arcane >= weapon.requirements.arcane
  )
}

/**
 * 武器の装備可能性と不足能力値の取得
 */
export function getWeaponRequirementStatus(weapon: Weapon, characterStats: BaseStats) {
  const canEquip = canEquipWeapon(weapon, characterStats)
  const missingStats: Partial<BaseStats> = {}
  
  if (characterStats.strength < weapon.requirements.strength) {
    missingStats.strength = weapon.requirements.strength - characterStats.strength
  }
  if (characterStats.dexterity < weapon.requirements.dexterity) {
    missingStats.dexterity = weapon.requirements.dexterity - characterStats.dexterity
  }
  if (characterStats.intelligence < weapon.requirements.intelligence) {
    missingStats.intelligence = weapon.requirements.intelligence - characterStats.intelligence
  }
  if (characterStats.faith < weapon.requirements.faith) {
    missingStats.faith = weapon.requirements.faith - characterStats.faith
  }
  if (characterStats.arcane < weapon.requirements.arcane) {
    missingStats.arcane = weapon.requirements.arcane - characterStats.arcane
  }
  
  return {
    canEquip,
    missingStats
  }
}

/**
 * 武器強化のデフォルト設定を生成
 */
export function createDefaultWeaponUpgrade(level: number = 0, baseRarity: WeaponRarity = 'コモン'): WeaponUpgrade {
  const maxLevel = MAX_UPGRADE_LEVELS[baseRarity]
  const clampedLevel = Math.max(0, Math.min(maxLevel, level))
  const currentRarity = getUpgradedRarity(baseRarity, clampedLevel)
  
  return {
    level: clampedLevel,
    maxLevel,
    attackMultiplier: getUpgradeMultiplier(clampedLevel, baseRarity, maxLevel),
    scalingMultiplier: getScalingUpgradeMultiplier(clampedLevel, baseRarity, maxLevel),
    currentRarity
  }
}

/**
 * 複数武器の攻撃力比較
 */
export function compareWeaponAttackPower(
  weapons: Weapon[],
  characterStats: BaseStats,
  upgradeLevel: number = 0,
  twoHanded: boolean = false,
  relicEffects: RelicEffect[] = []
): Array<{weapon: Weapon, result: WeaponAttackResult, equipable: boolean}> {
  return weapons.map(weapon => {
    const upgrade = createDefaultWeaponUpgrade(upgradeLevel, weapon.rarity)
    return {
      weapon,
      result: calculateWeaponAttackPower(weapon, characterStats, upgrade, twoHanded, relicEffects),
      equipable: canEquipWeapon(weapon, characterStats)
    }
  }).sort((a, b) => b.result.finalAttack.total - a.result.finalAttack.total)
}

/**
 * キャラクター適性を考慮した武器評価スコア計算
 */
export function calculateWeaponScore(
  weapon: Weapon,
  characterName: string,
  characterStats: BaseStats,
  upgradeLevel: number = 0,
  relicEffects: RelicEffect[] = []
): number {
  const compatibility = weapon.characterCompatibility[characterName as keyof typeof weapon.characterCompatibility] || 1
  const upgrade = createDefaultWeaponUpgrade(upgradeLevel, weapon.rarity)
  const result = calculateWeaponAttackPower(weapon, characterStats, upgrade, false, relicEffects)
  const equipable = canEquipWeapon(weapon, characterStats)
  
  // 装備不可能な場合はスコアを大幅減点
  const equipPenalty = equipable ? 1.0 : 0.3
  
  // 基本スコア：攻撃力 × キャラクター適性 × 装備可能性
  const baseScore = result.finalAttack.total * compatibility * equipPenalty
  
  // レアリティボーナス
  const rarityBonus = {
    'コモン': 1.0,
    'アンコモン': 1.1,
    'レア': 1.2,
    'レジェンド': 1.3
  }[weapon.rarity] || 1.0
  
  return Math.floor(baseScore * rarityBonus)
}

/**
 * デバッグ用：武器攻撃力計算の詳細ログ
 */
export function getWeaponCalculationLog(
  weapon: Weapon,
  characterStats: BaseStats,
  upgrade: WeaponUpgrade,
  twoHanded: boolean = false,
  relicEffects: RelicEffect[] = []
): string[] {
  const log: string[] = []
  const result = calculateWeaponAttackPower(weapon, characterStats, upgrade, twoHanded, relicEffects)
  const rarityMultiplier = RARITY_MULTIPLIERS[weapon.rarity] || 1.0
  const upgradeMultiplier = getUpgradeMultiplier(upgrade.level, weapon.rarity, upgrade.maxLevel)
  
  log.push(`=== ${weapon.name} 攻撃力計算 ===`)
  log.push(`武器種別: ${weapon.type}`)
  log.push(`レアリティ: ${weapon.rarity} (倍率: ${rarityMultiplier}x)`)
  log.push(`強化レベル: +${upgrade.level} (倍率: ${upgradeMultiplier}x)`)
  log.push(`総合倍率: ${rarityMultiplier * upgradeMultiplier}x`)
  log.push(`両手持ち: ${twoHanded ? 'はい' : 'いいえ'}`)
  log.push('')
  
  log.push('基本攻撃力:')
  log.push(`  物理: ${weapon.attackPower.physical} → ${result.baseAttack.physical}`)
  log.push(`  魔力: ${weapon.attackPower.magic} → ${result.baseAttack.magic}`)
  log.push(`  炎: ${weapon.attackPower.fire} → ${result.baseAttack.fire}`)
  log.push(`  雷: ${weapon.attackPower.lightning} → ${result.baseAttack.lightning}`)
  log.push(`  聖: ${weapon.attackPower.holy} → ${result.baseAttack.holy}`)
  log.push('')
  
  log.push('能力補正:')
  log.push(`  筋力: ${result.characterStats.strength} (${weapon.scaling.strength}) → +${result.scalingBonus.physical}`)
  log.push(`  技量: ${result.characterStats.dexterity} (${weapon.scaling.dexterity})`)
  log.push(`  知力: ${result.characterStats.intelligence} (${weapon.scaling.intelligence}) → +${result.scalingBonus.magic}`)
  log.push(`  信仰: ${result.characterStats.faith} (${weapon.scaling.faith}) → +${result.scalingBonus.holy}`)
  log.push(`  神秘: ${result.characterStats.arcane} (${weapon.scaling.arcane})`)
  log.push('')
  
  if (relicEffects.length > 0) {
    log.push('遺物効果:')
    log.push(`  物理: +${result.relicBonus.physical}`)
    log.push(`  魔力: +${result.relicBonus.magic}`)
    log.push(`  炎: +${result.relicBonus.fire}`)
    log.push(`  雷: +${result.relicBonus.lightning}`)
    log.push(`  聖: +${result.relicBonus.holy}`)
    log.push('')
  }
  
  log.push('最終攻撃力:')
  log.push(`  物理: ${result.finalAttack.physical}`)
  log.push(`  魔力: ${result.finalAttack.magic}`)
  log.push(`  炎: ${result.finalAttack.fire}`)
  log.push(`  雷: ${result.finalAttack.lightning}`)
  log.push(`  聖: ${result.finalAttack.holy}`)
  log.push(`  合計: ${result.finalAttack.total}`)
  
  return log
}

/**
 * 遺物効果を考慮した武器の総合評価を取得
 */
export function getWeaponWithRelicEffects(
  weapon: Weapon,
  characterStats: BaseStats,
  relicEffects: RelicEffect[],
  upgradeLevel: number = 0,
  twoHanded: boolean = false
): {
  weapon: Weapon
  result: WeaponAttackResult
  equipable: boolean
  compatibilityScore: number
  effectiveAttackPower: number
} {
  const upgrade = createDefaultWeaponUpgrade(upgradeLevel, weapon.rarity)
  const result = calculateWeaponAttackPower(weapon, characterStats, upgrade, twoHanded, relicEffects)
  const equipable = canEquipWeapon(weapon, characterStats)
  
  // キャラクター適性の総合スコア計算（仮のcharacterName='無頼漢'で計算）
  const compatibilityScore = Math.max(...Object.values(weapon.characterCompatibility))
  
  // 遺物効果を考慮した実効攻撃力
  const effectiveAttackPower = result.finalAttack.total
  
  return {
    weapon,
    result,
    equipable,
    compatibilityScore,
    effectiveAttackPower
  }
}