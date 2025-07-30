<template>
  <div class="bg-gray-800 rounded-lg border border-amber-600/30 p-6">
    <h3 class="text-xl font-bold text-amber-100 mb-4 flex items-center">
      <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
      武器ステータス
    </h3>

    <div v-if="!weapon" class="text-center py-8 text-gray-400">
      <svg class="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
      <p>武器を選択してください</p>
    </div>

    <div v-else class="space-y-6">
      <!-- 武器基本情報 -->
      <div class="bg-gray-900 rounded p-4">
        <div class="flex items-start justify-between mb-3">
          <div>
            <h4 class="text-lg font-medium text-amber-100">{{ weapon.name }}</h4>
            <div class="flex items-center mt-1 space-x-3">
              <span class="text-sm text-gray-300">{{ weapon.type }}</span>
              <span
                :class="[
                  'px-2 py-1 rounded text-xs font-medium',
                  getRarityColor(weapon.rarity)
                ]"
              >
                {{ weapon.rarity }}
              </span>
            </div>
          </div>
          <div class="text-right">
            <div class="text-sm text-gray-400">重量</div>
            <div class="text-lg font-medium text-gray-200">{{ weapon.weight }}</div>
          </div>
        </div>
        <p class="text-sm text-gray-300">{{ weapon.description }}</p>
      </div>

      <!-- 強化レベル設定 -->
      <div class="bg-gray-900 rounded p-4">
        <h5 class="font-medium text-amber-200 mb-3">強化設定</h5>
        <div class="space-y-3">
          <div>
            <label class="block text-sm text-gray-300 mb-1">
              強化レベル: +{{ upgradeLevel }}
            </label>
            <input
              v-model.number="upgradeLevel"
              type="range"
              min="0"
              max="25"
              class="w-full"
            />
            <div class="flex justify-between text-xs text-gray-400 mt-1">
              <span>+0</span>
              <span>+25</span>
            </div>
          </div>
          
          <div class="flex items-center">
            <input
              v-model="twoHanded"
              type="checkbox"
              id="twoHanded"
              class="mr-2"
            />
            <label for="twoHanded" class="text-sm text-gray-300">
              両手持ち (筋力1.5倍補正)
            </label>
          </div>
        </div>
      </div>

      <!-- 攻撃力詳細 -->
      <div class="bg-gray-900 rounded p-4">
        <h5 class="font-medium text-amber-200 mb-3">攻撃力詳細</h5>
        
        <!-- 総攻撃力 -->
        <div class="bg-amber-600/10 border border-amber-600/30 rounded p-3 mb-4">
          <div class="text-center">
            <div class="text-sm text-amber-200">総攻撃力</div>
            <div class="text-2xl font-bold text-amber-100">
              {{ attackResult.finalAttack.total }}
            </div>
          </div>
        </div>

        <!-- 属性別攻撃力 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          <div
            v-for="(value, attr) in getAttributeAttackPowers()"
            :key="attr"
            :class="[
              'p-3 rounded border',
              value > 0 
                ? 'bg-blue-600/10 border-blue-600/30' 
                : 'bg-gray-700 border-gray-600'
            ]"
          >
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-300">{{ getAttributeName(attr) }}</span>
              <span 
                :class="[
                  'font-medium',
                  value > 0 ? 'text-blue-200' : 'text-gray-500'
                ]"
              >
                {{ value }}
              </span>
            </div>
          </div>
        </div>

        <!-- 攻撃力内訳 -->
        <div class="space-y-3">
          <h6 class="text-sm font-medium text-gray-300">攻撃力内訳</h6>
          
          <!-- 基本攻撃力 -->
          <div class="flex justify-between text-sm">
            <span class="text-gray-400">基本攻撃力</span>
            <span class="text-gray-200">{{ attackResult.baseAttack.total }}</span>
          </div>

          <!-- 能力補正 -->
          <div class="flex justify-between text-sm">
            <span class="text-gray-400">能力補正</span>
            <span class="text-green-300">+{{ attackResult.scalingBonus.total }}</span>
          </div>

          <!-- 強化ボーナス -->
          <div class="flex justify-between text-sm">
            <span class="text-gray-400">強化ボーナス</span>
            <span class="text-blue-300">+{{ attackResult.upgradeBonus.total }}</span>
          </div>

          <!-- 遺物効果 -->
          <div v-if="attackResult.relicBonus.total > 0" class="flex justify-between text-sm">
            <span class="text-gray-400">遺物効果</span>
            <span class="text-purple-300">+{{ attackResult.relicBonus.total }}</span>
          </div>
        </div>
      </div>

      <!-- 能力補正詳細 -->
      <div class="bg-gray-900 rounded p-4">
        <h5 class="font-medium text-amber-200 mb-3">能力補正</h5>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
          <div
            v-for="(scaling, stat) in weapon.scaling"
            :key="stat"
            :class="[
              'p-3 rounded border text-center',
              scaling !== '-' 
                ? 'bg-green-600/10 border-green-600/30' 
                : 'bg-gray-700 border-gray-600'
            ]"
          >
            <div class="text-xs text-gray-400 mb-1">{{ getStatDisplayName(stat) }}</div>
            <div 
              :class="[
                'text-lg font-bold',
                getScalingColor(scaling)
              ]"
            >
              {{ scaling }}
            </div>
            <div class="text-xs text-gray-400">
              {{ getEffectiveStatValue(stat) }}
            </div>
          </div>
        </div>
      </div>

      <!-- 必要能力値 -->
      <div class="bg-gray-900 rounded p-4">
        <h5 class="font-medium text-amber-200 mb-3">必要能力値</h5>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
          <div
            v-for="(req, stat) in weapon.requirements"
            :key="stat"
            v-if="req > 0"
            :class="[
              'p-3 rounded border text-center',
              characterStats[stat] >= req
                ? 'bg-green-600/10 border-green-600/30'
                : 'bg-red-600/10 border-red-600/30'
            ]"
          >
            <div class="text-xs text-gray-400 mb-1">{{ getStatDisplayName(stat) }}</div>
            <div class="text-sm">
              <span 
                :class="[
                  'font-medium',
                  characterStats[stat] >= req ? 'text-green-300' : 'text-red-300'
                ]"
              >
                {{ characterStats[stat] }}
              </span>
              <span class="text-gray-400 mx-1">/</span>
              <span class="text-gray-300">{{ req }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 状態異常効果 -->
      <div v-if="weapon.statusEffects?.length" class="bg-gray-900 rounded p-4">
        <h5 class="font-medium text-amber-200 mb-3">状態異常効果</h5>
        <div class="flex flex-wrap gap-2">
          <div
            v-for="effect in weapon.statusEffects"
            :key="effect.type"
            class="bg-purple-600/20 border border-purple-600/30 rounded px-3 py-2"
          >
            <div class="text-sm font-medium text-purple-200">{{ effect.type }}</div>
            <div class="text-xs text-purple-300">蓄積値: {{ effect.buildup }}</div>
          </div>
        </div>
      </div>

      <!-- 戦技情報 -->
      <div v-if="weapon.skill" class="bg-gray-900 rounded p-4">
        <h5 class="font-medium text-amber-200 mb-3">戦技</h5>
        <div class="space-y-2">
          <div class="flex justify-between items-center">
            <span class="font-medium text-blue-200">{{ weapon.skill.name }}</span>
            <span class="text-sm text-blue-300">FP: {{ weapon.skill.fpCost }}</span>
          </div>
          <p class="text-sm text-gray-300">{{ weapon.skill.description }}</p>
        </div>
      </div>

      <!-- 特殊効果 -->
      <div v-if="weapon.specialEffect" class="bg-gray-900 rounded p-4">
        <h5 class="font-medium text-amber-200 mb-3">特殊効果</h5>
        <p class="text-sm text-blue-300">{{ weapon.specialEffect }}</p>
      </div>

      <!-- キャラクター適性 -->
      <div class="bg-gray-900 rounded p-4">
        <h5 class="font-medium text-amber-200 mb-3">キャラクター適性</h5>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div
            v-for="(compatibility, character) in weapon.characterCompatibility"
            :key="character"
            :class="[
              'p-2 rounded border text-center',
              character === characterName
                ? 'bg-amber-600/20 border-amber-600/50'
                : 'bg-gray-700 border-gray-600'
            ]"
          >
            <div class="text-xs text-gray-400 mb-1">{{ character }}</div>
            <div class="flex justify-center">
              <div
                v-for="i in 5"
                :key="i"
                :class="[
                  'w-2 h-2 rounded-full mx-px',
                  i <= compatibility
                    ? 'bg-amber-500'
                    : 'bg-gray-600'
                ]"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- デバッグ情報 (開発時のみ) -->
      <details v-if="showDebug" class="bg-gray-900 rounded p-4">
        <summary class="font-medium text-amber-200 cursor-pointer mb-3">
          デバッグ情報
        </summary>
        <div class="space-y-2 text-xs font-mono text-gray-400">
          <div v-for="line in debugLog" :key="line">{{ line }}</div>
        </div>
      </details>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import type { Weapon, WeaponUpgrade, RelicEffect } from '~/types'
import type { BaseStats } from '~/types/character'
import { 
  calculateWeaponAttackPower, 
  createDefaultWeaponUpgrade,
  getWeaponCalculationLog
} from '~/utils/weapon-calculator'

// Props
interface Props {
  weapon?: Weapon | null
  characterName: string
  characterStats: BaseStats
  relicEffects?: RelicEffect[]
  showDebug?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  weapon: null,
  relicEffects: () => [],
  showDebug: false
})

// Reactive state
const upgradeLevel = ref(0)
const twoHanded = ref(false)

// Computed values
const upgrade = computed((): WeaponUpgrade => 
  createDefaultWeaponUpgrade(upgradeLevel.value)
)

const attackResult = computed(() => {
  if (!props.weapon) {
    // デフォルト値を返す
    return {
      baseAttack: { physical: 0, magic: 0, fire: 0, lightning: 0, holy: 0, total: 0 },
      scalingBonus: { physical: 0, magic: 0, fire: 0, lightning: 0, holy: 0, total: 0 },
      upgradeBonus: { physical: 0, magic: 0, fire: 0, lightning: 0, holy: 0, total: 0 },
      relicBonus: { physical: 0, magic: 0, fire: 0, lightning: 0, holy: 0, total: 0 },
      finalAttack: { physical: 0, magic: 0, fire: 0, lightning: 0, holy: 0, total: 0 },
      characterStats: { strength: 0, dexterity: 0, intelligence: 0, faith: 0, arcane: 0 }
    }
  }
  
  return calculateWeaponAttackPower(
    props.weapon,
    props.characterStats,
    upgrade.value,
    twoHanded.value,
    props.relicEffects || []
  )
})

const debugLog = computed(() => {
  if (!props.weapon || !props.showDebug) return []
  
  return getWeaponCalculationLog(
    props.weapon,
    props.characterStats,
    upgrade.value,
    twoHanded.value,
    props.relicEffects || []
  )
})

// Helper functions
function getAttributeAttackPowers() {
  const result = attackResult.value.finalAttack
  return {
    physical: result.physical,
    magic: result.magic,
    fire: result.fire,
    lightning: result.lightning,
    holy: result.holy
  }
}

function getAttributeName(attr: string): string {
  const names: Record<string, string> = {
    physical: '物理',
    magic: '魔力',
    fire: '炎',
    lightning: '雷',
    holy: '聖'
  }
  return names[attr] || attr
}

function getStatDisplayName(stat: string): string {
  const names: Record<string, string> = {
    strength: '筋力',
    dexterity: '技量',
    intelligence: '知力',
    faith: '信仰',
    arcane: '神秘'
  }
  return names[stat] || stat
}

function getScalingColor(scaling: string): string {
  const colors: Record<string, string> = {
    'S': 'text-red-400',
    'A': 'text-orange-400',
    'B': 'text-yellow-400',
    'C': 'text-green-400',
    'D': 'text-blue-400',
    'E': 'text-gray-400',
    '-': 'text-gray-600'
  }
  return colors[scaling] || 'text-gray-400'
}

function getRarityColor(rarity: string): string {
  const colors: Record<string, string> = {
    'コモン': 'bg-gray-600 text-gray-200',
    'アンコモン': 'bg-green-600 text-green-100',
    'レア': 'bg-blue-600 text-blue-100',
    'レジェンド': 'bg-purple-600 text-purple-100'
  }
  return colors[rarity] || 'bg-gray-600 text-gray-200'
}

function getEffectiveStatValue(stat: string): number {
  const statValue = props.characterStats[stat as keyof BaseStats] || 0
  if (stat === 'strength' && twoHanded.value) {
    return Math.floor(statValue * 1.5)
  }
  return statValue
}

// 武器変更時に設定をリセット
watch(() => props.weapon, () => {
  upgradeLevel.value = 0
  twoHanded.value = false
}, { immediate: true })
</script>