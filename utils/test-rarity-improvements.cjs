/**
 * レアリティ正規化改善のテストスクリプト
 */

const fs = require('fs');
const path = require('path');

// 改善されたレアリティ正規化関数（コピー）
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

// テストケース
function runRarityTests() {
  console.log('🧪 レアリティ正規化改善テスト開始\n');
  
  const testCases = [
    // 日本語パターン
    { input: 'コモン（白）', expected: 'コモン' },
    { input: 'アンコモン（緑）', expected: 'アンコモン' },
    { input: 'レア（紫）', expected: 'レア' },
    { input: 'レジェンド（黄）', expected: 'レジェンド' },
    { input: 'ユニーク', expected: 'レジェンド' },
    
    // 英語パターン
    { input: 'Common', expected: 'コモン' },
    { input: 'Uncommon', expected: 'アンコモン' },
    { input: 'Rare', expected: 'レア' },
    { input: 'Legendary', expected: 'レジェンド' },
    { input: 'Unique', expected: 'レジェンド' },
    { input: 'Epic', expected: 'レア' },
    
    // 略語パターン
    { input: 'C', expected: 'コモン' },
    { input: 'U', expected: 'アンコモン' },
    { input: 'R', expected: 'レア' },
    { input: 'L', expected: 'レジェンド' },
    
    // 数値パターン
    { input: '1', expected: 'コモン' },
    { input: '2', expected: 'アンコモン' },
    { input: '3', expected: 'レア' },
    { input: '4', expected: 'レジェンド' },
    
    // エッジケース
    { input: '', expected: 'コモン' },
    { input: null, expected: 'コモン' },
    { input: undefined, expected: 'コモン' },
    { input: 'UNKNOWN_RARITY', expected: 'コモン' }
  ];

  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }, index) => {
    try {
      const result = normalizeRarity(input);
      const success = result === expected;
      
      if (success) {
        console.log(`✅ Test ${index + 1}: "${input}" → "${result}"`);
        passed++;
      } else {
        console.log(`❌ Test ${index + 1}: "${input}" → "${result}" (expected: "${expected}")`);
        failed++;
      }
    } catch (error) {
      console.log(`💥 Test ${index + 1}: "${input}" → ERROR: ${error.message}`);
      failed++;
    }
  });

  console.log(`\n📊 テスト結果:`);
  console.log(`   成功: ${passed}/${testCases.length}`);
  console.log(`   失敗: ${failed}/${testCases.length}`);
  console.log(`   成功率: ${Math.round((passed / testCases.length) * 100)}%`);

  if (failed === 0) {
    console.log('\n🎉 全テストが成功しました！');
  } else {
    console.log('\n⚠️ 一部のテストが失敗しました。改善が必要です。');
  }

  return { passed, failed, total: testCases.length };
}

// 実行
runRarityTests();