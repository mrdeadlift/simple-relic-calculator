/**
 * 簡易統合スクリプト
 * 短剣データを既存武器データに追加
 */

const fs = require('fs');
const path = require('path');

// 短剣データから新武器を生成
function createDaggerWeapons() {
  const daggers = [
    {
      id: "lady_dagger_new",
      name: "レディの短剣（新）",
      type: "短剣",
      rarity: "コモン",
      attackPower: { physical: 55, magic: 0, fire: 0, lightning: 0, holy: 0, total: 55 },
      scaling: { strength: "E", dexterity: "S", intelligence: "-", faith: "-", arcane: "-" },
      requirements: { strength: 5, dexterity: 10, intelligence: 0, faith: 0, arcane: 0 },
      skill: { name: "魔術師の短剣", fpCost: 10, description: "魔術師の短剣の効果" },
      description: "短剣系の武器。レディの短剣の特性を持つ。",
      obtainMethod: "レディ初期装備",
      weight: 1.5,
      characterCompatibility: { 追跡者: 2, 守護者: 2, 鉄の目: 2, レディ: 5, 無頼漢: 2, 復讐者: 2, 隠者: 2, 執行者: 4 }
    },
    {
      id: "blood_stained_knife",
      name: "血汚れた短刀",
      type: "短剣",
      rarity: "アンコモン",
      attackPower: { physical: 59, magic: 0, fire: 0, lightning: 0, holy: 0, total: 59 },
      scaling: { strength: "E", dexterity: "S", intelligence: "-", faith: "-", arcane: "-" },
      requirements: { strength: 5, dexterity: 10, intelligence: 0, faith: 0, arcane: 0 },
      statusEffects: [{ type: "出血", buildup: 38 }],
      description: "短剣系の武器。血汚れた短刀の特性を持つ。",
      obtainMethod: "フィールド獲得",
      weight: 1.5,
      characterCompatibility: { 追跡者: 2, 守護者: 2, 鉄の目: 2, レディ: 5, 無頼漢: 2, 復讐者: 2, 隠者: 2, 執行者: 4 }
    },
    {
      id: "glintstone_kris",
      name: "輝石のクリス",
      type: "短剣",
      rarity: "レア",
      attackPower: { physical: 57, magic: 31, fire: 0, lightning: 0, holy: 0, total: 88 },
      scaling: { strength: "E", dexterity: "A", intelligence: "D", faith: "-", arcane: "-" },
      requirements: { strength: 5, dexterity: 10, intelligence: 8, faith: 0, arcane: 0 },
      skill: { name: "輝石の魔術", fpCost: 10, description: "輝石の魔術の効果" },
      description: "短剣系の武器。輝石のクリスの特性を持つ。",
      obtainMethod: "フィールド獲得、ボス報酬",
      weight: 1.5,
      characterCompatibility: { 追跡者: 2, 守護者: 2, 鉄の目: 2, レディ: 5, 無頼漢: 2, 復讐者: 2, 隠者: 2, 執行者: 4 }
    },
    {
      id: "mercy_dagger",
      name: "慈悲の短剣",
      type: "短剣",
      rarity: "アンコモン",
      attackPower: { physical: 72, magic: 0, fire: 0, lightning: 0, holy: 0, total: 72 },
      scaling: { strength: "E", dexterity: "S", intelligence: "-", faith: "-", arcane: "-" },
      requirements: { strength: 5, dexterity: 10, intelligence: 0, faith: 0, arcane: 0 },
      description: "短剣系の武器。慈悲の短剣の特性を持つ。",
      obtainMethod: "フィールド獲得",
      weight: 1.5,
      characterCompatibility: { 追跡者: 2, 守護者: 2, 鉄の目: 2, レディ: 5, 無頼漢: 2, 復讐者: 2, 隠者: 2, 執行者: 4 }
    }
  ];

  return daggers;
}

// 既存データファイルを読み込み
function readExistingWeapons() {
  try {
    const weaponsFile = path.join(process.cwd(), 'data', 'weapons.ts');
    const content = fs.readFileSync(weaponsFile, 'utf-8');
    
    // 既存の武器配列を抽出
    const weaponsMatch = content.match(/export const WEAPONS: Weapon\[\] = (\[[\s\S]*?\]);/);
    if (weaponsMatch) {
      return JSON.parse(weaponsMatch[1]);
    }
    return [];
  } catch (error) {
    console.error('既存データ読み込みエラー:', error);
    return [];
  }
}

// 新しいdata/weapons.tsファイルを生成
function generateWeaponsFile(weapons) {
  const template = `/**
 * 武器データベース
 * エルデンリングナイトレインの武器データ定義
 * 
 * 🔄 doc/weaponsから統合されたデータを含む
 */

import type { Weapon, WeaponType } from "~/types";

/**
 * 基本武器データベース
 * 各キャラクター向けの代表的な武器を含む
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

  return template;
}

// メイン統合処理
function integrateWeapons() {
  console.log('🚀 武器データ統合開始...\n');

  try {
    // 1. 既存データ読み込み
    console.log('1. 既存武器データ読み込み...');
    const existingWeapons = readExistingWeapons();
    console.log(`   既存武器数: ${existingWeapons.length}\n`);

    // 2. 新規短剣データ生成
    console.log('2. 新規短剣データ生成...');
    const newDaggers = createDaggerWeapons();
    console.log(`   新規短剣数: ${newDaggers.length}\n`);

    // 3. 重複チェック・マージ
    console.log('3. データマージ処理...');
    const existingIds = new Set(existingWeapons.map(w => w.id));
    const newWeaponsToAdd = newDaggers.filter(dagger => !existingIds.has(dagger.id));
    
    const mergedWeapons = [...existingWeapons, ...newWeaponsToAdd];
    console.log(`   追加武器数: ${newWeaponsToAdd.length}`);
    console.log(`   最終武器数: ${mergedWeapons.length}\n`);

    // 4. TypeScriptファイル生成
    console.log('4. TypeScriptファイル生成...');
    const newContent = generateWeaponsFile(mergedWeapons);

    // 5. ファイル書き込み
    const weaponsPath = path.join(process.cwd(), 'data', 'weapons.ts');
    fs.writeFileSync(weaponsPath, newContent, 'utf-8');
    console.log(`   ✅ ファイル更新完了: data/weapons.ts\n`);

    // 6. 統計表示
    console.log('📊 統合結果:');
    console.log(`   - 既存武器: ${existingWeapons.length}個`);
    console.log(`   - 新規追加: ${newWeaponsToAdd.length}個`);
    console.log(`   - 合計武器: ${mergedWeapons.length}個`);
    console.log(`   - 新規短剣:`, newWeaponsToAdd.map(w => w.name).join(', '));

    console.log('\n🎉 武器データ統合完了！');

  } catch (error) {
    console.error('❌ 統合エラー:', error);
  }
}

// 実行
integrateWeapons();