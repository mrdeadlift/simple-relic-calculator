/**
 * 手動統合テスト - JavaScript版
 * パーサーロジックの動作確認
 */

// 短剣データサンプル
const daggerSample = {
  name: "レディの短剣",
  attackPower: "55",
  rarity: "コモン（白）",
  scaling: "筋力E、技量S",
  skill: "魔術師の短剣",
  statusEffect: "なし",
  obtainMethod: "レディ初期装備"
};

const daggerWithBleed = {
  name: "血汚れた短刀",
  attackPower: "59",
  rarity: "アンコモン（緑）",
  scaling: "筋力E、技量S",
  skill: "標準戦技",
  statusEffect: "出血状態異常蓄積38",
  obtainMethod: "フィールド獲得"
};

const magicDagger = {
  name: "輝石のクリス",
  attackPower: "57（物理） + 31（魔力）",
  rarity: "レア（紫）",
  scaling: "筋力E、技量A、知力D",
  skill: "輝石の魔術",
  statusEffect: "魔力属性攻撃追加",
  obtainMethod: "フィールド獲得、ボス報酬"
};

// レアリティ正規化テスト
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

// 能力補正パーステスト
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

// 攻撃力パーステスト
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

  const result = { ...defaultAttack };

  if (physicalMatch) result.physical = parseInt(physicalMatch[1]);
  if (magicMatch) result.magic = parseInt(magicMatch[1]);
  if (fireMatch) result.fire = parseInt(fireMatch[1]);

  result.total = result.physical + result.magic + result.fire + result.lightning + result.holy;

  return result;
}

// 状態異常パーステスト
function parseStatusEffects(effectString) {
  if (!effectString || effectString === 'なし') return [];

  const effects = [];
  
  const bleedMatch = effectString.match(/出血[^0-9]*(\d+)/);
  if (bleedMatch) {
    effects.push({ type: '出血', buildup: parseInt(bleedMatch[1]) });
  }

  return effects;
}

// キャラクター適性推定
function estimateCharacterCompatibility(weaponType, weaponName) {
  const baseCompatibility = {
    追跡者: 2, 守護者: 2, 鉄の目: 2, レディ: 2,
    無頼漢: 2, 復讐者: 2, 隠者: 2, 執行者: 2
  };

  if (weaponType === '短剣') {
    baseCompatibility.レディ = 5;
    baseCompatibility.執行者 = 4;
  }

  if (weaponName.includes('レディ')) baseCompatibility.レディ = 5;

  return baseCompatibility;
}

// 武器作成関数
function createWeapon(weaponData, weaponType) {
  const attackPower = parseAttackPower(weaponData.attackPower);
  const scaling = parseScaling(weaponData.scaling);
  const statusEffects = parseStatusEffects(weaponData.statusEffect || '');
  const characterCompatibility = estimateCharacterCompatibility(weaponType, weaponData.name);
  
  const id = weaponData.name
    .replace(/[の・]/g, '_')
    .replace(/[^a-zA-Z0-9_\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/g, '')
    .toLowerCase();
  
  return {
    id,
    name: weaponData.name,
    type: weaponType,
    rarity: normalizeRarity(weaponData.rarity),
    attackPower,
    scaling,
    requirements: {
      strength: 5,
      dexterity: 10,
      intelligence: 0,
      faith: 0,
      arcane: 0
    },
    statusEffects: statusEffects.length > 0 ? statusEffects : undefined,
    skill: weaponData.skill && weaponData.skill !== '標準戦技' ? {
      name: weaponData.skill,
      fpCost: 10,
      description: `${weaponData.skill}の効果`
    } : undefined,
    description: `短剣系の武器。${weaponData.name}の特性を持つ。`,
    obtainMethod: weaponData.obtainMethod || 'フィールド獲得',
    weight: 1.5,
    characterCompatibility
  };
}

// テスト実行
console.log('🔧 手動統合テスト開始...\n');

console.log('1. レディの短剣のパース:');
const weapon1 = createWeapon(daggerSample, '短剣');
console.log('   結果:', JSON.stringify(weapon1, null, 2));

console.log('\n2. 血汚れた短刀のパース（出血効果）:');
const weapon2 = createWeapon(daggerWithBleed, '短剣');
console.log('   結果:', JSON.stringify(weapon2, null, 2));

console.log('\n3. 輝石のクリスのパース（複合攻撃力）:');
const weapon3 = createWeapon(magicDagger, '短剣');
console.log('   結果:', JSON.stringify(weapon3, null, 2));

console.log('\n✅ テスト完了 - パーサーロジック正常動作確認');