/**
 * ステータス計算関連の型定義
 */

import type { BaseStats, CalculatedStats } from './character'
import type { RelicEffect } from './relic'

// ステータス修正値の型
export interface StatModifier {
  /** 修正値の種類 */
  type: 'add' | 'multiply' | 'set'
  /** 修正値 */
  value: number
  /** 修正の源泉（効果名） */
  source: string
  /** 条件（条件付き効果の場合） */
  condition?: string
}

// 各ステータスに適用される修正値の集合
export interface StatModifiers {
  vitality: StatModifier[]
  mind: StatModifier[]
  endurance: StatModifier[]
  strength: StatModifier[]
  dexterity: StatModifier[]
  intelligence: StatModifier[]
  faith: StatModifier[]
  arcane: StatModifier[]
  maxHP: StatModifier[]
  maxFP: StatModifier[]
  maxStamina: StatModifier[]
  poise: StatModifier[]
  physicalAttack: StatModifier[]
  magicAttack: StatModifier[]
  fireAttack: StatModifier[]
  lightningAttack: StatModifier[]
  holyAttack: StatModifier[]
}

// 攻撃力の型
export interface AttackPower {
  /** 物理攻撃力 */
  physical: number
  /** 魔力攻撃力 */
  magic: number
  /** 炎攻撃力 */
  fire: number
  /** 雷攻撃力 */
  lightning: number
  /** 聖攻撃力 */
  holy: number
}

// カット率の型
export interface CutRates {
  /** 物理カット率 */
  physical: number
  /** 魔力カット率 */
  magic: number
  /** 炎カット率 */
  fire: number
  /** 雷カット率 */
  lightning: number
  /** 聖カット率 */
  holy: number
}

// 状態異常耐性の型
export interface StatusResistances {
  /** 毒耐性 */
  poison: number
  /** 腐敗耐性 */
  rot: number
  /** 出血耐性 */
  bleed: number
  /** 冷気耐性 */
  frostbite: number
  /** 睡眠耐性 */
  sleep: number
  /** 発狂耐性 */
  madness: number
  /** 死耐性 */
  death: number
}

// 最終計算結果の型
export interface FinalStats extends CalculatedStats {
  /** 攻撃力 */
  attackPower: AttackPower
  /** カット率 */
  cutRates: CutRates
  /** 状態異常耐性 */
  statusResistances: StatusResistances
  /** アクティブな効果一覧 */
  activeEffects: RelicEffect[]
  /** 計算に使用された修正値 */
  appliedModifiers: StatModifiers
}

// 計算結果の詳細情報
export interface CalculationDetails {
  /** 基本ステータス */
  baseStats: BaseStats
  /** 遺物効果による修正 */
  relicModifiers: StatModifiers
  /** 最終結果 */
  finalStats: FinalStats
  /** 計算過程のログ */
  calculationLog: string[]
}

// 効果の適用結果
export interface EffectApplicationResult {
  /** 適用成功フラグ */
  success: boolean
  /** 適用された修正値 */
  modifiers: StatModifier[]
  /** エラーメッセージ（適用失敗時） */
  error?: string
  /** 警告メッセージ */
  warnings?: string[]
}