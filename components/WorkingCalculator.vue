<template>
  <div class="bg-white rounded-lg shadow p-6">
    <h2 class="text-xl font-semibold text-gray-900 mb-4">
      動作確認用計算機
    </h2>
    
    <!-- キャラクター選択 -->
    <div class="mb-6">
      <h3 class="text-lg font-medium text-gray-900 mb-2">キャラクター選択</h3>
      <div v-if="!selectedCharacter" class="grid grid-cols-2 gap-2">
        <button
          v-for="char in availableCharacters"
          :key="char.name"
          @click="selectCharacter(char)"
          class="text-left p-2 border border-gray-300 rounded-md hover:border-blue-500 hover:bg-blue-50"
        >
          <div class="font-medium">{{ char.name }}</div>
          <div class="text-sm text-gray-500">生命力: {{ char.baseStats.vitality }}</div>
        </button>
      </div>
      
      <div v-else class="flex items-center justify-between bg-gray-50 p-3 rounded-md">
        <div>
          <div class="font-medium">{{ selectedCharacter.name }}</div>
          <div class="text-sm text-gray-500">選択済み</div>
        </div>
        <button 
          @click="resetSelection"
          class="text-sm text-blue-600 hover:text-blue-800"
        >
          変更
        </button>
      </div>
    </div>
    
    <!-- 遺物効果選択 -->
    <div v-if="selectedCharacter" class="mb-6">
      <h3 class="text-lg font-medium text-gray-900 mb-2">遺物効果</h3>
      <div class="grid grid-cols-2 gap-2 mb-4">
        <button 
          @click="addVitalityEffect"
          class="px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm"
        >
          生命力+3
        </button>
        <button 
          @click="addMindEffect"
          class="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
        >
          精神力+3
        </button>
        <button 
          @click="addMaxHPEffect"
          class="px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm"
        >
          最大HP+100
        </button>
        <button 
          @click="clearEffects"
          class="px-3 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 text-sm"
        >
          効果クリア
        </button>
      </div>
      
      <!-- 適用中の効果 -->
      <div v-if="appliedEffects.length > 0" class="mb-4">
        <h4 class="text-sm font-medium text-gray-900 mb-2">適用中の効果</h4>
        <div class="space-y-1">
          <div 
            v-for="effect in appliedEffects" 
            :key="effect.id"
            class="flex items-center justify-between text-sm bg-gray-50 rounded px-2 py-1"
          >
            <span>{{ effect.name }}</span>
            <button 
              @click="removeEffect(effect.id)"
              class="text-red-600 hover:text-red-800 text-xs"
            >
              削除
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- ステータス表示 -->
    <div v-if="selectedCharacter">
      <h3 class="text-lg font-medium text-gray-900 mb-2">計算結果</h3>
      <div class="grid grid-cols-2 gap-4">
        <!-- 基本ステータス -->
        <div class="bg-gray-50 rounded-lg p-3">
          <h4 class="text-sm font-medium text-gray-900 mb-2">基本値</h4>
          <div class="space-y-1 text-sm">
            <div>HP: {{ baseHP }}</div>
            <div>FP: {{ baseFP }}</div>
            <div>スタミナ: {{ baseStamina }}</div>
            <div>生命力: {{ baseVitality }}</div>
            <div>精神力: {{ baseMind }}</div>
          </div>
        </div>
        
        <!-- 最終ステータス -->
        <div class="bg-blue-50 rounded-lg p-3">
          <h4 class="text-sm font-medium text-blue-900 mb-2">最終値</h4>
          <div class="space-y-1 text-sm">
            <div class="flex justify-between">
              <span>HP:</span>
              <span class="font-medium">
                {{ finalHP }}
                <span v-if="finalHP !== baseHP" class="text-blue-600">
                  ({{ finalHP > baseHP ? '+' : '' }}{{ finalHP - baseHP }})
                </span>
              </span>
            </div>
            <div class="flex justify-between">
              <span>FP:</span>
              <span class="font-medium">
                {{ finalFP }}
                <span v-if="finalFP !== baseFP" class="text-blue-600">
                  ({{ finalFP > baseFP ? '+' : '' }}{{ finalFP - baseFP }})
                </span>
              </span>
            </div>
            <div class="flex justify-between">
              <span>スタミナ:</span>
              <span class="font-medium">
                {{ finalStamina }}
                <span v-if="finalStamina !== baseStamina" class="text-blue-600">
                  ({{ finalStamina > baseStamina ? '+' : '' }}{{ finalStamina - baseStamina }})
                </span>
              </span>
            </div>
            <div class="flex justify-between">
              <span>生命力:</span>
              <span class="font-medium">
                {{ finalVitality }}
                <span v-if="finalVitality !== baseVitality" class="text-blue-600">
                  ({{ finalVitality > baseVitality ? '+' : '' }}{{ finalVitality - baseVitality }})
                </span>
              </span>
            </div>
            <div class="flex justify-between">
              <span>精神力:</span>
              <span class="font-medium">
                {{ finalMind }}
                <span v-if="finalMind !== baseMind" class="text-blue-600">
                  ({{ finalMind > baseMind ? '+' : '' }}{{ finalMind - baseMind }})
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 基本的なキャラクターデータ（インポートエラー回避）
const defaultCharacters = [
  {
    name: '追跡者',
    baseStats: { vitality: 25, mind: 15, endurance: 20, strength: 25, dexterity: 20, intelligence: 15, faith: 15, arcane: 15 }
  },
  {
    name: '守護者',
    baseStats: { vitality: 30, mind: 15, endurance: 25, strength: 20, dexterity: 15, intelligence: 10, faith: 15, arcane: 15 }
  },
  {
    name: '鉄の目',
    baseStats: { vitality: 15, mind: 15, endurance: 20, strength: 15, dexterity: 25, intelligence: 10, faith: 10, arcane: 20 }
  },
  {
    name: 'レディ',
    baseStats: { vitality: 15, mind: 20, endurance: 10, strength: 10, dexterity: 20, intelligence: 25, faith: 20, arcane: 15 }
  }
]

// リアクティブな状態
const selectedCharacter = ref(null)
const availableCharacters = ref(defaultCharacters)
const appliedEffects = ref([])

// 基本ステータス（computed）
const baseVitality = computed(() => selectedCharacter.value?.baseStats.vitality || 0)
const baseMind = computed(() => selectedCharacter.value?.baseStats.mind || 0)
const baseHP = computed(() => 100 + baseVitality.value * 20)
const baseFP = computed(() => 50 + baseMind.value * 5)
const baseStamina = computed(() => 80 + selectedCharacter.value?.baseStats.endurance * 2 || 0)

// 遺物効果による修正値
const vitalityBonus = computed(() => {
  return appliedEffects.value
    .filter(effect => effect.type === 'vitality')
    .reduce((sum, effect) => sum + effect.value, 0)
})

const mindBonus = computed(() => {
  return appliedEffects.value
    .filter(effect => effect.type === 'mind')
    .reduce((sum, effect) => sum + effect.value, 0)
})

const maxHPBonus = computed(() => {
  return appliedEffects.value
    .filter(effect => effect.type === 'maxHP')
    .reduce((sum, effect) => sum + effect.value, 0)
})

// 最終ステータス
const finalVitality = computed(() => baseVitality.value + vitalityBonus.value)
const finalMind = computed(() => baseMind.value + mindBonus.value)
const finalHP = computed(() => 100 + finalVitality.value * 20 + maxHPBonus.value)
const finalFP = computed(() => 50 + finalMind.value * 5)
const finalStamina = computed(() => baseStamina.value) // 簡易版では持久力効果は未実装

// アクション
const selectCharacter = (character) => {
  selectedCharacter.value = character
  appliedEffects.value = [] // 効果をリセット
}

const resetSelection = () => {
  selectedCharacter.value = null
  appliedEffects.value = []
}

const addVitalityEffect = () => {
  appliedEffects.value.push({
    id: `vitality_${Date.now()}`,
    name: '生命力+3',
    type: 'vitality',
    value: 3
  })
}

const addMindEffect = () => {
  appliedEffects.value.push({
    id: `mind_${Date.now()}`,
    name: '精神力+3',
    type: 'mind',
    value: 3
  })
}

const addMaxHPEffect = () => {
  appliedEffects.value.push({
    id: `maxHP_${Date.now()}`,
    name: '最大HP+100',
    type: 'maxHP',
    value: 100
  })
}

const removeEffect = (effectId) => {
  appliedEffects.value = appliedEffects.value.filter(effect => effect.id !== effectId)
}

const clearEffects = () => {
  appliedEffects.value = []
}

// 初期化時に実際のキャラクターデータの読み込みを試行
onMounted(async () => {
  try {
    const charactersModule = await import('~/data/characters.ts')
    if (charactersModule.CHARACTERS && charactersModule.CHARACTERS.length > 0) {
      availableCharacters.value = charactersModule.CHARACTERS
      console.log('実際のキャラクターデータを読み込みました')
    }
  } catch (error) {
    console.log('デフォルトキャラクターデータを使用します:', error.message)
  }
})
</script>