/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        // ELDEN RING テーマカラー
        'elden': {
          gold: '#D4AF37',
          'gold-light': '#F4E4BC',
          'gold-dark': '#B8941F',
          amber: '#FFC107',
          'amber-light': '#FFECB3',
          'amber-dark': '#FF8F00'
        },
        // ダークテーマ用カラー
        'dark': {
          '50': '#f9fafb',
          '100': '#f3f4f6',
          '200': '#e5e7eb',
          '300': '#d1d5db',
          '400': '#9ca3af',
          '500': '#6b7280',
          '600': '#4b5563',
          '700': '#374151',
          '800': '#1f2937',
          '900': '#111827',
          '950': '#030712'
        }
      },
      fontFamily: {
        'japanese': ['Noto Sans JP', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace']
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      boxShadow: {
        'elden': '0 4px 20px rgba(212, 175, 55, 0.3)',
        'elden-lg': '0 10px 30px rgba(212, 175, 55, 0.4)'
      },
      backdropBlur: {
        'xs': '2px'
      }
    }
  },
  plugins: [
    // TailwindCSSプラグインは必要に応じて後で追加
  ],
  darkMode: 'class'
}