/**
 * ステータス計算ユーティリティ
 * doc/能力値.md の検証データに基づく計算ロジック
 */

import type { BaseStats, CalculatedStats, StatModifier, StatModifiers } from '~/types'

// ステータス計算の基本定数
export const STAT_CALCULATIONS = {
  // 生命力1につき最大HP+20
  HP_PER_VITALITY: 20,
  // 精神力1につき最大FP+5
  FP_PER_MIND: 5,
  // 持久力1につき最大スタミナ+2
  STAMINA_PER_ENDURANCE: 2,
  
  // 基本値
  BASE_HP: 100,
  BASE_FP: 50,
  BASE_STAMINA: 80,
  BASE_POISE: 0
} as const

/**
 * 基本ステータスから計算済みステータスを算出
 */
export function calculateBasicStats(baseStats: BaseStats): CalculatedStats {
  return {
    ...baseStats,
    maxHP: STAT_CALCULATIONS.BASE_HP + (baseStats.vitality * STAT_CALCULATIONS.HP_PER_VITALITY),
    maxFP: STAT_CALCULATIONS.BASE_FP + (baseStats.mind * STAT_CALCULATIONS.FP_PER_MIND),
    maxStamina: STAT_CALCULATIONS.BASE_STAMINA + (baseStats.endurance * STAT_CALCULATIONS.STAMINA_PER_ENDURANCE),
    poise: STAT_CALCULATIONS.BASE_POISE
  }
}

/**
 * 修正値を適用してステータスを計算
 */
export function applyModifiers(
  baseStats: CalculatedStats, 
  modifiers: StatModifiers
): CalculatedStats {
  const result = { ...baseStats }
  
  // 各ステータスに修正値を適用
  Object.entries(modifiers).forEach(([statName, statModifiers]) => {
    if (statName in result) {
      const statKey = statName as keyof CalculatedStats
      let currentValue = result[statKey] as number
      
      // 加算修正を先に適用
      statModifiers
        .filter(mod => mod.type === 'add')
        .forEach(mod => {
          currentValue += mod.value
        })
      
      // 乗算修正を適用
      statModifiers
        .filter(mod => mod.type === 'multiply')
        .forEach(mod => {
          currentValue *= mod.value
        })
      
      // 設定修正（最終値を上書き）
      const setModifiers = statModifiers.filter(mod => mod.type === 'set')
      if (setModifiers.length > 0) {
        // 最後の設定修正を使用
        currentValue = setModifiers[setModifiers.length - 1].value
      }
      
      // 結果を更新（負の値は0に）
      ;(result as any)[statKey] = Math.max(0, Math.floor(currentValue))
    }
  })
  
  return result
}

/**
 * 修正値を作成するヘルパー関数
 */
export function createModifier(
  type: 'add' | 'multiply' | 'set',
  value: number,
  source: string,
  condition?: string
): StatModifier {
  return {
    type,
    value,
    source,
    condition
  }
}

/**
 * 空の修正値セットを作成
 */
export function createEmptyModifiers(): StatModifiers {
  return {
    vitality: [],
    mind: [],
    endurance: [],
    strength: [],
    dexterity: [],
    intelligence: [],
    faith: [],
    arcane: [],
    maxHP: [],
    maxFP: [],
    maxStamina: [],
    poise: [],
    physicalAttack: [],
    magicAttack: [],
    fireAttack: [],
    lightningAttack: [],
    holyAttack: []
  }
}

/**
 * 複数の修正値セットをマージ
 */
export function mergeModifiers(...modifierSets: StatModifiers[]): StatModifiers {
  const result = createEmptyModifiers()
  
  modifierSets.forEach(modifiers => {
    Object.entries(modifiers).forEach(([statName, statModifiers]) => {
      const statKey = statName as keyof StatModifiers
      result[statKey].push(...statModifiers)
    })
  })
  
  return result
}

/**
 * 修正値の重複をチェック（同じソースからの効果）
 */
export function checkModifierConflicts(modifiers: StatModifier[]): string[] {
  const warnings: string[] = []
  const sourceCount = new Map<string, number>()
  
  modifiers.forEach(mod => {
    const count = sourceCount.get(mod.source) || 0
    sourceCount.set(mod.source, count + 1)
    
    if (count > 0) {
      warnings.push(`${mod.source}の効果が重複しています`)
    }
  })
  
  return warnings
}

/**
 * パーセンテージを倍率に変換
 */
export function percentToMultiplier(percent: number): number {
  return 1 + (percent / 100)
}

/**
 * 倍率をパーセンテージに変換
 */
export function multiplierToPercent(multiplier: number): number {
  return (multiplier - 1) * 100
}