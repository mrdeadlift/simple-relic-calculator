/**
 * パフォーマンス最適化ユーティリティ
 * 大量の計算や描画処理の最適化を行う
 */

/**
 * デバウンス関数
 * 短時間に連続して実行される関数の実行を遅延させる
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null

  return (...args: Parameters<T>) => {
    if (timeout !== null) {
      clearTimeout(timeout)
    }
    
    timeout = setTimeout(() => {
      func(...args)
    }, wait)
  }
}

/**
 * スロットル関数
 * 一定時間内に1回だけ関数を実行するように制限
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => {
        inThrottle = false
      }, limit)
    }
  }
}

/**
 * メモ化関数
 * 計算結果をキャッシュして同じ入力に対する再計算を避ける
 */
export function memoize<T extends (...args: any[]) => any>(
  func: T,
  getKey?: (...args: Parameters<T>) => string
): T {
  const cache = new Map<string, ReturnType<T>>()

  return ((...args: Parameters<T>) => {
    const key = getKey ? getKey(...args) : JSON.stringify(args)
    
    if (cache.has(key)) {
      return cache.get(key)!
    }
    
    const result = func(...args)
    cache.set(key, result)
    return result
  }) as T
}

/**
 * バッチ処理ユーティリティ
 * 大量のデータを小さなチャンクに分けて処理
 */
export async function processBatch<T, R>(
  items: T[],
  processor: (item: T) => R | Promise<R>,
  batchSize: number = 100,
  delay: number = 0
): Promise<R[]> {
  const results: R[] = []
  
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize)
    const batchResults = await Promise.all(
      batch.map(item => processor(item))
    )
    
    results.push(...batchResults)
    
    // バッチ間での遅延（UIのブロックを防ぐ）
    if (delay > 0 && i + batchSize < items.length) {
      await new Promise(resolve => setTimeout(resolve, delay))
    }
  }
  
  return results
}

/**
 * 重い計算を Worker で実行するためのユーティリティ
 */
export class CalculationWorker {
  private worker: Worker | null = null

  constructor(workerScript: string) {
    if (typeof Worker !== 'undefined') {
      this.worker = new Worker(workerScript)
    }
  }

  async calculate<T, R>(data: T): Promise<R> {
    if (!this.worker) {
      throw new Error('Worker not supported')
    }

    return new Promise((resolve, reject) => {
      const handleMessage = (event: MessageEvent) => {
        this.worker!.removeEventListener('message', handleMessage)
        this.worker!.removeEventListener('error', handleError)
        resolve(event.data)
      }

      const handleError = (error: ErrorEvent) => {
        this.worker!.removeEventListener('message', handleMessage)
        this.worker!.removeEventListener('error', handleError)
        reject(error)
      }

      this.worker.addEventListener('message', handleMessage)
      this.worker.addEventListener('error', handleError)
      this.worker.postMessage(data)
    })
  }

  terminate() {
    if (this.worker) {
      this.worker.terminate()
      this.worker = null
    }
  }
}

/**
 * Intersection Observer を使った遅延読み込み
 */
export class LazyLoader {
  private observer: IntersectionObserver

  constructor(
    callback: (entries: IntersectionObserverEntry[]) => void,
    options: IntersectionObserverInit = {}
  ) {
    this.observer = new IntersectionObserver(callback, {
      rootMargin: '50px',
      threshold: 0.1,
      ...options
    })
  }

  observe(element: Element) {
    this.observer.observe(element)
  }

  unobserve(element: Element) {
    this.observer.unobserve(element)
  }

  disconnect() {
    this.observer.disconnect()
  }
}

/**
 * 仮想スクロール用のユーティリティ
 */
export interface VirtualScrollItem {
  id: string | number
  height?: number
}

export class VirtualScroller<T extends VirtualScrollItem> {
  private items: T[] = []
  private viewportHeight = 0
  private itemHeight = 50
  private scrollTop = 0
  
  constructor(
    items: T[],
    viewportHeight: number,
    itemHeight: number = 50
  ) {
    this.items = items
    this.viewportHeight = viewportHeight
    this.itemHeight = itemHeight
  }

  getVisibleRange(): { start: number; end: number; offset: number } {
    const start = Math.floor(this.scrollTop / this.itemHeight)
    const visibleCount = Math.ceil(this.viewportHeight / this.itemHeight)
    const end = Math.min(start + visibleCount + 1, this.items.length)
    const offset = start * this.itemHeight

    return { start, end, offset }
  }

  getVisibleItems(): { items: T[]; offset: number; totalHeight: number } {
    const { start, end, offset } = this.getVisibleRange()
    const items = this.items.slice(start, end)
    const totalHeight = this.items.length * this.itemHeight

    return { items, offset, totalHeight }
  }

  updateScrollPosition(scrollTop: number) {
    this.scrollTop = scrollTop
  }

  updateItems(items: T[]) {
    this.items = items
  }
}

/**
 * パフォーマンス計測ユーティリティ
 */
export class PerformanceMonitor {
  private marks = new Map<string, number>()

  mark(name: string) {
    this.marks.set(name, performance.now())
  }

  measure(name: string, startMark?: string): number {
    const endTime = performance.now()
    const startTime = startMark ? this.marks.get(startMark) : this.marks.get(name)
    
    if (startTime === undefined) {
      throw new Error(`Mark "${startMark || name}" not found`)
    }

    const duration = endTime - startTime
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`Performance [${name}]: ${duration.toFixed(2)}ms`)
    }

    return duration
  }

  clearMarks() {
    this.marks.clear()
  }
}

// グローバルなパフォーマンスモニター
export const performanceMonitor = new PerformanceMonitor()

/**
 * React/Vue コンポーネント用のパフォーマンス最適化フック
 */
export function useOptimizedComputed<T>(
  getter: () => T,
  dependencies: any[] = [],
  debounceMs: number = 0
) {
  const debouncedGetter = debounceMs > 0 ? debounce(getter, debounceMs) : getter
  return computed(() => {
    // 依存関係が変更された時のみ再計算
    return debouncedGetter()
  })
}