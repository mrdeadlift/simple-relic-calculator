<template>
  <div class="min-h-screen bg-gray-900">
    <NuxtRouteAnnouncer />
    
    <!-- ヘッダー -->
    <header class="bg-gray-800 shadow-lg border-b border-amber-600/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-6">
          <h1 class="text-4xl font-bold text-amber-100">
            ELDEN RING Nightreign 遺物計算機
          </h1>
        </div>
      </div>
    </header>

    <!-- メインコンテンツ -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <ComprehensiveCalculator />
    </main>
  </div>
</template>

<script setup>
// コンポーネントの明示的なインポート
import ComprehensiveCalculator from '~/components/ComprehensiveCalculator.vue'
</script>
