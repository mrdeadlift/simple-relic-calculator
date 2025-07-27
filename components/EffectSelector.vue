<template>
  <div class="bg-white rounded-lg shadow p-6">
    <h2 class="text-xl font-semibold text-gray-900 mb-4">
      遺物効果テスト
    </h2>
    
    <div v-if="!selectedCharacter" class="text-gray-500 text-center py-8">
      キャラクターを選択してから効果を追加してください
    </div>
    
    <div v-else class="space-y-4">
      <!-- 効果追加セクション -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          効果を追加
        </label>
        <select 
          v-model="selectedEffectId"
          class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          size="12"
        >
          <option value="" class="text-gray-500">効果を選択...</option>
          <optgroup label="能力値上昇">
            <option value="vitality_boost_1" class="hover:bg-blue-100 hover:text-blue-900 cursor-pointer">生命力+1</option>
            <option value="vitality_boost_2" class="hover:bg-blue-100 hover:text-blue-900 cursor-pointer">生命力+2</option>
            <option value="vitality_boost_3" class="hover:bg-blue-100 hover:text-blue-900 cursor-pointer">生命力+3</option>
            <option value="mind_boost_1" class="hover:bg-blue-100 hover:text-blue-900 cursor-pointer">精神力+1</option>
            <option value="mind_boost_2" class="hover:bg-blue-100 hover:text-blue-900 cursor-pointer">精神力+2</option>
            <option value="mind_boost_3" class="hover:bg-blue-100 hover:text-blue-900 cursor-pointer">精神力+3</option>
            <option value="endurance_boost_1" class="hover:bg-blue-100 hover:text-blue-900 cursor-pointer">持久力+1</option>
            <option value="endurance_boost_2" class="hover:bg-blue-100 hover:text-blue-900 cursor-pointer">持久力+2</option>
            <option value="endurance_boost_3" class="hover:bg-blue-100 hover:text-blue-900 cursor-pointer">持久力+3</option>
            <option value="strength_boost_1" class="hover:bg-blue-100 hover:text-blue-900 cursor-pointer">筋力+1</option>
            <option value="strength_boost_2" class="hover:bg-blue-100 hover:text-blue-900 cursor-pointer">筋力+2</option>
            <option value="strength_boost_3" class="hover:bg-blue-100 hover:text-blue-900 cursor-pointer">筋力+3</option>
            <option value="dexterity_boost_1" class="hover:bg-blue-100 hover:text-blue-900 cursor-pointer">技量+1</option>
            <option value="dexterity_boost_2" class="hover:bg-blue-100 hover:text-blue-900 cursor-pointer">技量+2</option>
            <option value="dexterity_boost_3" class="hover:bg-blue-100 hover:text-blue-900 cursor-pointer">技量+3</option>
            <option value="intelligence_boost_1" class="hover:bg-blue-100 hover:text-blue-900 cursor-pointer">知力+1</option>
            <option value="intelligence_boost_2" class="hover:bg-blue-100 hover:text-blue-900 cursor-pointer">知力+2</option>
            <option value="intelligence_boost_3" class="hover:bg-blue-100 hover:text-blue-900 cursor-pointer">知力+3</option>
            <option value="faith_boost_1" class="hover:bg-blue-100 hover:text-blue-900 cursor-pointer">信仰+1</option>
            <option value="faith_boost_2" class="hover:bg-blue-100 hover:text-blue-900 cursor-pointer">信仰+2</option>
            <option value="faith_boost_3" class="hover:bg-blue-100 hover:text-blue-900 cursor-pointer">信仰+3</option>
            <option value="arcane_boost_1" class="hover:bg-blue-100 hover:text-blue-900 cursor-pointer">神秘+1</option>
            <option value="arcane_boost_2" class="hover:bg-blue-100 hover:text-blue-900 cursor-pointer">神秘+2</option>
            <option value="arcane_boost_3" class="hover:bg-blue-100 hover:text-blue-900 cursor-pointer">神秘+3</option>
          </optgroup>
          <optgroup label="固有効果">
            <option value="max_hp_boost" class="hover:bg-green-100 hover:text-green-900 cursor-pointer">最大HP上昇</option>
            <option value="max_fp_boost" class="hover:bg-green-100 hover:text-green-900 cursor-pointer">最大FP上昇</option>
            <option value="max_stamina_boost" class="hover:bg-green-100 hover:text-green-900 cursor-pointer">最大スタミナ上昇</option>
          </optgroup>
        </select>
        <button 
          @click="addSelectedEffect"
          :disabled="!selectedEffectId"
          class="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          効果を追加
        </button>
      </div>
      
      <!-- 現在の効果一覧 -->
      <div v-if="selectedEffects.length > 0">
        <h3 class="text-lg font-medium text-gray-900 mb-2">適用中の効果</h3>
        <div class="space-y-2">
          <div 
            v-for="effect in selectedEffects" 
            :key="effect.id"
            class="flex items-center justify-between p-2 bg-gray-50 rounded-md"
          >
            <div>
              <span class="font-medium">{{ effect.name }}</span>
              <p class="text-sm text-gray-600">{{ effect.description }}</p>
            </div>
            <button 
              @click="removeEffect(effect.id)"
              class="text-red-600 hover:text-red-800 text-sm"
            >
              削除
            </button>
          </div>
        </div>
        
        <button 
          @click="clearEffects"
          class="mt-3 px-3 py-1 text-sm bg-gray-600 text-white rounded-md hover:bg-gray-700"
        >
          全てクリア
        </button>
      </div>
      
      <!-- 警告・エラー表示 -->
      <div v-if="relicCalculationResult.warnings.length > 0" class="mt-4">
        <div class="bg-yellow-50 border border-yellow-200 rounded-md p-3">
          <h4 class="text-sm font-medium text-yellow-800 mb-1">警告</h4>
          <ul class="text-sm text-yellow-700 space-y-1">
            <li v-for="warning in relicCalculationResult.warnings" :key="warning">
              • {{ warning }}
            </li>
          </ul>
        </div>
      </div>
      
      <div v-if="relicCalculationResult.errors.length > 0" class="mt-4">
        <div class="bg-red-50 border border-red-200 rounded-md p-3">
          <h4 class="text-sm font-medium text-red-800 mb-1">エラー</h4>
          <ul class="text-sm text-red-700 space-y-1">
            <li v-for="error in relicCalculationResult.errors" :key="error">
              • {{ error }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getEffectById } from '~/data/relic-effects'

const {
  selectedCharacter,
  selectedEffects,
  relicCalculationResult,
  addEffect,
  removeEffect,
  clearEffects
} = useStats()

const selectedEffectId = ref('')

const addSelectedEffect = () => {
  if (!selectedEffectId.value) return
  
  const effect = getEffectById(selectedEffectId.value)
  if (effect) {
    addEffect(effect)
    selectedEffectId.value = ''
  }
}
</script>