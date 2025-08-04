/**
 * 武器データパーサー
 * doc/weaponsのMarkdownデータを既存TypeScript形式に変換
 */

import type { 
  Weapon, 
  WeaponType, 
  WeaponRarity, 
  StatScaling, 
  WeaponAttackPower,
  WeaponScaling,
  WeaponRequirements,
  WeaponStatusEffect,
  WeaponSkill
} from "~/types/weapon";

/**
 * Markdownから武器データを抽出するインターフェース
 */
interface ParsedWeaponData {
  name: string;
  attackPower: string;
  rarity: string;
  scaling: string;
  skill?: string;
  statusEffect?: string;
  obtainMethod?: string;
  description?: string;
  specialNote?: string;
}

/**
 * レアリティ表記の正規化
 */
function normalizeRarity(rarityString: string): WeaponRarity {
  const cleaned = rarityString.replace(/[（）()]/g, '').replace(/[白緑青紫黄]/g, '').trim();
  
  switch (cleaned) {
    case 'コモン':
      return 'コモン';
    case 'アンコモン':
      return 'アンコモン';
    case 'レア':
      return 'レア';
    case 'レジェンド':
      return 'レジェンド';
    default:
      console.warn(`Unknown rarity: ${rarityString}, defaulting to コモン`);
      return 'コモン';
  }
}

/**
 * 能力補正文字列をパース
 * 例: "筋力E、技量S" → { strength: "E", dexterity: "S", ... }
 */
function parseScaling(scalingString: string): WeaponScaling {
  const defaultScaling: WeaponScaling = {
    strength: '-',
    dexterity: '-',
    intelligence: '-',
    faith: '-',
    arcane: '-'
  };

  if (!scalingString) return defaultScaling;

  // 文字列から能力値と補正を抽出
  const scalingMap: Record<string, keyof WeaponScaling> = {
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
      defaultScaling[english] = match[1] as StatScaling;
    }
  }

  return defaultScaling;
}

/**
 * 攻撃力文字列を解析
 * 例: "60（物理）+ 42（魔力）= 102" → { physical: 60, magic: 42, total: 102 }
 * 例: "62" → { physical: 62, total: 62 }
 */
function parseAttackPower(attackString: string): WeaponAttackPower {
  const defaultAttack: WeaponAttackPower = {
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
  const totalMatch = attackString.match(/=\s*(\d+)/);

  const result = { ...defaultAttack };

  if (physicalMatch) result.physical = parseInt(physicalMatch[1]);
  if (magicMatch) result.magic = parseInt(magicMatch[1]);
  if (fireMatch) result.fire = parseInt(fireMatch[1]);
  if (lightningMatch) result.lightning = parseInt(lightningMatch[1]);
  if (holyMatch) result.holy = parseInt(holyMatch[1]);

  // 合計値の計算
  if (totalMatch) {
    result.total = parseInt(totalMatch[1]);
  } else {
    result.total = result.physical + result.magic + result.fire + result.lightning + result.holy;
  }

  return result;
}

/**
 * 状態異常効果を解析
 * 例: "出血状態異常蓄積30" → [{ type: "出血", buildup: 30 }]
 */
function parseStatusEffects(effectString: string): WeaponStatusEffect[] {
  if (!effectString || effectString === 'なし') return [];

  const effects: WeaponStatusEffect[] = [];
  
  // 出血効果
  const bleedMatch = effectString.match(/出血[^0-9]*(\d+)/);
  if (bleedMatch) {
    effects.push({ type: '出血', buildup: parseInt(bleedMatch[1]) });
  }

  // 毒効果
  const poisonMatch = effectString.match(/毒[^0-9]*(\d+)/);
  if (poisonMatch) {
    effects.push({ type: '毒', buildup: parseInt(poisonMatch[1]) });
  }

  // 朱い腐敗効果
  const rotMatch = effectString.match(/朱い腐敗[^0-9]*(\d+)/);
  if (rotMatch) {
    effects.push({ type: '腐敗', buildup: parseInt(rotMatch[1]) });
  }

  // 冷気効果
  const frostMatch = effectString.match(/冷気[^0-9]*(\d+)/);
  if (frostMatch) {
    effects.push({ type: '冷気', buildup: parseInt(frostMatch[1]) });
  }

  return effects;
}

/**
 * 戦技情報を解析
 */
function parseWeaponSkill(skillString: string): WeaponSkill | undefined {
  if (!skillString || skillString === '標準戦技' || skillString === 'なし') {
    return undefined;
  }

  // 基本的な戦技情報のみ
  return {
    name: skillString,
    fpCost: 10, // デフォルト値
    description: `${skillString}の効果` // デフォルト説明
  };
}

/**
 * キャラクター適性を推定
 */
function estimateCharacterCompatibility(weaponType: WeaponType, weaponName: string): Record<string, number> {
  const baseCompatibility = {
    追跡者: 2,
    守護者: 2,
    鉄の目: 2,
    レディ: 2,
    無頼漢: 2,
    復讐者: 2,
    隠者: 2,
    執行者: 2
  };

  // 武器種別による適性調整
  switch (weaponType) {
    case '短剣':
      baseCompatibility.レディ = 5;
      baseCompatibility.執行者 = 4;
      break;
    case '大剣':
      baseCompatibility.追跡者 = 5;
      baseCompatibility.無頼漢 = 4;
      break;
    case '弓':
    case '大弓':
      baseCompatibility.鉄の目 = 5;
      break;
    case '刀':
      baseCompatibility.執行者 = 5;
      break;
    case '杖':
      baseCompatibility.隠者 = 5;
      baseCompatibility.レディ = 4;
      break;
    case '聖印':
      baseCompatibility.復讐者 = 5;
      baseCompatibility.隠者 = 4;
      break;
    case '大斧':
    case '特大武器':
      baseCompatibility.無頼漢 = 5;
      baseCompatibility.追跡者 = 3;
      break;
    case '斧槍':
      baseCompatibility.守護者 = 5;
      break;
  }

  // 武器名による特殊調整
  if (weaponName.includes('追跡者')) baseCompatibility.追跡者 = 5;
  if (weaponName.includes('守護者')) baseCompatibility.守護者 = 5;
  if (weaponName.includes('鉄の目')) baseCompatibility.鉄の目 = 5;
  if (weaponName.includes('レディ')) baseCompatibility.レディ = 5;
  if (weaponName.includes('無頭漢')) baseCompatibility.無頼漢 = 5;
  if (weaponName.includes('復讐者')) baseCompatibility.復讐者 = 5;
  if (weaponName.includes('隠者')) baseCompatibility.隠者 = 5;
  if (weaponName.includes('執行者')) baseCompatibility.執行者 = 5;

  return baseCompatibility;
}

/**
 * 必要能力値を推定
 */
function estimateRequirements(weaponType: WeaponType, scaling: WeaponScaling): WeaponRequirements {
  const baseRequirements: WeaponRequirements = {
    strength: 8,
    dexterity: 8,
    intelligence: 0,
    faith: 0,
    arcane: 0
  };

  // 武器種別による調整
  switch (weaponType) {
    case '短剣':
      baseRequirements.strength = 5;
      baseRequirements.dexterity = 10;
      break;
    case '大剣':
    case '特大剣':
      baseRequirements.strength = 16;
      baseRequirements.dexterity = 10;
      break;
    case '弓':
      baseRequirements.strength = 8;
      baseRequirements.dexterity = 14;
      break;
    case '杖':
      baseRequirements.strength = 6;
      baseRequirements.dexterity = 6;
      baseRequirements.intelligence = 12;
      break;
    case '聖印':
      baseRequirements.strength = 4;
      baseRequirements.dexterity = 4;
      baseRequirements.faith = 10;
      break;
  }

  // 補正値による調整
  if (scaling.intelligence !== '-') baseRequirements.intelligence = Math.max(8, baseRequirements.intelligence);
  if (scaling.faith !== '-') baseRequirements.faith = Math.max(8, baseRequirements.faith);
  if (scaling.arcane !== '-') baseRequirements.arcane = Math.max(8, baseRequirements.arcane);

  return baseRequirements;
}

/**
 * Markdownコンテンツから単一武器のデータを抽出
 */
function parseWeaponFromMarkdown(content: string, weaponType: WeaponType): ParsedWeaponData[] {
  const weapons: ParsedWeaponData[] = [];
  
  // 武器セクションを抽出（### で始まる行から次の ### まで）
  const weaponSections = content.split(/^### /m).slice(1);
  
  for (const section of weaponSections) {
    const lines = section.trim().split('\n');
    const name = lines[0].trim();
    
    const weaponData: ParsedWeaponData = { name, attackPower: '', rarity: '', scaling: '' };
    
    for (const line of lines) {
      const trimmedLine = line.trim();
      
      if (trimmedLine.startsWith('- **攻撃力**:')) {
        weaponData.attackPower = trimmedLine.replace('- **攻撃力**:', '').trim();
      } else if (trimmedLine.startsWith('- **レアリティ**:')) {
        weaponData.rarity = trimmedLine.replace('- **レアリティ**:', '').trim();
      } else if (trimmedLine.startsWith('- **能力補正**:')) {
        weaponData.scaling = trimmedLine.replace('- **能力補正**:', '').trim();
      } else if (trimmedLine.startsWith('- **武器スキル**:') || trimmedLine.startsWith('- **特殊戦技**:')) {
        weaponData.skill = trimmedLine.replace(/- \*\*(武器スキル|特殊戦技)\*\*:/, '').trim();
      } else if (trimmedLine.startsWith('- **特殊効果**:')) {
        weaponData.statusEffect = trimmedLine.replace('- **特殊効果**:', '').trim();
      } else if (trimmedLine.startsWith('- **入手方法**:')) {
        weaponData.obtainMethod = trimmedLine.replace('- **入手方法**:', '').trim();
      } else if (trimmedLine.startsWith('- **備考**:')) {
        weaponData.specialNote = trimmedLine.replace('- **備考**:', '').trim();
      }
    }
    
    weapons.push(weaponData);
  }
  
  return weapons;
}

/**
 * 重量を推定
 */
function estimateWeight(weaponType: WeaponType): number {
  switch (weaponType) {
    case '短剣': return 1.5;
    case '直剣': return 4.0;
    case '大剣': return 9.0;
    case '特大剣': return 15.0;
    case '刺剣': return 3.0;
    case '曲剣': return 3.5;
    case '刀': return 5.5;
    case '斧': return 6.5;
    case '大斧': return 12.0;
    case '槌': return 7.0;
    case '大槌': return 14.0;
    case '特大武器': return 18.0;
    case '槍': return 5.0;
    case '大槍': return 8.0;
    case '斧槍': return 8.5;
    case '鎌': return 7.5;
    case '鞭': return 2.5;
    case '拳': return 2.5;
    case '爪': return 2.0;
    case '弓': return 3.5;
    case '大弓': return 5.5;
    case '杖': return 2.0;
    case '聖印': return 1.0;
    case 'フレイル': return 4.5;
    default: return 5.0;
  }
}

/**
 * メイン関数: Markdownファイルから武器データ配列を生成
 */
export function parseWeaponsFromMarkdown(markdownContent: string, weaponType: WeaponType): Weapon[] {
  const parsedWeapons = parseWeaponFromMarkdown(markdownContent, weaponType);
  const weapons: Weapon[] = [];
  
  for (const parsedWeapon of parsedWeapons) {
    try {
      const attackPower = parseAttackPower(parsedWeapon.attackPower);
      const scaling = parseScaling(parsedWeapon.scaling);
      const statusEffects = parseStatusEffects(parsedWeapon.statusEffect || '');
      const skill = parseWeaponSkill(parsedWeapon.skill || '');
      const requirements = estimateRequirements(weaponType, scaling);
      const weight = estimateWeight(weaponType);
      const characterCompatibility = estimateCharacterCompatibility(weaponType, parsedWeapon.name);
      
      // IDを生成（武器名から）
      const id = parsedWeapon.name
        .replace(/[の・]/g, '_')
        .replace(/[^a-zA-Z0-9_\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/g, '')
        .toLowerCase();
      
      const weapon: Weapon = {
        id,
        name: parsedWeapon.name,
        type: weaponType,
        rarity: normalizeRarity(parsedWeapon.rarity),
        attackPower,
        scaling,
        requirements,
        statusEffects: statusEffects.length > 0 ? statusEffects : undefined,
        skill,
        description: parsedWeapon.specialNote || `${weaponType}系の武器。${parsedWeapon.name}の特性を持つ。`,
        obtainMethod: parsedWeapon.obtainMethod || 'フィールド獲得',
        weight,
        characterCompatibility
      };
      
      weapons.push(weapon);
    } catch (error) {
      console.warn(`Failed to parse weapon: ${parsedWeapon.name}`, error);
    }
  }
  
  return weapons;
}

/**
 * 武器種別名から WeaponType への変換
 */
export function getWeaponTypeFromFileName(fileName: string): WeaponType | null {
  const typeMap: Record<string, WeaponType> = {
    '短剣': '短剣',
    '直剣': '直剣',
    '大剣': '大剣',
    '特大剣': '特大剣',
    '刺剣': '刺剣',
    '重刺剣': '重刺剣',
    '曲剣': '曲剣',
    '大曲剣': '大曲剣',
    '刀': '刀',
    '両刃剣': '両刃剣',
    '斧': '斧',
    '大斧': '大斧',
    '槌': '槌',
    'フレイル': 'フレイル',
    '大槌': '大槌',
    '特大武器': '特大武器',
    '槍': '槍',
    '大槍': '大槍',
    '斧槍': '斧槍',
    '鎌': '鎌',
    '鞭': '鞭',
    '拳': '拳',
    '爪': '爪',
    '弓': '弓',
    '大弓': '大弓',
    'クロスボウ': '弓', // クロスボウは弓として扱う
    '杖': '杖',
    '聖印': '聖印'
  };

  const baseName = fileName.replace('.md', '');
  return typeMap[baseName] || null;
}