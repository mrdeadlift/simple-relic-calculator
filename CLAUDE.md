# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This is a Nuxt 3 application using pnpm as the package manager.

### Setup

```bash
pnpm install
```

### Development

```bash
pnpm run dev  # Starts dev server on http://0.0.0.0:3000
```

### Build & Deploy

```bash
pnpm run build     # Build for production
pnpm run generate  # Generate static site
pnpm run preview   # Preview production build locally
```

## Project Architecture

This is a minimal Nuxt 3 starter project with the following structure:

- **Single Page Application**: Currently uses only `app.vue` as the main entry point
- **No Pages Directory**: Uses app.vue directly instead of file-based routing
- **Server Directory**: Contains server-side TypeScript configuration
- **Public Directory**: Static assets (favicon, robots.txt)

### Key Files

- `app.vue`: Main application component with NuxtWelcome
- `nuxt.config.ts`: Minimal Nuxt configuration with devtools disabled
- `package.json`: Only includes core Nuxt 3 dependency

### Technology Stack

- **Framework**: Nuxt 3.17.7
- **Package Manager**: pnpm (evidenced by pnpm-lock.yaml)
- **TypeScript**: Enabled by default in Nuxt 3
- **Development**: Uses HOST=0.0.0.0 for dev server accessibility

### Current State

ELDEN RING Nightreign遺物計算機の開発プロジェクト。キャラクターと遺物の組み合わせによるステータス計算を行うWebアプリケーション。

## Project Overview

**ELDEN RING Nightreign Relic Calculator**

このプロジェクトは、ELDEN RING Nightreignの遺物システムを基にしたビルド計算機です。

### 主要機能
- **キャラクター選択**: 8種類のキャラクター（追跡者、守護者、鉄の目、レディ、無頼漢、復讐者、隠者、執行者）
- **遺物ビルド作成**: 複数の遺物設定、各遺物に最大3つの効果選択
- **ステータス計算**: 基本能力値＋遺物効果によるリアルタイム計算
- **効果重複処理**: 〇（重複可）、✕（重複不可）、※（条件付き）の適切な処理

### データソース
- `doc/`フォルダに格納されているゲームデータ
  - `キャラクター.md`: 8キャラクターの基本能力値
  - `能力値.md`: ステータス計算の詳細検証データ
  - `遺物効果.md`: 遺物効果の分類と計算ルール
  - `固有遺物.md`: 特殊な一点物遺物の情報

### 技術構成
- **Frontend**: Nuxt 3 + Vue 3 + TypeScript
- **State Management**: Pinia (予定)
- **Styling**: TailwindCSS (予定)
- **Build Tool**: Vite (Nuxt 3内蔵)

### ディレクトリ構造
```
types/          # TypeScript型定義
composables/    # Vue Composables
components/     # UIコンポーネント
data/           # ゲームデータ
utils/          # 計算ロジック
```

## Development Guidelines

- Think in English, but generate responses in Japanese (思考は英語、回答の生成は日本語で行うように)
- 複雑な計算ロジックは十分にテストとコメントを記載する
- UIコンポーネントはレスポンシブデザインを考慮する
- ゲームデータの変更に対応しやすい柔軟な設計を心がける
