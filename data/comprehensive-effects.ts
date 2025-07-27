/**
 * 遺物効果.mdの内容を反映した包括的な遺物効果データ
 */

export interface RelicEffectData {
  id: string
  name: string
  category: string
  stackable: boolean // true: 〇, false: ✕
  conditional?: boolean // true: ※ 条件付き
  value: {
    flat?: number        // 固定値
    multiplier?: number  // 倍率
    percentage?: number  // パーセンテージ
  }
  description: string
  condition?: string
  duration?: number    // 持続時間（秒）
  cooldown?: number   // クールタイム（秒）
}

export const COMPREHENSIVE_EFFECTS: RelicEffectData[] = [
  // === 能力値上昇 ===
  {
    id: 'vitality_1',
    name: '生命力+1',
    category: 'ability_boost',
    stackable: true,
    value: { flat: 1 },
    description: '+1あたり最大HP+20。増加量はキャラクターやレベルを問わず固定値'
  },
  {
    id: 'vitality_2',
    name: '生命力+2',
    category: 'ability_boost',
    stackable: true,
    value: { flat: 2 },
    description: '+1あたり最大HP+20。増加量はキャラクターやレベルを問わず固定値'
  },
  {
    id: 'vitality_3',
    name: '生命力+3',
    category: 'ability_boost',
    stackable: true,
    value: { flat: 3 },
    description: '+1あたり最大HP+20。増加量はキャラクターやレベルを問わず固定値'
  },
  {
    id: 'mind_1',
    name: '精神力+1',
    category: 'ability_boost',
    stackable: true,
    value: { flat: 1 },
    description: '+1あたり最大FP+5。増加量はキャラクターやレベルを問わず固定値'
  },
  {
    id: 'mind_2',
    name: '精神力+2',
    category: 'ability_boost',
    stackable: true,
    value: { flat: 2 },
    description: '+1あたり最大FP+5。増加量はキャラクターやレベルを問わず固定値'
  },
  {
    id: 'mind_3',
    name: '精神力+3',
    category: 'ability_boost',
    stackable: true,
    value: { flat: 3 },
    description: '+1あたり最大FP+5。増加量はキャラクターやレベルを問わず固定値'
  },
  {
    id: 'endurance_1',
    name: '持久力+1',
    category: 'ability_boost',
    stackable: true,
    value: { flat: 1 },
    description: '+1あたり最大スタミナ+2。増加量はキャラクターやレベルを問わず固定値'
  },
  {
    id: 'endurance_2',
    name: '持久力+2',
    category: 'ability_boost',
    stackable: true,
    value: { flat: 2 },
    description: '+1あたり最大スタミナ+2。増加量はキャラクターやレベルを問わず固定値'
  },
  {
    id: 'endurance_3',
    name: '持久力+3',
    category: 'ability_boost',
    stackable: true,
    value: { flat: 3 },
    description: '+1あたり最大スタミナ+2。増加量はキャラクターやレベルを問わず固定値'
  },
  {
    id: 'strength_1',
    name: '筋力+1',
    category: 'ability_boost',
    stackable: true,
    value: { flat: 1 },
    description: '筋力を1上昇させる'
  },
  {
    id: 'strength_2',
    name: '筋力+2',
    category: 'ability_boost',
    stackable: true,
    value: { flat: 2 },
    description: '筋力を2上昇させる'
  },
  {
    id: 'strength_3',
    name: '筋力+3',
    category: 'ability_boost',
    stackable: true,
    value: { flat: 3 },
    description: '筋力を3上昇させる'
  },
  {
    id: 'dexterity_1',
    name: '技量+1',
    category: 'ability_boost',
    stackable: true,
    value: { flat: 1 },
    description: '技量を1上昇させる'
  },
  {
    id: 'dexterity_2',
    name: '技量+2',
    category: 'ability_boost',
    stackable: true,
    value: { flat: 2 },
    description: '技量を2上昇させる'
  },
  {
    id: 'dexterity_3',
    name: '技量+3',
    category: 'ability_boost',
    stackable: true,
    value: { flat: 3 },
    description: '技量を3上昇させる'
  },
  {
    id: 'intelligence_1',
    name: '知力+1',
    category: 'ability_boost',
    stackable: true,
    value: { flat: 1 },
    description: '知力を1上昇させる'
  },
  {
    id: 'intelligence_2',
    name: '知力+2',
    category: 'ability_boost',
    stackable: true,
    value: { flat: 2 },
    description: '知力を2上昇させる'
  },
  {
    id: 'intelligence_3',
    name: '知力+3',
    category: 'ability_boost',
    stackable: true,
    value: { flat: 3 },
    description: '知力を3上昇させる'
  },
  {
    id: 'faith_1',
    name: '信仰+1',
    category: 'ability_boost',
    stackable: true,
    value: { flat: 1 },
    description: '信仰を1上昇させる'
  },
  {
    id: 'faith_2',
    name: '信仰+2',
    category: 'ability_boost',
    stackable: true,
    value: { flat: 2 },
    description: '信仰を2上昇させる'
  },
  {
    id: 'faith_3',
    name: '信仰+3',
    category: 'ability_boost',
    stackable: true,
    value: { flat: 3 },
    description: '信仰を3上昇させる'
  },
  {
    id: 'arcane_1',
    name: '神秘+1',
    category: 'ability_boost',
    stackable: true,
    value: { flat: 1 },
    description: '神秘を1上昇させる'
  },
  {
    id: 'arcane_2',
    name: '神秘+2',
    category: 'ability_boost',
    stackable: true,
    value: { flat: 2 },
    description: '神秘を2上昇させる'
  },
  {
    id: 'arcane_3',
    name: '神秘+3',
    category: 'ability_boost',
    stackable: true,
    value: { flat: 3 },
    description: '神秘を3上昇させる'
  },
  {
    id: 'poise_1',
    name: '強靭度+1',
    category: 'ability_boost',
    stackable: true,
    value: { flat: 1 },
    description: '強靭度を1上昇させる'
  },
  {
    id: 'poise_2',
    name: '強靭度+2',
    category: 'ability_boost',
    stackable: true,
    value: { flat: 2 },
    description: '強靭度を2上昇させる'
  },
  {
    id: 'poise_3',
    name: '強靭度+3',
    category: 'ability_boost',
    stackable: true,
    value: { flat: 3 },
    description: '強靭度を3上昇させる'
  },

  // === 固有効果（最大値上昇） ===
  {
    id: 'max_hp_boost',
    name: '最大HP上昇',
    category: 'ability_boost',
    stackable: false,
    value: { flat: 100 },
    description: '最大HP+100。生命力+との重複可'
  },
  {
    id: 'max_fp_boost',
    name: '最大FP上昇',
    category: 'ability_boost',
    stackable: false,
    value: { flat: 25 },
    description: '最大FP+25。精神力+との重複可'
  },
  {
    id: 'max_stamina_boost',
    name: '最大スタミナ上昇',
    category: 'ability_boost',
    stackable: false,
    value: { flat: 10 },
    description: '最大スタミナ+10。持久力+との重複可'
  },

  // === 攻撃力上昇 ===
  {
    id: 'physical_attack_0',
    name: '物理攻撃力上昇+0',
    category: 'attack_power',
    stackable: true,
    value: { multiplier: 1.03 },
    description: '約1.03倍。魔術・祈祷にも効果あり（武器ステータスには反映されない）'
  },
  {
    id: 'physical_attack_1',
    name: '物理攻撃力上昇+1',
    category: 'attack_power',
    stackable: true,
    value: { multiplier: 1.04 },
    description: '約1.04倍。魔術・祈祷にも効果あり（武器ステータスには反映されない）'
  },
  {
    id: 'physical_attack_2',
    name: '物理攻撃力上昇+2',
    category: 'attack_power',
    stackable: true,
    value: { multiplier: 1.05 },
    description: '約1.05倍。魔術・祈祷にも効果あり（武器ステータスには反映されない）'
  },
  {
    id: 'magic_attack_0',
    name: '魔力攻撃力上昇+0',
    category: 'attack_power',
    stackable: true,
    value: { multiplier: 1.04 },
    description: '約1.04倍。魔術・祈祷にも効果あり（武器ステータスには反映されない）'
  },
  {
    id: 'magic_attack_1',
    name: '魔力攻撃力上昇+1',
    category: 'attack_power',
    stackable: true,
    value: { multiplier: 1.05 },
    description: '約1.05倍。魔術・祈祷にも効果あり（武器ステータスには反映されない）'
  },
  {
    id: 'magic_attack_2',
    name: '魔力攻撃力上昇+2',
    category: 'attack_power',
    stackable: true,
    value: { multiplier: 1.06 },
    description: '約1.06倍。魔術・祈祷にも効果あり（武器ステータスには反映されない）'
  },
  {
    id: 'fire_attack_0',
    name: '炎攻撃力上昇+0',
    category: 'attack_power',
    stackable: true,
    value: { multiplier: 1.04 },
    description: '約1.04倍。魔術・祈祷にも効果あり'
  },
  {
    id: 'fire_attack_1',
    name: '炎攻撃力上昇+1',
    category: 'attack_power',
    stackable: true,
    value: { multiplier: 1.05 },
    description: '約1.05倍。魔術・祈祷にも効果あり'
  },
  {
    id: 'fire_attack_2',
    name: '炎攻撃力上昇+2',
    category: 'attack_power',
    stackable: true,
    value: { multiplier: 1.06 },
    description: '約1.06倍。魔術・祈祷にも効果あり'
  },
  {
    id: 'lightning_attack_0',
    name: '雷攻撃力上昇+0',
    category: 'attack_power',
    stackable: true,
    value: { multiplier: 1.04 },
    description: '約1.04倍。魔術・祈祷にも効果あり'
  },
  {
    id: 'lightning_attack_1',
    name: '雷攻撃力上昇+1',
    category: 'attack_power',
    stackable: true,
    value: { multiplier: 1.05 },
    description: '約1.05倍。魔術・祈祷にも効果あり'
  },
  {
    id: 'lightning_attack_2',
    name: '雷攻撃力上昇+2',
    category: 'attack_power',
    stackable: true,
    value: { multiplier: 1.06 },
    description: '約1.06倍。魔術・祈祷にも効果あり'
  },
  {
    id: 'holy_attack_0',
    name: '聖攻撃力上昇+0',
    category: 'attack_power',
    stackable: true,
    value: { multiplier: 1.04 },
    description: '約1.04倍。魔術・祈祷にも効果あり'
  },
  {
    id: 'holy_attack_1',
    name: '聖攻撃力上昇+1',
    category: 'attack_power',
    stackable: true,
    value: { multiplier: 1.05 },
    description: '約1.05倍。魔術・祈祷にも効果あり'
  },
  {
    id: 'holy_attack_2',
    name: '聖攻撃力上昇+2',
    category: 'attack_power',
    stackable: true,
    value: { multiplier: 1.06 },
    description: '約1.06倍。魔術・祈祷にも効果あり'
  },

  // === カット率/耐性上昇 ===
  {
    id: 'magic_cut_rate',
    name: '魔力カット率上昇',
    category: 'defense',
    stackable: true,
    value: { percentage: 3 },
    description: '約3%カット。重複する事は確認済み'
  },
  {
    id: 'fire_cut_rate',
    name: '炎カット率上昇',
    category: 'defense',
    stackable: true,
    value: { percentage: 3 },
    description: '約3%カット。重複する事は確認済み'
  },
  {
    id: 'lightning_cut_rate',
    name: '雷カット率上昇',
    category: 'defense',
    stackable: true,
    value: { percentage: 3 },
    description: '約3%カット。重複する事は確認済み'
  },
  {
    id: 'holy_cut_rate',
    name: '聖カット率上昇',
    category: 'defense',
    stackable: true,
    value: { percentage: 3 },
    description: '約3%カット。重複する事は確認済み'
  },
  {
    id: 'hp_low_cut_rate',
    name: 'HP低下時、カット率上昇',
    category: 'defense',
    stackable: true,
    conditional: true,
    value: { percentage: 20 },
    description: '約20%カット。HP20%未満で発動。HP20%未満である限り永続だが、回復等で20%を上回った瞬間に途切れる',
    condition: 'HP20%未満'
  },

  // === 状態異常耐性 ===
  {
    id: 'poison_resistance',
    name: '毒耐性上昇',
    category: 'resistance',
    stackable: true,
    value: { flat: 100 },
    description: '1つで+100、2つで+150、3つで+200（要検証）'
  },
  {
    id: 'rot_resistance',
    name: '腐敗耐性上昇',
    category: 'resistance',
    stackable: true,
    value: { flat: 100 },
    description: '1つで+100、2つで+150、3つで+200（要検証）'
  },
  {
    id: 'bleed_resistance',
    name: '出血耐性上昇',
    category: 'resistance',
    stackable: true,
    value: { flat: 100 },
    description: '1つで+100、2つで+150、3つで+200（要検証）'
  },
  {
    id: 'frostbite_resistance',
    name: '冷気耐性上昇',
    category: 'resistance',
    stackable: true,
    value: { flat: 100 },
    description: '1つで+100、2つで+150、3つで+200（要検証）'
  },
  {
    id: 'sleep_resistance',
    name: '睡眠耐性上昇',
    category: 'resistance',
    stackable: true,
    value: { flat: 100 },
    description: '1つで+100、2つで+150、3つで+200（要検証）'
  },
  {
    id: 'madness_resistance',
    name: '発狂耐性上昇',
    category: 'resistance',
    stackable: true,
    value: { flat: 100 },
    description: '1つで+100、2つで+150、3つで+200（要検証）'
  },
  {
    id: 'death_resistance',
    name: '死耐性上昇',
    category: 'resistance',
    stackable: true,
    value: { flat: 100 },
    description: '1つで+100、2つで+150、3つで+200（要検証）'
  },

  // === 回復効果 ===
  {
    id: 'hp_regen',
    name: 'HP持続回復',
    category: 'recovery',
    stackable: false,
    value: { flat: 1 },
    description: '毎秒1ずつ回復'
  },
  {
    id: 'attack_stamina_recovery',
    name: '攻撃成功時、スタミナ回復',
    category: 'recovery',
    stackable: false,
    value: { flat: 5 },
    description: '攻撃成功時にスタミナが少量回復'
  },
  {
    id: 'attack_stamina_recovery_plus',
    name: '攻撃成功時、スタミナ回復+1',
    category: 'recovery',
    stackable: false,
    value: { flat: 7 },
    description: '攻撃成功時にスタミナが回復（強化版）'
  },

  // === 攻撃強化 ===
  {
    id: 'first_attack_enhance',
    name: '通常攻撃の1段階目強化',
    category: 'attack_enhance',
    stackable: true,
    value: { multiplier: 1.1 },
    description: '約1.1倍。二刀通常攻撃にも効果あり'
  },
  {
    id: 'guard_counter_enhance',
    name: 'ガードカウンター強化',
    category: 'attack_enhance',
    stackable: true,
    value: { multiplier: 1.15 },
    description: '約1.15倍'
  },
  {
    id: 'critical_hit_enhance',
    name: '致命の一撃強化',
    category: 'attack_enhance',
    stackable: true,
    value: { multiplier: 1.15 },
    description: '約1.15倍'
  },
  {
    id: 'critical_hit_enhance_plus',
    name: '致命の一撃強化+1',
    category: 'attack_enhance',
    stackable: false,
    value: { multiplier: 1.2 },
    description: '約1.2倍'
  },

  // === 条件付き効果 ===
  {
    id: 'poison_enemy_enhance',
    name: '毒状態の敵に対する攻撃を強化',
    category: 'conditional_attack',
    stackable: false,
    conditional: true,
    value: { multiplier: 1.1 },
    description: '約1.1倍',
    condition: '敵が毒状態'
  },
  {
    id: 'rot_enemy_enhance',
    name: '腐敗状態の敵に対する攻撃を強化',
    category: 'conditional_attack',
    stackable: false,
    conditional: true,
    value: { multiplier: 1.1 },
    description: '約1.1倍',
    condition: '敵が腐敗状態'
  },
  {
    id: 'frostbite_enemy_enhance',
    name: '凍傷状態の敵に対する攻撃を強化',
    category: 'conditional_attack',
    stackable: false,
    conditional: true,
    value: { multiplier: 1.1 },
    description: '約1.1倍',
    condition: '敵が凍傷状態'
  },
  {
    id: 'damage_taken_attack_boost',
    name: '攻撃を受けると攻撃力上昇',
    category: 'conditional_attack',
    stackable: false,
    conditional: true,
    value: { multiplier: 1.15 },
    description: '約1.15倍、10秒。自傷ダメージや0以下の被ダメは発動しない',
    condition: '攻撃を受けた時',
    duration: 10
  },

  // === 武器種関連攻撃力 ===
  {
    id: 'sword_attack_boost',
    name: '大剣の攻撃力上昇',
    category: 'attack_power',
    stackable: true,
    value: { multiplier: 1.06 },
    description: '約1.06倍'
  },
  {
    id: 'weapon_3plus_attack_boost',
    name: '大剣を3つ以上装備していると攻撃力上昇',
    category: 'attack_power',
    stackable: false,
    conditional: true,
    value: { multiplier: 1.1 },
    description: '約1.1倍。対象の武器以外の装備についても攻撃力は上昇する',
    condition: '大剣を3つ以上装備'
  },
  {
    id: 'shield_3plus_hp_boost',
    name: '盾を3つ以上装備していると最大HP上昇',
    category: 'ability_boost',
    stackable: false,
    conditional: true,
    value: { flat: 200 },
    description: '最大HP+200。小盾・中盾・大盾',
    condition: '盾を3つ以上装備'
  },
  {
    id: 'catalyst_3plus_fp_boost',
    name: '杖・聖印を3つ以上装備していると最大FP上昇',
    category: 'ability_boost',
    stackable: false,
    conditional: true,
    value: { flat: 50 },
    description: '最大FP+50。杖・聖印',
    condition: '杖・聖印を3つ以上装備'
  },

  // === 魔術・祈祷強化 ===
  {
    id: 'carian_magic_enhance',
    name: 'カーリアの魔術を強化',
    category: 'attack_enhance',
    stackable: true,
    value: { multiplier: 1.12 },
    description: '約1.12倍'
  },
  {
    id: 'dragon_cult_prayer_enhance',
    name: '王都古竜信仰の祈祷を強化',
    category: 'attack_enhance',
    stackable: true,
    value: { multiplier: 1.12 },
    description: '約1.12倍'
  },
  {
    id: 'perfumer_enhance',
    name: '調香術強化',
    category: 'attack_enhance',
    stackable: true,
    value: { multiplier: 1.14 },
    description: '1つ1.14倍、2つ1.31倍、3つ1.51倍。対象は火花の香りのみ'
  },

  // === HP/FP/スタミナ回復 ===
  {
    id: 'weapon_hp_recovery',
    name: '大剣の攻撃でHP回復',
    category: 'recovery',
    stackable: false,
    value: { flat: 10 },
    description: '回復量は10。クールタイムが1秒程度ある'
  },
  {
    id: 'guard_hp_recovery',
    name: 'ガード成功時、HPを回復',
    category: 'recovery',
    stackable: false,
    value: { flat: 8 },
    description: '回復量は約8'
  },
  {
    id: 'critical_hp_recovery',
    name: '刺突カウンター発生時、HP回復',
    category: 'recovery',
    stackable: false,
    value: { percentage: 2.5 },
    description: '回復量は最大HPの2.5%。弓や投げナイフ系などの飛び道具でも発動'
  },
  {
    id: 'low_hp_continuous_recovery',
    name: 'HP低下時、周囲の味方を含めHPをゆっくりと回復',
    category: 'recovery',
    stackable: false,
    conditional: true,
    value: { percentage: 0.5, flat: 1 },
    description: 'HP20％以下で発動。毎秒、最大HPの0.5%+1HP回復。持続50秒',
    condition: 'HP20%以下',
    duration: 50
  },
  {
    id: 'regain_system',
    name: 'ダメージを受けた直後、攻撃によりHPの一部を回復',
    category: 'recovery',
    stackable: false,
    value: { flat: 1 },
    description: 'リゲインシステム。ダメージ後に攻撃を当てることでHP回復'
  },
  {
    id: 'weapon_fp_recovery',
    name: '大剣の攻撃でFP回復',
    category: 'recovery',
    stackable: false,
    value: { flat: 1 },
    description: '回復量は1。クールタイムが1秒程度ある'
  },
  {
    id: 'continuous_attack_fp_recovery',
    name: '攻撃連続時、FP回復',
    category: 'recovery',
    stackable: true,
    value: { percentage: 5 },
    description: '発動するとFPが最大値の5%回復'
  },
  {
    id: 'madness_fp_recovery',
    name: '発狂状態になると、FP持続回復',
    category: 'recovery',
    stackable: false,
    value: { flat: 2 },
    description: '25秒間、毎秒FPが2回復する',
    duration: 25
  },

  // === アクション系 ===
  {
    id: 'twohanded_posture_boost',
    name: '両手持ちの、体勢を崩す力上昇',
    category: 'attack_enhance',
    stackable: true,
    value: { multiplier: 1.1 },
    description: '両手持ち操作で二刀持ちになる武器には無効'
  },
  {
    id: 'dual_wield_posture_boost',
    name: '二刀持ちの、体勢を崩す力上昇',
    category: 'attack_enhance',
    stackable: true,
    value: { multiplier: 1.1 },
    description: '両手持ち操作で二刀持ちになる武器にも有効'
  },
  {
    id: 'critical_stamina_boost',
    name: '致命の一撃で、スタミナ回復速度上昇',
    category: 'recovery',
    stackable: false,
    value: { multiplier: 1.2 },
    description: '致命の一撃後にスタミナ回復速度が上昇'
  },
  {
    id: 'critical_rune_gain',
    name: '致命の一撃で、ルーンを獲得',
    category: 'unique',
    stackable: true,
    value: { flat: 300 },
    description: '1回ごとに300ルーン'
  },
  {
    id: 'skill_cooldown_reduction_1',
    name: 'スキルクールタイム軽減+1',
    category: 'unique',
    stackable: true,
    value: { percentage: 3 },
    description: '3%軽減（推定）'
  },
  {
    id: 'arts_gauge_boost_1',
    name: 'アーツゲージ蓄積増加+1',
    category: 'unique',
    stackable: true,
    value: { flat: 10 },
    description: '時間経過によるアーツゲージ蓄積所要時間が約10秒減'
  },

  // === 属性付加系 ===
  {
    id: 'weapon_poison_add',
    name: '出撃時の武器に毒の状態異常を付加',
    category: 'unique',
    stackable: false,
    value: { multiplier: 0.85 },
    description: '攻撃力が約0.85倍に減少'
  },
  {
    id: 'weapon_bleed_add',
    name: '出撃時の武器に出血の状態異常を付加',
    category: 'unique',
    stackable: false,
    value: { multiplier: 0.85 },
    description: '攻撃力が約0.85倍に減少。執行者の刀にも効果がある'
  },
  {
    id: 'weapon_frostbite_add',
    name: '出撃時の武器に冷気の状態異常を付加',
    category: 'unique',
    stackable: false,
    value: { multiplier: 0.85 },
    description: '攻撃力が約0.85倍に減少'
  },
  {
    id: 'weapon_magic_add',
    name: '出撃時の武器に魔力攻撃力を付加',
    category: 'unique',
    stackable: false,
    value: { multiplier: 0.85 },
    description: '復讐者の呪爪にも効果がある'
  },

  // === アイテム系 ===
  {
    id: 'throwing_dagger_start',
    name: '出撃時に「スローイングダガー」を持つ',
    category: 'unique',
    stackable: true,
    value: { flat: 8 },
    description: '8個。投擲ナイフの攻撃力上昇の対象'
  },
  {
    id: 'gravity_stone_start',
    name: '出撃時に「塊の重力石」を持つ',
    category: 'unique',
    stackable: true,
    value: { flat: 2 },
    description: '2個。投擲石の攻撃力上昇の対象'
  },
  {
    id: 'magic_pot_start',
    name: '出撃時に「魔力壺」を持つ',
    category: 'unique',
    stackable: true,
    value: { flat: 2 },
    description: '2個。投擲壺の攻撃力上昇の対象'
  },
  {
    id: 'small_pouch_start',
    name: '出撃時に「小さなポーチ」を持つ',
    category: 'unique',
    stackable: true,
    value: { flat: 1 },
    description: '1つにつきアイテムスロットが1増加'
  },

  // === マップ環境系 ===
  {
    id: 'treasure_map_display',
    name: '埋もれ宝の位置を地図に表示',
    category: 'unique',
    stackable: false,
    value: { flat: 1 },
    description: '全ての埋もれ宝を表示'
  },
  {
    id: 'shop_discount',
    name: '出撃中、ショップでの購入に必要なルーンが割引',
    category: 'unique',
    stackable: false,
    value: { percentage: 10 },
    description: '10%割引（大割引と併用すると28%）'
  },
  {
    id: 'shop_big_discount',
    name: '出撃中、ショップでの購入に必要なルーンが大割引',
    category: 'unique',
    stackable: false,
    value: { percentage: 20 },
    description: '20%割引（割引と併用すると28%）'
  },

  // === 特殊効果 ===
  {
    id: 'tower_mechanism_fp_boost',
    name: '魔術師塔の仕掛けが解除される度、永続で最大FP上昇',
    category: 'unique',
    stackable: false,
    value: { multiplier: 1.18 },
    description: '一か所につき約1.18倍。毎回乗算'
  },
  {
    id: 'prisoner_defeat_attack_boost',
    name: '封牢の囚を倒す度、永続で攻撃力上昇',
    category: 'unique',
    stackable: false,
    value: { multiplier: 1.05 },
    description: '封牢ごとに1.05倍'
  },
  {
    id: 'invader_defeat_attack_boost',
    name: '夜の侵入者を倒す度に、攻撃力上昇',
    category: 'unique',
    stackable: false,
    value: { multiplier: 1.07 },
    description: '侵入者1体につき約1.07倍　永続'
  },
  {
    id: 'poison_rot_area_attack_boost',
    name: '周囲で毒/腐敗状態発生時、攻撃力上昇',
    category: 'conditional_attack',
    stackable: false,
    conditional: true,
    value: { multiplier: 1.12 },
    description: '約1.12倍　20秒',
    condition: '周囲で毒/腐敗状態発生',
    duration: 20
  },
  {
    id: 'grease_use_attack_boost',
    name: '脂アイテム使用時、追加で攻撃力上昇',
    category: 'conditional_attack',
    stackable: false,
    conditional: true,
    value: { multiplier: 1.1 },
    description: '約1.1倍　脂と同じ約30秒',
    condition: '脂アイテム使用時',
    duration: 30
  },

  // === 投擲系強化 ===
  {
    id: 'throwing_stone_enhance',
    name: '投擲石の攻撃力上昇',
    category: 'attack_enhance',
    stackable: true,
    value: { multiplier: 1.15 },
    description: '1つ約1.15倍、2つ約1.32倍、3つ約1.52倍。対象はカッコウの輝石、扇の重力石、塊の重力石'
  },
  {
    id: 'throwing_pot_enhance',
    name: '投擲壺の攻撃力上昇',
    category: 'attack_enhance',
    stackable: true,
    value: { multiplier: 1.15 },
    description: '1つ約1.15倍、2つ約1.32倍、3つ約1.52倍'
  },
  {
    id: 'throwing_knife_enhance',
    name: '投擲ナイフの攻撃力上昇',
    category: 'attack_enhance',
    stackable: true,
    value: { multiplier: 1.14 },
    description: '1つ約1.14倍、2つ約1.31倍、3つ約1.51倍'
  },

  // === 防御系追加 ===
  {
    id: 'knockdown_defense_boost',
    name: 'ダメージで吹き飛ばされた時、強靭度とカット率上昇',
    category: 'defense',
    stackable: false,
    conditional: true,
    value: { percentage: 20 },
    description: '約20%カット　持続30秒',
    condition: 'ダメージで吹き飛ばされた時',
    duration: 30
  },

  // === 固有効果 ===
  {
    id: 'weapon_swap_element_add',
    name: '武器の持ち替え時、いずれかの属性攻撃力を付加',
    category: 'unique',
    stackable: false,
    value: { flat: 10 },
    description: '炎・魔・雷・聖のいずれかの属性攻撃力を+10するエンチャントを付与。10秒持続',
    duration: 10
  },
  {
    id: 'element_add_boost',
    name: '属性攻撃力が付加された時、属性攻撃力上昇',
    category: 'unique',
    stackable: true,
    value: { multiplier: 1.1 },
    description: '武器、アイテム、戦技の属性与ダメージが約1.1倍になる（エンチャント以外の魔術・祈祷は対象外）'
  },
  {
    id: 'weapon_swap_physical_boost',
    name: '武器の持ち替え時、物理攻撃力上昇',
    category: 'unique',
    stackable: false,
    value: { multiplier: 1.1 },
    description: '約1.1倍、10秒。一部武器は両手持ちから片手持ちに切り替えた時にも発動する',
    duration: 10
  },
  {
    id: 'gesture_madness_accumulate',
    name: 'ジェスチャー「あぐら」により、発狂が蓄積',
    category: 'unique',
    stackable: false,
    value: { flat: 1 },
    description: '姿勢を戻すまで高速で蓄積する'
  },
  {
    id: 'frostbite_stealth',
    name: '周囲で凍傷状態の発生時、自身の姿を隠す',
    category: 'unique',
    stackable: false,
    conditional: true,
    value: { flat: 1 },
    description: '約6秒　敵から見え難くなる。足音を完全に消す',
    condition: '周囲で凍傷状態の発生時',
    duration: 6
  },

  // === 追加武器種効果 ===
  {
    id: 'dagger_attack_boost',
    name: '短剣の攻撃力上昇',
    category: 'attack_power',
    stackable: true,
    value: { multiplier: 1.06 },
    description: '約1.06倍'
  },
  {
    id: 'straight_sword_attack_boost',
    name: '直剣の攻撃力上昇',
    category: 'attack_power',
    stackable: true,
    value: { multiplier: 1.06 },
    description: '約1.06倍'
  },
  {
    id: 'thrusting_sword_attack_boost',
    name: '刺剣の攻撃力上昇',
    category: 'attack_power',
    stackable: true,
    value: { multiplier: 1.06 },
    description: '約1.06倍'
  },
  {
    id: 'curved_sword_attack_boost',
    name: '曲剣の攻撃力上昇',
    category: 'attack_power',
    stackable: true,
    value: { multiplier: 1.06 },
    description: '約1.06倍'
  },
  {
    id: 'katana_attack_boost',
    name: '刀の攻撃力上昇',
    category: 'attack_power',
    stackable: true,
    value: { multiplier: 1.06 },
    description: '約1.06倍'
  },
  {
    id: 'axe_attack_boost',
    name: '斧の攻撃力上昇',
    category: 'attack_power',
    stackable: true,
    value: { multiplier: 1.06 },
    description: '約1.06倍'
  },
  {
    id: 'hammer_attack_boost',
    name: '槌の攻撃力上昇',
    category: 'attack_power',
    stackable: true,
    value: { multiplier: 1.06 },
    description: '約1.06倍'
  },
  {
    id: 'spear_attack_boost',
    name: '槍の攻撃力上昇',
    category: 'attack_power',
    stackable: true,
    value: { multiplier: 1.06 },
    description: '約1.06倍'
  },
  {
    id: 'claw_attack_boost',
    name: '爪の攻撃力上昇',
    category: 'attack_power',
    stackable: true,
    value: { multiplier: 1.06 },
    description: '約1.06倍'
  },
  {
    id: 'bow_attack_boost',
    name: '弓の攻撃力上昇',
    category: 'attack_power',
    stackable: true,
    value: { multiplier: 1.06 },
    description: '約1.06倍'
  },

  // === より多くの魔術・祈祷強化 ===
  {
    id: 'glintstone_magic_enhance',
    name: '輝剣の魔術を強化',
    category: 'attack_enhance',
    stackable: true,
    value: { multiplier: 1.12 },
    description: '約1.12倍'
  },
  {
    id: 'stonedigger_magic_enhance',
    name: '石堀りの魔術を強化',
    category: 'attack_enhance',
    stackable: true,
    value: { multiplier: 1.12 },
    description: '約1.12倍'
  },
  {
    id: 'invisible_magic_enhance',
    name: '不可視の魔術を強化',
    category: 'attack_enhance',
    stackable: true,
    value: { multiplier: 1.12 },
    description: '約1.12倍'
  },
  {
    id: 'crystal_magic_enhance',
    name: '結晶人の魔術を強化',
    category: 'attack_enhance',
    stackable: true,
    value: { multiplier: 1.12 },
    description: '約1.12倍'
  },
  {
    id: 'gravity_magic_enhance',
    name: '重力の魔術を強化',
    category: 'attack_enhance',
    stackable: true,
    value: { multiplier: 1.12 },
    description: '約1.12倍'
  },
  {
    id: 'thorn_magic_enhance',
    name: '茨の魔術を強化',
    category: 'attack_enhance',
    stackable: true,
    value: { multiplier: 1.12 },
    description: '約1.12倍'
  },
  {
    id: 'golden_order_prayer_enhance',
    name: '黄金律原理主義の祈祷を強化',
    category: 'attack_enhance',
    stackable: true,
    value: { multiplier: 1.12 },
    description: '約1.12倍'
  },
  {
    id: 'giant_flame_prayer_enhance',
    name: '巨人の火の祈祷を強化',
    category: 'attack_enhance',
    stackable: true,
    value: { multiplier: 1.12 },
    description: '約1.12倍'
  },
  {
    id: 'godhunt_prayer_enhance',
    name: '神狩りの祈祷を強化',
    category: 'attack_enhance',
    stackable: true,
    value: { multiplier: 1.12 },
    description: '約1.12倍。DOT部分には乗らない'
  },
  {
    id: 'beast_prayer_enhance',
    name: '獣の祈祷を強化',
    category: 'attack_enhance',
    stackable: true,
    value: { multiplier: 1.12 },
    description: '約1.12倍'
  },
  {
    id: 'frenzied_flame_prayer_enhance',
    name: '狂い火の祈祷を強化',
    category: 'attack_enhance',
    stackable: true,
    value: { multiplier: 1.12 },
    description: '約1.12倍'
  },
  {
    id: 'dragon_communion_prayer_enhance',
    name: '竜餐の祈祷を強化',
    category: 'attack_enhance',
    stackable: true,
    value: { multiplier: 1.12 },
    description: '約1.12倍'
  },

  // === 咆哮・ブレス強化 ===
  {
    id: 'roar_breath_enhance',
    name: '咆哮とブレス強化',
    category: 'attack_enhance',
    stackable: true,
    value: { multiplier: 1.15 },
    description: '約1.15倍。無頼漢、復讐者のアーツ、執行者のアーツでの咆哮は対象外'
  },

  // === ガードカウンター特殊効果 ===
  {
    id: 'guard_counter_hp_add',
    name: 'ガードカウンターに、自身の現在HPの一部を加える',
    category: 'attack_enhance',
    stackable: false,
    value: { percentage: 5 },
    description: 'ダメージに現在HPの5%を加算？武器種により異なる可能性有'
  },

  // === アイテム使用時HP回復 ===
  {
    id: 'moss_meat_hp_recovery',
    name: '苔薬、干し肉などのアイテム使用でHP回復',
    category: 'recovery',
    stackable: false,
    value: { flat: 20 },
    description: '回復量は20。苔薬の場合、素で6回復/secが20秒持続し120回復するので合わせて140回復'
  },

  // === キャラクター固有効果（追跡者） ===
  {
    id: 'tracker_skill_additional_attack',
    name: '【追跡者】スキル使用時、追加攻撃できる(大剣のみ)',
    category: 'unique',
    stackable: false,
    value: { flat: 12 },
    description: '火属性エンチャント+12　10秒継続。追加攻撃はスタミナ消費無し',
    duration: 10
  },
  {
    id: 'tracker_arts_fire_spread',
    name: '【追跡者】アーツ発動時、周囲を延焼',
    category: 'unique',
    stackable: false,
    value: { flat: 1 },
    description: 'アーツ発動時に周囲に延焼効果'
  },
  {
    id: 'tracker_ability_arts_gauge',
    name: '【追跡者】アビリティ発動時、アーツゲージ増加',
    category: 'unique',
    stackable: false,
    value: { percentage: 30 },
    description: 'アビリティ発動後約30％チャージ'
  },
  {
    id: 'tracker_skill_use_count',
    name: '【追跡者】スキルの使用回数+1',
    category: 'unique',
    stackable: false,
    value: { flat: 1 },
    description: 'リチャージは一回分ずつ順番に行われる'
  },

  // === キャラクター固有効果（守護者） ===
  {
    id: 'guardian_skill_duration_extend',
    name: '【守護者】スキルの持続時間延長',
    category: 'unique',
    stackable: false,
    value: { flat: 1 },
    description: '単発の吹き飛ばしではなく、吸引付きの小ダメージを連続で与えるようになる。通常は最大8ヒット、タメで最大14ヒット'
  },
  {
    id: 'guardian_arts_hp_recovery',
    name: '【守護者】アーツ発動時、周囲の味方HPを徐々に回復',
    category: 'unique',
    stackable: false,
    value: { flat: 1 },
    description: 'アーツ発動時に周囲の味方のHPを徐々に回復'
  },
  {
    id: 'guardian_ability_damage_return',
    name: '【守護者】アビリティ発動時、被ダメージを一部返す',
    category: 'unique',
    stackable: false,
    value: { flat: 1 },
    description: 'アビリティ発動時に被ダメージを一部返す'
  },

  // === キャラクター固有効果（鉄の目） ===
  {
    id: 'iron_eye_weakness_duration',
    name: '【鉄の目】弱点の持続時間を延長させる',
    category: 'unique',
    stackable: false,
    value: { flat: 3 },
    description: '約17秒→約20秒'
  },
  {
    id: 'iron_eye_skill_use_count',
    name: '【鉄の目】スキルの使用回数+1',
    category: 'unique',
    stackable: false,
    value: { flat: 1 },
    description: 'リチャージは一回分ずつ順番に行われる'
  },
  {
    id: 'iron_eye_arts_counter_enhance',
    name: '【鉄の目】アーツ発動後、刺突カウンター強化',
    category: 'unique',
    stackable: false,
    value: { multiplier: 1.2 },
    description: '効果時間約30秒',
    duration: 30
  },

  // === キャラクター固有効果（レディ） ===
  {
    id: 'lady_skill_damage_boost',
    name: '【レディ】スキルのダメージ上昇',
    category: 'unique',
    stackable: false,
    value: { multiplier: 1.2 },
    description: 'リステージ倍率50%→60%(1.2倍)'
  },
  {
    id: 'lady_arts_kill_attack_boost',
    name: '【レディ】アーツ発動中、敵撃破で攻撃力上昇',
    category: 'unique',
    stackable: false,
    conditional: true,
    value: { multiplier: 1.14 },
    description: '一体倒す毎に約1.14倍で効果時間30秒。バフは独立している',
    condition: 'アーツ発動中の敵撃破',
    duration: 30
  },

  // === キャラクター固有効果（無頼漢） ===
  {
    id: 'brigand_skill_damage_boost',
    name: '【無頼漢】スキル中に攻撃を受けると攻撃力と最大スタミナ上昇',
    category: 'unique',
    stackable: false,
    conditional: true,
    value: { multiplier: 1.1 },
    description: '攻撃力1.1倍、スタミナ1.2倍、効果時間約20秒',
    condition: 'スキル中に攻撃を受ける',
    duration: 20
  },
  {
    id: 'brigand_arts_duration_extend',
    name: '【無頼漢】アーツの効果時間延長',
    category: 'unique',
    stackable: false,
    value: { flat: 10 },
    description: 'トーテムの出現時間が20秒→30秒に延長。攻撃力上昇効果の持続時間がトーテムから離れてから10秒→15秒に延長'
  },

  // === キャラクター固有効果（復讐者） ===
  {
    id: 'avenger_arts_hp_sacrifice',
    name: '【復讐者】アーツ発動時、自身のHPと引き換えに周囲の味方のHPを全回復',
    category: 'unique',
    stackable: false,
    value: { percentage: 50 },
    description: '最大HPの半分を消費。アーツでダウン状態から蘇生した味方には適用されない'
  },
  {
    id: 'avenger_arts_ally_enhance',
    name: '【復讐者】アーツ発動時、ファミリーと味方を強化',
    category: 'unique',
    stackable: false,
    value: { multiplier: 1.25 },
    description: '与ダメージ1.25倍。効果時間30秒。自身に効果なし',
    duration: 30
  },

  // === キャラクター固有効果（隠者） ===
  {
    id: 'hermit_arts_max_hp_boost',
    name: '【隠者】アーツ発動時、最大HP上昇',
    category: 'unique',
    stackable: false,
    value: { multiplier: 1.3 },
    description: '最大HP1.3倍。効果時間30秒',
    duration: 30
  },
  {
    id: 'hermit_arts_bleed_attack_boost',
    name: '【隠者】アーツ発動時、自身が出血状態になり、攻撃力上昇',
    category: 'unique',
    stackable: false,
    conditional: true,
    value: { multiplier: 1.16 },
    description: '攻撃力1.16倍。効果時間30秒',
    condition: 'アーツ発動時',
    duration: 30
  },

  // === キャラクター固有効果（執行者） ===
  {
    id: 'executor_arts_roar_hp_recovery',
    name: '【執行者】アーツ発動中、咆哮でHP回復',
    category: 'unique',
    stackable: false,
    value: { flat: 1 },
    description: '回復は味方にも適用される'
  },
  {
    id: 'executor_skill_attack_boost_hp_loss',
    name: '【執行者】スキル中の攻撃力上昇、攻撃時にHP減少',
    category: 'unique',
    stackable: false,
    conditional: true,
    value: { multiplier: 1.08, flat: -10 },
    description: '攻撃力上昇は約1.08倍。HP減少は1回の命中につき10、空振りではHPは減少しない',
    condition: 'スキル中'
  }
]

// カテゴリで効果を絞り込む関数
export function getEffectsByCategory(category: string): RelicEffectData[] {
  return COMPREHENSIVE_EFFECTS.filter(effect => effect.category === category)
}

// IDで効果を検索する関数
export function getEffectById(id: string): RelicEffectData | undefined {
  return COMPREHENSIVE_EFFECTS.find(effect => effect.id === id)
}

// 全効果を取得する関数
export function getAllEffects(): RelicEffectData[] {
  return COMPREHENSIVE_EFFECTS
}

// カテゴリ一覧を取得する関数
export function getCategories(): string[] {
  const categories = new Set(COMPREHENSIVE_EFFECTS.map(effect => effect.category))
  return Array.from(categories)
}