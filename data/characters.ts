/**
 * キャラクターデータ
 * doc/キャラクター.md と doc/能力値.md から取得したデータ
 */

import type { Character, StatRank } from '~/types'

// ステータスランクから数値への変換マップ
const STAT_RANK_VALUES: Record<StatRank, number> = {
  'S': 5,
  'A': 4,
  'B': 3,
  'C': 2,
  'D': 1,
  'E': 0
}

// 8キャラクターのデータ定義
export const CHARACTERS: Character[] = [
  {
    name: '追跡者',
    preferredWeapon: '大剣',
    baseStats: {
      vitality: 25,   // A相当
      mind: 15,       // C相当
      endurance: 20,  // B相当
      strength: 25,   // A相当
      dexterity: 20,  // B相当
      intelligence: 15, // C相当
      faith: 15,      // C相当
      arcane: 15      // C相当
    },
    statRanks: {
      vitality: 'A',
      mind: 'C',
      endurance: 'B',
      strength: 'A',
      dexterity: 'B',
      intelligence: 'C',
      faith: 'C',
      arcane: 'C'
    }
  },
  {
    name: '守護者',
    preferredWeapon: '斧槍',
    baseStats: {
      vitality: 30,   // S相当
      mind: 15,       // C相当
      endurance: 25,  // A相当
      strength: 20,   // B相当
      dexterity: 15,  // C相当
      intelligence: 10, // D相当
      faith: 15,      // C相当
      arcane: 15      // C相当
    },
    statRanks: {
      vitality: 'S',
      mind: 'C',
      endurance: 'A',
      strength: 'B',
      dexterity: 'C',
      intelligence: 'D',
      faith: 'C',
      arcane: 'C'
    }
  },
  {
    name: '鉄の目',
    preferredWeapon: '弓',
    baseStats: {
      vitality: 15,   // C相当
      mind: 15,       // C相当
      endurance: 20,  // B相当
      strength: 15,   // C相当
      dexterity: 25,  // A相当
      intelligence: 10, // D相当
      faith: 10,      // D相当
      arcane: 20      // B相当
    },
    statRanks: {
      vitality: 'C',
      mind: 'C',
      endurance: 'B',
      strength: 'C',
      dexterity: 'A',
      intelligence: 'D',
      faith: 'D',
      arcane: 'B'
    }
  },
  {
    name: 'レディ',
    preferredWeapon: '短剣',
    baseStats: {
      vitality: 15,   // C相当
      mind: 20,       // B相当
      endurance: 10,  // D相当
      strength: 10,   // D相当
      dexterity: 20,  // B相当
      intelligence: 25, // A相当
      faith: 20,      // B相当
      arcane: 15      // C相当
    },
    statRanks: {
      vitality: 'C',
      mind: 'B',
      endurance: 'D',
      strength: 'D',
      dexterity: 'B',
      intelligence: 'A',
      faith: 'B',
      arcane: 'C'
    }
  },
  {
    name: '無頼漢',
    preferredWeapon: '大斧・大槌・特大武器',
    baseStats: {
      vitality: 25,   // A相当
      mind: 10,       // D相当
      endurance: 25,  // A相当
      strength: 30,   // S相当
      dexterity: 15,  // C相当
      intelligence: 10, // D相当
      faith: 10,      // D相当
      arcane: 15      // C相当
    },
    statRanks: {
      vitality: 'A',
      mind: 'D',
      endurance: 'A',
      strength: 'S',
      dexterity: 'C',
      intelligence: 'D',
      faith: 'D',
      arcane: 'C'
    }
  },
  {
    name: '復讐者',
    preferredWeapon: 'なし',
    baseStats: {
      vitality: 10,   // D相当
      mind: 25,       // A相当
      endurance: 10,  // D相当
      strength: 15,   // C相当
      dexterity: 15,  // C相当
      intelligence: 20, // B相当
      faith: 30,      // S相当
      arcane: 20      // B相当
    },
    statRanks: {
      vitality: 'D',
      mind: 'A',
      endurance: 'D',
      strength: 'C',
      dexterity: 'C',
      intelligence: 'B',
      faith: 'S',
      arcane: 'B'
    }
  },
  {
    name: '隠者',
    preferredWeapon: 'なし',
    baseStats: {
      vitality: 10,   // D相当
      mind: 25,       // A相当
      endurance: 15,  // C相当
      strength: 10,   // D相当
      dexterity: 15,  // C相当
      intelligence: 30, // S相当
      faith: 30,      // S相当
      arcane: 15      // C相当
    },
    statRanks: {
      vitality: 'D',
      mind: 'A',
      endurance: 'C',
      strength: 'D',
      dexterity: 'C',
      intelligence: 'S',
      faith: 'S',
      arcane: 'C'
    }
  },
  {
    name: '執行者',
    preferredWeapon: '刀',
    baseStats: {
      vitality: 20,   // B相当
      mind: 10,       // D相当
      endurance: 20,  // B相当
      strength: 15,   // C相当
      dexterity: 30,  // S相当
      intelligence: 10, // D相当
      faith: 10,      // D相当
      arcane: 30      // S相当
    },
    statRanks: {
      vitality: 'B',
      mind: 'D',
      endurance: 'B',
      strength: 'C',
      dexterity: 'S',
      intelligence: 'D',
      faith: 'D',
      arcane: 'S'
    }
  }
]

// キャラクター名から検索する関数
export function getCharacterByName(name: string): Character | undefined {
  return CHARACTERS.find(char => char.name === name)
}

// 全キャラクター名を取得する関数
export function getAllCharacterNames(): string[] {
  return CHARACTERS.map(char => char.name)
}