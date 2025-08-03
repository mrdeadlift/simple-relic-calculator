/**
 * 実際の短剣.mdファイルからの正式統合
 * 手動サンプルではなく、実際のMarkdownデータを使用
 */

const fs = require('fs');
const path = require('path');

// レアリティ正規化
function normalizeRarity(rarityString) {
  const cleaned = rarityString.replace(/[（）()]/g, '').replace(/[白緑青紫黄]/g, '').trim();
  
  switch (cleaned) {
    case 'コモン': return 'コモン';
    case 'アンコモン': return 'アンコモン';
    case 'レア': return 'レア';
    case 'レジェンド': return 'レジェンド';
    default:
      console.warn(`Unknown rarity: ${rarityString}, defaulting to コモン`);
      return 'コモン';
  }
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

  return effects;
}

// 特殊効果から聖属性攻撃力を抽出
function parseSpecialHolyAttack(effectString) {
  if (!effectString) return 0;
  
  const holyMatch = effectString.match(/聖属性攻撃力(\d+)/);
  return holyMatch ? parseInt(holyMatch[1]) : 0;
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

// 武器オブジェクト生成
function createWeaponObject(weaponData) {
  const attackPower = parseAttackPower(weaponData.attackPower);
  const scaling = parseScaling(weaponData.scaling);
  const statusEffects = parseStatusEffects(weaponData.statusEffect || '');
  
  // 黒の刃の特殊処理（聖属性攻撃力）
  if (weaponData.name === '黒の刃') {
    const holyAttack = parseSpecialHolyAttack(weaponData.statusEffect);
    if (holyAttack > 0) {
      attackPower.holy = holyAttack;
      attackPower.total = attackPower.physical + attackPower.holy;
    }
  }
  
  // IDを生成
  const id = weaponData.name
    .replace(/[の・]/g, '_')
    .replace(/[^a-zA-Z0-9_\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/g, '')
    .toLowerCase();
  
  // キャラクター適性（短剣のデフォルト）
  const characterCompatibility = {
    追跡者: 2, 守護者: 2, 鉄の目: 2, レディ: 5,
    無頼漢: 2, 復讐者: 2, 隠者: 2, 執行者: 4
  };

  const weapon = {
    id,
    name: weaponData.name,
    type: "短剣",
    rarity: normalizeRarity(weaponData.rarity),
    attackPower,
    scaling,
    requirements: {
      strength: 5,
      dexterity: 10,
      intelligence: scaling.intelligence !== '-' ? 8 : 0,
      faith: scaling.faith !== '-' ? 8 : 0,
      arcane: 0
    },
    description: `短剣系の武器。${weaponData.name}の特性を持つ。`,
    obtainMethod: weaponData.obtainMethod || 'フィールド獲得',
    weight: 1.5,
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

// メイン統合処理
function integrateRealDaggerData() {
  console.log('🚀 実際の短剣.mdからの武器データ統合開始...\n');

  try {
    // 1. 短剣.mdファイル読み込み
    console.log('1. 短剣.mdファイル読み込み...');
    const daggerFilePath = path.join(process.cwd(), 'doc', 'weapons', '短剣.md');
    const daggerContent = fs.readFileSync(daggerFilePath, 'utf-8');
    console.log('   ✅ ファイル読み込み完了\n');

    // 2. Markdownパース
    console.log('2. Markdownデータパース...');
    const parsedWeapons = parseWeaponsFromMarkdown(daggerContent);
    console.log(`   発見された武器数: ${parsedWeapons.length}`);
    
    parsedWeapons.forEach((weapon, index) => {
      console.log(`   ${index + 1}. ${weapon.name} (${weapon.rarity})`);
    });
    console.log('');

    // 3. 武器オブジェクト生成
    console.log('3. 武器オブジェクト生成...');
    const weapons = parsedWeapons.map(createWeaponObject);
    console.log(`   生成された武器オブジェクト数: ${weapons.length}\n`);

    // 4. TypeScriptファイル生成
    console.log('4. data/weapons.ts更新...');
    const template = `/**
 * 武器データベース
 * エルデンリングナイトレインの武器データ定義
 * 
 * 🔄 doc/weapons/短剣.mdから正式統合されたデータ
 */

import type { Weapon, WeaponType } from "~/types";

/**
 * 基本武器データベース
 * doc/weapons/短剣.mdから統合された全短剣データ
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
  melee: WEAPONS.filter((w) => !["弓", "大弓", "杖", "聖印"].includes(w.type)),
  ranged: WEAPONS.filter((w) => ["弓", "大弓"].includes(w.type)),
  catalyst: WEAPONS.filter((w) => ["杖", "聖印"].includes(w.type)),
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
`;

    // 5. ファイル書き込み
    const weaponsPath = path.join(process.cwd(), 'data', 'weapons.ts');
    fs.writeFileSync(weaponsPath, template, 'utf-8');
    console.log('   ✅ ファイル更新完了\n');

    // 6. 結果確認
    console.log('📊 統合結果詳細:');
    console.log(`   総武器数: ${weapons.length}`);
    
    const rarityStats = {};
    weapons.forEach(weapon => {
      rarityStats[weapon.rarity] = (rarityStats[weapon.rarity] || 0) + 1;
    });
    
    console.log('   レアリティ別:');
    Object.entries(rarityStats).forEach(([rarity, count]) => {
      console.log(`     ${rarity}: ${count}個`);
    });

    console.log('\n🔍 特殊効果を持つ武器:');
    weapons.forEach(weapon => {
      if (weapon.statusEffects && weapon.statusEffects.length > 0) {
        weapon.statusEffects.forEach(effect => {
          console.log(`   ${weapon.name}: ${effect.type} ${effect.buildup}`);
        });
      }
    });

    console.log('\n⚡ 複合攻撃力を持つ武器:');
    weapons.forEach(weapon => {
      if (weapon.attackPower.magic > 0 || weapon.attackPower.holy > 0) {
        const elements = [];
        if (weapon.attackPower.physical > 0) elements.push(`物理${weapon.attackPower.physical}`);
        if (weapon.attackPower.magic > 0) elements.push(`魔力${weapon.attackPower.magic}`);
        if (weapon.attackPower.holy > 0) elements.push(`聖${weapon.attackPower.holy}`);
        console.log(`   ${weapon.name}: ${elements.join(' + ')} = ${weapon.attackPower.total}`);
      }
    });

    console.log('\n🎉 実際の短剣.mdデータ統合完了！');

  } catch (error) {
    console.error('❌ 統合エラー:', error);
  }
}

// 実行
integrateRealDaggerData();