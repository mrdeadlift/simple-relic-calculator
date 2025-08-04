/**
 * 武器データ統合スクリプト
 * doc/weaponsのデータをdata/weapons.tsに統合
 */

import fs from 'fs';
import path from 'path';
import { parseWeaponsFromMarkdown, getWeaponTypeFromFileName } from './weapon-data-parser';
import type { Weapon } from '~/types/weapon';

/**
 * doc/weaponsディレクトリから全武器データを読み込み
 */
async function loadAllWeaponData(): Promise<Weapon[]> {
  const weaponsDir = path.join(process.cwd(), 'doc', 'weapons');
  const allWeapons: Weapon[] = [];
  
  try {
    const files = fs.readdirSync(weaponsDir);
    console.log(`📁 doc/weaponsから${files.length}個のファイルを発見`);
    
    // Markdownファイルのみを処理
    const markdownFiles = files.filter(file => file.endsWith('.md') && file !== 'README.md' && file !== 'データ収集レポート.md');
    console.log(`📄 処理対象Markdownファイル: ${markdownFiles.length}個\n`);
    
    for (const file of markdownFiles) {
      const weaponType = getWeaponTypeFromFileName(file);
      
      if (!weaponType) {
        console.warn(`⚠️ スキップ: ${file} (未対応の武器種別)`);
        continue;
      }
      
      console.log(`🔧 処理中: ${file} (種別: ${weaponType})`);
      
      try {
        const filePath = path.join(weaponsDir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        const weapons = parseWeaponsFromMarkdown(content, weaponType);
        
        console.log(`   → ${weapons.length}個の武器をパース成功`);
        allWeapons.push(...weapons);
        
        // サンプル武器の表示
        if (weapons.length > 0) {
          const sample = weapons[0];
          console.log(`   📝 サンプル: ${sample.name} (攻撃力${sample.attackPower.total}, ${sample.rarity})`);
        }
        
      } catch (error) {
        console.error(`❌ ${file}の処理でエラー:`, error);
      }
      
      console.log('');
    }
    
    console.log(`✅ 統合完了: 全${allWeapons.length}個の武器をパース`);
    return allWeapons;
    
  } catch (error) {
    console.error('❌ ディレクトリ読み込みエラー:', error);
    return [];
  }
}

/**
 * 既存武器データとの重複チェック・マージ処理
 */
function mergeWithExistingWeapons(newWeapons: Weapon[], existingWeapons: Weapon[]): Weapon[] {
  const mergedWeapons: Weapon[] = [...existingWeapons];
  const existingIds = new Set(existingWeapons.map(w => w.id));
  const existingNames = new Set(existingWeapons.map(w => w.name));
  
  let addedCount = 0;
  let skippedCount = 0;
  
  console.log('🔄 既存データとのマージ処理...');
  
  for (const newWeapon of newWeapons) {
    // ID重複チェック
    if (existingIds.has(newWeapon.id)) {
      console.log(`   ⏭️ スキップ (ID重複): ${newWeapon.name} (${newWeapon.id})`);
      skippedCount++;
      continue;
    }
    
    // 名前重複チェック
    if (existingNames.has(newWeapon.name)) {
      console.log(`   ⏭️ スキップ (名前重複): ${newWeapon.name}`);
      skippedCount++;
      continue;
    }
    
    // 新規武器として追加
    mergedWeapons.push(newWeapon);
    existingIds.add(newWeapon.id);
    existingNames.add(newWeapon.name);
    addedCount++;
  }
  
  console.log(`✅ マージ完了: ${addedCount}個追加, ${skippedCount}個スキップ`);
  console.log(`📊 最終武器数: ${mergedWeapons.length}個\n`);
  
  return mergedWeapons;
}

/**
 * 武器データ配列をTypeScriptコードとして生成
 */
function generateWeaponTypeScriptCode(weapons: Weapon[]): string {
  // 武器データをJSON形式で文字列化（インデント付き）
  const weaponsJson = JSON.stringify(weapons, null, 2);
  
  return `/**
 * 武器データベース
 * エルデンリングナイトレインの武器データ定義
 * 
 * ⚠️ このファイルは自動生成されています
 * 手動での編集は推奨されません
 * 更新は utils/integrate-weapon-data.ts を使用してください
 */

import type { Weapon, WeaponType } from "~/types";

/**
 * 基本武器データベース
 * doc/weaponsディレクトリから自動統合された武器データ
 */
export const WEAPONS: Weapon[] = ${weaponsJson};

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
}

/**
 * メイン統合処理
 */
export async function integrateWeaponData(preview: boolean = false): Promise<void> {
  console.log('🚀 武器データ統合プロセス開始\n');
  
  try {
    // 1. 既存武器データの読み込み
    console.log('1. 既存武器データ読み込み...');
    const weaponsFilePath = path.join(process.cwd(), 'data', 'weapons.ts');
    let existingWeapons: Weapon[] = [];
    
    if (fs.existsSync(weaponsFilePath)) {
      // 既存ファイルから武器データを抽出（簡易的な正規表現ベース）
      const existingContent = fs.readFileSync(weaponsFilePath, 'utf-8');
      const weaponsMatch = existingContent.match(/export const WEAPONS: Weapon\[\] = (\[[\s\S]*?\]);/);
      
      if (weaponsMatch) {
        try {
          existingWeapons = JSON.parse(weaponsMatch[1]);
          console.log(`   ✅ 既存武器データ読み込み成功: ${existingWeapons.length}個\n`);
        } catch (error) {
          console.warn('   ⚠️ 既存データパースに失敗、新規作成します\n');
        }
      }
    } else {
      console.log('   ℹ️ 既存ファイルが見つかりません、新規作成します\n');
    }
    
    // 2. doc/weaponsからの新規データ読み込み
    console.log('2. doc/weaponsからの新規データ読み込み...');
    const newWeapons = await loadAllWeaponData();
    
    if (newWeapons.length === 0) {
      console.error('❌ 新規武器データが読み込めませんでした');
      return;
    }
    
    // 3. データマージ
    console.log('3. データマージ処理...');
    const mergedWeapons = mergeWithExistingWeapons(newWeapons, existingWeapons);
    
    // 4. TypeScriptコード生成
    console.log('4. TypeScriptコード生成...');
    const newWeaponCode = generateWeaponTypeScriptCode(mergedWeapons);
    
    if (preview) {
      // プレビューモード: ファイルに書き込まずに結果表示
      console.log('📋 プレビューモード - 生成されるコードの概要:');
      console.log(`   - 合計武器数: ${mergedWeapons.length}`);
      console.log(`   - ファイルサイズ: 約${Math.round(newWeaponCode.length / 1024)}KB`);
      
      // 武器種別別の統計
      const typeStats: Record<string, number> = {};
      mergedWeapons.forEach(weapon => {
        typeStats[weapon.type] = (typeStats[weapon.type] || 0) + 1;
      });
      
      console.log('   - 武器種別統計:');
      Object.entries(typeStats).forEach(([type, count]) => {
        console.log(`     ${type}: ${count}個`);
      });
      
    } else {
      // 実際にファイルに書き込み
      console.log('5. ファイル書き込み...');
      
      // バックアップ作成
      if (fs.existsSync(weaponsFilePath)) {
        const backupPath = weaponsFilePath + '.backup.' + Date.now();
        fs.copyFileSync(weaponsFilePath, backupPath);
        console.log(`   📁 バックアップ作成: ${path.basename(backupPath)}`);
      }
      
      // 新しいファイル書き込み
      fs.writeFileSync(weaponsFilePath, newWeaponCode, 'utf-8');
      console.log(`   ✅ ファイル更新完了: ${path.basename(weaponsFilePath)}`);
    }
    
    console.log('\n🎉 武器データ統合プロセス完了!');
    console.log(`📊 最終結果: ${mergedWeapons.length}個の武器がデータベースに登録されました`);
    
  } catch (error) {
    console.error('❌ 統合プロセス中にエラーが発生:', error);
    throw error;
  }
}

// CLIでの実行サポート
if (typeof require !== 'undefined' && require.main === module) {
  const preview = process.argv.includes('--preview');
  integrateWeaponData(preview).catch(console.error);
}