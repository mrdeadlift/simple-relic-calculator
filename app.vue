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

<script setup lang="ts">
// SEO とパフォーマンスの設定
useHead({
  title: 'ELDEN RING Nightreign 遺物計算機',
  meta: [
    { name: 'description', content: 'ELDEN RING Nightreignの遺物とキャラクターを組み合わせたビルド計算機' },
    { name: 'keywords', content: 'ELDEN RING, Nightreign, 遺物, 計算機, ビルド' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#1f2937' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})

// パフォーマンス監視
import { performanceMonitor } from '~/utils/performance'

onMounted(() => {
  performanceMonitor.mark('app-mounted')
  
  // アプリ起動時のパフォーマンス測定
  nextTick(() => {
    performanceMonitor.measure('initial-render', 'app-mounted')
  })
})

// レスポンシブ対応
const { $viewport } = useNuxtApp()
const isMobile = computed(() => {
  if (process.client) {
    return window.innerWidth < 768
  }
  return false
})

// ダークモード対応
const isDark = ref(true) // デフォルトはダークモード

// エラーハンドリング
const handleError = (error: Error) => {
  console.error('アプリケーションエラー:', error)
  // TODO: エラー報告サービスとの連携
}

onErrorCaptured((error) => {
  handleError(error)
  return false
})
</script>
