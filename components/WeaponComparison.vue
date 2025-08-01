<template>
  <div class="bg-gray-800 rounded-lg border border-amber-600/30 p-6">
    <h3 class="text-xl font-bold text-amber-100 mb-4 flex items-center">
      <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
      武器比較
    </h3>

    <!-- 比較武器選択 -->
    <div class="mb-6">
      <h4 class="text-lg font-medium text-amber-200 mb-3">比較する武器を選択</h4>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        <div
          v-for="(slot, index) in comparisonSlots"
          :key="index"
          class="bg-gray-900 rounded-lg p-4 border border-gray-600"
        >
          <div class="flex items-center justify-between mb-3">
            <span class="text-sm font-medium text-gray-300">武器 {{ index + 1 }}</span>
            <button
              v-if="slot.weapon"
              @click="removeWeapon(index)"
              class="text-red-400 hover:text-red-300 text-sm"
            >
              削除
            </button>
          </div>

          <div v-if="!slot.weapon" class="text-center py-8">
            <div class="text-gray-500 mb-3">
              <svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <select
              @change="addWeapon(index, $event.target.value)"
              class="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-gray-100 focus:outline-none focus:border-amber-500"
            >
              <option value="">武器を選択...</option>
              <option
                v-for="weapon in availableWeapons"
                :key="weapon.id"
                :value="weapon.id"
                :disabled="isWeaponSelected(weapon.id)"
              >
                {{ weapon.name }} ({{ weapon.type }})
              </option>
            </select>
          </div>

          <div v-else class="space-y-2">
            <div class="flex items-center justify-between">
              <h5 class="font-medium text-amber-100">{{ slot.weapon.name }}</h5>
              <span
                :class="[
                  'px-2 py-1 rounded text-xs font-medium',
                  getRarityColor(slot.weapon.rarity)
                ]"
              >
                {{ slot.weapon.rarity }}
              </span>
            </div>
            <div class="text-sm text-gray-300">{{ slot.weapon.type }}</div>
            <div class="text-sm text-gray-400">攻撃力: {{ slot.result.finalAttack.total }}</div>
            
            <!-- 強化レベル設定 -->
            <div class="mt-3">
              <label class="block text-xs text-gray-400 mb-1">
                強化レベル: +{{ slot.upgradeLevel }}
              </label>
              <input
                v-model.number="slot.upgradeLevel"
                type="range"
                min="0"
                max="25"
                class="w-full"
                @input="updateComparison"
              />
            </div>

            <!-- 両手持ち設定 -->
            <div class="flex items-center mt-2">
              <input
                v-model="slot.twoHanded"
                type="checkbox"
                :id="`twoHanded_${index}`"
                class="mr-2"
                @change="updateComparison"
              />
              <label :for="`twoHanded_${index}`" class="text-xs text-gray-300">
                両手持ち
              </label>
            </div>
          </div>
        </div>
      </div>

      <!-- 比較武器を追加するボタン -->
      <button
        v-if="comparisonSlots.length < maxSlots"
        @click="addSlot"
        class="px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-500 transition-colors"
      >
        比較スロットを追加
      </button>
    </div>

    <!-- 比較テーブル -->
    <div v-if="hasWeaponsToCompare" class="overflow-x-auto">
      <table class="w-full border-collapse">
        <thead>
          <tr class="border-b border-gray-600">
            <th class="text-left py-3 px-4 text-amber-200 font-medium">項目</th>
            <th
              v-for="(slot, index) in comparisonSlots.filter(s => s.weapon)"
              :key="index"
              class="text-center py-3 px-4 text-amber-200 font-medium"
            >
              {{ slot.weapon.name }}
            </th>
          </tr>
        </thead>
        <tbody class="text-sm">
          <!-- 基本情報 -->
          <tr class="border-b border-gray-700">
            <td class="py-2 px-4 text-gray-300 font-medium">武器種別</td>
            <td
              v-for="(slot, index) in comparisonSlots.filter(s => s.weapon)"
              :key="index"
              class="text-center py-2 px-4 text-gray-200"
            >
              {{ slot.weapon.type }}
            </td>
          </tr>

          <tr class="border-b border-gray-700">
            <td class="py-2 px-4 text-gray-300 font-medium">レアリティ</td>
            <td
              v-for="(slot, index) in comparisonSlots.filter(s => s.weapon)"
              :key="index"
              class="text-center py-2 px-4"
            >
              <span :class="['px-2 py-1 rounded text-xs font-medium', getRarityColor(slot.weapon.rarity)]">
                {{ slot.weapon.rarity }}
              </span>
            </td>
          </tr>

          <tr class="border-b border-gray-700">
            <td class="py-2 px-4 text-gray-300 font-medium">重量</td>
            <td
              v-for="(slot, index) in comparisonSlots.filter(s => s.weapon)"
              :key="index"
              class="text-center py-2 px-4 text-gray-200"
            >
              {{ slot.weapon.weight }}
            </td>
          </tr>

          <!-- 攻撃力比較 -->
          <tr class="border-b border-gray-700 bg-amber-600/10">
            <td class="py-2 px-4 text-amber-200 font-medium">総攻撃力</td>
            <td
              v-for="(slot, index) in comparisonSlots.filter(s => s.weapon)"
              :key="index"
              :class="[
                'text-center py-2 px-4 font-bold',
                getBestValueClass(slot.result.finalAttack.total, comparisonSlots.filter(s => s.weapon).map(s => s.result.finalAttack.total))
              ]"
            >
              {{ slot.result.finalAttack.total }}
            </td>
          </tr>

          <!-- 属性別攻撃力 -->
          <tr v-for="attr in ['physical', 'magic', 'fire', 'lightning', 'holy']" :key="attr" class="border-b border-gray-700">
            <td class="py-2 px-4 text-gray-300 font-medium">{{ getAttributeName(attr) }}攻撃力</td>
            <td
              v-for="(slot, index) in comparisonSlots.filter(s => s.weapon)"
              :key="index"
              :class="[
                'text-center py-2 px-4',
                getBestValueClass(
                  slot.result.finalAttack[attr], 
                  comparisonSlots.filter(s => s.weapon).map(s => s.result.finalAttack[attr])
                )
              ]"
            >
              {{ slot.result.finalAttack[attr] }}
            </td>
          </tr>

          <!-- 能力補正 -->
          <tr v-for="stat in ['strength', 'dexterity', 'intelligence', 'faith', 'arcane']" :key="stat" class="border-b border-gray-700">
            <td class="py-2 px-4 text-gray-300 font-medium">{{ getStatDisplayName(stat) }}補正</td>
            <td
              v-for="(slot, index) in comparisonSlots.filter(s => s.weapon)"
              :key="index"
              :class="[
                'text-center py-2 px-4 font-medium',
                getScalingColor(slot.weapon.scaling[stat])
              ]"
            >
              {{ slot.weapon.scaling[stat] }}
            </td>
          </tr>

          <!-- 必要能力値 -->
          <tr v-for="stat in ['strength', 'dexterity', 'intelligence', 'faith', 'arcane']" :key="`req_${stat}`" class="border-b border-gray-700">
            <td class="py-2 px-4 text-gray-300 font-medium">必要{{ getStatDisplayName(stat) }}</td>
            <td
              v-for="(slot, index) in comparisonSlots.filter(s => s.weapon)"
              :key="index"
              :class="[
                'text-center py-2 px-4',
                slot.weapon.requirements[stat] > 0 
                  ? (characterStats[stat] >= slot.weapon.requirements[stat] ? 'text-green-300' : 'text-red-300')
                  : 'text-gray-500'
              ]"
            >
              {{ slot.weapon.requirements[stat] || '-' }}
            </td>
          </tr>

          <!-- キャラクター適性 -->
          <tr class="border-b border-gray-700">
            <td class="py-2 px-4 text-gray-300 font-medium">{{ characterName }}適性</td>
            <td
              v-for="(slot, index) in comparisonSlots.filter(s => s.weapon)"
              :key="index"
              class="text-center py-2 px-4"
            >
              <div class="flex justify-center">
                <div
                  v-for="i in 5"
                  :key="i"
                  :class="[
                    'w-2 h-2 rounded-full mx-px',
                    i <= getCharacterCompatibility(slot.weapon)
                      ? 'bg-amber-500'
                      : 'bg-gray-600'
                  ]"
                ></div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 比較する武器がない場合 -->
    <div v-else class="text-center py-8 text-gray-400">
      <p>比較する武器を選択してください</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import type { Weapon, WeaponAttackResult, WeaponUpgrade, RelicEffect } from '~/types'
import type { BaseStats } from '~/types/character'
import { WEAPONS } from '~/data/weapons'
import { 
  calculateWeaponAttackPower, 
  createDefaultWeaponUpgrade,
  canEquipWeapon 
} from '~/utils/weapon-calculator'

// Props
interface Props {
  characterName: string
  characterStats: BaseStats
  relicEffects?: RelicEffect[]
  maxSlots?: number
}

const props = withDefaults(defineProps<Props>(), {
  relicEffects: () => [],
  maxSlots: 4
})

// 比較スロット型定義
interface ComparisonSlot {
  weapon: Weapon | null
  upgradeLevel: number
  twoHanded: boolean
  result: WeaponAttackResult
}

// Reactive state
const comparisonSlots = ref<ComparisonSlot[]>([
  { weapon: null, upgradeLevel: 0, twoHanded: false, result: createEmptyResult() },
  { weapon: null, upgradeLevel: 0, twoHanded: false, result: createEmptyResult() },
  { weapon: null, upgradeLevel: 0, twoHanded: false, result: createEmptyResult() }
])

// Computed
const availableWeapons = computed(() => {
  return WEAPONS.filter(weapon => canEquipWeapon(weapon, props.characterStats))
    .sort((a, b) => {
      const aCompat = getCharacterCompatibility(a)
      const bCompat = getCharacterCompatibility(b)
      return bCompat - aCompat
    })
})

const hasWeaponsToCompare = computed(() => {
  return comparisonSlots.value.some(slot => slot.weapon !== null)
})

// Helper functions
function createEmptyResult(): WeaponAttackResult {
  const emptyPower = { physical: 0, magic: 0, fire: 0, lightning: 0, holy: 0, total: 0 }
  return {
    baseAttack: emptyPower,
    scalingBonus: emptyPower,
    upgradeBonus: emptyPower,
    relicBonus: emptyPower,
    finalAttack: emptyPower,
    characterStats: { strength: 0, dexterity: 0, intelligence: 0, faith: 0, arcane: 0 }
  }
}

function addWeapon(slotIndex: number, weaponId: string) {
  if (!weaponId) return
  
  const weapon = WEAPONS.find(w => w.id === weaponId)
  if (!weapon) return

  comparisonSlots.value[slotIndex].weapon = weapon
  updateSlotResult(slotIndex)
}

function removeWeapon(slotIndex: number) {
  comparisonSlots.value[slotIndex] = {
    weapon: null,
    upgradeLevel: 0,
    twoHanded: false,
    result: createEmptyResult()
  }
}

function addSlot() {
  if (comparisonSlots.value.length < props.maxSlots) {
    comparisonSlots.value.push({
      weapon: null,
      upgradeLevel: 0,
      twoHanded: false,
      result: createEmptyResult()
    })
  }
}

function isWeaponSelected(weaponId: string): boolean {
  return comparisonSlots.value.some(slot => slot.weapon?.id === weaponId)
}

function updateSlotResult(slotIndex: number) {
  const slot = comparisonSlots.value[slotIndex]
  if (!slot.weapon) {
    slot.result = createEmptyResult()
    return
  }

  const upgrade = createDefaultWeaponUpgrade(slot.upgradeLevel)
  slot.result = calculateWeaponAttackPower(
    slot.weapon,
    props.characterStats,
    upgrade,
    slot.twoHanded,
    props.relicEffects
  )
}

function updateComparison() {
  comparisonSlots.value.forEach((slot, index) => {
    if (slot.weapon) {
      updateSlotResult(index)
    }
  })
}

function getCharacterCompatibility(weapon: Weapon): number {
  const characterKey = props.characterName as keyof typeof weapon.characterCompatibility
  return weapon.characterCompatibility[characterKey] ?? 1
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

function getBestValueClass(value: number, allValues: number[]): string {
  if (allValues.length === 0 || value === 0) return 'text-gray-200'
  
  const maxValue = Math.max(...allValues)
  if (value === maxValue && maxValue > 0) {
    return 'text-green-300 font-bold'
  }
  return 'text-gray-200'
}

// キャラクター変更時に結果を更新
watch(() => props.characterStats, () => {
  updateComparison()
}, { deep: true })

watch(() => props.relicEffects, () => {
  updateComparison()
}, { deep: true })
</script>