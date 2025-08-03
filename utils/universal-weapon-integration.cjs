/**
 * 汎用武器統合スクリプト
 * doc/weapons下の全Markdownファイルから武器データを統合
 */

const fs = require('fs');
const path = require('path');

// 武器タイプマッピング（Markdownファイル名 → TypeScript武器種別）
const WEAPON_TYPE_MAPPING = {
  '短剣': '短剣',
  '直剣': '直剣', 
  '大剣': '大剣',
  '刀': '刀',
  '両刃剣': '両刃剣',
  '曲剣': '曲剣',
  '重刺剣': '重刺剣',
  '刺剣': '刺剣',
  '特大剣': '特大剣',
  '斧': '斧',
  '大斧': '大斧', 
  '槌': '槌',
  '大槌': '大槌',
  '槍': '槍',
  '大槍': '大槍',
  '斧槍': '斧槍',
  '鎌': '鎌',
  '鞭': '鞭',
  '爪': '爪',
  '拳': '拳',
  'フレイル': 'フレイル',
  '弓': '弓',
  '大弓': '大弓',
  'クロスボウ': 'クロスボウ',
  '松明': '松明',
  '杖': '杖',
  '聖印': '聖印',
  '小盾': '小盾',
  '中盾': '中盾',
  '大盾': '大盾',
  '特大武器': '特大武器'
};

// キャラクター適性テンプレート（武器種別ごと）
const CHARACTER_COMPATIBILITY_TEMPLATES = {
  // 剣系 - 技量重視
  '短剣': { 追跡者: 2, 守護者: 2, 鉄の目: 2, レディ: 5, 無頼漢: 2, 復讐者: 2, 隠者: 2, 執行者: 4 },
  '直剣': { 追跡者: 4, 守護者: 3, 鉄の目: 3, レディ: 4, 無頼漢: 3, 復讐者: 3, 隠者: 2, 執行者: 3 },
  '大剣': { 追跡者: 3, 守護者: 4, 鉄の目: 2, レディ: 2, 無頼漢: 4, 復讐者: 4, 隠者: 2, 執行者: 3 },
  '刀': { 追跡者: 5, 守護者: 2, 鉄の目: 3, レディ: 3, 無頼漢: 2, 復讐者: 3, 隠者: 2, 執行者: 4 },
  '両刃剣': { 追跡者: 3, 守護者: 3, 鉄の目: 3, レディ: 3, 無頼漢: 3, 復讐者: 4, 隠者: 2, 執行者: 3 },
  '曲剣': { 追跡者: 4, 守護者: 2, 鉄の目: 2, レディ: 4, 無頼漢: 3, 復讐者: 3, 隠者: 2, 執行者: 3 },
  '重刺剣': { 追跡者: 2, 守護者: 4, 鉄の目: 3, レディ: 2, 無頼漢: 3, 復讐者: 3, 隠者: 2, 執行者: 4 },
  '刺剣': { 追跡者: 3, 守護者: 2, 鉄の目: 3, レディ: 4, 無頼漢: 2, 復讐者: 3, 隠者: 2, 執行者: 3 },
  '特大剣': { 追跡者: 2, 守護者: 5, 鉄の目: 2, レディ: 1, 無頼漢: 4, 復讐者: 4, 隠者: 1, 執行者: 3 },
  
  // 打撃系 - 筋力重視
  '斧': { 追跡者: 3, 守護者: 4, 鉄の目: 3, レディ: 2, 無頼漢: 4, 復讐者: 3, 隠者: 2, 執行者: 3 },
  '大斧': { 追跡者: 2, 守護者: 5, 鉄の目: 2, レディ: 1, 無頼漢: 4, 復讐者: 4, 隠者: 1, 執行者: 2 },
  '槌': { 追跡者: 3, 守護者: 4, 鉄の目: 3, レディ: 2, 無頼漢: 3, 復讐者: 3, 隠者: 2, 執行者: 4 },
  '大槌': { 追跡者: 2, 守護者: 5, 鉄の目: 2, レディ: 1, 無頼漢: 3, 復讐者: 4, 隠者: 1, 執行者: 4 },
  'フレイル': { 追跡者: 3, 守護者: 3, 鉄の目: 2, レディ: 2, 無頼漢: 3, 復讐者: 3, 隠者: 2, 執行者: 4 },
  
  // 槍系 - バランス型
  '槍': { 追跡者: 3, 守護者: 3, 鉄の目: 4, レディ: 2, 無頼漢: 3, 復讐者: 3, 隠者: 3, 執行者: 3 },
  '大槍': { 追跡者: 2, 守護者: 4, 鉄の目: 4, レディ: 2, 無頼漢: 3, 復讐者: 3, 隠者: 3, 執行者: 3 },
  '斧槍': { 追跡者: 3, 守護者: 3, 鉄の目: 3, レディ: 2, 無頼漢: 3, 復讐者: 3, 隠者: 2, 執行者: 3 },
  
  // 特殊武器系
  '鎌': { 追跡者: 3, 守護者: 2, 鉄の目: 2, レディ: 3, 無頼漢: 3, 復讐者: 4, 隠者: 3, 執行者: 2 },
  '鞭': { 追跡者: 3, 守護者: 2, 鉄の目: 2, レディ: 3, 無頼漢: 2, 復讐者: 3, 隠者: 4, 執行者: 2 },
  '爪': { 追跡者: 4, 守護者: 2, 鉄の目: 2, レディ: 3, 無頼漢: 3, 復讐者: 2, 隠者: 2, 執行者: 2 },
  '拳': { 追跡者: 4, 守護者: 3, 鉄の目: 2, レディ: 2, 無頼漢: 3, 復讐者: 2, 隠者: 2, 執行者: 3 },
  
  // 遠距離系 - 技量・知力重視
  '弓': { 追跡者: 4, 守護者: 2, 鉄の目: 4, レディ: 3, 無頼漢: 2, 復讐者: 2, 隠者: 4, 執行者: 2 },
  '大弓': { 追跡者: 3, 守護者: 3, 鉄の目: 5, レディ: 2, 無頼漢: 2, 復讐者: 2, 隠者: 4, 執行者: 2 },
  'クロスボウ': { 追跡者: 3, 守護者: 3, 鉄の目: 4, レディ: 3, 無頼漢: 2, 復讐者: 2, 隠者: 3, 執行者: 3 },
  '松明': { 追跡者: 2, 守護者: 2, 鉄の目: 2, レディ: 2, 無頼漢: 3, 復讐者: 2, 隠者: 3, 執行者: 2 },
  
  // 魔術系 - 知力・信仰重視
  '杖': { 追跡者: 2, 守護者: 2, 鉄の目: 2, レディ: 2, 無頼漢: 2, 復讐者: 2, 隠者: 5, 執行者: 2 },
  '聖印': { 追跡者: 2, 守護者: 3, 鉄の目: 2, レディ: 2, 無頼漢: 2, 復讐者: 3, 隠者: 2, 執行者: 5 },
  
  // 防具系
  '小盾': { 追跡者: 3, 守護者: 2, 鉄の目: 3, レディ: 4, 無頼漢: 2, 復讐者: 2, 隠者: 2, 執行者: 3 },
  '中盾': { 追跡者: 2, 守護者: 4, 鉄の目: 4, レディ: 2, 無頼漢: 3, 復讐者: 3, 隠者: 2, 執行者: 4 },
  '大盾': { 追跡者: 1, 守護者: 5, 鉄の目: 3, レディ: 1, 無頼漢: 2, 復讐者: 3, 隠者: 1, 執行者: 4 },
  
  // 特殊
  '特大武器': { 追跡者: 2, 守護者: 4, 鉄の目: 2, レディ: 1, 無頼漢: 3, 復讐者: 3, 隠者: 1, 執行者: 3 }
};

// 基本必要能力値テンプレート（武器種別ごと）
const REQUIREMENTS_TEMPLATES = {
  // 剣系
  '短剣': { strength: 5, dexterity: 10, intelligence: 0, faith: 0, arcane: 0 },
  '直剣': { strength: 8, dexterity: 10, intelligence: 0, faith: 0, arcane: 0 },
  '大剣': { strength: 14, dexterity: 10, intelligence: 0, faith: 0, arcane: 0 },
  '刀': { strength: 8, dexterity: 13, intelligence: 0, faith: 0, arcane: 0 },
  '両刃剣': { strength: 10, dexterity: 10, intelligence: 0, faith: 0, arcane: 0 },
  '曲剣': { strength: 7, dexterity: 13, intelligence: 0, faith: 0, arcane: 0 },
  '重刺剣': { strength: 12, dexterity: 12, intelligence: 0, faith: 0, arcane: 0 },
  '刺剣': { strength: 6, dexterity: 12, intelligence: 0, faith: 0, arcane: 0 },
  '特大剣': { strength: 18, dexterity: 8, intelligence: 0, faith: 0, arcane: 0 },
  
  // 打撃系
  '斧': { strength: 12, dexterity: 8, intelligence: 0, faith: 0, arcane: 0 },
  '大斧': { strength: 18, dexterity: 6, intelligence: 0, faith: 0, arcane: 0 },
  '槌': { strength: 10, dexterity: 6, intelligence: 0, faith: 0, arcane: 0 },
  '大槌': { strength: 16, dexterity: 6, intelligence: 0, faith: 0, arcane: 0 },
  'フレイル': { strength: 8, dexterity: 8, intelligence: 0, faith: 0, arcane: 0 },
  
  // 槍系
  '槍': { strength: 10, dexterity: 10, intelligence: 0, faith: 0, arcane: 0 },
  '大槍': { strength: 14, dexterity: 10, intelligence: 0, faith: 0, arcane: 0 },
  '斧槍': { strength: 12, dexterity: 8, intelligence: 0, faith: 0, arcane: 0 },
  
  // 特殊武器
  '鎌': { strength: 8, dexterity: 12, intelligence: 0, faith: 0, arcane: 0 },
  '鞭': { strength: 6, dexterity: 12, intelligence: 0, faith: 0, arcane: 0 },
  '爪': { strength: 6, dexterity: 14, intelligence: 0, faith: 0, arcane: 0 },
  '拳': { strength: 8, dexterity: 10, intelligence: 0, faith: 0, arcane: 0 },
  
  // 遠距離
  '弓': { strength: 6, dexterity: 12, intelligence: 0, faith: 0, arcane: 0 },
  '大弓': { strength: 10, dexterity: 14, intelligence: 0, faith: 0, arcane: 0 },
  'クロスボウ': { strength: 8, dexterity: 10, intelligence: 0, faith: 0, arcane: 0 },
  '松明': { strength: 4, dexterity: 6, intelligence: 0, faith: 0, arcane: 0 },
  
  // 魔術
  '杖': { strength: 4, dexterity: 6, intelligence: 12, faith: 0, arcane: 0 },
  '聖印': { strength: 4, dexterity: 6, intelligence: 0, faith: 12, arcane: 0 },
  
  // 防具
  '小盾': { strength: 6, dexterity: 8, intelligence: 0, faith: 0, arcane: 0 },
  '中盾': { strength: 10, dexterity: 6, intelligence: 0, faith: 0, arcane: 0 },
  '大盾': { strength: 14, dexterity: 4, intelligence: 0, faith: 0, arcane: 0 },
  
  // 特殊
  '特大武器': { strength: 20, dexterity: 6, intelligence: 0, faith: 0, arcane: 0 }
};

// 重量テンプレート（武器種別ごと）
const WEIGHT_TEMPLATES = {
  '短剣': 1.5, '直剣': 3.0, '大剣': 6.0, '刀': 4.0, '両刃剣': 5.0, '曲剣': 3.5, 
  '重刺剣': 7.0, '刺剣': 2.5, '特大剣': 10.0, '斧': 4.5, '大斧': 8.0, '槌': 5.0, 
  '大槌': 9.0, 'フレイル': 4.0, '槍': 4.0, '大槍': 7.0, '斧槍': 6.0, '鎌': 3.5, 
  '鞭': 2.0, '爪': 1.0, '拳': 1.5, '弓': 2.0, '大弓': 4.0, 'クロスボウ': 3.0, 
  '松明': 1.0, '杖': 2.0, '聖印': 1.5, '小盾': 2.0, '中盾': 4.0, '大盾': 8.0, '特大武器': 12.0
};

// レアリティ正規化（改善版）
function normalizeRarity(rarityString) {
  if (!rarityString) {
    console.warn('Empty rarity string, defaulting to コモン');
    return 'コモン';
  }

  // 括弧と色文字を除去、小文字に変換
  const cleaned = rarityString
    .replace(/[（）()]/g, '')
    .replace(/[白緑青紫黄]/g, '')
    .trim()
    .toLowerCase();
  
  // 日本語レアリティマッピング
  const japaneseMapping = {
    'コモン': 'コモン',
    'こもん': 'コモン',
    'アンコモン': 'アンコモン',
    'あんこもん': 'アンコモン',
    'レア': 'レア',
    'れあ': 'レア',
    'レジェンド': 'レジェンド',
    'れじぇんど': 'レジェンド',
    'レジェンダリー': 'レジェンド',
    'ユニーク': 'レジェンド', // ユニークはレジェンド扱い
    'ゆにーく': 'レジェンド'
  };

  // 英語レアリティマッピング
  const englishMapping = {
    'common': 'コモン',
    'uncommon': 'アンコモン',
    'rare': 'レア',
    'legendary': 'レジェンド',
    'legend': 'レジェンド',
    'unique': 'レジェンド', // ユニークはレジェンド扱い
    'epic': 'レア', // Epic は レア扱い
    'mythic': 'レジェンド' // Mythic は レジェンド扱い
  };

  // 略語マッピング
  const abbreviationMapping = {
    'c': 'コモン',
    'u': 'アンコモン', 
    'r': 'レア',
    'l': 'レジェンド',
    'lg': 'レジェンド'
  };

  // 数値レベルマッピング（1-4スケール）
  const numericMapping = {
    '1': 'コモン',
    '2': 'アンコモン',
    '3': 'レア',
    '4': 'レジェンド'
  };

  // 順次マッピングをチェック
  if (japaneseMapping[cleaned]) {
    return japaneseMapping[cleaned];
  }
  
  if (englishMapping[cleaned]) {
    return englishMapping[cleaned];
  }

  if (abbreviationMapping[cleaned]) {
    return abbreviationMapping[cleaned];
  }

  if (numericMapping[cleaned]) {
    return numericMapping[cleaned];
  }

  // 部分マッチング（柔軟性のため）
  const originalCleaned = rarityString.replace(/[（）()]/g, '').replace(/[白緑青紫黄]/g, '').trim();
  
  if (originalCleaned.includes('コモン') || originalCleaned.includes('Common')) return 'コモン';
  if (originalCleaned.includes('アンコモン') || originalCleaned.includes('Uncommon')) return 'アンコモン';
  if (originalCleaned.includes('レア') || originalCleaned.includes('Rare')) return 'レア';
  if (originalCleaned.includes('レジェンド') || originalCleaned.includes('Legendary') || originalCleaned.includes('ユニーク') || originalCleaned.includes('Unique')) return 'レジェンド';

  // デバッグ情報付きで警告
  console.warn(`Unknown rarity format: "${rarityString}" (cleaned: "${cleaned}"), defaulting to コモン`);
  return 'コモン';
}

// 能力補正パース
function parseScaling(scalingString) {
  const defaultScaling = {
    strength: '-',
    dexterity: '-',
    intelligence: '-',
    faith: '-',
    arcane: '-'
  };

  if (!scalingString) return defaultScaling;

  const scalingMap = {
    '筋力': 'strength',
    '技量': 'dexterity', 
    '知力': 'intelligence',
    '信仰': 'faith',
    '神秘': 'arcane'
  };

  for (const [japanese, english] of Object.entries(scalingMap)) {
    const regex = new RegExp(`${japanese}([SABCDE-])`, 'g');
    const match = regex.exec(scalingString);
    if (match) {
      defaultScaling[english] = match[1];
    }
  }

  return defaultScaling;
}

// 攻撃力パース（複合属性対応）
function parseAttackPower(attackString) {
  const defaultAttack = {
    physical: 0,
    magic: 0,
    fire: 0,
    lightning: 0,
    holy: 0,
    total: 0
  };

  if (!attackString) return defaultAttack;

  // 単純な数値の場合
  const simpleMatch = attackString.match(/^(\d+)$/);
  if (simpleMatch) {
    const value = parseInt(simpleMatch[1]);
    return {
      ...defaultAttack,
      physical: value,
      total: value
    };
  }

  // 複合攻撃力の場合
  const physicalMatch = attackString.match(/(\d+)（物理）/);
  const magicMatch = attackString.match(/(\d+)（魔力）/);
  const fireMatch = attackString.match(/(\d+)（炎）/);
  const lightningMatch = attackString.match(/(\d+)（雷）/);
  const holyMatch = attackString.match(/(\d+)（聖）/);

  const result = { ...defaultAttack };

  if (physicalMatch) result.physical = parseInt(physicalMatch[1]);
  if (magicMatch) result.magic = parseInt(magicMatch[1]);
  if (fireMatch) result.fire = parseInt(fireMatch[1]);
  if (lightningMatch) result.lightning = parseInt(lightningMatch[1]);
  if (holyMatch) result.holy = parseInt(holyMatch[1]);

  result.total = result.physical + result.magic + result.fire + result.lightning + result.holy;

  return result;
}

// 状態異常パース
function parseStatusEffects(effectString) {
  if (!effectString || effectString === 'なし') return [];

  const effects = [];
  
  // 出血効果
  const bleedMatch = effectString.match(/出血[^0-9]*(\d+)/);
  if (bleedMatch) {
    effects.push({ type: '出血', buildup: parseInt(bleedMatch[1]) });
  }

  // 朱い腐敗効果
  const rotMatch = effectString.match(/朱い腐敗[^0-9]*(\d+)/);
  if (rotMatch) {
    effects.push({ type: '腐敗', buildup: parseInt(rotMatch[1]) });
  }

  // 毒効果
  const poisonMatch = effectString.match(/毒[^0-9]*(\d+)/);
  if (poisonMatch) {
    effects.push({ type: '毒', buildup: parseInt(poisonMatch[1]) });
  }

  // 凍傷効果
  const frostMatch = effectString.match(/凍傷[^0-9]*(\d+)/);
  if (frostMatch) {
    effects.push({ type: '凍傷', buildup: parseInt(frostMatch[1]) });
  }

  // 睡眠効果
  const sleepMatch = effectString.match(/睡眠[^0-9]*(\d+)/);
  if (sleepMatch) {
    effects.push({ type: '睡眠', buildup: parseInt(sleepMatch[1]) });
  }

  // 狂気効果
  const madnessMatch = effectString.match(/狂気[^0-9]*(\d+)/);
  if (madnessMatch) {
    effects.push({ type: '狂気', buildup: parseInt(madnessMatch[1]) });
  }

  return effects;
}

// 特殊効果から属性攻撃力を抽出
function parseSpecialElementalAttack(effectString, weaponName) {
  if (!effectString) return {};
  
  const result = {};
  
  // 聖属性攻撃力
  const holyMatch = effectString.match(/聖属性攻撃力(\d+)/);
  if (holyMatch) {
    result.holy = parseInt(holyMatch[1]);
  }
  
  // 魔力属性攻撃力
  const magicMatch = effectString.match(/魔力属性攻撃力(\d+)/);
  if (magicMatch) {
    result.magic = parseInt(magicMatch[1]);
  }
  
  // 炎属性攻撃力
  const fireMatch = effectString.match(/炎属性攻撃力(\d+)/);
  if (fireMatch) {
    result.fire = parseInt(fireMatch[1]);
  }
  
  return result;
}

// Markdownから武器データを抽出
function parseWeaponsFromMarkdown(content) {
  const weapons = [];
  
  // 武器セクションを抽出（#### で始まる行から次の #### または ### まで）
  const weaponSections = content.split(/^#### /m).slice(1);
  
  for (const section of weaponSections) {
    const lines = section.trim().split('\n');
    const name = lines[0].trim();
    
    const weaponData = { name };
    
    for (const line of lines) {
      const trimmedLine = line.trim();
      
      if (trimmedLine.startsWith('- **攻撃力**:')) {
        weaponData.attackPower = trimmedLine.replace('- **攻撃力**:', '').trim();
      } else if (trimmedLine.startsWith('- **レアリティ**:')) {
        weaponData.rarity = trimmedLine.replace('- **レアリティ**:', '').trim();
      } else if (trimmedLine.startsWith('- **能力補正**:')) {
        weaponData.scaling = trimmedLine.replace('- **能力補正**:', '').trim();
      } else if (trimmedLine.startsWith('- **特殊戦技**:')) {
        weaponData.skill = trimmedLine.replace('- **特殊戦技**:', '').trim();
      } else if (trimmedLine.startsWith('- **特殊効果**:')) {
        weaponData.statusEffect = trimmedLine.replace('- **特殊効果**:', '').trim();
      } else if (trimmedLine.startsWith('- **入手方法**:')) {
        weaponData.obtainMethod = trimmedLine.replace('- **入手方法**:', '').trim();
      }
    }
    
    weapons.push(weaponData);
  }
  
  return weapons;
}

// 武器オブジェクト生成（改善版）
function createWeaponObject(weaponData, weaponType) {
  // データの安全性チェック
  if (!weaponData || !weaponData.name) {
    console.warn('Invalid weapon data:', weaponData);
    return null;
  }

  const attackPower = parseAttackPower(weaponData.attackPower);
  const scaling = parseScaling(weaponData.scaling);
  const statusEffects = parseStatusEffects(weaponData.statusEffect || '');
  
  // 特殊効果から属性攻撃力を抽出
  const specialAttack = parseSpecialElementalAttack(weaponData.statusEffect, weaponData.name);
  if (specialAttack.holy) {
    attackPower.holy = specialAttack.holy;
    attackPower.total = attackPower.physical + attackPower.magic + attackPower.fire + attackPower.lightning + attackPower.holy;
  }
  if (specialAttack.magic) {
    attackPower.magic = specialAttack.magic;
    attackPower.total = attackPower.physical + attackPower.magic + attackPower.fire + attackPower.lightning + attackPower.holy;
  }
  if (specialAttack.fire) {
    attackPower.fire = specialAttack.fire;
    attackPower.total = attackPower.physical + attackPower.magic + attackPower.fire + attackPower.lightning + attackPower.holy;
  }
  
  // 安全なIDを生成
  const id = weaponData.name
    .toString()
    .replace(/[の・]/g, '_')
    .replace(/[^a-zA-Z0-9_\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/g, '')
    .toLowerCase();
  
  // 武器種別に基づく基本設定
  const characterCompatibility = CHARACTER_COMPATIBILITY_TEMPLATES[weaponType] || CHARACTER_COMPATIBILITY_TEMPLATES['直剣'];
  const baseRequirements = REQUIREMENTS_TEMPLATES[weaponType] || REQUIREMENTS_TEMPLATES['直剣'];
  const weight = WEIGHT_TEMPLATES[weaponType] || 3.0;
  
  // 能力補正に基づく必要能力値調整
  const requirements = { ...baseRequirements };
  if (scaling.intelligence !== '-') requirements.intelligence = Math.max(requirements.intelligence, 8);
  if (scaling.faith !== '-') requirements.faith = Math.max(requirements.faith, 8);
  if (scaling.arcane !== '-') requirements.arcane = Math.max(requirements.arcane, 8);

  const weapon = {
    id,
    name: weaponData.name,
    type: weaponType,
    rarity: normalizeRarity(weaponData.rarity),
    attackPower,
    scaling,
    requirements,
    description: `${weaponType}系の武器。${weaponData.name}の特性を持つ。`,
    obtainMethod: weaponData.obtainMethod || 'フィールド獲得',
    weight,
    characterCompatibility
  };

  // 状態異常効果がある場合のみ追加
  if (statusEffects.length > 0) {
    weapon.statusEffects = statusEffects;
  }

  // 戦技がある場合のみ追加（標準戦技以外）
  if (weaponData.skill && weaponData.skill !== '標準戦技') {
    weapon.skill = {
      name: weaponData.skill,
      fpCost: 10,
      description: `${weaponData.skill}の効果`
    };
  }

  return weapon;
}

// 全武器ファイルを統合
function integrateAllWeapons(weaponTypes) {
  console.log('🚀 全武器データ統合開始...\n');
  
  const allWeapons = [];
  const stats = {
    totalFiles: weaponTypes.length,
    totalWeapons: 0,
    byType: {},
    byRarity: { コモン: 0, アンコモン: 0, レア: 0, レジェンド: 0 },
    specialEffects: [],
    compositeAttacks: []
  };

  try {
    for (const weaponType of weaponTypes) {
      console.log(`📂 ${weaponType}.md 処理中...`);
      
      try {
        const filePath = path.join(process.cwd(), 'doc', 'weapons', `${weaponType}.md`);
        const content = fs.readFileSync(filePath, 'utf-8');
        
        const parsedWeapons = parseWeaponsFromMarkdown(content);
        console.log(`   発見された武器数: ${parsedWeapons.length}`);
        
        for (const weaponData of parsedWeapons) {
          const weapon = createWeaponObject(weaponData, WEAPON_TYPE_MAPPING[weaponType]);
          
          // 無効な武器オブジェクトをスキップ
          if (!weapon) {
            console.warn(`   ⚠️ Skipped invalid weapon: ${weaponData?.name || 'unknown'}`);
            continue;
          }
          
          allWeapons.push(weapon);
          
          // 統計更新
          stats.byType[weaponType] = (stats.byType[weaponType] || 0) + 1;
          stats.byRarity[weapon.rarity]++;
          
          // 特殊効果の記録
          if (weapon.statusEffects && weapon.statusEffects.length > 0) {
            weapon.statusEffects.forEach(effect => {
              stats.specialEffects.push(`${weapon.name}: ${effect.type} ${effect.buildup}`);
            });
          }
          
          // 複合攻撃力の記録
          if (weapon.attackPower.magic > 0 || weapon.attackPower.fire > 0 || weapon.attackPower.holy > 0) {
            const elements = [];
            if (weapon.attackPower.physical > 0) elements.push(`物理${weapon.attackPower.physical}`);
            if (weapon.attackPower.magic > 0) elements.push(`魔力${weapon.attackPower.magic}`);
            if (weapon.attackPower.fire > 0) elements.push(`炎${weapon.attackPower.fire}`);
            if (weapon.attackPower.holy > 0) elements.push(`聖${weapon.attackPower.holy}`);
            stats.compositeAttacks.push(`${weapon.name}: ${elements.join(' + ')} = ${weapon.attackPower.total}`);
          }
        }
        
        // 実際に追加された武器数をカウント（無効な武器は除外）
        const validWeaponsCount = parsedWeapons.filter(data => data && data.name).length;
        stats.totalWeapons += validWeaponsCount;
        console.log(`   ✅ 完了\n`);
        
      } catch (error) {
        console.warn(`   ⚠️ ${weaponType}.md の読み込みに失敗: ${error.message}\n`);
      }
    }

    return { weapons: allWeapons, stats };

  } catch (error) {
    console.error('❌ 統合エラー:', error);
    return { weapons: [], stats };
  }
}

// TypeScriptファイル生成
function generateWeaponsFile(weapons) {
  const template = `/**
 * 武器データベース
 * エルデンリングナイトレインの武器データ定義
 * 
 * 🔄 doc/weapons下の全Markdownファイルから統合された完全データベース
 */

import type { Weapon, WeaponType } from "~/types";

/**
 * 完全武器データベース
 * doc/weapons下の全ファイルから統合された全武器データ
 */
export const WEAPONS: Weapon[] = ${JSON.stringify(weapons, null, 2)};

/**
 * 武器種別でフィルタリングされた武器を取得
 */
export function getWeaponsByType(type: WeaponType): Weapon[] {
  return WEAPONS.filter((weapon) => weapon.type === type);
}

/**
 * キャラクター名による推奨武器を取得（推奨度3以上）
 */
export function getRecommendedWeaponsForCharacter(
  characterName: string,
  minCompatibility: number = 3
): Weapon[] {
  return WEAPONS.filter((weapon) => {
    const compatibility =
      weapon.characterCompatibility[
        characterName as keyof typeof weapon.characterCompatibility
      ];
    return compatibility >= minCompatibility;
  }).sort((a, b) => {
    const aCompat =
      a.characterCompatibility[
        characterName as keyof typeof a.characterCompatibility
      ];
    const bCompat =
      b.characterCompatibility[
        characterName as keyof typeof b.characterCompatibility
      ];
    return bCompat - aCompat;
  });
}

/**
 * 武器IDから武器データを取得
 */
export function getWeaponById(id: string): Weapon | undefined {
  return WEAPONS.find((weapon) => weapon.id === id);
}

/**
 * 武器名から武器データを取得
 */
export function getWeaponByName(name: string): Weapon | undefined {
  return WEAPONS.find((weapon) => weapon.name === name);
}

/**
 * 全武器IDのリストを取得
 */
export function getAllWeaponIds(): string[] {
  return WEAPONS.map((weapon) => weapon.id);
}

/**
 * 全武器名のリストを取得
 */
export function getAllWeaponNames(): string[] {
  return WEAPONS.map((weapon) => weapon.name);
}

/**
 * 武器カテゴリ別のグループ分け
 */
export const WEAPON_GROUPS = {
  melee: WEAPONS.filter((w) => !["弓", "大弓", "クロスボウ", "杖", "聖印"].includes(w.type)),
  ranged: WEAPONS.filter((w) => ["弓", "大弓", "クロスボウ"].includes(w.type)),
  catalyst: WEAPONS.filter((w) => ["杖", "聖印"].includes(w.type)),
  shield: WEAPONS.filter((w) => ["小盾", "中盾", "大盾"].includes(w.type)),
};

/**
 * レアリティ別の武器数
 */
export const WEAPON_COUNT_BY_RARITY = {
  コモン: WEAPONS.filter((w) => w.rarity === "コモン").length,
  アンコモン: WEAPONS.filter((w) => w.rarity === "アンコモン").length,
  レア: WEAPONS.filter((w) => w.rarity === "レア").length,
  レジェンド: WEAPONS.filter((w) => w.rarity === "レジェンド").length,
};

/**
 * 武器種別一覧
 */
export const ALL_WEAPON_TYPES = [
  "短剣", "直剣", "大剣", "刀", "両刃剣", "曲剣", "重刺剣", "刺剣", "特大剣",
  "斧", "大斧", "槌", "大槌", "フレイル", "槍", "大槍", "斧槍", "鎌", "鞭", "爪", "拳",
  "弓", "大弓", "クロスボウ", "松明", "杖", "聖印", "小盾", "中盾", "大盾", "特大武器"
] as const;

/**
 * 武器種別ごとの武器数
 */
export const WEAPON_COUNT_BY_TYPE = Object.fromEntries(
  ALL_WEAPON_TYPES.map(type => [type, WEAPONS.filter(w => w.type === type).length])
);
`;

  return template;
}

// メイン実行関数
function executeUniversalIntegration() {
  console.log('🌟 ELDEN RING Nightreign 全武器データ統合開始\n');
  
  // 統合する武器種を定義（優先順位順）
  const weaponTypesToIntegrate = [
    // Tier 1: メイン武器（8種）
    '直剣', '大剣', '刀', '両刃剣', '曲剣', '重刺剣', '刺剣', '特大剣',
    // Tier 2: 専用武器（12種）  
    '斧', '大斧', '槌', '大槌', 'フレイル', '槍', '大槍', '斧槍', '鎌', '鞭', '爪', '拳',
    // Tier 3: 遠距離・魔術（6種）
    '弓', '大弓', 'クロスボウ', '松明', '杖', '聖印',
    // Tier 4: 防具・特殊（4種）
    '小盾', '中盾', '大盾', '特大武器',
    // 既存: 短剣（統合済み）
    '短剣'
  ];

  try {
    console.log(`📋 統合対象: ${weaponTypesToIntegrate.length}種類の武器種\n`);
    
    // 全武器統合実行
    const { weapons, stats } = integrateAllWeapons(weaponTypesToIntegrate);
    
    if (weapons.length === 0) {
      console.error('❌ 武器データが取得できませんでした');
      return;
    }

    // data/weapons.ts更新
    console.log('📝 data/weapons.ts ファイル生成中...');
    const newContent = generateWeaponsFile(weapons);
    const weaponsPath = path.join(process.cwd(), 'data', 'weapons.ts');
    fs.writeFileSync(weaponsPath, newContent, 'utf-8');
    console.log('   ✅ ファイル更新完了\n');

    // 統計レポート
    console.log('📊 統合結果詳細レポート:');
    console.log(`   総武器種: ${stats.totalFiles}種類`);
    console.log(`   総武器数: ${stats.totalWeapons}個\n`);
    
    console.log('🗂️ 武器種別統計:');
    Object.entries(stats.byType).forEach(([type, count]) => {
      console.log(`   ${type}: ${count}個`);
    });
    console.log('');
    
    console.log('🎨 レアリティ別統計:');
    Object.entries(stats.byRarity).forEach(([rarity, count]) => {
      console.log(`   ${rarity}: ${count}個`);
    });
    console.log('');

    if (stats.specialEffects.length > 0) {
      console.log('🔍 特殊効果を持つ武器:');
      stats.specialEffects.slice(0, 20).forEach(effect => {
        console.log(`   ${effect}`);
      });
      if (stats.specialEffects.length > 20) {
        console.log(`   ...他${stats.specialEffects.length - 20}個`);
      }
      console.log('');
    }

    if (stats.compositeAttacks.length > 0) {
      console.log('⚡ 複合攻撃力を持つ武器:');
      stats.compositeAttacks.slice(0, 15).forEach(attack => {
        console.log(`   ${attack}`);
      });
      if (stats.compositeAttacks.length > 15) {
        console.log(`   ...他${stats.compositeAttacks.length - 15}個`);
      }
      console.log('');
    }

    console.log('🎉 全武器データ統合完了！');
    console.log(`📈 合計${stats.totalWeapons}個の武器が利用可能になりました。`);

  } catch (error) {
    console.error('❌ 統合エラー:', error);
  }
}

// 実行
executeUniversalIntegration();