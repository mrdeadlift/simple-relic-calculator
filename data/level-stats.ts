// 能力値.md から抽出したレベル別ステータスデータ
// 基準値からの差分で記録

export interface LevelStats {
  vitality: number
  mind: number
  endurance: number
  strength: number
  dexterity: number
  intelligence: number
  faith: number
  arcane: number
}

export interface CharacterLevelData {
  [level: number]: LevelStats
}

export const CHARACTER_LEVEL_STATS: Record<string, CharacterLevelData> = {
  '追跡者': {
    1: { vitality: 25, mind: 15, endurance: 20, strength: 25, dexterity: 20, intelligence: 15, faith: 15, arcane: 15 },
    2: { vitality: 27, mind: 16, endurance: 21, strength: 38, dexterity: 29, intelligence: 17, faith: 17, arcane: 16 },
    3: { vitality: 28, mind: 17, endurance: 22, strength: 40, dexterity: 31, intelligence: 17, faith: 17, arcane: 17 },
    4: { vitality: 30, mind: 18, endurance: 23, strength: 43, dexterity: 33, intelligence: 18, faith: 18, arcane: 18 },
    5: { vitality: 31, mind: 19, endurance: 24, strength: 45, dexterity: 35, intelligence: 19, faith: 19, arcane: 19 },
    6: { vitality: 33, mind: 20, endurance: 25, strength: 48, dexterity: 37, intelligence: 20, faith: 20, arcane: 20 },
    7: { vitality: 34, mind: 21, endurance: 26, strength: 51, dexterity: 39, intelligence: 21, faith: 21, arcane: 21 },
    8: { vitality: 36, mind: 22, endurance: 27, strength: 53, dexterity: 41, intelligence: 21, faith: 21, arcane: 22 },
    9: { vitality: 37, mind: 23, endurance: 28, strength: 56, dexterity: 43, intelligence: 22, faith: 22, arcane: 23 },
    10: { vitality: 39, mind: 24, endurance: 29, strength: 58, dexterity: 45, intelligence: 23, faith: 23, arcane: 24 },
    11: { vitality: 40, mind: 25, endurance: 30, strength: 61, dexterity: 47, intelligence: 24, faith: 24, arcane: 25 },
    12: { vitality: 42, mind: 26, endurance: 31, strength: 64, dexterity: 49, intelligence: 25, faith: 25, arcane: 26 },
    13: { vitality: 43, mind: 27, endurance: 32, strength: 66, dexterity: 50, intelligence: 26, faith: 26, arcane: 27 },
    14: { vitality: 45, mind: 28, endurance: 33, strength: 68, dexterity: 52, intelligence: 27, faith: 27, arcane: 28 },
    15: { vitality: 46, mind: 29, endurance: 34, strength: 70, dexterity: 54, intelligence: 28, faith: 28, arcane: 29 }
  },
  '守護者': {
    1: { vitality: 30, mind: 15, endurance: 25, strength: 20, dexterity: 15, intelligence: 10, faith: 15, arcane: 15 },
    2: { vitality: 32, mind: 16, endurance: 26, strength: 26, dexterity: 21, intelligence: 10, faith: 18, arcane: 16 },
    3: { vitality: 33, mind: 17, endurance: 27, strength: 28, dexterity: 22, intelligence: 11, faith: 19, arcane: 17 },
    4: { vitality: 35, mind: 18, endurance: 28, strength: 30, dexterity: 24, intelligence: 12, faith: 20, arcane: 18 },
    5: { vitality: 36, mind: 19, endurance: 29, strength: 33, dexterity: 25, intelligence: 12, faith: 21, arcane: 19 },
    6: { vitality: 38, mind: 20, endurance: 30, strength: 35, dexterity: 27, intelligence: 13, faith: 23, arcane: 20 },
    7: { vitality: 39, mind: 21, endurance: 31, strength: 38, dexterity: 29, intelligence: 13, faith: 24, arcane: 21 },
    8: { vitality: 41, mind: 22, endurance: 32, strength: 40, dexterity: 30, intelligence: 14, faith: 25, arcane: 22 },
    9: { vitality: 42, mind: 23, endurance: 33, strength: 42, dexterity: 32, intelligence: 14, faith: 27, arcane: 23 },
    10: { vitality: 44, mind: 24, endurance: 34, strength: 45, dexterity: 33, intelligence: 15, faith: 28, arcane: 24 },
    11: { vitality: 45, mind: 25, endurance: 35, strength: 47, dexterity: 35, intelligence: 15, faith: 29, arcane: 25 },
    12: { vitality: 47, mind: 26, endurance: 36, strength: 50, dexterity: 37, intelligence: 16, faith: 31, arcane: 26 },
    13: { vitality: 48, mind: 27, endurance: 37, strength: 51, dexterity: 38, intelligence: 16, faith: 32, arcane: 27 },
    14: { vitality: 50, mind: 28, endurance: 38, strength: 53, dexterity: 40, intelligence: 17, faith: 33, arcane: 28 },
    15: { vitality: 51, mind: 29, endurance: 39, strength: 55, dexterity: 42, intelligence: 18, faith: 34, arcane: 29 }
  },
  '鉄の目': {
    1: { vitality: 15, mind: 15, endurance: 20, strength: 15, dexterity: 25, intelligence: 10, faith: 10, arcane: 20 },
    2: { vitality: 16, mind: 16, endurance: 21, strength: 18, dexterity: 43, intelligence: 11, faith: 11, arcane: 21 },
    3: { vitality: 17, mind: 17, endurance: 22, strength: 19, dexterity: 46, intelligence: 11, faith: 11, arcane: 22 },
    4: { vitality: 19, mind: 18, endurance: 23, strength: 20, dexterity: 49, intelligence: 11, faith: 12, arcane: 23 },
    5: { vitality: 20, mind: 19, endurance: 24, strength: 21, dexterity: 52, intelligence: 11, faith: 13, arcane: 24 },
    6: { vitality: 22, mind: 20, endurance: 25, strength: 22, dexterity: 55, intelligence: 12, faith: 13, arcane: 25 },
    7: { vitality: 23, mind: 21, endurance: 26, strength: 23, dexterity: 58, intelligence: 12, faith: 14, arcane: 26 },
    8: { vitality: 25, mind: 22, endurance: 27, strength: 24, dexterity: 61, intelligence: 12, faith: 15, arcane: 27 },
    9: { vitality: 26, mind: 23, endurance: 28, strength: 25, dexterity: 64, intelligence: 13, faith: 15, arcane: 28 },
    10: { vitality: 28, mind: 24, endurance: 29, strength: 26, dexterity: 67, intelligence: 13, faith: 16, arcane: 29 },
    11: { vitality: 29, mind: 25, endurance: 30, strength: 27, dexterity: 70, intelligence: 13, faith: 17, arcane: 30 },
    12: { vitality: 31, mind: 26, endurance: 31, strength: 28, dexterity: 74, intelligence: 14, faith: 18, arcane: 31 },
    13: { vitality: 32, mind: 27, endurance: 32, strength: 28, dexterity: 76, intelligence: 14, faith: 19, arcane: 32 },
    14: { vitality: 34, mind: 28, endurance: 33, strength: 29, dexterity: 78, intelligence: 14, faith: 20, arcane: 33 },
    15: { vitality: 35, mind: 29, endurance: 34, strength: 30, dexterity: 80, intelligence: 15, faith: 21, arcane: 34 }
  },
  'レディ': {
    1: { vitality: 15, mind: 20, endurance: 10, strength: 10, dexterity: 20, intelligence: 25, faith: 20, arcane: 15 },
    2: { vitality: 16, mind: 21, endurance: 11, strength: 12, dexterity: 28, intelligence: 29, faith: 24, arcane: 16 },
    3: { vitality: 17, mind: 22, endurance: 12, strength: 12, dexterity: 30, intelligence: 31, faith: 25, arcane: 17 },
    4: { vitality: 19, mind: 23, endurance: 13, strength: 13, dexterity: 32, intelligence: 34, faith: 27, arcane: 18 },
    5: { vitality: 20, mind: 24, endurance: 14, strength: 13, dexterity: 34, intelligence: 37, faith: 29, arcane: 19 },
    6: { vitality: 22, mind: 25, endurance: 15, strength: 14, dexterity: 37, intelligence: 40, faith: 31, arcane: 20 },
    7: { vitality: 23, mind: 26, endurance: 16, strength: 14, dexterity: 39, intelligence: 43, faith: 33, arcane: 21 },
    8: { vitality: 25, mind: 27, endurance: 17, strength: 15, dexterity: 41, intelligence: 45, faith: 34, arcane: 22 },
    9: { vitality: 26, mind: 28, endurance: 18, strength: 15, dexterity: 44, intelligence: 48, faith: 36, arcane: 23 },
    10: { vitality: 28, mind: 29, endurance: 19, strength: 16, dexterity: 46, intelligence: 51, faith: 38, arcane: 24 },
    11: { vitality: 29, mind: 30, endurance: 20, strength: 16, dexterity: 48, intelligence: 54, faith: 40, arcane: 25 },
    12: { vitality: 31, mind: 31, endurance: 21, strength: 17, dexterity: 51, intelligence: 57, faith: 42, arcane: 26 },
    13: { vitality: 32, mind: 32, endurance: 22, strength: 17, dexterity: 53, intelligence: 59, faith: 43, arcane: 27 },
    14: { vitality: 34, mind: 33, endurance: 23, strength: 18, dexterity: 55, intelligence: 61, faith: 44, arcane: 28 },
    15: { vitality: 35, mind: 34, endurance: 24, strength: 19, dexterity: 57, intelligence: 63, faith: 45, arcane: 29 }
  },
  '無頼漢': {
    1: { vitality: 25, mind: 10, endurance: 25, strength: 30, dexterity: 15, intelligence: 10, faith: 10, arcane: 15 },
    2: { vitality: 27, mind: 11, endurance: 26, strength: 46, dexterity: 17, intelligence: 11, faith: 12, arcane: 16 },
    3: { vitality: 28, mind: 12, endurance: 27, strength: 49, dexterity: 18, intelligence: 11, faith: 12, arcane: 17 },
    4: { vitality: 30, mind: 13, endurance: 28, strength: 53, dexterity: 19, intelligence: 11, faith: 13, arcane: 18 },
    5: { vitality: 31, mind: 14, endurance: 29, strength: 56, dexterity: 20, intelligence: 11, faith: 13, arcane: 19 },
    6: { vitality: 33, mind: 15, endurance: 30, strength: 60, dexterity: 21, intelligence: 11, faith: 14, arcane: 20 },
    7: { vitality: 34, mind: 16, endurance: 31, strength: 63, dexterity: 22, intelligence: 11, faith: 15, arcane: 21 },
    8: { vitality: 36, mind: 17, endurance: 32, strength: 67, dexterity: 23, intelligence: 11, faith: 15, arcane: 22 },
    9: { vitality: 37, mind: 18, endurance: 33, strength: 70, dexterity: 24, intelligence: 11, faith: 16, arcane: 23 },
    10: { vitality: 39, mind: 19, endurance: 34, strength: 74, dexterity: 25, intelligence: 11, faith: 16, arcane: 24 },
    11: { vitality: 40, mind: 20, endurance: 35, strength: 77, dexterity: 26, intelligence: 11, faith: 17, arcane: 25 },
    12: { vitality: 42, mind: 21, endurance: 36, strength: 81, dexterity: 27, intelligence: 11, faith: 18, arcane: 26 },
    13: { vitality: 43, mind: 22, endurance: 37, strength: 83, dexterity: 28, intelligence: 11, faith: 18, arcane: 27 },
    14: { vitality: 45, mind: 23, endurance: 38, strength: 86, dexterity: 29, intelligence: 11, faith: 19, arcane: 28 },
    15: { vitality: 46, mind: 24, endurance: 39, strength: 89, dexterity: 30, intelligence: 12, faith: 20, arcane: 29 }
  },
  '復讐者': {
    1: { vitality: 10, mind: 25, endurance: 10, strength: 15, dexterity: 15, intelligence: 20, faith: 30, arcane: 20 },
    2: { vitality: 11, mind: 26, endurance: 11, strength: 19, dexterity: 19, intelligence: 23, faith: 43, arcane: 21 },
    3: { vitality: 12, mind: 27, endurance: 12, strength: 20, dexterity: 20, intelligence: 25, faith: 46, arcane: 22 },
    4: { vitality: 14, mind: 28, endurance: 13, strength: 21, dexterity: 21, intelligence: 27, faith: 49, arcane: 23 },
    5: { vitality: 15, mind: 29, endurance: 14, strength: 22, dexterity: 22, intelligence: 29, faith: 52, arcane: 24 },
    6: { vitality: 17, mind: 30, endurance: 15, strength: 23, dexterity: 23, intelligence: 31, faith: 55, arcane: 25 },
    7: { vitality: 18, mind: 31, endurance: 16, strength: 25, dexterity: 25, intelligence: 33, faith: 58, arcane: 26 },
    8: { vitality: 20, mind: 32, endurance: 17, strength: 26, dexterity: 26, intelligence: 35, faith: 61, arcane: 27 },
    9: { vitality: 21, mind: 33, endurance: 18, strength: 27, dexterity: 27, intelligence: 37, faith: 64, arcane: 28 },
    10: { vitality: 23, mind: 34, endurance: 19, strength: 28, dexterity: 28, intelligence: 39, faith: 67, arcane: 29 },
    11: { vitality: 24, mind: 35, endurance: 20, strength: 29, dexterity: 29, intelligence: 41, faith: 70, arcane: 30 },
    12: { vitality: 26, mind: 36, endurance: 21, strength: 31, dexterity: 31, intelligence: 43, faith: 73, arcane: 31 },
    13: { vitality: 27, mind: 37, endurance: 22, strength: 32, dexterity: 32, intelligence: 44, faith: 75, arcane: 32 },
    14: { vitality: 29, mind: 38, endurance: 23, strength: 33, dexterity: 33, intelligence: 45, faith: 77, arcane: 33 },
    15: { vitality: 30, mind: 39, endurance: 24, strength: 34, dexterity: 34, intelligence: 46, faith: 79, arcane: 34 }
  },
  '隠者': {
    1: { vitality: 10, mind: 25, endurance: 15, strength: 10, dexterity: 15, intelligence: 30, faith: 30, arcane: 15 },
    2: { vitality: 11, mind: 26, endurance: 16, strength: 11, dexterity: 17, intelligence: 44, faith: 43, arcane: 16 },
    3: { vitality: 12, mind: 27, endurance: 17, strength: 11, dexterity: 18, intelligence: 47, faith: 46, arcane: 17 },
    4: { vitality: 14, mind: 28, endurance: 18, strength: 12, dexterity: 19, intelligence: 50, faith: 49, arcane: 18 },
    5: { vitality: 15, mind: 29, endurance: 19, strength: 13, dexterity: 20, intelligence: 53, faith: 52, arcane: 19 },
    6: { vitality: 17, mind: 30, endurance: 20, strength: 13, dexterity: 21, intelligence: 56, faith: 55, arcane: 20 },
    7: { vitality: 18, mind: 31, endurance: 21, strength: 14, dexterity: 23, intelligence: 59, faith: 58, arcane: 21 },
    8: { vitality: 20, mind: 32, endurance: 22, strength: 15, dexterity: 24, intelligence: 62, faith: 61, arcane: 22 },
    9: { vitality: 21, mind: 33, endurance: 23, strength: 15, dexterity: 25, intelligence: 65, faith: 64, arcane: 23 },
    10: { vitality: 23, mind: 34, endurance: 24, strength: 16, dexterity: 26, intelligence: 68, faith: 67, arcane: 24 },
    11: { vitality: 24, mind: 35, endurance: 25, strength: 17, dexterity: 27, intelligence: 71, faith: 70, arcane: 25 },
    12: { vitality: 26, mind: 36, endurance: 26, strength: 18, dexterity: 29, intelligence: 74, faith: 73, arcane: 26 },
    13: { vitality: 27, mind: 37, endurance: 27, strength: 19, dexterity: 30, intelligence: 76, faith: 75, arcane: 27 },
    14: { vitality: 29, mind: 38, endurance: 28, strength: 20, dexterity: 31, intelligence: 78, faith: 77, arcane: 28 },
    15: { vitality: 30, mind: 39, endurance: 29, strength: 21, dexterity: 32, intelligence: 80, faith: 79, arcane: 29 }
  },
  '執行者': {
    1: { vitality: 20, mind: 10, endurance: 20, strength: 15, dexterity: 30, intelligence: 10, faith: 10, arcane: 30 },
    2: { vitality: 21, mind: 11, endurance: 21, strength: 19, dexterity: 48, intelligence: 11, faith: 11, arcane: 31 },
    3: { vitality: 22, mind: 12, endurance: 22, strength: 20, dexterity: 52, intelligence: 11, faith: 11, arcane: 32 },
    4: { vitality: 24, mind: 13, endurance: 23, strength: 21, dexterity: 56, intelligence: 11, faith: 11, arcane: 33 },
    5: { vitality: 25, mind: 14, endurance: 24, strength: 22, dexterity: 60, intelligence: 12, faith: 11, arcane: 34 },
    6: { vitality: 27, mind: 15, endurance: 25, strength: 24, dexterity: 64, intelligence: 12, faith: 11, arcane: 35 },
    7: { vitality: 28, mind: 16, endurance: 26, strength: 25, dexterity: 68, intelligence: 13, faith: 12, arcane: 36 },
    8: { vitality: 30, mind: 17, endurance: 27, strength: 26, dexterity: 72, intelligence: 13, faith: 12, arcane: 37 },
    9: { vitality: 31, mind: 18, endurance: 28, strength: 28, dexterity: 76, intelligence: 13, faith: 12, arcane: 38 },
    10: { vitality: 33, mind: 19, endurance: 29, strength: 29, dexterity: 80, intelligence: 14, faith: 12, arcane: 39 },
    11: { vitality: 34, mind: 20, endurance: 30, strength: 30, dexterity: 84, intelligence: 14, faith: 12, arcane: 40 },
    12: { vitality: 36, mind: 21, endurance: 31, strength: 32, dexterity: 88, intelligence: 15, faith: 13, arcane: 41 },
    13: { vitality: 37, mind: 22, endurance: 32, strength: 33, dexterity: 89, intelligence: 15, faith: 13, arcane: 42 },
    14: { vitality: 39, mind: 23, endurance: 33, strength: 34, dexterity: 90, intelligence: 15, faith: 13, arcane: 43 },
    15: { vitality: 40, mind: 24, endurance: 34, strength: 35, dexterity: 91, intelligence: 16, faith: 14, arcane: 44 }
  }
}

// レベル範囲の定義
export const MIN_LEVEL = 1
export const MAX_LEVEL = 15

// レベル別ステータスを取得
export function getCharacterStatsAtLevel(characterName: string, level: number): LevelStats | null {
  const characterData = CHARACTER_LEVEL_STATS[characterName]
  if (!characterData || level < MIN_LEVEL || level > MAX_LEVEL) {
    return null
  }
  return characterData[level] || null
}

// 利用可能なレベル一覧を取得
export function getAvailableLevels(): number[] {
  return Array.from({ length: MAX_LEVEL - MIN_LEVEL + 1 }, (_, i) => i + MIN_LEVEL)
}