<template>
  <div class="space-y-6">
    
    <!-- キャラクター未選択時 -->
    <div v-if="!selectedCharacter" class="bg-white rounded-lg shadow p-8 text-center">
      <div class="text-gray-400 mb-4">
        <svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>
      <h3 class="text-lg font-medium text-gray-900 mb-2">キャラクターを選択してください</h3>
      <p class="text-gray-600">左側のパネルからキャラクターを選択すると、ステータスが表示されます。</p>
    </div>
    
    <!-- ステータス表示 -->
    <div v-else class="space-y-6">
      
      <!-- 基本ステータス -->
      <div class="bg-white rounded-lg shadow p-6">
        <h2 class="text-xl font-semibold text-gray-900 mb-4">
          計算済みステータス
        </h2>
        
        <div v-if="baseStats" class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <!-- HP/FP/スタミナ -->
          <div class="bg-red-50 rounded-lg p-4">
            <div class="text-sm font-medium text-red-800">最大HP</div>
            <div class="text-2xl font-bold text-red-900">{{ baseStats.maxHP }}</div>
            <div v-if="finalStats && finalStats.maxHP !== baseStats.maxHP" class="text-sm text-red-600">
              ({{ formatDifference(finalStats.maxHP - baseStats.maxHP) }})
            </div>
          </div>
          
          <div class="bg-blue-50 rounded-lg p-4">
            <div class="text-sm font-medium text-blue-800">最大FP</div>
            <div class="text-2xl font-bold text-blue-900">{{ baseStats.maxFP }}</div>
            <div v-if="finalStats && finalStats.maxFP !== baseStats.maxFP" class="text-sm text-blue-600">
              ({{ formatDifference(finalStats.maxFP - baseStats.maxFP) }})
            </div>
          </div>
          
          <div class="bg-green-50 rounded-lg p-4">
            <div class="text-sm font-medium text-green-800">最大スタミナ</div>
            <div class="text-2xl font-bold text-green-900">{{ baseStats.maxStamina }}</div>
            <div v-if="finalStats && finalStats.maxStamina !== baseStats.maxStamina" class="text-sm text-green-600">
              ({{ formatDifference(finalStats.maxStamina - baseStats.maxStamina) }})
            </div>
          </div>
        </div>
      </div>
      
      <!-- 能力値詳細 -->
      <div class="bg-white rounded-lg shadow p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">
          能力値詳細
        </h3>
        
        <div v-if="baseStats" class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="text-center p-3 bg-gray-50 rounded-lg">
            <div class="text-sm text-gray-600">生命力</div>
            <div class="text-xl font-bold text-gray-900">{{ baseStats.vitality }}</div>
            <div class="text-xs text-gray-500">{{ selectedCharacter.statRanks.vitality }}</div>
          </div>
          
          <div class="text-center p-3 bg-gray-50 rounded-lg">
            <div class="text-sm text-gray-600">精神力</div>
            <div class="text-xl font-bold text-gray-900">{{ baseStats.mind }}</div>
            <div class="text-xs text-gray-500">{{ selectedCharacter.statRanks.mind }}</div>
          </div>
          
          <div class="text-center p-3 bg-gray-50 rounded-lg">
            <div class="text-sm text-gray-600">持久力</div>
            <div class="text-xl font-bold text-gray-900">{{ baseStats.endurance }}</div>
            <div class="text-xs text-gray-500">{{ selectedCharacter.statRanks.endurance }}</div>
          </div>
          
          <div class="text-center p-3 bg-gray-50 rounded-lg">
            <div class="text-sm text-gray-600">筋力</div>
            <div class="text-xl font-bold text-gray-900">{{ baseStats.strength }}</div>
            <div class="text-xs text-gray-500">{{ selectedCharacter.statRanks.strength }}</div>
          </div>
          
          <div class="text-center p-3 bg-gray-50 rounded-lg">
            <div class="text-sm text-gray-600">技量</div>
            <div class="text-xl font-bold text-gray-900">{{ baseStats.dexterity }}</div>
            <div class="text-xs text-gray-500">{{ selectedCharacter.statRanks.dexterity }}</div>
          </div>
          
          <div class="text-center p-3 bg-gray-50 rounded-lg">
            <div class="text-sm text-gray-600">知力</div>
            <div class="text-xl font-bold text-gray-900">{{ baseStats.intelligence }}</div>
            <div class="text-xs text-gray-500">{{ selectedCharacter.statRanks.intelligence }}</div>
          </div>
          
          <div class="text-center p-3 bg-gray-50 rounded-lg">
            <div class="text-sm text-gray-600">信仰</div>
            <div class="text-xl font-bold text-gray-900">{{ baseStats.faith }}</div>
            <div class="text-xs text-gray-500">{{ selectedCharacter.statRanks.faith }}</div>
          </div>
          
          <div class="text-center p-3 bg-gray-50 rounded-lg">
            <div class="text-sm text-gray-600">神秘</div>
            <div class="text-xl font-bold text-gray-900">{{ baseStats.arcane }}</div>
            <div class="text-xs text-gray-500">{{ selectedCharacter.statRanks.arcane }}</div>
          </div>
        </div>
      </div>
      
      <!-- 計算ログ（開発用） -->
      <div v-if="calculationLog.length > 0" class="bg-gray-50 rounded-lg p-4">
        <h4 class="text-sm font-medium text-gray-900 mb-2">計算ログ</h4>
        <div class="text-xs text-gray-600 space-y-1">
          <div v-for="log in calculationLog" :key="log">{{ log }}</div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup lang="ts">
const { selectedCharacter, baseStats, finalStats, calculationLog } = useStats()

// 差分をフォーマットする関数
function formatDifference(diff: number): string {
  if (diff > 0) return `+${diff}`
  if (diff < 0) return `${diff}`
  return '±0'
}
</script>