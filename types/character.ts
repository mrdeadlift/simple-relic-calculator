/**
 * キャラクター関連の型定義
 */

// キャラクター名の型
export type CharacterName = 
  | '追跡者'
  | '守護者' 
  | '鉄の目'
  | 'レディ'
  | '無頼漢'
  | '復讐者'
  | '隠者'
  | '執行者'

// 基本能力値の型
export interface BaseStats {
  /** 生命力 - HPに影響 */
  vitality: number
  /** 精神力 - FPに影響 */
  mind: number
  /** 持久力 - スタミナに影響 */
  endurance: number
  /** 筋力 - 重い武器の攻撃力に影響 */
  strength: number
  /** 技量 - 高度な武器の攻撃力に影響 */
  dexterity: number
  /** 知力 - 魔術の攻撃力に影響 */
  intelligence: number
  /** 信仰 - 祈祷の攻撃力に影響 */
  faith: number
  /** 神秘 - 状態異常の蓄積量に影響 */
  arcane: number
}

// 計算済みステータスの型
export interface CalculatedStats extends BaseStats {
  /** 最大HP */
  maxHP: number
  /** 最大FP */
  maxFP: number
  /** 最大スタミナ */
  maxStamina: number
  /** 強靭度 */
  poise: number
}

// 能力値ランクの型
export type StatRank = 'S' | 'A' | 'B' | 'C' | 'D' | 'E'

// キャラクターデータの型
export interface Character {
  /** キャラクター名 */
  name: CharacterName
  /** 得意武器 */
  preferredWeapon: string
  /** 基本能力値 */
  baseStats: BaseStats
  /** 能力値の成長適性 */
  statRanks: Record<keyof BaseStats, StatRank>
  /** キャラクター固有効果 */
  uniqueEffects?: string[]
}