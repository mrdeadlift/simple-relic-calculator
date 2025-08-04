/**
 * 新武器データテスト
 * 統合された武器がアプリケーションで正しく読み込まれているか確認
 */

// WeaponSelectorコンポーネントでの武器表示テスト
console.log('🧪 新武器データ統合テスト');

// 新武器データの存在確認
try {
  // 動的importでdata/weapons.tsを読み込み
  import('./data/weapons.ts').then(weaponModule => {
    const { WEAPONS, getWeaponsByType, getWeaponByName } = weaponModule;
    
    console.log(`\n📊 武器データ統計:`);
    console.log(`   総武器数: ${WEAPONS.length}`);
    
    // 短剣のフィルタリングテスト
    const daggers = getWeaponsByType('短剣');
    console.log(`   短剣武器数: ${daggers.length}`);
    
    // 新規追加武器の確認
    const newWeapons = [
      'レディの短剣（新）',
      '血汚れた短刀', 
      '輝石のクリス',
      '慈悲の短剣'
    ];
    
    console.log(`\n🔍 新規追加武器の確認:`);
    newWeapons.forEach(name => {
      const weapon = getWeaponByName(name);
      if (weapon) {
        console.log(`   ✅ ${name}: ${weapon.rarity}, 攻撃力${weapon.attackPower.total}`);
        
        // 状態異常効果のチェック
        if (weapon.statusEffects && weapon.statusEffects.length > 0) {
          weapon.statusEffects.forEach(effect => {
            console.log(`      └ ${effect.type}: ${effect.buildup}`);
          });
        }
        
        // 戦技のチェック
        if (weapon.skill) {
          console.log(`      └ 戦技: ${weapon.skill.name}`);
        }
      } else {
        console.log(`   ❌ ${name}: 見つかりません`);
      }
    });
    
    // レアリティ別統計
    console.log(`\n📈 レアリティ別統計:`);
    const rarityStats = {};
    WEAPONS.forEach(weapon => {
      rarityStats[weapon.rarity] = (rarityStats[weapon.rarity] || 0) + 1;
    });
    
    Object.entries(rarityStats).forEach(([rarity, count]) => {
      console.log(`   ${rarity}: ${count}個`);
    });
    
    // キャラクター適性テスト
    console.log(`\n👥 レディ向け武器 (適性3以上):`);
    const ladyWeapons = WEAPONS.filter(w => w.characterCompatibility.レディ >= 3);
    ladyWeapons.forEach(weapon => {
      console.log(`   ${weapon.name}: 適性${weapon.characterCompatibility.レディ}`);
    });
    
    console.log(`\n🎉 新武器データ統合テスト完了!`);
    
  }).catch(error => {
    console.error('❌ 武器データ読み込みエラー:', error);
  });
  
} catch (error) {
  console.error('❌ テスト実行エラー:', error);
}