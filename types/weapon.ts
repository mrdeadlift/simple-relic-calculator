/**
 * 武器システム関連の型定義
 * エルデンリングナイトレインの武器データ構造を定義
 */

import type { AttackPower } from './stats'

/**
 * 武器種別の列挙型
 * ゲーム内に存在する全ての武器カテゴリを定義
 */
export type WeaponType = 
  | '短剣'
  | '直剣'
  | '大剣'
  | '特大剣'
  | '刺剣'
  | '重刺剣'
  | '曲剣'
  | '大曲剣'
  | '刀'
  | '両刃剣'
  | '斧'
  | '大斧'
  | '槌'
  | 'フレイル'
  | '大槌'
  | '特大武器'
  | '槍'
  | '大槍'
  | '斧槍'
  | '鎌'
  | '鞭'
  | '拳'
  | '爪'
  | '弓'
  | '大弓'
  | '杖'
  | '聖印'

/**
 * 武器のレアリティ
 * コモン < アンコモン < レア < レジェンド
 */
export type WeaponRarity = 'コモン' | 'アンコモン' | 'レア' | 'レジェンド'

/**
 * 能力補正ランク
 * S(最高) > A > B > C > D > E(最低) > -(補正なし)
 */
export type StatScaling = 'S' | 'A' | 'B' | 'C' | 'D' | 'E' | '-'

/**
 * 状態異常の種類
 */
export type StatusEffect = 
  | '出血'
  | '毒'
  | '腐敗'
  | '冷気'
  | '睡眠'
  | '発狂'
  | '死'

/**
 * 武器の状態異常効果
 */
export interface WeaponStatusEffect {
  /** 状態異常の種類 */
  type: StatusEffect
  /** 蓄積値 */
  buildup: number
}

/**
 * 武器の能力補正値
 */
export interface WeaponScaling {
  /** 筋力補正 */
  strength: StatScaling
  /** 技量補正 */
  dexterity: StatScaling
  /** 知力補正 */
  intelligence: StatScaling
  /** 信仰補正 */
  faith: StatScaling
  /** 神秘補正 */
  arcane: StatScaling
}

/**
 * 武器の基本攻撃力
 * 各属性別の基本ダメージ値
 */
export interface WeaponAttackPower extends AttackPower {
  /** 合計攻撃力（表示用） */
  total: number
}

/**
 * 武器の必要能力値
 */
export interface WeaponRequirements {
  /** 必要筋力 */
  strength: number
  /** 必要技量 */
  dexterity: number
  /** 必要知力 */
  intelligence: number
  /** 必要信仰 */
  faith: number
  /** 必要神秘 */
  arcane: number
}

/**
 * 戦技情報
 */
export interface WeaponSkill {
  /** 戦技名 */
  name: string
  /** FP消費量 */
  fpCost: number
  /** 戦技の説明 */
  description: string
}

/**
 * 武器強化情報
 */
export interface WeaponUpgrade {
  /** 現在の強化レベル */
  level: number
  /** 最大強化レベル（元レアリティ依存） */
  maxLevel: number
  /** 強化による攻撃力倍率 */
  attackMultiplier: number
  /** 強化による補正値倍率 */
  scalingMultiplier: number
  /** 現在のレアリティ（強化で変化する） */
  currentRarity: WeaponRarity
}

/**
 * 武器の基本データ構造
 */
export interface Weapon {
  /** 武器ID（一意識別子） */
  id: string
  /** 武器名 */
  name: string
  /** 武器種別 */
  type: WeaponType
  /** レアリティ */
  rarity: WeaponRarity
  /** 基本攻撃力 */
  attackPower: WeaponAttackPower
  /** 能力補正 */
  scaling: WeaponScaling
  /** 必要能力値 */
  requirements: WeaponRequirements
  /** 状態異常効果（あれば） */
  statusEffects?: WeaponStatusEffect[]
  /** 戦技情報（あれば） */
  skill?: WeaponSkill
  /** 武器の説明文 */
  description: string
  /** 入手方法 */
  obtainMethod: string
  /** 重量 */
  weight: number
  /** 特殊効果の説明（あれば） */
  specialEffect?: string
  /** キャラクター別推奨度 (1-5, 5が最高) */
  characterCompatibility: {
    追跡者: number
    守護者: number
    鉄の目: number
    レディ: number
    無頼漢: number
    復讐者: number
    隠者: number
    執行者: number
  }
}

/**
 * 武器カテゴリのグループ情報
 */
export interface WeaponCategory {
  /** カテゴリ名 */
  name: string
  /** カテゴリに含まれる武器種別 */
  types: WeaponType[]
  /** カテゴリの説明 */
  description: string
  /** 主要な特徴 */
  characteristics: string[]
}

/**
 * 装備中の武器情報
 */
export interface EquippedWeapon {
  /** 武器データ */
  weapon: Weapon
  /** 強化情報 */
  upgrade: WeaponUpgrade
  /** 両手持ちフラグ */
  twoHanded: boolean
}

/**
 * 武器攻撃力の計算結果
 */
export interface WeaponAttackResult {
  /** 基本攻撃力 */
  baseAttack: WeaponAttackPower
  /** 能力補正による追加攻撃力 */
  scalingBonus: WeaponAttackPower
  /** 強化による追加攻撃力 */
  upgradeBonus: WeaponAttackPower
  /** 遺物効果による修正 */
  relicBonus: WeaponAttackPower
  /** 最終攻撃力 */
  finalAttack: WeaponAttackPower
  /** 計算に使用されたキャラクター能力値 */
  characterStats: {
    strength: number
    dexterity: number
    intelligence: number
    faith: number
    arcane: number
  }
}

/**
 * 武器フィルタ条件
 */
export interface WeaponFilter {
  /** 武器種別フィルタ */
  types?: WeaponType[]
  /** レアリティフィルタ */
  rarities?: WeaponRarity[]
  /** キャラクター適性フィルタ */
  characterName?: string
  /** 最小推奨度 */
  minCompatibility?: number
  /** 検索キーワード */
  searchTerm?: string
  /** 装備可能フィルタ（能力値チェック） */
  equipable?: boolean
}

/**
 * 武器ソート条件
 */
export type WeaponSortBy = 
  | 'name'           // 名前順
  | 'type'           // 武器種別順
  | 'rarity'         // レアリティ順
  | 'attackPower'    // 攻撃力順
  | 'compatibility'  // キャラクター適性順
  | 'weight'         // 重量順

/**
 * 武器ソートオプション
 */
export interface WeaponSortOptions {
  /** ソート基準 */
  sortBy: WeaponSortBy
  /** 昇順/降順 */
  order: 'asc' | 'desc'
  /** キャラクター適性ソート時の対象キャラクター */
  characterName?: string
}

/**
 * 能力補正ランクの数値変換マップ
 */
export const SCALING_VALUES: Record<StatScaling, number> = {
  'S': 1.0,
  'A': 0.8,
  'B': 0.6,
  'C': 0.4,
  'D': 0.2,
  'E': 0.1,
  '-': 0.0
}

/**
 * レアリティの数値変換マップ（並び順用）
 */
export const RARITY_VALUES: Record<WeaponRarity, number> = {
  'コモン': 0,
  'アンコモン': 1,
  'レア': 2,
  'レジェンド': 3
}

/**
 * レアリティ別の最大強化レベル
 * 元のレアリティから上位レアリティへの強化回数
 * コモン: 3回（→アンコモン→レア→レジェンド）
 * アンコモン: 2回（→レア→レジェンド）
 * レア: 1回（→レジェンド）
 * レジェンド: 0回（最高レアリティのため強化不可）
 */
export const MAX_UPGRADE_LEVELS: Record<WeaponRarity, number> = {
  'コモン': 3,
  'アンコモン': 2,
  'レア': 1,
  'レジェンド': 0
}

/**
 * 強化レベルに対応するレアリティ取得
 */
export function getUpgradedRarity(baseRarity: WeaponRarity, upgradeLevel: number): WeaponRarity {
  const rarities: WeaponRarity[] = ['コモン', 'アンコモン', 'レア', 'レジェンド']
  const baseIndex = rarities.indexOf(baseRarity)
  const targetIndex = Math.min(baseIndex + upgradeLevel, rarities.length - 1)
  return rarities[targetIndex]
}

/**
 * レアリティ間の強化段階数を取得
 */
export function getUpgradeSteps(fromRarity: WeaponRarity, toRarity: WeaponRarity): number {
  const rarities: WeaponRarity[] = ['コモン', 'アンコモン', 'レア', 'レジェンド']
  const fromIndex = rarities.indexOf(fromRarity)
  const toIndex = rarities.indexOf(toRarity)
  return Math.max(0, toIndex - fromIndex)
}

/**
 * 武器カテゴリの定義
 */
export const WEAPON_CATEGORIES: WeaponCategory[] = [
  {
    name: '片手武器',
    types: ['短剣', '直剣', '刺剣', '曲剣', '斧', '槌', 'フレイル', '拳', '爪'],
    description: '片手で扱える軽量な武器群',
    characteristics: ['機動性が高い', '連続攻撃に優れる', '盾との併用可能']
  },
  {
    name: '両手武器',
    types: ['大剣', '特大剣', '重刺剣', '大曲剣', '両刃剣', '大斧', '大槌', '特大武器', '大槍'],
    description: '両手での使用を前提とした大型武器群',
    characteristics: ['高い攻撃力', '長いリーチ', '重い一撃']
  },
  {
    name: 'リーチ武器',
    types: ['槍', '大槍', '斧槍', '鎌', '鞭'],
    description: '長い間合いから攻撃できる武器群',
    characteristics: ['長いリーチ', '突き攻撃主体', '対複数戦に有効']
  },
  {
    name: '遠距離武器',
    types: ['弓', '大弓'],
    description: '遠距離から攻撃する射撃武器',
    characteristics: ['遠距離攻撃', '弾薬が必要', '高い命中精度']
  },
  {
    name: '触媒',
    types: ['杖', '聖印'],
    description: '魔術・祈祷を使用するための触媒',
    characteristics: ['魔術・祈祷の威力向上', '特殊な戦闘スタイル', 'FP消費']
  }
]