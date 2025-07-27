<template>
  <div class="bg-white rounded-lg shadow p-6">
    <h2 class="text-xl font-semibold text-gray-900 mb-4">
      キャラクター選択
    </h2>
    
    <div v-if="!selectedCharacter" class="space-y-3">
      <p class="text-sm text-gray-600 mb-4">
        使用するキャラクターを選択してください
      </p>
      
      <div class="grid grid-cols-1 gap-2">
        <button
          v-for="character in characters"
          :key="character.name"
          @click="selectCharacter(character)"
          class="text-left p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
        >
          <div class="font-medium text-gray-900">
            {{ character.name }}
          </div>
          <div class="text-sm text-gray-500">
            得意武器: {{ character.preferredWeapon }}
          </div>
        </button>
      </div>
    </div>
    
    <div v-else class="space-y-4">
      <div class="flex items-center justify-between">
        <div>
          <h3 class="font-medium text-gray-900">{{ selectedCharacter.name }}</h3>
          <p class="text-sm text-gray-500">{{ selectedCharacter.preferredWeapon }}</p>
        </div>
        <button
          @click="resetBuild"
          class="text-sm text-blue-600 hover:text-blue-800"
        >
          変更
        </button>
      </div>
      
      <!-- 基本能力値表示 -->
      <div class="border-t pt-4">
        <h4 class="text-sm font-medium text-gray-900 mb-3">基本能力値</h4>
        <div class="grid grid-cols-2 gap-2 text-sm">
          <div class="flex justify-between">
            <span class="text-gray-600">生命力</span>
            <span class="font-medium">{{ selectedCharacter.baseStats.vitality }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">精神力</span>
            <span class="font-medium">{{ selectedCharacter.baseStats.mind }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">持久力</span>
            <span class="font-medium">{{ selectedCharacter.baseStats.endurance }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">筋力</span>
            <span class="font-medium">{{ selectedCharacter.baseStats.strength }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">技量</span>
            <span class="font-medium">{{ selectedCharacter.baseStats.dexterity }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">知力</span>
            <span class="font-medium">{{ selectedCharacter.baseStats.intelligence }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">信仰</span>
            <span class="font-medium">{{ selectedCharacter.baseStats.faith }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">神秘</span>
            <span class="font-medium">{{ selectedCharacter.baseStats.arcane }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CHARACTERS } from '~/data/characters'

const { selectedCharacter, selectCharacter, resetBuild } = useStats()

const characters = CHARACTERS
</script>