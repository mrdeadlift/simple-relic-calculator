<template>
  <div class="bg-white rounded-lg shadow p-6">
    <h2 class="text-xl font-semibold text-gray-900 mb-4">
      遺物効果テスト（簡易版）
    </h2>
    
    <div v-if="!selectedCharacter" class="text-gray-500 text-center py-8">
      キャラクターを選択してから効果を追加してください
    </div>
    
    <div v-else class="space-y-4">
      <!-- 簡易効果追加ボタン -->
      <div class="grid grid-cols-2 gap-2">
        <button 
          @click="addVitalityBoost"
          class="px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm"
        >
          生命力+3
        </button>
        <button 
          @click="addMindBoost"
          class="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
        >
          精神力+3
        </button>
        <button 
          @click="addMaxHPBoost"
          class="px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm"
        >
          最大HP上昇
        </button>
        <button 
          @click="clearEffects"
          class="px-3 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 text-sm"
        >
          全てクリア
        </button>
      </div>
      
      <!-- 現在の効果一覧 -->
      <div v-if="selectedEffects.length > 0" class="mt-4">
        <h3 class="text-sm font-medium text-gray-900 mb-2">適用中の効果</h3>
        <div class="space-y-1">
          <div 
            v-for="effect in selectedEffects" 
            :key="effect.id"
            class="text-sm bg-gray-50 rounded px-2 py-1"
          >
            {{ effect.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getEffectById } from '~/data/relic-effects'

const {
  selectedCharacter,
  selectedEffects,
  addEffect,
  clearEffects
} = useStats()

const addVitalityBoost = () => {
  const effect = getEffectById('vitality_boost_3')
  if (effect) addEffect(effect)
}

const addMindBoost = () => {
  const effect = getEffectById('mind_boost_3')
  if (effect) addEffect(effect)
}

const addMaxHPBoost = () => {
  const effect = getEffectById('max_hp_boost')
  if (effect) addEffect(effect)
}
</script>