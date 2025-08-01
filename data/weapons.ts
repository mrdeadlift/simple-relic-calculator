/**
 * 武器データベース
 * エルデンリングナイトレインの武器データ定義
 */

import type { Weapon, WeaponType } from '~/types'

/**
 * 基本武器データベース
 * 各キャラクター向けの代表的な武器を含む
 */
export const WEAPONS: Weapon[] = [
  // 追跡者向け武器（大剣中心）
  {
    id: 'tracker_greatsword',
    name: '追跡者の大剣',
    type: '大剣',
    rarity: 'コモン',
    attackPower: {
      physical: 142,
      magic: 0,
      fire: 0,
      lightning: 0,
      holy: 0,
      total: 142
    },
    scaling: {
      strength: 'A',
      dexterity: 'B',
      intelligence: '-',
      faith: '-',
      arcane: '-'
    },
    requirements: {
      strength: 16,
      dexterity: 10,
      intelligence: 0,
      faith: 0,
      arcane: 0
    },
    description: '追跡者が使用する標準的な大剣。筋力補正に優れる。',
    obtainMethod: '初期装備',
    weight: 9.0,
    characterCompatibility: {
      追跡者: 5,
      守護者: 3,
      鉄の目: 2,
      レディ: 1,
      無頼漢: 4,
      復讐者: 2,
      隠者: 1,
      執行者: 2
    }
  },
  {
    id: 'melos_sword',
    name: 'ミエロスの剣',
    type: '大剣',
    rarity: 'レア',
    attackPower: {
      physical: 158,
      magic: 0,
      fire: 0,
      lightning: 0,
      holy: 0,
      total: 158
    },
    scaling: {
      strength: 'A',
      dexterity: 'B',
      intelligence: '-',
      faith: '-',
      arcane: '-'
    },
    requirements: {
      strength: 20,
      dexterity: 12,
      intelligence: 0,
      faith: 0,
      arcane: 0
    },
    skill: {
      name: '廃墟の突き',
      fpCost: 12,
      description: '前方に突進しながら強力な突き攻撃を繰り出す'
    },
    description: '古い文明の遺産とされる高品質な大剣。',
    obtainMethod: 'ボス討伐報酬',
    weight: 10.5,
    characterCompatibility: {
      追跡者: 5,
      守護者: 3,
      鉄の目: 2,
      レディ: 1,
      無頼漢: 4,
      復讐者: 2,
      隠者: 1,
      執行者: 2
    }
  },

  // 守護者向け武器（斧槍中心）
  {
    id: 'guardian_halberd',
    name: '守護者の斧槍',
    type: '斧槍',
    rarity: 'コモン',
    attackPower: {
      physical: 131,
      magic: 0,
      fire: 0,
      lightning: 0,
      holy: 0,
      total: 131
    },
    scaling: {
      strength: 'B',
      dexterity: 'C',
      intelligence: '-',
      faith: '-',
      arcane: '-'
    },
    requirements: {
      strength: 14,
      dexterity: 12,
      intelligence: 0,
      faith: 0,
      arcane: 0
    },
    description: '守護者が使用する標準的な斧槍。バランスの取れた性能。',
    obtainMethod: '初期装備',
    weight: 8.5,
    characterCompatibility: {
      追跡者: 3,
      守護者: 5,
      鉄の目: 2,
      レディ: 1,
      無頼漢: 3,
      復讐者: 2,
      隠者: 1,
      執行者: 2
    }
  },
  {
    id: 'dragon_halberd',
    name: '竜のハルバード',
    type: '斧槍',
    rarity: 'レア',
    attackPower: {
      physical: 147,
      magic: 0,
      fire: 0,
      lightning: 0,
      holy: 0,
      total: 147
    },
    scaling: {
      strength: 'B',
      dexterity: 'C',
      intelligence: '-',
      faith: '-',
      arcane: '-'
    },
    requirements: {
      strength: 18,
      dexterity: 14,
      intelligence: 0,
      faith: 0,
      arcane: 0
    },
    skill: {
      name: '竜巻斬り',
      fpCost: 15,
      description: '周囲の敵を巻き込む回転攻撃'
    },
    description: '古竜の力が宿るとされる伝説の斧槍。',
    obtainMethod: 'フィールドボス討伐',
    weight: 9.5,
    characterCompatibility: {
      追跡者: 3,
      守護者: 5,
      鉄の目: 2,
      レディ: 1,
      無頼漢: 3,
      復讐者: 2,
      隠者: 1,
      執行者: 2
    }
  },

  // 鉄の目向け武器（弓中心）
  {
    id: 'iron_eye_bow',
    name: '鉄の目の弓',
    type: '弓',
    rarity: 'コモン',
    attackPower: {
      physical: 85,
      magic: 0,
      fire: 0,
      lightning: 0,
      holy: 0,
      total: 85
    },
    scaling: {
      strength: 'D',
      dexterity: 'A',
      intelligence: '-',
      faith: '-',
      arcane: '-'
    },
    requirements: {
      strength: 8,
      dexterity: 14,
      intelligence: 0,
      faith: 0,
      arcane: 0
    },
    description: '鉄の目が使用する精密射撃用の弓。技量補正に優れる。',
    obtainMethod: '初期装備',
    weight: 3.5,
    characterCompatibility: {
      追跡者: 2,
      守護者: 2,
      鉄の目: 5,
      レディ: 3,
      無頼漢: 1,
      復讐者: 2,
      隠者: 2,
      執行者: 4
    }
  },
  {
    id: 'hunters_bow',
    name: '狩人の大弓',
    type: '大弓',
    rarity: 'レア',
    attackPower: {
      physical: 118,
      magic: 0,
      fire: 0,
      lightning: 0,
      holy: 0,
      total: 118
    },
    scaling: {
      strength: 'C',
      dexterity: 'A',
      intelligence: '-',
      faith: '-',
      arcane: '-'
    },
    requirements: {
      strength: 12,
      dexterity: 18,
      intelligence: 0,
      faith: 0,
      arcane: 0
    },
    skill: {
      name: '貫通射撃',
      fpCost: 10,
      description: '複数の敵を貫通する強力な矢を放つ'
    },
    description: '熟練した狩人が愛用する大型の弓。射程と威力に優れる。',
    obtainMethod: '商人購入',
    weight: 5.5,
    characterCompatibility: {
      追跡者: 2,
      守護者: 2,
      鉄の目: 5,
      レディ: 3,
      無頼漢: 1,
      復讐者: 2,
      隠者: 2,
      執行者: 4
    }
  },

  // レディ向け武器（短剣中心）
  {
    id: 'lady_dagger',
    name: 'レディの短剣',
    type: '短剣',
    rarity: 'コモン',
    attackPower: {
      physical: 79,
      magic: 0,
      fire: 0,
      lightning: 0,
      holy: 0,
      total: 79
    },
    scaling: {
      strength: 'E',
      dexterity: 'B',
      intelligence: 'C',
      faith: '-',
      arcane: '-'
    },
    requirements: {
      strength: 5,
      dexterity: 10,
      intelligence: 8,
      faith: 0,
      arcane: 0
    },
    statusEffects: [
      {
        type: '出血',
        buildup: 38
      }
    ],
    description: 'レディが使用する優雅な短剣。出血効果を持つ。',
    obtainMethod: '初期装備',
    weight: 1.5,
    characterCompatibility: {
      追跡者: 1,
      守護者: 1,
      鉄の目: 3,
      レディ: 5,
      無頼漢: 1,
      復讐者: 2,
      隠者: 2,
      執行者: 4
    }
  },
  {
    id: 'crystal_dagger',
    name: '結晶の短剣',
    type: '短剣',
    rarity: 'レア',
    attackPower: {
      physical: 68,
      magic: 45,
      fire: 0,
      lightning: 0,
      holy: 0,
      total: 113
    },
    scaling: {
      strength: 'E',
      dexterity: 'C',
      intelligence: 'A',
      faith: '-',
      arcane: '-'
    },
    requirements: {
      strength: 6,
      dexterity: 12,
      intelligence: 16,
      faith: 0,
      arcane: 0
    },
    skill: {
      name: '結晶の刃',
      fpCost: 8,
      description: '魔力を込めた結晶の刃で連続攻撃'
    },
    description: '魔術師が愛用する結晶製の短剣。知力補正に優れる。',
    obtainMethod: '魔術師塔で発見',
    weight: 2.0,
    characterCompatibility: {
      追跡者: 1,
      守護者: 1,
      鉄の目: 3,
      レディ: 5,
      無頼漢: 1,
      復讐者: 3,
      隠者: 4,
      執行者: 2
    }
  },

  // 無頼漢向け武器（大斧・特大武器中心）
  {
    id: 'brigand_greataxe',
    name: '無頼漢の大斧',
    type: '大斧',
    rarity: 'コモン',
    attackPower: {
      physical: 156,
      magic: 0,
      fire: 0,
      lightning: 0,
      holy: 0,
      total: 156
    },
    scaling: {
      strength: 'S',
      dexterity: '-',
      intelligence: '-',
      faith: '-',
      arcane: '-'
    },
    requirements: {
      strength: 20,
      dexterity: 8,
      intelligence: 0,
      faith: 0,
      arcane: 0
    },
    description: '無頼漢が使用する巨大な大斧。純粋な筋力で振り回す。',
    obtainMethod: '初期装備',
    weight: 13.5,
    specialEffect: '両手持ち時に特大武器カテゴリの攻撃力補正を受ける',
    characterCompatibility: {
      追跡者: 4,
      守護者: 3,
      鉄の目: 1,
      レディ: 1,
      無頼漢: 5,
      復讐者: 2,
      隠者: 1,
      執行者: 2
    }
  },
  {
    id: 'giant_crusher',
    name: '巨人砕き',
    type: '特大武器',
    rarity: 'レジェンド',
    attackPower: {
      physical: 201,
      magic: 0,
      fire: 0,
      lightning: 0,
      holy: 0,
      total: 201
    },
    scaling: {
      strength: 'S',
      dexterity: '-',
      intelligence: '-',
      faith: '-',
      arcane: '-'
    },
    requirements: {
      strength: 28,
      dexterity: 8,
      intelligence: 0,
      faith: 0,
      arcane: 0
    },
    skill: {
      name: '大地砕き',
      fpCost: 18,
      description: '大地を砕く強力な一撃で周囲にダメージ'
    },
    description: '巨人を倒すために作られた伝説の特大武器。',
    obtainMethod: '巨人ボス討伐報酬',
    weight: 18.0,
    characterCompatibility: {
      追跡者: 3,
      守護者: 3,
      鉄の目: 1,
      レディ: 1,
      無頼漢: 5,
      復讐者: 1,
      隠者: 1,
      執行者: 1
    }
  },

  // 復讐者向け武器（魔術・祈祷特化）
  {
    id: 'avenger_seal',
    name: '復讐者の聖印',
    type: '聖印',
    rarity: 'コモン',
    attackPower: {
      physical: 45,
      magic: 0,
      fire: 0,
      lightning: 0,
      holy: 78,
      total: 123
    },
    scaling: {
      strength: '-',
      dexterity: '-',
      intelligence: '-',
      faith: 'A',
      arcane: 'B'
    },
    requirements: {
      strength: 4,
      dexterity: 4,
      intelligence: 0,
      faith: 10,
      arcane: 0
    },
    description: '復讐者が使用する祈祷用の聖印。信仰補正に優れる。',
    obtainMethod: '初期装備',
    weight: 0.5,
    characterCompatibility: {
      追跡者: 1,
      守護者: 3,
      鉄の目: 1,
      レディ: 3,
      無頼漢: 1,
      復讐者: 5,
      隠者: 4,
      執行者: 1
    }
  },
  {
    id: 'cursed_claw',
    name: '復讐者の呪爪',
    type: '爪',
    rarity: 'アンコモン',
    attackPower: {
      physical: 91,
      magic: 32,
      fire: 0,
      lightning: 0,
      holy: 0,
      total: 123
    },
    scaling: {
      strength: 'D',
      dexterity: 'C',
      intelligence: 'B',
      faith: 'A',
      arcane: 'B'
    },
    requirements: {
      strength: 8,
      dexterity: 12,
      intelligence: 10,
      faith: 14,
      arcane: 8
    },
    statusEffects: [
      {
        type: '発狂',
        buildup: 42
      }
    ],
    description: '復讐者が憎悪を込めて作り上げた呪いの爪。発狂効果を持つ。',
    obtainMethod: '復讐者専用イベント',
    weight: 2.5,
    characterCompatibility: {
      追跡者: 1,
      守護者: 1,
      鉄の目: 2,
      レディ: 2,
      無頼漢: 1,
      復讐者: 5,
      隠者: 3,
      執行者: 2
    }
  },

  // 隠者向け武器（杖中心）
  {
    id: 'hermit_staff',
    name: '隠者の杖',
    type: '杖',
    rarity: 'コモン',
    attackPower: {
      physical: 42,
      magic: 89,
      fire: 0,
      lightning: 0,
      holy: 0,
      total: 131
    },
    scaling: {
      strength: '-',
      dexterity: '-',
      intelligence: 'A',
      faith: 'B',
      arcane: '-'
    },
    requirements: {
      strength: 6,
      dexterity: 6,
      intelligence: 12,
      faith: 8,
      arcane: 0
    },
    description: '隠者が使用する魔術用の杖。知力と信仰の両方に補正を持つ。',
    obtainMethod: '初期装備',
    weight: 1.5,
    characterCompatibility: {
      追跡者: 1,
      守護者: 2,
      鉄の目: 2,
      レディ: 4,
      無頼漢: 1,
      復讐者: 4,
      隠者: 5,
      執行者: 1
    }
  },
  {
    id: 'starlight_staff',
    name: '星光の杖',
    type: '杖',
    rarity: 'レジェンド',
    attackPower: {
      physical: 38,
      magic: 124,
      fire: 0,
      lightning: 0,
      holy: 45,
      total: 207
    },
    scaling: {
      strength: '-',
      dexterity: '-',
      intelligence: 'S',
      faith: 'A',
      arcane: '-'
    },
    requirements: {
      strength: 8,
      dexterity: 8,
      intelligence: 20,
      faith: 16,
      arcane: 0
    },
    skill: {
      name: '星の雨',
      fpCost: 25,
      description: '空から星光の雨を降らせる大範囲攻撃魔術'
    },
    description: '星の力を宿す至高の杖。最高級の魔術触媒。',
    obtainMethod: '隠者の試練完了報酬',
    weight: 2.5,
    characterCompatibility: {
      追跡者: 1,
      守護者: 2,
      鉄の目: 2,
      レディ: 4,
      無頼漢: 1,
      復讐者: 4,
      隠者: 5,
      執行者: 1
    }
  },

  // 執行者向け武器（刀中心）
  {
    id: 'executioner_katana',
    name: '執行者の刀',
    type: '刀',
    rarity: 'コモン',
    attackPower: {
      physical: 115,
      magic: 0,
      fire: 0,
      lightning: 0,
      holy: 0,
      total: 115
    },
    scaling: {
      strength: 'E',
      dexterity: 'A',
      intelligence: '-',
      faith: '-',
      arcane: 'B'
    },
    requirements: {
      strength: 10,
      dexterity: 15,
      intelligence: 0,
      faith: 0,
      arcane: 12
    },
    statusEffects: [
      {
        type: '出血',
        buildup: 45
      }
    ],
    description: '執行者が使用する鋭利な刀。技量と神秘の補正を持つ。',
    obtainMethod: '初期装備',
    weight: 5.5,
    specialEffect: 'スキル「妖刀」発動時に解放状態になる',
    characterCompatibility: {
      追跡者: 2,
      守護者: 2,
      鉄の目: 4,
      レディ: 3,
      無頼漢: 1,
      復讐者: 2,
      隠者: 1,
      執行者: 5
    }
  },
  {
    id: 'moonlight_katana',
    name: '月光の刀',
    type: '刀',
    rarity: 'レジェンド',
    attackPower: {
      physical: 98,
      magic: 67,
      fire: 0,
      lightning: 0,
      holy: 0,
      total: 165
    },
    scaling: {
      strength: 'D',
      dexterity: 'A',
      intelligence: 'B',
      faith: '-',
      arcane: 'A'
    },
    requirements: {
      strength: 12,
      dexterity: 18,
      intelligence: 14,
      faith: 0,
      arcane: 16
    },
    skill: {
      name: '月光斬り',
      fpCost: 16,
      description: '月光の刃を飛ばす遠距離攻撃'
    },
    statusEffects: [
      {
        type: '出血',
        buildup: 52
      },
      {
        type: '冷気',
        buildup: 38
      }
    ],
    description: '月の力を宿す神秘的な刀。複数の状態異常を持つ。',
    obtainMethod: '月光の谷の隠しボス討伐',
    weight: 6.5,
    characterCompatibility: {
      追跡者: 2,
      守護者: 2,
      鉄の目: 4,
      レディ: 4,
      無頼漢: 1,
      復讐者: 3,
      隠者: 3,
      執行者: 5
    }
  },

  // 追加武器群 - より多様な選択肢を提供

  // 短剣系武器
  {
    id: 'shadow_dagger',
    name: '影の短剣',
    type: '短剣',
    rarity: 'アンコモン',
    attackPower: {
      physical: 98,
      magic: 0,
      fire: 0,
      lightning: 0,
      holy: 0,
      total: 98
    },
    scaling: {
      strength: 'D',
      dexterity: 'A',
      intelligence: '-',
      faith: '-',
      arcane: 'B'
    },
    requirements: {
      strength: 8,
      dexterity: 15,
      intelligence: 0,
      faith: 0,
      arcane: 12
    },
    statusEffects: [
      { type: '出血', buildup: 50 }
    ],
    description: '影に紛れる暗殺者が愛用する軽量な短剣。出血効果を持つ。',
    obtainMethod: '特定エリアの宝箱',
    weight: 2.5,
    specialEffect: '背後からの攻撃時にダメージ1.5倍',
    characterCompatibility: {
      追跡者: 3,
      守護者: 2,
      鉄の目: 5,
      レディ: 2,
      無頼漢: 2,
      復讐者: 2,
      隠者: 3,
      執行者: 4
    }
  },

  // 直剣系武器
  {
    id: 'knight_straight_sword',
    name: '騎士の直剣',
    type: '直剣',
    rarity: 'コモン',
    attackPower: {
      physical: 118,
      magic: 0,
      fire: 0,
      lightning: 0,
      holy: 0,
      total: 118
    },
    scaling: {
      strength: 'B',
      dexterity: 'B',
      intelligence: '-',
      faith: '-',
      arcane: '-'
    },
    requirements: {
      strength: 12,
      dexterity: 12,
      intelligence: 0,
      faith: 0,
      arcane: 0
    },
    skill: {
      name: '騎士の誇り',
      fpCost: 8,
      description: '一定時間攻撃力が上昇する'
    },
    description: '伝統的な騎士が使用する汎用性の高い直剣。',
    obtainMethod: '商人から購入',
    weight: 5.5,
    characterCompatibility: {
      追跡者: 4,
      守護者: 5,
      鉄の目: 3,
      レディ: 3,
      無頼漢: 3,
      復讐者: 3,
      隠者: 2,
      執行者: 3
    }
  },

  // 刺剣系武器
  {
    id: 'rapier_of_mist',
    name: '霧の刺剣',
    type: '刺剣',
    rarity: 'レア',
    attackPower: {
      physical: 125,
      magic: 35,
      fire: 0,
      lightning: 0,
      holy: 0,
      total: 160
    },
    scaling: {
      strength: 'D',
      dexterity: 'A',
      intelligence: 'B',
      faith: '-',
      arcane: '-'
    },
    requirements: {
      strength: 8,
      dexterity: 18,
      intelligence: 14,
      faith: 0,
      arcane: 0
    },
    skill: {
      name: '霧隠れ',
      fpCost: 15,
      description: '一瞬姿を消し、次の攻撃の命中率と威力が上昇'
    },
    description: '魔力を帯びた優雅な刺剣。技量と知力の両方を活かす。',
    obtainMethod: '隠しボス討伐',
    weight: 4.0,
    specialEffect: 'クリティカル時に魔力ダメージ追加',
    characterCompatibility: {
      追跡者: 2,
      守護者: 2,
      鉄の目: 5,
      レディ: 4,
      無頼漢: 1,
      復讐者: 3,
      隠者: 4,
      執行者: 3
    }
  },

  // 斧系武器
  {
    id: 'berserker_axe',
    name: '狂戦士の斧',
    type: '斧',
    rarity: 'アンコモン',
    attackPower: {
      physical: 156,
      fire: 20,
      magic: 0,
      lightning: 0,
      holy: 0,
      total: 176
    },
    scaling: {
      strength: 'A',
      dexterity: 'C',
      intelligence: '-',
      faith: '-',
      arcane: 'C'
    },
    requirements: {
      strength: 22,
      dexterity: 8,
      intelligence: 0,
      faith: 0,
      arcane: 10
    },
    statusEffects: [
      { type: '出血', buildup: 40 }
    ],
    skill: {
      name: '狂乱の一撃',
      fpCost: 10,
      description: 'HPが減るほど威力が上昇する強力な一撃'
    },
    description: '血に飢えた戦士が愛用する残忍な斧。使用者を狂乱に導く。',
    obtainMethod: '狂戦士討伐',
    weight: 8.5,
    specialEffect: 'HPが50%以下で攻撃力20%上昇',
    characterCompatibility: {
      追跡者: 3,
      守護者: 2,
      鉄の目: 2,
      レディ: 1,
      無頼漢: 5,
      復讐者: 2,
      隠者: 1,
      執行者: 4
    }
  },

  // 槍系武器
  {
    id: 'crystal_spear',
    name: '水晶の槍',
    type: '槍',
    rarity: 'レア',
    attackPower: {
      physical: 110,
      magic: 65,
      fire: 0,
      lightning: 0,
      holy: 0,
      total: 175
    },
    scaling: {
      strength: 'C',
      dexterity: 'B',
      intelligence: 'A',
      faith: '-',
      arcane: '-'
    },
    requirements: {
      strength: 14,
      dexterity: 16,
      intelligence: 20,
      faith: 0,
      arcane: 0
    },
    skill: {
      name: '水晶の嵐',
      fpCost: 18,
      description: '前方に魔力の弾を連続発射する'
    },
    description: '水晶で形成された美しい槍。魔力を増幅する効果を持つ。',
    obtainMethod: '水晶洞窟の深部',
    weight: 6.5,
    specialEffect: '魔術使用時のFP消費量10%軽減',
    characterCompatibility: {
      追跡者: 2,
      守護者: 3,
      鉄の目: 4,
      レディ: 5,
      無頼漢: 1,
      復讐者: 4,
      隠者: 5,
      執行者: 2
    }
  },

  // 弓系武器
  {
    id: 'hunter_longbow',
    name: '狩人の長弓',
    type: '弓',
    rarity: 'アンコモン',
    attackPower: {
      physical: 142,
      magic: 0,
      fire: 0,
      lightning: 0,
      holy: 0,
      total: 142
    },
    scaling: {
      strength: 'D',
      dexterity: 'A',
      intelligence: '-',
      faith: '-',
      arcane: 'C'
    },
    requirements: {
      strength: 10,
      dexterity: 20,
      intelligence: 0,
      faith: 0,
      arcane: 8
    },
    skill: {
      name: '狙撃射撃',
      fpCost: 12,
      description: '長距離の敵を高精度で狙撃する'
    },
    description: '熟練の狩人が使用する高精度の長弓。遠距離戦に特化。',
    obtainMethod: '狩人の集落',
    weight: 3.5,
    specialEffect: '距離が遠いほどダメージ増加',
    characterCompatibility: {
      追跡者: 3,
      守護者: 2,
      鉄の目: 5,
      レディ: 3,
      無頼漢: 2,
      復讐者: 2,
      隠者: 3,
      執行者: 4
    }
  },

  // 杖系武器
  {
    id: 'scholars_staff',
    name: '学者の杖',
    type: '杖',
    rarity: 'コモン',
    attackPower: {
      physical: 45,
      magic: 95,
      fire: 0,
      lightning: 0,
      holy: 0,
      total: 140
    },
    scaling: {
      strength: '-',
      dexterity: '-',
      intelligence: 'A',
      faith: 'D',
      arcane: 'C'
    },
    requirements: {
      strength: 6,
      dexterity: 8,
      intelligence: 16,
      faith: 0,
      arcane: 0
    },
    skill: {
      name: '知識の光',
      fpCost: 14,
      description: '魔術の威力を一定時間上昇させる'
    },
    description: '学究に励む者が使用する基本的な杖。魔術の威力を高める。',
    obtainMethod: '魔術学院',
    weight: 2.0,
    specialEffect: '魔術の詠唱速度15%向上',
    characterCompatibility: {
      追跡者: 1,
      守護者: 1,
      鉄の目: 3,
      レディ: 5,
      無頼漢: 1,
      復讐者: 4,
      隠者: 5,
      執行者: 2
    }
  },

  // 聖印系武器
  {
    id: 'divine_seal',
    name: '神聖印',
    type: '聖印',
    rarity: 'レア',
    attackPower: {
      physical: 40,
      magic: 0,
      fire: 0,
      lightning: 0,
      holy: 110,
      total: 150
    },
    scaling: {
      strength: '-',
      dexterity: '-',
      intelligence: 'D',
      faith: 'S',
      arcane: 'B'
    },
    requirements: {
      strength: 4,
      dexterity: 6,
      intelligence: 0,
      faith: 22,
      arcane: 8
    },
    skill: {
      name: '神の加護',
      fpCost: 20,
      description: '一定時間、受けるダメージを軽減し、HPを徐々に回復'
    },
    description: '神に仕える者が持つ最高位の聖印。強力な祈祷を可能にする。',
    obtainMethod: '神殿の最深部',
    weight: 1.5,
    specialEffect: '祈祷の回復量25%増加',
    characterCompatibility: {
      追跡者: 1,
      守護者: 2,
      鉄の目: 1,
      レディ: 3,
      無頼漢: 1,
      復讐者: 5,
      隠者: 5,
      執行者: 2
    }
  },

  // 特大剣系武器
  {
    id: 'colossal_blade',
    name: '巨人の大剣',
    type: '特大剣',
    rarity: 'レジェンド',
    attackPower: {
      physical: 210,
      magic: 0,
      fire: 0,
      lightning: 0,
      holy: 0,
      total: 210
    },
    scaling: {
      strength: 'S',
      dexterity: 'D',
      intelligence: '-',
      faith: '-',
      arcane: '-'
    },
    requirements: {
      strength: 35,
      dexterity: 10,
      intelligence: 0,
      faith: 0,
      arcane: 0
    },
    skill: {
      name: '大地割り',
      fpCost: 25,
      description: '地面を叩き割り、広範囲の敵にダメージを与える'
    },
    description: '巨人族が使用していた伝説の大剣。圧倒的な破壊力を誇る。',
    obtainMethod: '巨人王討伐',
    weight: 18.0,
    specialEffect: '両手持ち時、攻撃が建物や障害物を破壊可能',
    characterCompatibility: {
      追跡者: 3,
      守護者: 4,
      鉄の目: 1,
      レディ: 1,
      無頼漢: 5,
      復讐者: 2,
      隠者: 1,
      執行者: 2
    }
  },

  // 拳系武器
  {
    id: 'iron_fist',
    name: '鉄拳',
    type: '拳',
    rarity: 'アンコモン',
    attackPower: {
      physical: 134,
      magic: 0,
      fire: 0,
      lightning: 0,
      holy: 0,
      total: 134
    },
    scaling: {
      strength: 'B',
      dexterity: 'A',
      intelligence: '-',
      faith: '-',
      arcane: 'C'
    },
    requirements: {
      strength: 16,
      dexterity: 18,
      intelligence: 0,
      faith: 0,
      arcane: 12
    },
    statusEffects: [
      { type: '出血', buildup: 60 }
    ],
    skill: {
      name: '連続打撃',
      fpCost: 8,
      description: '素早い連続攻撃でコンボを繋げる'
    },
    description: '格闘家が愛用する重量感のある拳武器。連続攻撃に優れる。',
    obtainMethod: '格闘道場',
    weight: 4.5,
    specialEffect: '連続ヒット時にダメージボーナス',
    characterCompatibility: {
      追跡者: 3,
      守護者: 3,
      鉄の目: 4,
      レディ: 2,
      無頼漢: 4,
      復讐者: 2,
      隠者: 2,
      執行者: 5
    }
  }
]

/**
 * 武器種別でフィルタリングされた武器を取得
 */
export function getWeaponsByType(type: WeaponType): Weapon[] {
  return WEAPONS.filter(weapon => weapon.type === type)
}

/**
 * キャラクター名による推奨武器を取得（推奨度3以上）
 */
export function getRecommendedWeaponsForCharacter(characterName: string, minCompatibility: number = 3): Weapon[] {
  return WEAPONS.filter(weapon => {
    const compatibility = weapon.characterCompatibility[characterName as keyof typeof weapon.characterCompatibility]
    return compatibility >= minCompatibility
  }).sort((a, b) => {
    const aCompat = a.characterCompatibility[characterName as keyof typeof a.characterCompatibility]
    const bCompat = b.characterCompatibility[characterName as keyof typeof b.characterCompatibility]
    return bCompat - aCompat
  })
}

/**
 * 武器IDから武器データを取得
 */
export function getWeaponById(id: string): Weapon | undefined {
  return WEAPONS.find(weapon => weapon.id === id)
}

/**
 * 武器名から武器データを取得
 */
export function getWeaponByName(name: string): Weapon | undefined {
  return WEAPONS.find(weapon => weapon.name === name)
}

/**
 * 全武器IDのリストを取得
 */
export function getAllWeaponIds(): string[] {
  return WEAPONS.map(weapon => weapon.id)
}

/**
 * 全武器名のリストを取得
 */
export function getAllWeaponNames(): string[] {
  return WEAPONS.map(weapon => weapon.name)
}

/**
 * 武器カテゴリ別のグループ分け
 */
export const WEAPON_GROUPS = {
  melee: WEAPONS.filter(w => !['弓', '大弓', '杖', '聖印'].includes(w.type)),
  ranged: WEAPONS.filter(w => ['弓', '大弓'].includes(w.type)),
  catalyst: WEAPONS.filter(w => ['杖', '聖印'].includes(w.type))
}

/**
 * レアリティ別の武器数
 */
export const WEAPON_COUNT_BY_RARITY = {
  コモン: WEAPONS.filter(w => w.rarity === 'コモン').length,
  アンコモン: WEAPONS.filter(w => w.rarity === 'アンコモン').length,
  レア: WEAPONS.filter(w => w.rarity === 'レア').length,
  レジェンド: WEAPONS.filter(w => w.rarity === 'レジェンド').length
}