/**
 * 計算機のメインストア
 * キャラクター選択、遺物設定、武器設定などの状態管理
 */

import { defineStore } from 'pinia'
import type { 
  Character, 
  SelectedRelic, 
  EquippedWeapon, 
  FinalStats,
  CharacterName 
} from '~/types'
import { CHARACTERS } from '~/data/characters'

export const useCalculatorStore = defineStore('calculator', () => {
  // 状態
  const selectedCharacter = ref<Character | null>(null)
  const selectedRelics = ref<SelectedRelic[]>([])
  const equippedWeapons = ref<EquippedWeapon[]>([])
  const calculatedStats = ref<FinalStats | null>(null)
  const isCalculating = ref(false)

  // 計算結果
  const finalStats = computed(() => {
    if (!selectedCharacter.value) return null
    
    // 基本ステータス + 遺物効果 + 武器効果の計算
    // TODO: 実装予定
    return calculatedStats.value
  })

  // アクション
  const selectCharacter = (characterName: CharacterName) => {
    const character = CHARACTERS.find(c => c.name === characterName)
    if (character) {
      selectedCharacter.value = character
      // キャラクター変更時に計算を再実行
      calculateStats()
    }
  }

  const addRelic = (relic: SelectedRelic) => {
    selectedRelics.value.push(relic)
    calculateStats()
  }

  const removeRelic = (index: number) => {
    selectedRelics.value.splice(index, 1)
    calculateStats()
  }

  const updateRelic = (index: number, relic: SelectedRelic) => {
    selectedRelics.value[index] = relic
    calculateStats()
  }

  const equipWeapon = (weapon: EquippedWeapon) => {
    // 同じスロットの武器を置き換え
    const existingIndex = equippedWeapons.value.findIndex(w => w.slot === weapon.slot)
    if (existingIndex >= 0) {
      equippedWeapons.value[existingIndex] = weapon
    } else {
      equippedWeapons.value.push(weapon)
    }
    calculateStats()
  }

  const unequipWeapon = (slot: number) => {
    const index = equippedWeapons.value.findIndex(w => w.slot === slot)
    if (index >= 0) {
      equippedWeapons.value.splice(index, 1)
      calculateStats()
    }
  }

  const calculateStats = async () => {
    if (!selectedCharacter.value) return

    isCalculating.value = true
    try {
      // TODO: 実際の計算ロジックを実装
      // 基本ステータス + 遺物効果 + 武器効果
      await new Promise(resolve => setTimeout(resolve, 100)) // 計算時間のシミュレーション
      
      calculatedStats.value = {
        // 仮の値
        baseStats: selectedCharacter.value.baseStats,
        totalModifiers: {
          vitality: 0,
          mind: 0,
          endurance: 0,
          strength: 0,
          dexterity: 0,
          intelligence: 0,
          faith: 0,
          arcane: 0
        },
        attackPower: {
          physical: 0,
          magic: 0,
          fire: 0,
          lightning: 0,
          holy: 0,
          criticalRate: 100,
          criticalDamage: 150
        },
        defenses: {
          physical: 0,
          magic: 0,
          fire: 0,
          lightning: 0,
          holy: 0,
          guard: 0
        },
        resistances: {
          immunity: 0,
          robustness: 0,
          focus: 0,
          vitality: 0
        },
        maxHP: 1000 + selectedCharacter.value.baseStats.vitality * 10,
        maxFP: 100 + selectedCharacter.value.baseStats.mind * 5,
        maxStamina: 100 + selectedCharacter.value.baseStats.endurance * 3,
        equipLoad: 50,
        maxEquipLoad: 100,
        poise: 0
      }
    } finally {
      isCalculating.value = false
    }
  }

  const resetBuild = () => {
    selectedRelics.value = []
    equippedWeapons.value = []
    calculatedStats.value = null
  }

  // ゲッター
  const hasCharacter = computed(() => selectedCharacter.value !== null)
  const relicCount = computed(() => selectedRelics.value.length)
  const weaponCount = computed(() => equippedWeapons.value.length)

  return {
    // 状態
    selectedCharacter: readonly(selectedCharacter),
    selectedRelics: readonly(selectedRelics),
    equippedWeapons: readonly(equippedWeapons),
    isCalculating: readonly(isCalculating),
    
    // 計算結果
    finalStats,
    
    // アクション
    selectCharacter,
    addRelic,
    removeRelic,
    updateRelic,
    equipWeapon,
    unequipWeapon,
    calculateStats,
    resetBuild,
    
    // ゲッター
    hasCharacter,
    relicCount,
    weaponCount
  }
})