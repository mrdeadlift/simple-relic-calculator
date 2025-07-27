/**
 * 遺物と遺物効果関連の型定義
 */

// 遺物効果の重複ルール
export type StackRule = 
  | 'stackable'     // 〇 - 重複可能
  | 'non-stackable' // ✕ - 重複不可
  | 'conditional'   // ※ - 条件付き重複

// 遺物効果のカテゴリ
export type EffectCategory = 
  | 'ability_boost'      // 能力値上昇
  | 'cut_resistance'     // カット率/耐性上昇
  | 'attack_power'       // 攻撃力上昇
  | 'attack_enhancement' // 攻撃強化
  | 'hp_fp_recovery'     // HP/FP/スタミナ回復
  | 'action'             // アクション
  | 'attribute_infusion'  // 属性付加
  | 'weapon_skill'       // 戦技
  | 'item'               // アイテム
  | 'map_environment'    // マップ環境系
  | 'character_unique'   // キャラクター固有

// 遺物効果の値の型
export interface EffectValue {
  /** 基本値 */
  base?: number
  /** 倍率 */
  multiplier?: number
  /** 固定値 */
  fixed?: number
  /** 文字列値（戦技名など） */
  text?: string
  /** 配列値（複数の値） */
  array?: number[]
}

// 遺物効果の型
export interface RelicEffect {
  /** 効果ID */
  id: string
  /** 効果名 */
  name: string
  /** 効果カテゴリ */
  category: EffectCategory
  /** 重複ルール */
  stackRule: StackRule
  /** 効果値 */
  value: EffectValue
  /** 効果の説明 */
  description: string
  /** 条件（条件付き効果の場合） */
  condition?: string
  /** 対象キャラクター（キャラ固有効果の場合） */
  targetCharacter?: string
  /** 効果の持続時間（秒） */
  duration?: number
  /** クールタイム（秒） */
  cooldown?: number
}

// 遺物の色（特色）
export type RelicColor = 
  | 'red'    // 赤
  | 'green'  // 緑
  | 'blue'   // 青
  | 'yellow' // 黄

// 遺物のサイズ
export type RelicSize = 
  | 'small'  // 小
  | 'medium' // 中
  | 'large'  // 大

// 遺物の型
export interface Relic {
  /** 遺物ID */
  id: string
  /** 遺物名 */
  name: string
  /** 特色（色） */
  color: RelicColor
  /** サイズ */
  size: RelicSize
  /** 利用可能な効果一覧 */
  availableEffects: RelicEffect[]
  /** 固有遺物フラグ */
  isUnique: boolean
  /** 入手方法 */
  obtainMethod?: string
}

// ユーザーが選択した遺物設定
export interface SelectedRelic {
  /** 遺物 */
  relic: Relic
  /** 選択された効果（最大3つ） */
  selectedEffects: RelicEffect[]
}

// ビルド設定の型
export interface BuildConfig {
  /** 選択されたキャラクター */
  characterName: string
  /** 設定された遺物一覧 */
  relics: SelectedRelic[]
}