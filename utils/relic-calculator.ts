/**
 * 遺物効果をステータス修正値に変換する計算ロジック
 */

import type { RelicEffect, StatModifier, StatModifiers, EffectApplicationResult } from '~/types'
import { createModifier, createEmptyModifiers } from '~/utils/stats'

/**
 * 遺物効果をステータス修正値に変換
 */
export function convertEffectToModifiers(effect: RelicEffect): StatModifier[] {
  const modifiers: StatModifier[] = []

  switch (effect.id) {
    // === 能力値上昇効果 ===
    case 'vitality_boost_1':
    case 'vitality_boost_2':
    case 'vitality_boost_3':
      modifiers.push(createModifier('add', effect.value.base || 0, effect.name))
      break

    case 'mind_boost_1':
    case 'mind_boost_2':
    case 'mind_boost_3':
      modifiers.push(createModifier('add', effect.value.base || 0, effect.name))
      break

    case 'endurance_boost_1':
    case 'endurance_boost_2':
    case 'endurance_boost_3':
      modifiers.push(createModifier('add', effect.value.base || 0, effect.name))
      break

    case 'strength_boost_1':
    case 'strength_boost_2':
    case 'strength_boost_3':
      modifiers.push(createModifier('add', effect.value.base || 0, effect.name))
      break

    case 'dexterity_boost_1':
    case 'dexterity_boost_2':
    case 'dexterity_boost_3':
      modifiers.push(createModifier('add', effect.value.base || 0, effect.name))
      break

    case 'intelligence_boost_1':
    case 'intelligence_boost_2':
    case 'intelligence_boost_3':
      modifiers.push(createModifier('add', effect.value.base || 0, effect.name))
      break

    case 'faith_boost_1':
    case 'faith_boost_2':
    case 'faith_boost_3':
      modifiers.push(createModifier('add', effect.value.base || 0, effect.name))
      break

    case 'arcane_boost_1':
    case 'arcane_boost_2':
    case 'arcane_boost_3':
      modifiers.push(createModifier('add', effect.value.base || 0, effect.name))
      break

    case 'poise_boost_1':
    case 'poise_boost_2':
    case 'poise_boost_3':
      modifiers.push(createModifier('add', effect.value.base || 0, effect.name))
      break

    // === 固有効果（最大値上昇） ===
    case 'max_hp_boost':
      modifiers.push(createModifier('add', effect.value.fixed || 0, effect.name))
      break

    case 'max_fp_boost':
      modifiers.push(createModifier('add', effect.value.fixed || 0, effect.name))
      break

    case 'max_stamina_boost':
      modifiers.push(createModifier('add', effect.value.fixed || 0, effect.name))
      break

    // === 攻撃力上昇効果 ===
    case 'physical_attack_boost_0':
    case 'physical_attack_boost_1':
    case 'physical_attack_boost_2':
      modifiers.push(createModifier('multiply', effect.value.multiplier || 1, effect.name))
      break

    case 'magic_attack_boost_0':
    case 'magic_attack_boost_1':
    case 'magic_attack_boost_2':
      modifiers.push(createModifier('multiply', effect.value.multiplier || 1, effect.name))
      break

    case 'fire_attack_boost_0':
    case 'fire_attack_boost_1':
    case 'fire_attack_boost_2':
      modifiers.push(createModifier('multiply', effect.value.multiplier || 1, effect.name))
      break

    case 'lightning_attack_boost_0':
    case 'lightning_attack_boost_1':
    case 'lightning_attack_boost_2':
      modifiers.push(createModifier('multiply', effect.value.multiplier || 1, effect.name))
      break

    case 'holy_attack_boost_0':
    case 'holy_attack_boost_1':
    case 'holy_attack_boost_2':
      modifiers.push(createModifier('multiply', effect.value.multiplier || 1, effect.name))
      break

    default:
      console.warn(`未実装の効果: ${effect.id}`)
      break
  }

  return modifiers
}

/**
 * 遺物効果をステータス修正値のセットに適用
 */
export function applyEffectToModifiers(
  effect: RelicEffect,
  modifiers: StatModifiers
): EffectApplicationResult {
  try {
    const effectModifiers = convertEffectToModifiers(effect)
    const warnings: string[] = []

    // 効果の種類に応じて適切なステータスに修正値を追加
    effectModifiers.forEach(modifier => {
      const statKey = getStatKeyForEffect(effect)
      
      if (statKey && statKey in modifiers) {
        // 重複チェック
        if (effect.stackRule === 'non-stackable') {
          const existingModifier = modifiers[statKey].find(m => m.source === modifier.source)
          if (existingModifier) {
            warnings.push(`${effect.name}は重複不可のため、既存の効果を上書きします`)
            // 既存の修正値を削除
            modifiers[statKey] = modifiers[statKey].filter(m => m.source !== modifier.source)
          }
        }

        modifiers[statKey].push(modifier)
      }
    })

    return {
      success: true,
      modifiers: effectModifiers,
      warnings: warnings.length > 0 ? warnings : undefined
    }
  } catch (error) {
    return {
      success: false,
      modifiers: [],
      error: `効果の適用に失敗しました: ${error}`
    }
  }
}

/**
 * 効果から対応するステータスキーを取得
 */
function getStatKeyForEffect(effect: RelicEffect): keyof StatModifiers | null {
  switch (effect.id) {
    // 能力値上昇
    case 'vitality_boost_1':
    case 'vitality_boost_2':
    case 'vitality_boost_3':
      return 'vitality'

    case 'mind_boost_1':
    case 'mind_boost_2':
    case 'mind_boost_3':
      return 'mind'

    case 'endurance_boost_1':
    case 'endurance_boost_2':
    case 'endurance_boost_3':
      return 'endurance'

    case 'strength_boost_1':
    case 'strength_boost_2':
    case 'strength_boost_3':
      return 'strength'

    case 'dexterity_boost_1':
    case 'dexterity_boost_2':
    case 'dexterity_boost_3':
      return 'dexterity'

    case 'intelligence_boost_1':
    case 'intelligence_boost_2':
    case 'intelligence_boost_3':
      return 'intelligence'

    case 'faith_boost_1':
    case 'faith_boost_2':
    case 'faith_boost_3':
      return 'faith'

    case 'arcane_boost_1':
    case 'arcane_boost_2':
    case 'arcane_boost_3':
      return 'arcane'

    case 'poise_boost_1':
    case 'poise_boost_2':
    case 'poise_boost_3':
      return 'poise'

    // 固有効果
    case 'max_hp_boost':
      return 'maxHP'

    case 'max_fp_boost':
      return 'maxFP'

    case 'max_stamina_boost':
      return 'maxStamina'

    // 攻撃力上昇
    case 'physical_attack_boost_0':
    case 'physical_attack_boost_1':
    case 'physical_attack_boost_2':
      return 'physicalAttack'

    case 'magic_attack_boost_0':
    case 'magic_attack_boost_1':
    case 'magic_attack_boost_2':
      return 'magicAttack'

    case 'fire_attack_boost_0':
    case 'fire_attack_boost_1':
    case 'fire_attack_boost_2':
      return 'fireAttack'

    case 'lightning_attack_boost_0':
    case 'lightning_attack_boost_1':
    case 'lightning_attack_boost_2':
      return 'lightningAttack'

    case 'holy_attack_boost_0':
    case 'holy_attack_boost_1':
    case 'holy_attack_boost_2':
      return 'holyAttack'

    default:
      return null
  }
}

/**
 * 複数の遺物効果を一括で適用
 */
export function applyMultipleEffects(
  effects: RelicEffect[]
): { modifiers: StatModifiers; warnings: string[]; errors: string[] } {
  const modifiers = createEmptyModifiers()
  const warnings: string[] = []
  const errors: string[] = []

  effects.forEach(effect => {
    const result = applyEffectToModifiers(effect, modifiers)
    
    if (!result.success && result.error) {
      errors.push(result.error)
    }
    
    if (result.warnings) {
      warnings.push(...result.warnings)
    }
  })

  return { modifiers, warnings, errors }
}