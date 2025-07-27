/**
 * 遺物効果データベース
 * doc/遺物効果.md から取得したデータ
 */

import type { RelicEffect, EffectCategory, StackRule } from '~/types'

// 遺物効果のデータベース
export const RELIC_EFFECTS: RelicEffect[] = [
  // === 能力値上昇 ===
  {
    id: 'vitality_boost_1',
    name: '生命力+1',
    category: 'ability_boost' as EffectCategory,
    stackRule: 'stackable' as StackRule,
    value: { base: 1 },
    description: '生命力を1上昇させる。最大HP+20'
  },
  {
    id: 'vitality_boost_2',
    name: '生命力+2',
    category: 'ability_boost' as EffectCategory,
    stackRule: 'stackable' as StackRule,
    value: { base: 2 },
    description: '生命力を2上昇させる。最大HP+40'
  },
  {
    id: 'vitality_boost_3',
    name: '生命力+3',
    category: 'ability_boost' as EffectCategory,
    stackRule: 'stackable' as StackRule,
    value: { base: 3 },
    description: '生命力を3上昇させる。最大HP+60'
  },
  {
    id: 'mind_boost_1',
    name: '精神力+1',
    category: 'ability_boost' as EffectCategory,
    stackRule: 'stackable' as StackRule,
    value: { base: 1 },
    description: '精神力を1上昇させる。最大FP+5'
  },
  {
    id: 'mind_boost_2',
    name: '精神力+2',
    category: 'ability_boost' as EffectCategory,
    stackRule: 'stackable' as StackRule,
    value: { base: 2 },
    description: '精神力を2上昇させる。最大FP+10'
  },
  {
    id: 'mind_boost_3',
    name: '精神力+3',
    category: 'ability_boost' as EffectCategory,
    stackRule: 'stackable' as StackRule,
    value: { base: 3 },
    description: '精神力を3上昇させる。最大FP+15'
  },
  {
    id: 'endurance_boost_1',
    name: '持久力+1',
    category: 'ability_boost' as EffectCategory,
    stackRule: 'stackable' as StackRule,
    value: { base: 1 },
    description: '持久力を1上昇させる。最大スタミナ+2'
  },
  {
    id: 'endurance_boost_2',
    name: '持久力+2',
    category: 'ability_boost' as EffectCategory,
    stackRule: 'stackable' as StackRule,
    value: { base: 2 },
    description: '持久力を2上昇させる。最大スタミナ+4'
  },
  {
    id: 'endurance_boost_3',
    name: '持久力+3',
    category: 'ability_boost' as EffectCategory,
    stackRule: 'stackable' as StackRule,
    value: { base: 3 },
    description: '持久力を3上昇させる。最大スタミナ+6'
  },
  {
    id: 'strength_boost_1',
    name: '筋力+1',
    category: 'ability_boost' as EffectCategory,
    stackRule: 'stackable' as StackRule,
    value: { base: 1 },
    description: '筋力を1上昇させる'
  },
  {
    id: 'strength_boost_2',
    name: '筋力+2',
    category: 'ability_boost' as EffectCategory,
    stackRule: 'stackable' as StackRule,
    value: { base: 2 },
    description: '筋力を2上昇させる'
  },
  {
    id: 'strength_boost_3',
    name: '筋力+3',
    category: 'ability_boost' as EffectCategory,
    stackRule: 'stackable' as StackRule,
    value: { base: 3 },
    description: '筋力を3上昇させる'
  },
  {
    id: 'dexterity_boost_1',
    name: '技量+1',
    category: 'ability_boost' as EffectCategory,
    stackRule: 'stackable' as StackRule,
    value: { base: 1 },
    description: '技量を1上昇させる'
  },
  {
    id: 'dexterity_boost_2',
    name: '技量+2',
    category: 'ability_boost' as EffectCategory,
    stackRule: 'stackable' as StackRule,
    value: { base: 2 },
    description: '技量を2上昇させる'
  },
  {
    id: 'dexterity_boost_3',
    name: '技量+3',
    category: 'ability_boost' as EffectCategory,
    stackRule: 'stackable' as StackRule,
    value: { base: 3 },
    description: '技量を3上昇させる'
  },
  {
    id: 'intelligence_boost_1',
    name: '知力+1',
    category: 'ability_boost' as EffectCategory,
    stackRule: 'stackable' as StackRule,
    value: { base: 1 },
    description: '知力を1上昇させる'
  },
  {
    id: 'intelligence_boost_2',
    name: '知力+2',
    category: 'ability_boost' as EffectCategory,
    stackRule: 'stackable' as StackRule,
    value: { base: 2 },
    description: '知力を2上昇させる'
  },
  {
    id: 'intelligence_boost_3',
    name: '知力+3',
    category: 'ability_boost' as EffectCategory,
    stackRule: 'stackable' as StackRule,
    value: { base: 3 },
    description: '知力を3上昇させる'
  },
  {
    id: 'faith_boost_1',
    name: '信仰+1',
    category: 'ability_boost' as EffectCategory,
    stackRule: 'stackable' as StackRule,
    value: { base: 1 },
    description: '信仰を1上昇させる'
  },
  {
    id: 'faith_boost_2',
    name: '信仰+2',
    category: 'ability_boost' as EffectCategory,
    stackRule: 'stackable' as StackRule,
    value: { base: 2 },
    description: '信仰を2上昇させる'
  },
  {
    id: 'faith_boost_3',
    name: '信仰+3',
    category: 'ability_boost' as EffectCategory,
    stackRule: 'stackable' as StackRule,
    value: { base: 3 },
    description: '信仰を3上昇させる'
  },
  {
    id: 'arcane_boost_1',
    name: '神秘+1',
    category: 'ability_boost' as EffectCategory,
    stackRule: 'stackable' as StackRule,
    value: { base: 1 },
    description: '神秘を1上昇させる'
  },
  {
    id: 'arcane_boost_2',
    name: '神秘+2',
    category: 'ability_boost' as EffectCategory,
    stackRule: 'stackable' as StackRule,
    value: { base: 2 },
    description: '神秘を2上昇させる'
  },
  {
    id: 'arcane_boost_3',
    name: '神秘+3',
    category: 'ability_boost' as EffectCategory,
    stackRule: 'stackable' as StackRule,
    value: { base: 3 },
    description: '神秘を3上昇させる'
  },
  {
    id: 'poise_boost_1',
    name: '強靭度+1',
    category: 'ability_boost' as EffectCategory,
    stackRule: 'stackable' as StackRule,
    value: { base: 1 },
    description: '強靭度を1上昇させる'
  },
  {
    id: 'poise_boost_2',
    name: '強靭度+2',
    category: 'ability_boost' as EffectCategory,
    stackRule: 'stackable' as StackRule,
    value: { base: 2 },
    description: '強靭度を2上昇させる'
  },
  {
    id: 'poise_boost_3',
    name: '強靭度+3',
    category: 'ability_boost' as EffectCategory,
    stackRule: 'stackable' as StackRule,
    value: { base: 3 },
    description: '強靭度を3上昇させる'
  },

  // === 固有効果（最大値上昇） ===
  {
    id: 'max_hp_boost',
    name: '最大HP上昇',
    category: 'ability_boost' as EffectCategory,
    stackRule: 'non-stackable' as StackRule,
    value: { fixed: 100 },
    description: '最大HPを100上昇させる。生命力+との重複可能'
  },
  {
    id: 'max_fp_boost',
    name: '最大FP上昇',
    category: 'ability_boost' as EffectCategory,
    stackRule: 'non-stackable' as StackRule,
    value: { fixed: 25 },
    description: '最大FPを25上昇させる。精神力+との重複可能'
  },
  {
    id: 'max_stamina_boost',
    name: '最大スタミナ上昇',
    category: 'ability_boost' as EffectCategory,
    stackRule: 'non-stackable' as StackRule,
    value: { fixed: 10 },
    description: '最大スタミナを10上昇させる。持久力+との重複可能'
  },

  // === 攻撃力上昇 ===
  {
    id: 'physical_attack_boost_0',
    name: '物理攻撃力上昇+0',
    category: 'attack_power' as EffectCategory,
    stackRule: 'stackable' as StackRule,
    value: { multiplier: 1.03 },
    description: '物理攻撃力を約3%上昇させる。魔術・祈祷にも効果あり'
  },
  {
    id: 'physical_attack_boost_1',
    name: '物理攻撃力上昇+1',
    category: 'attack_power' as EffectCategory,
    stackRule: 'stackable' as StackRule,
    value: { multiplier: 1.04 },
    description: '物理攻撃力を約4%上昇させる。魔術・祈祷にも効果あり'
  },
  {
    id: 'physical_attack_boost_2',
    name: '物理攻撃力上昇+2',
    category: 'attack_power' as EffectCategory,
    stackRule: 'stackable' as StackRule,
    value: { multiplier: 1.05 },
    description: '物理攻撃力を約5%上昇させる。魔術・祈祷にも効果あり'
  },
  {
    id: 'magic_attack_boost_0',
    name: '魔力攻撃力上昇+0',
    category: 'attack_power' as EffectCategory,
    stackRule: 'stackable' as StackRule,
    value: { multiplier: 1.04 },
    description: '魔力攻撃力を約4%上昇させる。魔術・祈祷にも効果あり'
  },
  {
    id: 'magic_attack_boost_1',
    name: '魔力攻撃力上昇+1',
    category: 'attack_power' as EffectCategory,
    stackRule: 'stackable' as StackRule,
    value: { multiplier: 1.05 },
    description: '魔力攻撃力を約5%上昇させる。魔術・祈祷にも効果あり'
  },
  {
    id: 'magic_attack_boost_2',
    name: '魔力攻撃力上昇+2',
    category: 'attack_power' as EffectCategory,
    stackRule: 'stackable' as StackRule,
    value: { multiplier: 1.06 },
    description: '魔力攻撃力を約6%上昇させる。魔術・祈祷にも効果あり'
  },
  {
    id: 'fire_attack_boost_0',
    name: '炎攻撃力上昇+0',
    category: 'attack_power' as EffectCategory,
    stackRule: 'stackable' as StackRule,
    value: { multiplier: 1.04 },
    description: '炎攻撃力を約4%上昇させる。魔術・祈祷にも効果あり'
  },
  {
    id: 'fire_attack_boost_1',
    name: '炎攻撃力上昇+1',
    category: 'attack_power' as EffectCategory,
    stackRule: 'stackable' as StackRule,
    value: { multiplier: 1.05 },
    description: '炎攻撃力を約5%上昇させる。魔術・祈祷にも効果あり'
  },
  {
    id: 'fire_attack_boost_2',
    name: '炎攻撃力上昇+2',
    category: 'attack_power' as EffectCategory,
    stackRule: 'stackable' as StackRule,
    value: { multiplier: 1.06 },
    description: '炎攻撃力を約6%上昇させる。魔術・祈祷にも効果あり'
  },
  {
    id: 'lightning_attack_boost_0',
    name: '雷攻撃力上昇+0',
    category: 'attack_power' as EffectCategory,
    stackRule: 'stackable' as StackRule,
    value: { multiplier: 1.04 },
    description: '雷攻撃力を約4%上昇させる。魔術・祈祷にも効果あり'
  },
  {
    id: 'lightning_attack_boost_1',
    name: '雷攻撃力上昇+1',
    category: 'attack_power' as EffectCategory,
    stackRule: 'stackable' as StackRule,
    value: { multiplier: 1.05 },
    description: '雷攻撃力を約5%上昇させる。魔術・祈祷にも効果あり'
  },
  {
    id: 'lightning_attack_boost_2',
    name: '雷攻撃力上昇+2',
    category: 'attack_power' as EffectCategory,
    stackRule: 'stackable' as StackRule,
    value: { multiplier: 1.06 },
    description: '雷攻撃力を約6%上昇させる。魔術・祈祷にも効果あり'
  },
  {
    id: 'holy_attack_boost_0',
    name: '聖攻撃力上昇+0',
    category: 'attack_power' as EffectCategory,
    stackRule: 'stackable' as StackRule,
    value: { multiplier: 1.04 },
    description: '聖攻撃力を約4%上昇させる。魔術・祈祷にも効果あり'
  },
  {
    id: 'holy_attack_boost_1',
    name: '聖攻撃力上昇+1',
    category: 'attack_power' as EffectCategory,
    stackRule: 'stackable' as StackRule,
    value: { multiplier: 1.05 },
    description: '聖攻撃力を約5%上昇させる。魔術・祈祷にも効果あり'
  },
  {
    id: 'holy_attack_boost_2',
    name: '聖攻撃力上昇+2',
    category: 'attack_power' as EffectCategory,
    stackRule: 'stackable' as StackRule,
    value: { multiplier: 1.06 },
    description: '聖攻撃力を約6%上昇させる。魔術・祈祷にも効果あり'
  }
]

// 効果IDから検索する関数
export function getEffectById(id: string): RelicEffect | undefined {
  return RELIC_EFFECTS.find(effect => effect.id === id)
}

// カテゴリで効果を絞り込む関数
export function getEffectsByCategory(category: EffectCategory): RelicEffect[] {
  return RELIC_EFFECTS.filter(effect => effect.category === category)
}

// 全効果名を取得する関数
export function getAllEffectNames(): string[] {
  return RELIC_EFFECTS.map(effect => effect.name)
}

// 効果名から検索する関数
export function getEffectByName(name: string): RelicEffect | undefined {
  return RELIC_EFFECTS.find(effect => effect.name === name)
}