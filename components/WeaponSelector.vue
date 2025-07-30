<template>
  <div class="bg-gray-800 rounded-lg border border-amber-600/30 p-6">
    <h3 class="text-xl font-bold text-amber-100 mb-4 flex items-center">
      <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
      武器選択
    </h3>

    <!-- 武器カテゴリ選択 -->
    <div class="mb-4">
      <label class="block text-sm font-medium text-amber-200 mb-2">
        武器カテゴリ
      </label>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
        <button
          v-for="category in WEAPON_CATEGORIES"
          :key="category.name"
          @click="selectedCategory = category.name"
          :class="[
            'px-3 py-2 rounded text-sm font-medium transition-colors',
            selectedCategory === category.name
              ? 'bg-amber-600 text-amber-50'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          ]"
        >
          {{ category.name }}
        </button>
        <button
          @click="selectedCategory = null"
          :class="[
            'px-3 py-2 rounded text-sm font-medium transition-colors',
            selectedCategory === null
              ? 'bg-amber-600 text-amber-50'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          ]"
        >
          全て
        </button>
      </div>
    </div>

    <!-- 検索・フィルタ -->
    <div class="mb-4 space-y-3">
      <!-- 検索バー -->
      <div>
        <label class="block text-sm font-medium text-amber-200 mb-1">
          武器名検索
        </label>
        <input
          v-model="searchTerm"
          type="text"
          placeholder="武器名を入力..."
          class="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-gray-100 placeholder-gray-400 focus:outline-none focus:border-amber-500"
        />
      </div>

      <!-- フィルタオプション -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
        <!-- レアリティフィルタ -->
        <div>
          <label class="block text-sm font-medium text-amber-200 mb-1">
            レアリティ
          </label>
          <select
            v-model="selectedRarity"
            class="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-gray-100 focus:outline-none focus:border-amber-500"
          >
            <option value="">全て</option>
            <option value="コモン">コモン</option>
            <option value="アンコモン">アンコモン</option>
            <option value="レア">レア</option>
            <option value="レジェンド">レジェンド</option>
          </select>
        </div>

        <!-- 装備可能フィルタ -->
        <div>
          <label class="block text-sm font-medium text-amber-200 mb-1">
            装備可能性
          </label>
          <select
            v-model="equipableFilter"
            class="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-gray-100 focus:outline-none focus:border-amber-500"
          >
            <option value="all">全て</option>
            <option value="equipable">装備可能のみ</option>
            <option value="unequipable">装備不可のみ</option>
          </select>
        </div>

        <!-- キャラクター適性フィルタ -->
        <div>
          <label class="block text-sm font-medium text-amber-200 mb-1">
            キャラクター適性
          </label>
          <select
            v-model="minCompatibility"
            class="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-gray-100 focus:outline-none focus:border-amber-500"
          >
            <option value="1">全て (1+)</option>
            <option value="2">良好 (2+)</option>
            <option value="3">優秀 (3+)</option>
            <option value="4">非常に良い (4+)</option>
            <option value="5">最適 (5)</option>
          </select>
        </div>
      </div>
    </div>

    <!-- ソートオプション -->
    <div class="mb-4">
      <label class="block text-sm font-medium text-amber-200 mb-2">
        並び順
      </label>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="option in sortOptions"
          :key="option.value"
          @click="sortBy = option.value"
          :class="[
            'px-3 py-1 rounded text-sm font-medium transition-colors',
            sortBy === option.value
              ? 'bg-amber-600 text-amber-50'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          ]"
        >
          {{ option.label }}
        </button>
        <button
          @click="sortOrder = sortOrder === 'desc' ? 'asc' : 'desc'"
          :class="[
            'px-3 py-1 rounded text-sm font-medium transition-colors',
            'bg-gray-600 text-gray-300 hover:bg-gray-500'
          ]"
        >
          {{ sortOrder === 'desc' ? '降順' : '昇順' }}
        </button>
      </div>
    </div>

    <!-- 武器リスト -->
    <div class="space-y-2 max-h-96 overflow-y-auto">
      <div
        v-for="weapon in filteredAndSortedWeapons"
        :key="weapon.id"
        @click="selectWeapon(weapon)"
        :class="[
          'p-4 rounded border cursor-pointer transition-all',
          selectedWeapon?.id === weapon.id
            ? 'bg-amber-600/20 border-amber-500'
            : 'bg-gray-700 border-gray-600 hover:bg-gray-600'
        ]"
      >
        <div class="flex justify-between items-start">
          <div class="flex-1">
            <!-- 武器名とレアリティ -->
            <div class="flex items-center mb-2">
              <h4 class="font-medium text-gray-100 mr-2">{{ weapon.name }}</h4>
              <span
                :class="[
                  'px-2 py-1 rounded text-xs font-medium',
                  getRarityColor(weapon.rarity)
                ]"
              >
                {{ weapon.rarity }}
              </span>
            </div>

            <!-- 武器種別と基本情報 -->
            <div class="flex items-center text-sm text-gray-300 mb-2">
              <span class="mr-4">{{ weapon.type }}</span>
              <span class="mr-4">攻撃力: {{ weapon.attackPower.total }}</span>
              <span class="mr-4">重量: {{ weapon.weight }}</span>
            </div>

            <!-- 能力補正 -->
            <div class="flex items-center text-sm text-gray-400 mb-2">
              <span class="mr-2">補正:</span>
              <span class="mr-3">筋{{ weapon.scaling.strength }}</span>
              <span class="mr-3">技{{ weapon.scaling.dexterity }}</span>
              <span class="mr-3">知{{ weapon.scaling.intelligence }}</span>
              <span class="mr-3">信{{ weapon.scaling.faith }}</span>
              <span>神{{ weapon.scaling.arcane }}</span>
            </div>

            <!-- キャラクター適性 -->
            <div class="flex items-center">
              <span class="text-sm text-gray-400 mr-2">{{ characterName }}適性:</span>
              <div class="flex">
                <div
                  v-for="i in 5"
                  :key="i"
                  :class="[
                    'w-3 h-3 rounded-full mr-1',
                    i <= getCharacterCompatibility(weapon)
                      ? 'bg-amber-500'
                      : 'bg-gray-600'
                  ]"
                ></div>
              </div>
            </div>
          </div>

          <!-- 装備可能状態 -->
          <div class="flex flex-col items-end">
            <div
              :class="[
                'px-2 py-1 rounded text-xs font-medium mb-2',
                canEquipWeapon(weapon, characterStats)
                  ? 'bg-green-600 text-green-100'
                  : 'bg-red-600 text-red-100'
              ]"
            >
              {{ canEquipWeapon(weapon, characterStats) ? '装備可能' : '装備不可' }}
            </div>

            <!-- 不足能力値表示 -->
            <div v-if="!canEquipWeapon(weapon, characterStats)" class="text-xs text-red-300">
              <div v-for="(missing, stat) in getMissingStats(weapon)" :key="stat">
                {{ getStatDisplayName(stat) }}: {{ missing }}不足
              </div>
            </div>
          </div>
        </div>

        <!-- 特殊効果 -->
        <div v-if="weapon.statusEffects?.length || weapon.specialEffect" class="mt-3 pt-3 border-t border-gray-600">
          <div v-if="weapon.statusEffects?.length" class="mb-2">
            <span class="text-sm text-gray-400 mr-2">状態異常:</span>
            <span
              v-for="effect in weapon.statusEffects"
              :key="effect.type"
              class="inline-block bg-purple-600 text-purple-100 px-2 py-1 rounded text-xs mr-2"
            >
              {{ effect.type }} {{ effect.buildup }}
            </span>
          </div>
          <div v-if="weapon.specialEffect" class="text-sm text-blue-300">
            特殊効果: {{ weapon.specialEffect }}
          </div>
        </div>
      </div>

      <!-- 結果が見つからない場合 -->
      <div v-if="filteredAndSortedWeapons.length === 0" class="text-center py-8 text-gray-400">
        <p>条件に一致する武器が見つかりません</p>
      </div>
    </div>

    <!-- 選択中の武器情報 -->
    <div v-if="selectedWeapon" class="mt-4 p-4 bg-gray-900 rounded border border-amber-600/50">
      <h4 class="font-medium text-amber-100 mb-2">選択中: {{ selectedWeapon.name }}</h4>
      <p class="text-sm text-gray-300">{{ selectedWeapon.description }}</p>
      <p class="text-sm text-gray-400 mt-1">入手方法: {{ selectedWeapon.obtainMethod }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import type { Weapon, WeaponSortBy, WeaponCategory } from '~/types'
import { WEAPONS, getRecommendedWeaponsForCharacter } from '~/data/weapons'
import { canEquipWeapon, getWeaponRequirementStatus } from '~/utils/weapon-calculator'
import type { BaseStats } from '~/types/character'

// 武器カテゴリ定義をローカルで定義
const WEAPON_CATEGORIES: WeaponCategory[] = [
  {
    name: '片手武器',
    types: ['短剣', '直剣', '刺剣', '曲剣', '斧', '槌', 'フレイル', '拳', '爪'],
    description: '片手で扱える軽量な武器群',
    characteristics: ['機動性が高い', '連続攻撃に優れる', '盾との併用可能']
  },
  {
    name: '両手武器',
    types: ['大剣', '特大剣', '重刺剣', '大曲剣', '両刃剣', '大斧', '大槌', '特大武器', '大槍'],
    description: '両手での使用を前提とした大型武器群',
    characteristics: ['高い攻撃力', '長いリーチ', '重い一撃']
  },
  {
    name: 'リーチ武器',
    types: ['槍', '大槍', '斧槍', '鎌', '鞭'],
    description: '長い間合いから攻撃できる武器群',
    characteristics: ['長いリーチ', '突き攻撃主体', '対複数戦に有効']
  },
  {
    name: '遠距離武器',
    types: ['弓', '大弓'],
    description: '遠距離から攻撃する射撃武器',
    characteristics: ['遠距離攻撃', '弾薬が必要', '高い命中精度']
  },
  {
    name: '触媒',
    types: ['杖', '聖印'],
    description: '魔術・祈祷を使用するための触媒',
    characteristics: ['魔術・祈祷の威力向上', '特殊な戦闘スタイル', 'FP消費']
  }
]

// Props
interface Props {
  characterName: string
  characterStats: BaseStats
  modelValue?: Weapon | null
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null
})

// Emits
const emit = defineEmits<{
  'update:modelValue': [weapon: Weapon | null]
}>()

// Reactive state
const searchTerm = ref('')
const selectedCategory = ref<string | null>(null)
const selectedRarity = ref('')
const equipableFilter = ref<'all' | 'equipable' | 'unequipable'>('all')
const minCompatibility = ref<number>(1)
const sortBy = ref<WeaponSortBy>('compatibility')
const sortOrder = ref<'asc' | 'desc'>('desc')

// 選択中の武器
const selectedWeapon = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

// ソートオプション
const sortOptions = [
  { value: 'name', label: '名前' },
  { value: 'type', label: '武器種別' },
  { value: 'rarity', label: 'レアリティ' },
  { value: 'attackPower', label: '攻撃力' },
  { value: 'compatibility', label: 'キャラクター適性' },
  { value: 'weight', label: '重量' }
]

// フィルタリングされた武器リスト
const filteredAndSortedWeapons = computed(() => {
  let filtered = WEAPONS.filter(weapon => {
    // 検索キーワードフィルタ
    if (searchTerm.value && !weapon.name.toLowerCase().includes(searchTerm.value.toLowerCase())) {
      return false
    }

    // カテゴリフィルタ
    if (selectedCategory.value) {
      const category = WEAPON_CATEGORIES.find(cat => cat.name === selectedCategory.value)
      if (category && !category.types.includes(weapon.type)) {
        return false
      }
    }

    // レアリティフィルタ
    if (selectedRarity.value && weapon.rarity !== selectedRarity.value) {
      return false
    }

    // 装備可能性フィルタ
    const equipable = canEquipWeapon(weapon, props.characterStats)
    if (equipableFilter.value === 'equipable' && !equipable) {
      return false
    }
    if (equipableFilter.value === 'unequipable' && equipable) {
      return false
    }

    // キャラクター適性フィルタ
    const compatibility = getCharacterCompatibility(weapon)
    if (compatibility < minCompatibility.value) {
      return false
    }

    return true
  })

  // ソート
  filtered.sort((a, b) => {
    let compareValue = 0

    switch (sortBy.value) {
      case 'name':
        compareValue = a.name.localeCompare(b.name)
        break
      case 'type':
        compareValue = a.type.localeCompare(b.type)
        break
      case 'rarity':
        const rarityOrder: Record<string, number> = { 'コモン': 0, 'アンコモン': 1, 'レア': 2, 'レジェンド': 3 }
        compareValue = (rarityOrder[a.rarity] || 0) - (rarityOrder[b.rarity] || 0)
        break
      case 'attackPower':
        compareValue = a.attackPower.total - b.attackPower.total
        break
      case 'compatibility':
        compareValue = getCharacterCompatibility(a) - getCharacterCompatibility(b)
        break
      case 'weight':
        compareValue = a.weight - b.weight
        break
      default:
        compareValue = 0
    }

    return sortOrder.value === 'desc' ? -compareValue : compareValue
  })

  return filtered
})

// Helper functions
function selectWeapon(weapon: Weapon) {
  selectedWeapon.value = selectedWeapon.value?.id === weapon.id ? null : weapon
}

function getCharacterCompatibility(weapon: Weapon): number {
  const characterKey = props.characterName as keyof typeof weapon.characterCompatibility
  return weapon.characterCompatibility[characterKey] ?? 1
}

function getMissingStats(weapon: Weapon) {
  const status = getWeaponRequirementStatus(weapon, props.characterStats)
  return status.missingStats
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

function getRarityColor(rarity: string): string {
  const colors: Record<string, string> = {
    'コモン': 'bg-gray-600 text-gray-200',
    'アンコモン': 'bg-green-600 text-green-100',
    'レア': 'bg-blue-600 text-blue-100',
    'レジェンド': 'bg-purple-600 text-purple-100'
  }
  return colors[rarity] || 'bg-gray-600 text-gray-200'
}

// キャラクター変更時に推奨武器を自動選択
watch(() => props.characterName, (newCharacter) => {
  if (newCharacter) {
    const recommended = getRecommendedWeaponsForCharacter(newCharacter, 4)
    if (recommended.length > 0 && !selectedWeapon.value) {
      // 最高適性の武器を自動選択
      const best = recommended.find(w => canEquipWeapon(w, props.characterStats)) || recommended[0]
      selectedWeapon.value = best
    }
  }
}, { immediate: true })
</script>