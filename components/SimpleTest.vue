<template>
  <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
    <h3 class="text-lg font-medium text-blue-800 mb-2">シンプルテスト</h3>
    
    <div class="space-y-2 text-sm">
      <div>
        <span class="font-medium">カウンター:</span>
        <span class="ml-2">{{ counter }}</span>
      </div>
      
      <div>
        <span class="font-medium">メッセージ:</span>
        <span class="ml-2">{{ testMessage }}</span>
      </div>
      
      <div>
        <span class="font-medium">選択キャラ:</span>
        <span class="ml-2">{{ selectedCharacter ? selectedCharacter.name : 'なし' }}</span>
      </div>
      
      <div v-if="selectedCharacter">
        <span class="font-medium">キャラクター詳細:</span>
        <div class="ml-4 mt-1 text-xs">
          <div>生命力: {{ selectedCharacter.baseStats.vitality }}</div>
          <div>精神力: {{ selectedCharacter.baseStats.mind }}</div>
          <div>計算HP: {{ 100 + selectedCharacter.baseStats.vitality * 20 }}</div>
        </div>
      </div>
      
      <div class="space-x-2">
        <button 
          @click="testFunction"
          class="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
        >
          テスト実行
        </button>
        
        <button 
          @click="clearTest"
          class="px-3 py-1 bg-gray-600 text-white rounded text-sm hover:bg-gray-700"
        >
          クリア
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// 最もシンプルなテスト
const testMessage = ref('初期メッセージ')
const selectedCharacter = ref(null)
const counter = ref(0)

// テストデータを直接定義
const testCharacters = [
  {
    name: '追跡者',
    baseStats: {
      vitality: 25,
      mind: 15,
      endurance: 20,
      strength: 25,
      dexterity: 20,
      intelligence: 15,
      faith: 15,
      arcane: 15
    }
  },
  {
    name: '守護者',
    baseStats: {
      vitality: 30,
      mind: 15,
      endurance: 25,
      strength: 20,
      dexterity: 15,
      intelligence: 10,
      faith: 15,
      arcane: 15
    }
  }
]

const testFunction = async () => {
  console.log('テスト実行中')
  counter.value++
  testMessage.value = `テスト実行 ${counter.value} 回目`
  
  // 実際のキャラクターデータを読み込みテスト
  try {
    const charactersModule = await import('~/data/characters.ts')
    console.log('インポート成功:', charactersModule)
    
    if (charactersModule.CHARACTERS && charactersModule.CHARACTERS.length > 0) {
      selectedCharacter.value = charactersModule.CHARACTERS[0]
      testMessage.value = `実データ: ${charactersModule.CHARACTERS[0].name} (HP: ${100 + charactersModule.CHARACTERS[0].baseStats.vitality * 20})`
    } else {
      // フォールバック: テストデータを使用
      selectedCharacter.value = testCharacters[0]
      testMessage.value = `テストデータ: ${testCharacters[0].name} を選択しました`
    }
  } catch (error) {
    console.error('インポートエラー:', error)
    // フォールバック: テストデータを使用
    selectedCharacter.value = testCharacters[0]
    testMessage.value = `エラー発生、テストデータを使用: ${testCharacters[0].name}`
  }
}

const clearTest = () => {
  console.log('クリア実行')
  selectedCharacter.value = null
  testMessage.value = 'クリアしました'
  counter.value = 0
}
</script>