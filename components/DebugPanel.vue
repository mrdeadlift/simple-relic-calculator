<template>
  <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
    <h3 class="text-lg font-medium text-yellow-800 mb-2">デバッグ情報</h3>
    
    <div class="space-y-2 text-sm">
      <div>
        <span class="font-medium">selectedCharacter:</span>
        <span class="ml-2">{{ selectedCharacter ? selectedCharacter.name : 'null' }}</span>
      </div>
      
      <div>
        <span class="font-medium">baseStats:</span>
        <span class="ml-2">{{ baseStats ? 'あり' : 'null' }}</span>
      </div>
      
      <div v-if="baseStats">
        <span class="font-medium">基本HP:</span>
        <span class="ml-2">{{ baseStats.maxHP }}</span>
      </div>
      
      <div>
        <span class="font-medium">selectedEffects数:</span>
        <span class="ml-2">{{ selectedEffects.length }}</span>
      </div>
      
      <div v-if="selectedEffects.length > 0">
        <span class="font-medium">適用効果:</span>
        <ul class="ml-4 mt-1">
          <li v-for="effect in selectedEffects" :key="effect.id">
            {{ effect.name }}
          </li>
        </ul>
      </div>
      
      <div>
        <span class="font-medium">finalStats:</span>
        <span class="ml-2">{{ finalStats ? 'あり' : 'null' }}</span>
      </div>
      
      <div v-if="finalStats">
        <span class="font-medium">最終HP:</span>
        <span class="ml-2">{{ finalStats.maxHP }}</span>
      </div>
      
      <div>
        <span class="font-medium">計算ログ数:</span>
        <span class="ml-2">{{ calculationLog.length }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const {
  selectedCharacter,
  baseStats,
  finalStats,
  selectedEffects,
  calculationLog
} = useStats()
</script>