<template>
  <div class="min-h-screen bg-gray-900 flex items-center justify-center px-4">
    <div class="text-center">
      <div class="mb-8">
        <h1 class="text-6xl font-bold text-elden-gold mb-4">
          {{ error.statusCode }}
        </h1>
        <h2 class="text-2xl font-semibold text-gray-100 mb-4">
          {{ getErrorTitle() }}
        </h2>
        <p class="text-gray-400 max-w-md mx-auto">
          {{ getErrorMessage() }}
        </p>
      </div>

      <div class="space-y-4">
        <button
          @click="handleError"
          class="btn-primary"
        >
          ホームに戻る
        </button>
        
        <button
          @click="refresh"
          class="btn-secondary ml-4"
        >
          再試行
        </button>
      </div>

      <!-- 開発環境でのエラー詳細 -->
      <div v-if="isDevelopment" class="mt-8 p-4 bg-gray-800 rounded-lg text-left max-w-2xl mx-auto">
        <h3 class="text-lg font-semibold text-red-400 mb-2">開発者情報</h3>
        <pre class="text-sm text-gray-300 overflow-x-auto">{{ error }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ErrorProps {
  error: {
    statusCode: number
    statusMessage?: string
    message?: string
    stack?: string
  }
}

const props = defineProps<ErrorProps>()

// 開発環境の判定
const isDevelopment = process.env.NODE_ENV === 'development'

// エラータイトルの取得
const getErrorTitle = (): string => {
  switch (props.error.statusCode) {
    case 404:
      return 'ページが見つかりません'
    case 500:
      return 'サーバーエラーが発生しました'
    case 403:
      return 'アクセスが拒否されました'
    default:
      return 'エラーが発生しました'
  }
}

// エラーメッセージの取得
const getErrorMessage = (): string => {
  switch (props.error.statusCode) {
    case 404:
      return 'お探しのページは存在しないか、移動または削除された可能性があります。'
    case 500:
      return 'サーバー内部でエラーが発生しました。しばらく時間をおいて再度お試しください。'
    case 403:
      return 'このページにアクセスする権限がありません。'
    default:
      return props.error.statusMessage || props.error.message || '予期しないエラーが発生しました。'
  }
}

// エラーハンドリング
const handleError = () => {
  clearError({ redirect: '/' })
}

// ページの再読み込み
const refresh = () => {
  if (process.client) {
    window.location.reload()
  }
}

// SEO設定
useHead({
  title: `エラー ${props.error.statusCode} - ELDEN RING Nightreign 遺物計算機`,
  meta: [
    { name: 'robots', content: 'noindex,nofollow' }
  ]
})
</script>