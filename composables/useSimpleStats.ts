/**
 * シンプルなステータス管理 - デバッグ用
 */

export const useSimpleStats = () => {
  // リアクティブな状態
  const selectedCharacter = ref(null)
  const testMessage = ref('シンプルstats動作中')
  
  // キャラクター選択
  const selectCharacter = (character: any) => {
    console.log('キャラクター選択:', character.name)
    selectedCharacter.value = character
    testMessage.value = `${character.name}が選択されました`
  }
  
  // 基本ステータス計算
  const baseStats = computed(() => {
    if (!selectedCharacter.value) return null
    
    const char = selectedCharacter.value as any
    return {
      ...char.baseStats,
      maxHP: 100 + (char.baseStats.vitality * 20),
      maxFP: 50 + (char.baseStats.mind * 5),
      maxStamina: 80 + (char.baseStats.endurance * 2),
      poise: 0
    }
  })
  
  return {
    selectedCharacter: readonly(selectedCharacter),
    testMessage: readonly(testMessage),
    baseStats: readonly(baseStats),
    selectCharacter
  }
}