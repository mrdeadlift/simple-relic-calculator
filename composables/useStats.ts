/**
 * ステータス計算のComposable
 */

import type { Character, CalculatedStats, StatModifiers, BuildConfig, RelicEffect } from '~/types'
import { 
  calculateBasicStats, 
  applyModifiers, 
  createEmptyModifiers,
  mergeModifiers
} from '~/utils/stats'
import { applyMultipleEffects } from '~/utils/relic-calculator'

export const useStats = () => {
  // リアクティブな状態
  const selectedCharacter = ref<Character | null>(null)
  const buildConfig = ref<BuildConfig>({
    characterName: '',
    relics: []
  })
  
  // テスト用の選択された遺物効果
  const selectedEffects = ref<RelicEffect[]>([])
  
  // 計算済みステータス
  const baseStats = computed((): CalculatedStats | null => {
    if (!selectedCharacter.value) return null
    return calculateBasicStats(selectedCharacter.value.baseStats)
  })
  
  // 遺物からの修正値
  const relicModifiers = computed((): StatModifiers => {
    if (selectedEffects.value.length === 0) {
      return createEmptyModifiers()
    }
    
    const result = applyMultipleEffects(selectedEffects.value)
    return result.modifiers
  })
  
  // 遺物効果の計算結果（警告とエラー）
  const relicCalculationResult = computed(() => {
    if (selectedEffects.value.length === 0) {
      return { warnings: [], errors: [] }
    }
    
    const result = applyMultipleEffects(selectedEffects.value)
    return {
      warnings: result.warnings,
      errors: result.errors
    }
  })
  
  // 最終ステータス
  const finalStats = computed((): CalculatedStats | null => {
    if (!baseStats.value) return null
    
    // 全ての修正値をマージ
    const allModifiers = mergeModifiers(relicModifiers.value)
    
    return applyModifiers(baseStats.value, allModifiers)
  })
  
  // ステータスの差分を計算
  const statsDifference = computed(() => {
    if (!baseStats.value || !finalStats.value) return null
    
    const diff: Record<string, number> = {}
    
    Object.keys(baseStats.value).forEach(key => {
      const statKey = key as keyof CalculatedStats
      const baseValue = baseStats.value![statKey] as number
      const finalValue = finalStats.value![statKey] as number
      diff[key] = finalValue - baseValue
    })
    
    return diff
  })
  
  // キャラクター選択
  const selectCharacter = (character: Character) => {
    selectedCharacter.value = character
    buildConfig.value.characterName = character.name
  }
  
  // ビルド設定のリセット
  const resetBuild = () => {
    selectedCharacter.value = null
    selectedEffects.value = []
    buildConfig.value = {
      characterName: '',
      relics: []
    }
  }
  
  // 遺物効果の追加
  const addEffect = (effect: RelicEffect) => {
    selectedEffects.value.push(effect)
  }
  
  // 遺物効果の削除
  const removeEffect = (effectId: string) => {
    selectedEffects.value = selectedEffects.value.filter(effect => effect.id !== effectId)
  }
  
  // 遺物効果のクリア
  const clearEffects = () => {
    selectedEffects.value = []
  }
  
  // ステータス計算の詳細ログ
  const calculationLog = computed((): string[] => {
    const logs: string[] = []
    
    if (!selectedCharacter.value || !baseStats.value) {
      return logs
    }
    
    logs.push(`キャラクター: ${selectedCharacter.value.name}`)
    logs.push(`基本HP: ${baseStats.value.maxHP}`)
    logs.push(`基本FP: ${baseStats.value.maxFP}`)
    logs.push(`基本スタミナ: ${baseStats.value.maxStamina}`)
    
    if (selectedEffects.value.length > 0) {
      logs.push(`適用中の効果: ${selectedEffects.value.length}個`)
      selectedEffects.value.forEach(effect => {
        logs.push(`  - ${effect.name}`)
      })
    }
    
    if (finalStats.value) {
      logs.push(`最終HP: ${finalStats.value.maxHP}`)
      logs.push(`最終FP: ${finalStats.value.maxFP}`)
      logs.push(`最終スタミナ: ${finalStats.value.maxStamina}`)
    }
    
    // 警告とエラーの表示
    const { warnings, errors } = relicCalculationResult.value
    if (warnings.length > 0) {
      logs.push('警告:')
      warnings.forEach(warning => logs.push(`  - ${warning}`))
    }
    if (errors.length > 0) {
      logs.push('エラー:')
      errors.forEach(error => logs.push(`  - ${error}`))
    }
    
    return logs
  })
  
  return {
    // 状態
    selectedCharacter: readonly(selectedCharacter),
    buildConfig: readonly(buildConfig),
    selectedEffects: readonly(selectedEffects),
    
    // 計算結果
    baseStats: readonly(baseStats),
    finalStats: readonly(finalStats),
    statsDifference: readonly(statsDifference),
    calculationLog: readonly(calculationLog),
    relicCalculationResult: readonly(relicCalculationResult),
    
    // アクション
    selectCharacter,
    resetBuild,
    addEffect,
    removeEffect,
    clearEffects
  }
}