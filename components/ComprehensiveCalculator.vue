<template>
  <div class="bg-white rounded-lg shadow p-6">
    <h2 class="text-xl font-semibold text-gray-900 mb-4">
      包括的遺物計算機
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
      <h3 class="text-lg font-medium text-gray-900 mb-2">遺物効果選択</h3>
      
      <!-- カテゴリタブ -->
      <div class="flex flex-wrap gap-1 mb-4">
        <button 
          v-for="category in effectCategories"
          :key="category.id"
          @click="activeCategory = category.id"
          :class="[
            'px-3 py-1 text-sm rounded-md transition-colors',
            activeCategory === category.id 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          ]"
        >
          {{ category.name }}
        </button>
      </div>
      
      <!-- 効果選択グリッド -->
      <div class="grid grid-cols-2 gap-2 mb-4 max-h-40 overflow-y-auto">
        <button
          v-for="effect in filteredEffects"
          :key="effect.id"
          @click="addEffect(effect)"
          :disabled="!canAddEffect(effect)"
          :class="[
            'text-left p-2 text-sm rounded-md border transition-colors',
            canAddEffect(effect)
              ? 'border-gray-300 hover:border-blue-500 hover:bg-blue-50'
              : 'border-gray-200 bg-gray-100 text-gray-500 cursor-not-allowed'
          ]"
        >
          <div class="font-medium">{{ effect.name }}</div>
          <div class="text-xs text-gray-500 truncate">{{ effect.description }}</div>
        </button>
      </div>
      
      <!-- 適用中の効果 -->
      <div v-if="appliedEffects.length > 0" class="mb-4">
        <h4 class="text-sm font-medium text-gray-900 mb-2">適用中の効果 ({{ appliedEffects.length }})</h4>
        <div class="space-y-1 max-h-32 overflow-y-auto">
          <div 
            v-for="effect in appliedEffects" 
            :key="effect.appliedId"
            class="flex items-center justify-between text-sm bg-gray-50 rounded px-2 py-1"
          >
            <span class="flex-1 truncate">{{ effect.name }}</span>
            <div class="flex items-center space-x-2">
              <span class="text-xs text-gray-500">
                {{ effect.stackable ? '〇' : '✕' }}
              </span>
              <button 
                @click="removeEffect(effect.appliedId)"
                class="text-red-600 hover:text-red-800 text-xs"
              >
                削除
              </button>
            </div>
          </div>
        </div>
        
        <button 
          @click="clearEffects"
          class="mt-2 px-3 py-1 text-sm bg-gray-600 text-white rounded-md hover:bg-gray-700"
        >
          全てクリア
        </button>
      </div>
    </div>
    
    <!-- ステータス表示 -->
    <div v-if="selectedCharacter">
      <h3 class="text-lg font-medium text-gray-900 mb-2">計算結果</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <!-- 基本ステータス -->
        <div class="bg-gray-50 rounded-lg p-3">
          <h4 class="text-sm font-medium text-gray-900 mb-2">基本ステータス</h4>
          <div class="space-y-1 text-sm">
            <div class="flex justify-between">
              <span>HP:</span>
              <span class="font-medium">{{ baseHP }}</span>
            </div>
            <div class="flex justify-between">
              <span>FP:</span>
              <span class="font-medium">{{ baseFP }}</span>
            </div>
            <div class="flex justify-between">
              <span>スタミナ:</span>
              <span class="font-medium">{{ baseStamina }}</span>
            </div>
          </div>
        </div>
        
        <!-- 最終ステータス -->
        <div class="bg-blue-50 rounded-lg p-3">
          <h4 class="text-sm font-medium text-blue-900 mb-2">最終ステータス</h4>
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
          </div>
        </div>
        
        <!-- 能力値詳細 -->
        <div class="bg-green-50 rounded-lg p-3">
          <h4 class="text-sm font-medium text-green-900 mb-2">能力値</h4>
          <div class="grid grid-cols-2 gap-1 text-xs">
            <div class="flex justify-between">
              <span>生命力:</span>
              <span class="font-medium">
                {{ finalVitality }}
                <span v-if="finalVitality !== baseVitality" class="text-green-600">
                  (+{{ finalVitality - baseVitality }})
                </span>
              </span>
            </div>
            <div class="flex justify-between">
              <span>精神力:</span>
              <span class="font-medium">
                {{ finalMind }}
                <span v-if="finalMind !== baseMind" class="text-green-600">
                  (+{{ finalMind - baseMind }})
                </span>
              </span>
            </div>
            <div class="flex justify-between">
              <span>持久力:</span>
              <span class="font-medium">
                {{ finalEndurance }}
                <span v-if="finalEndurance !== baseEndurance" class="text-green-600">
                  (+{{ finalEndurance - baseEndurance }})
                </span>
              </span>
            </div>
            <div class="flex justify-between">
              <span>筋力:</span>
              <span class="font-medium">
                {{ finalStrength }}
                <span v-if="finalStrength !== baseStrength" class="text-green-600">
                  (+{{ finalStrength - baseStrength }})
                </span>
              </span>
            </div>
            <div class="flex justify-between">
              <span>技量:</span>
              <span class="font-medium">
                {{ finalDexterity }}
                <span v-if="finalDexterity !== baseDexterity" class="text-green-600">
                  (+{{ finalDexterity - baseDexterity }})
                </span>
              </span>
            </div>
            <div class="flex justify-between">
              <span>知力:</span>
              <span class="font-medium">
                {{ finalIntelligence }}
                <span v-if="finalIntelligence !== baseIntelligence" class="text-green-600">
                  (+{{ finalIntelligence - baseIntelligence }})
                </span>
              </span>
            </div>
            <div class="flex justify-between">
              <span>信仰:</span>
              <span class="font-medium">
                {{ finalFaith }}
                <span v-if="finalFaith !== baseFaith" class="text-green-600">
                  (+{{ finalFaith - baseFaith }})
                </span>
              </span>
            </div>
            <div class="flex justify-between">
              <span>神秘:</span>
              <span class="font-medium">
                {{ finalArcane }}
                <span v-if="finalArcane !== baseArcane" class="text-green-600">
                  (+{{ finalArcane - baseArcane }})
                </span>
              </span>
            </div>
          </div>
        </div>
        
        <!-- 攻撃力倍率 -->
        <div class="bg-red-50 rounded-lg p-3">
          <h4 class="text-sm font-medium text-red-900 mb-2">攻撃力倍率</h4>
          <div class="space-y-1 text-xs">
            <div class="flex justify-between">
              <span>物理:</span>
              <span class="font-medium">{{ (physicalAttackMultiplier * 100).toFixed(1) }}%</span>
            </div>
            <div class="flex justify-between">
              <span>魔力:</span>
              <span class="font-medium">{{ (magicAttackMultiplier * 100).toFixed(1) }}%</span>
            </div>
            <div class="flex justify-between">
              <span>炎:</span>
              <span class="font-medium">{{ (fireAttackMultiplier * 100).toFixed(1) }}%</span>
            </div>
            <div class="flex justify-between">
              <span>雷:</span>
              <span class="font-medium">{{ (lightningAttackMultiplier * 100).toFixed(1) }}%</span>
            </div>
            <div class="flex justify-between">
              <span>聖:</span>
              <span class="font-medium">{{ (holyAttackMultiplier * 100).toFixed(1) }}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { COMPREHENSIVE_EFFECTS, getEffectsByCategory, getAllEffects } from '~/data/comprehensive-effects'

// デフォルトキャラクターデータ
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
  },
  {
    name: '無頼漢',
    baseStats: { vitality: 25, mind: 10, endurance: 25, strength: 30, dexterity: 15, intelligence: 10, faith: 10, arcane: 15 }
  },
  {
    name: '復讐者',
    baseStats: { vitality: 10, mind: 25, endurance: 10, strength: 15, dexterity: 15, intelligence: 20, faith: 30, arcane: 20 }
  },
  {
    name: '隠者',
    baseStats: { vitality: 10, mind: 25, endurance: 15, strength: 10, dexterity: 15, intelligence: 30, faith: 30, arcane: 15 }
  },
  {
    name: '執行者',
    baseStats: { vitality: 20, mind: 10, endurance: 20, strength: 15, dexterity: 30, intelligence: 10, faith: 10, arcane: 30 }
  }
]

// 効果カテゴリの定義
const effectCategories = [
  { id: 'ability_boost', name: '能力値' },
  { id: 'attack_power', name: '攻撃力' },
  { id: 'defense', name: '防御' },
  { id: 'resistance', name: '耐性' },
  { id: 'recovery', name: '回復' },
  { id: 'attack_enhance', name: '攻撃強化' },
  { id: 'conditional_attack', name: '条件攻撃' },
  { id: 'unique', name: '固有効果' }
]

// リアクティブな状態
const selectedCharacter = ref(null)
const availableCharacters = ref(defaultCharacters)
const appliedEffects = ref([])
const activeCategory = ref('ability_boost')

// フィルタされた効果
const filteredEffects = computed(() => {
  return getEffectsByCategory(activeCategory.value)
})

// 基本ステータス
const baseVitality = computed(() => selectedCharacter.value?.baseStats.vitality || 0)
const baseMind = computed(() => selectedCharacter.value?.baseStats.mind || 0)
const baseEndurance = computed(() => selectedCharacter.value?.baseStats.endurance || 0)
const baseStrength = computed(() => selectedCharacter.value?.baseStats.strength || 0)
const baseDexterity = computed(() => selectedCharacter.value?.baseStats.dexterity || 0)
const baseIntelligence = computed(() => selectedCharacter.value?.baseStats.intelligence || 0)
const baseFaith = computed(() => selectedCharacter.value?.baseStats.faith || 0)
const baseArcane = computed(() => selectedCharacter.value?.baseStats.arcane || 0)

const baseHP = computed(() => 100 + baseVitality.value * 20)
const baseFP = computed(() => 50 + baseMind.value * 5)
const baseStamina = computed(() => 80 + baseEndurance.value * 2)

// 効果による修正値の計算
const getStatBonus = (statName) => {
  return appliedEffects.value
    .filter(effect => effect.category === 'ability_boost' && effect.id.startsWith(statName))
    .reduce((sum, effect) => sum + (effect.value.flat || 0), 0)
}

const getMaxStatBonus = (statName) => {
  const effect = appliedEffects.value.find(effect => effect.id === `max_${statName}_boost`)
  return effect ? (effect.value.flat || 0) : 0
}

const getAttackMultiplier = (attackType) => {
  return appliedEffects.value
    .filter(effect => effect.category === 'attack_power' && effect.id.startsWith(attackType))
    .reduce((multiplier, effect) => multiplier * (effect.value.multiplier || 1), 1)
}

// 最終ステータス
const finalVitality = computed(() => baseVitality.value + getStatBonus('vitality'))
const finalMind = computed(() => baseMind.value + getStatBonus('mind'))
const finalEndurance = computed(() => baseEndurance.value + getStatBonus('endurance'))
const finalStrength = computed(() => baseStrength.value + getStatBonus('strength'))
const finalDexterity = computed(() => baseDexterity.value + getStatBonus('dexterity'))
const finalIntelligence = computed(() => baseIntelligence.value + getStatBonus('intelligence'))
const finalFaith = computed(() => baseFaith.value + getStatBonus('faith'))
const finalArcane = computed(() => baseArcane.value + getStatBonus('arcane'))

const finalHP = computed(() => 100 + finalVitality.value * 20 + getMaxStatBonus('hp'))
const finalFP = computed(() => 50 + finalMind.value * 5 + getMaxStatBonus('fp'))
const finalStamina = computed(() => 80 + finalEndurance.value * 2 + getMaxStatBonus('stamina'))

// 攻撃力倍率
const physicalAttackMultiplier = computed(() => getAttackMultiplier('physical_attack'))
const magicAttackMultiplier = computed(() => getAttackMultiplier('magic_attack'))
const fireAttackMultiplier = computed(() => getAttackMultiplier('fire_attack'))
const lightningAttackMultiplier = computed(() => getAttackMultiplier('lightning_attack'))
const holyAttackMultiplier = computed(() => getAttackMultiplier('holy_attack'))

// アクション
const selectCharacter = (character) => {
  selectedCharacter.value = character
  appliedEffects.value = []
}

const resetSelection = () => {
  selectedCharacter.value = null
  appliedEffects.value = []
}

const canAddEffect = (effect) => {
  if (effect.stackable) return true
  
  // 重複不可の効果の場合、同じIDがすでに適用されていないかチェック
  return !appliedEffects.value.some(applied => applied.id === effect.id)
}

const addEffect = (effect) => {
  if (!canAddEffect(effect)) return
  
  appliedEffects.value.push({
    ...effect,
    appliedId: `${effect.id}_${Date.now()}` // 適用時のユニークID
  })
}

const removeEffect = (appliedId) => {
  appliedEffects.value = appliedEffects.value.filter(effect => effect.appliedId !== appliedId)
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