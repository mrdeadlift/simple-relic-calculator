/**
 * 武器データパーサーのテストスクリプト
 * 短剣データでパーサーロジックを検証
 */

import { parseWeaponsFromMarkdown, getWeaponTypeFromFileName } from './weapon-data-parser';

// 短剣データのサンプル（実際のMarkdownから抽出）
const daggerMarkdownSample = `
# ELDEN RING Nightreign - 短剣データベース

## 短剣一覧

### レディの短剣
- **攻撃力**: 55
- **レアリティ**: コモン（白）
- **能力補正**: 筋力E、技量S
- **特殊戦技**: 魔術師の短剣
- **特殊効果**: なし
- **入手方法**: レディ初期装備

### 血汚れた短刀
- **攻撃力**: 59
- **レアリティ**: アンコモン（緑）
- **能力補正**: 筋力E、技量S
- **特殊戦技**: 標準戦技
- **特殊効果**: 出血状態異常蓄積38
- **入手方法**: フィールド獲得

### 輝石のクリス
- **攻撃力**: 57（物理） + 31（魔力）
- **レアリティ**: レア（紫）
- **能力補正**: 筋力E、技量A、知力D
- **特殊戦技**: 輝石の魔術
- **特殊効果**: 魔力属性攻撃追加
- **入手方法**: フィールド獲得、ボス報酬

### 黒の刃
- **攻撃力**: 46
- **レアリティ**: レア（紫）
- **能力補正**: 筋力E、技量S、信仰補正
- **特殊戦技**: 死の刃
- **特殊効果**: 聖属性攻撃力46
- **入手方法**: フィールド獲得、ボス報酬
`;

/**
 * パーサーテスト実行
 */
export function testWeaponParser(): void {
  console.log('🔧 武器データパーサーテスト開始...\n');

  try {
    // 1. 武器種別の判定テスト
    console.log('1. 武器種別判定テスト:');
    const weaponType = getWeaponTypeFromFileName('短剣.md');
    console.log(`   ファイル名: 短剣.md → 武器種別: ${weaponType}`);
    
    if (weaponType !== '短剣') {
      console.error('   ❌ 武器種別判定エラー');
      return;
    }
    console.log('   ✅ 武器種別判定成功\n');

    // 2. Markdownパース実行
    console.log('2. Markdownパース実行:');
    const weapons = parseWeaponsFromMarkdown(daggerMarkdownSample, '短剣');
    console.log(`   パース済み武器数: ${weapons.length}`);
    
    if (weapons.length === 0) {
      console.error('   ❌ 武器データがパースされませんでした');
      return;
    }
    console.log('   ✅ Markdownパース成功\n');

    // 3. 個別武器データの検証
    console.log('3. パース結果詳細検証:\n');
    
    weapons.forEach((weapon, index) => {
      console.log(`   武器 ${index + 1}: ${weapon.name}`);
      console.log(`   - ID: ${weapon.id}`);
      console.log(`   - 武器種別: ${weapon.type}`);
      console.log(`   - レアリティ: ${weapon.rarity}`);
      console.log(`   - 攻撃力: 物理${weapon.attackPower.physical}${weapon.attackPower.magic > 0 ? ` + 魔力${weapon.attackPower.magic}` : ''} = 合計${weapon.attackPower.total}`);
      console.log(`   - 能力補正: 筋力${weapon.scaling.strength}, 技量${weapon.scaling.dexterity}, 知力${weapon.scaling.intelligence}, 信仰${weapon.scaling.faith}`);
      
      if (weapon.statusEffects && weapon.statusEffects.length > 0) {
        console.log(`   - 状態異常: ${weapon.statusEffects.map(e => `${e.type}${e.buildup}`).join(', ')}`);
      }
      
      if (weapon.skill) {
        console.log(`   - 戦技: ${weapon.skill.name}`);
      }
      
      console.log(`   - 重量: ${weapon.weight}`);
      console.log(`   - 入手方法: ${weapon.obtainMethod}`);
      console.log(`   - キャラクター適性: レディ${weapon.characterCompatibility.レディ}, 執行者${weapon.characterCompatibility.執行者}`);
      console.log('');
    });

    // 4. データ品質チェック
    console.log('4. データ品質チェック:');
    let hasErrors = false;

    weapons.forEach((weapon, index) => {
      // 必須フィールドチェック
      if (!weapon.id || !weapon.name || !weapon.type) {
        console.error(`   ❌ 武器${index + 1}: 必須フィールドが欠落`);
        hasErrors = true;
      }

      // 攻撃力の妥当性チェック
      if (weapon.attackPower.total <= 0) {
        console.error(`   ❌ 武器${index + 1}: 攻撃力が不正 (${weapon.attackPower.total})`);
        hasErrors = true;
      }

      // レアリティの妥当性チェック
      const validRarities = ['コモン', 'アンコモン', 'レア', 'レジェンド'];
      if (!validRarities.includes(weapon.rarity)) {
        console.error(`   ❌ 武器${index + 1}: 無効なレアリティ (${weapon.rarity})`);
        hasErrors = true;
      }

      // キャラクター適性の妥当性チェック
      const compatibilitySum = Object.values(weapon.characterCompatibility).reduce((sum, val) => sum + val, 0);
      if (compatibilitySum === 0) {
        console.error(`   ❌ 武器${index + 1}: キャラクター適性が設定されていません`);
        hasErrors = true;
      }
    });

    if (!hasErrors) {
      console.log('   ✅ データ品質チェック通過');
    }

    // 5. 特定ケースの検証
    console.log('\n5. 特定ケースの検証:');
    
    // 血汚れた短刀の出血効果チェック
    const bloodDagger = weapons.find(w => w.name === '血汚れた短刀');
    if (bloodDagger && bloodDagger.statusEffects && bloodDagger.statusEffects.length > 0) {
      const bleedEffect = bloodDagger.statusEffects.find(e => e.type === '出血');
      if (bleedEffect && bleedEffect.buildup === 38) {
        console.log('   ✅ 出血効果パース成功: 血汚れた短刀');
      } else {
        console.error('   ❌ 出血効果パース失敗');
        hasErrors = true;
      }
    }

    // 輝石のクリスの複合攻撃力チェック
    const magicDagger = weapons.find(w => w.name === '輝石のクリス');
    if (magicDagger && magicDagger.attackPower.physical === 57 && magicDagger.attackPower.magic === 31) {
      console.log('   ✅ 複合攻撃力パース成功: 輝石のクリス');
    } else {
      console.error('   ❌ 複合攻撃力パース失敗');
      hasErrors = true;
    }

    // 能力補正の複合パターンチェック
    if (magicDagger && magicDagger.scaling.intelligence === 'D') {
      console.log('   ✅ 複合能力補正パース成功: 知力D');
    } else {
      console.error('   ❌ 複合能力補正パース失敗');
      hasErrors = true;
    }

    // 6. 最終結果
    console.log('\n📊 テスト結果サマリー:');
    console.log(`   - パース済み武器数: ${weapons.length}`);
    console.log(`   - エラー数: ${hasErrors ? '有り' : '無し'}`);
    
    if (!hasErrors) {
      console.log('   ✅ 全テスト通過 - パーサーは正常に動作しています');
    } else {
      console.log('   ❌ テストでエラーが検出されました');
    }

  } catch (error) {
    console.error('❌ パーサーテスト中にエラーが発生:', error);
  }
}

// テスト実行 (Node.js環境での実行用)
if (typeof require !== 'undefined' && require.main === module) {
  testWeaponParser();
}