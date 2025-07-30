<template>
  <div class="bg-gray-800 rounded-lg shadow-xl border border-amber-600/20 p-6">
    <!-- キャラクター選択 -->
    <div class="mb-6">
      <h3 class="text-xl font-medium text-amber-100 mb-3">キャラクター選択</h3>
      <div v-if="!selectedCharacter" class="grid grid-cols-2 gap-2">
        <button
          v-for="char in availableCharacters"
          :key="char.name"
          @click="selectCharacter(char)"
          class="text-left p-2 border border-gray-600 rounded-md hover:border-amber-500 hover:bg-gray-700 bg-gray-750 text-gray-200"
        >
          <div class="font-medium text-lg text-amber-200">{{ char.name }}</div>
          <div class="text-base text-gray-400">
            生命力: {{ char.baseStats.vitality }}
          </div>
        </button>
      </div>

      <div
        v-else
        class="flex items-center justify-between bg-gray-700 border border-amber-600/30 p-3 rounded-md"
      >
        <div>
          <div class="font-medium text-lg text-amber-200">{{ selectedCharacter.name }}</div>
          <div class="text-base text-gray-300">選択済み</div>
        </div>
        <button
          @click="resetSelection"
          class="text-base text-amber-400 hover:text-amber-300"
        >
          変更
        </button>
      </div>
    </div>

    <!-- レベル選択 -->
    <div v-if="selectedCharacter" class="mb-6">
      <h3 class="text-xl font-medium text-amber-100 mb-3">レベル選択</h3>
      <div class="bg-gray-700 border border-amber-600/30 rounded-lg p-4">
        <div class="flex items-center justify-between mb-3">
          <span class="text-base text-gray-200">レベル: {{ selectedLevel }}</span>
          <div class="flex gap-2">
            <button
              @click="changeLevel(-1)"
              :disabled="selectedLevel <= 1"
              :class="[
                'px-3 py-1 text-sm rounded border transition-colors',
                selectedLevel <= 1
                  ? 'border-gray-600 bg-gray-800 text-gray-500 cursor-not-allowed'
                  : 'border-amber-600 bg-amber-700 text-white hover:bg-amber-600'
              ]"
            >
              -1
            </button>
            <button
              @click="changeLevel(1)"
              :disabled="selectedLevel >= 15"
              :class="[
                'px-3 py-1 text-sm rounded border transition-colors',
                selectedLevel >= 15
                  ? 'border-gray-600 bg-gray-800 text-gray-500 cursor-not-allowed'
                  : 'border-amber-600 bg-amber-700 text-white hover:bg-amber-600'
              ]"
            >
              +1
            </button>
          </div>
        </div>
        
        <!-- レベルスライダー -->
        <div class="mb-3">
          <input
            v-model.number="selectedLevel"
            type="range"
            min="1"
            max="15"
            class="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
          />
          <div class="flex justify-between text-xs text-gray-400 mt-1">
            <span>Lv.1</span>
            <span>Lv.15</span>
          </div>
        </div>
        
        <!-- レベル別ステータス表示 -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
          <div class="bg-gray-600 rounded p-2">
            <div class="text-gray-300">生命力</div>
            <div class="font-medium text-gray-100">{{ currentLevelStats.vitality }}</div>
          </div>
          <div class="bg-gray-600 rounded p-2">
            <div class="text-gray-300">精神力</div>
            <div class="font-medium text-gray-100">{{ currentLevelStats.mind }}</div>
          </div>
          <div class="bg-gray-600 rounded p-2">
            <div class="text-gray-300">持久力</div>
            <div class="font-medium text-gray-100">{{ currentLevelStats.endurance }}</div>
          </div>
          <div class="bg-gray-600 rounded p-2">
            <div class="text-gray-300">筋力</div>
            <div class="font-medium text-gray-100">{{ currentLevelStats.strength }}</div>
          </div>
          <div class="bg-gray-600 rounded p-2">
            <div class="text-gray-300">技量</div>
            <div class="font-medium text-gray-100">{{ currentLevelStats.dexterity }}</div>
          </div>
          <div class="bg-gray-600 rounded p-2">
            <div class="text-gray-300">知力</div>
            <div class="font-medium text-gray-100">{{ currentLevelStats.intelligence }}</div>
          </div>
          <div class="bg-gray-600 rounded p-2">
            <div class="text-gray-300">信仰</div>
            <div class="font-medium text-gray-100">{{ currentLevelStats.faith }}</div>
          </div>
          <div class="bg-gray-600 rounded p-2">
            <div class="text-gray-300">神秘</div>
            <div class="font-medium text-gray-100">{{ currentLevelStats.arcane }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 武器選択 -->
    <div v-if="selectedCharacter" class="mb-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- 武器選択 -->
        <WeaponSelector
          v-model="selectedWeapon"
          :character-name="selectedCharacter.name"
          :character-stats="currentLevelStats"
        />

        <!-- 武器ステータス -->
        <WeaponStats
          :weapon="selectedWeapon"
          :character-name="selectedCharacter.name"
          :character-stats="currentLevelStats"
          :relic-effects="selectedEffects"
          :show-debug="false"
        />
      </div>
    </div>

    <!-- 遺物効果選択 -->
    <div v-if="selectedCharacter" class="mb-6">
      <h3 class="text-xl font-medium text-amber-100 mb-3">遺物効果選択</h3>

      <!-- カテゴリタブ -->
      <div class="flex flex-wrap gap-1 mb-4">
        <button
          v-for="category in effectCategories"
          :key="category.id"
          @click="activeCategory = category.id"
          :class="[
            'px-4 py-2 text-base rounded-md transition-colors',
            activeCategory === category.id
              ? 'bg-amber-600 text-white border border-amber-500'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600 border border-gray-600',
          ]"
        >
          {{ category.name }}
        </button>
      </div>

      <!-- 効果選択グリッド -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4 max-h-96 overflow-y-auto"
      >
        <button
          v-for="effect in filteredEffects"
          :key="effect.id"
          @click="addEffect(effect)"
          :disabled="!canAddEffect(effect)"
          :class="[
            'text-left p-4 text-base rounded-md border transition-colors min-h-[4rem]',
            canAddEffect(effect)
              ? 'border-gray-600 hover:border-amber-500 hover:bg-gray-700 bg-gray-750 text-gray-200'
              : 'border-gray-700 bg-gray-800 text-gray-500 cursor-not-allowed',
          ]"
        >
          <div class="font-medium text-base mb-1 text-amber-200">{{ effect.name }}</div>
          <div class="text-sm text-gray-400 line-clamp-2">
            {{ effect.description }}
          </div>
        </button>
      </div>

      <!-- 適用中の効果 -->
      <div v-if="appliedEffects.length > 0" class="mb-4">
        <h4 class="text-base font-medium text-amber-100 mb-2">
          適用中の効果 ({{ appliedEffects.length }})
        </h4>
        <div class="space-y-1 max-h-32 overflow-y-auto">
          <div
            v-for="effect in appliedEffects"
            :key="effect.appliedId"
            class="flex items-center justify-between text-base bg-gray-700 border border-gray-600 rounded px-3 py-2"
          >
            <span class="flex-1 truncate text-gray-200">{{ effect.name }}</span>
            <div class="flex items-center space-x-2">
              <span class="text-sm text-gray-400">
                {{ effect.stackable ? "〇" : "✕" }}
              </span>
              <button
                @click="removeEffect(effect.appliedId)"
                class="text-red-400 hover:text-red-300 text-sm"
              >
                削除
              </button>
            </div>
          </div>
        </div>

        <button
          @click="clearEffects"
          class="mt-2 px-4 py-2 text-base bg-red-700 text-white rounded-md hover:bg-red-600"
        >
          全てクリア
        </button>
      </div>
    </div>

    <!-- ステータス表示 -->
    <div v-if="selectedCharacter">
      <h3 class="text-xl font-medium text-amber-100 mb-3">計算結果</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- 基本ステータス -->
        <div class="bg-gray-700 border border-gray-600 rounded-lg p-3">
          <h4 class="text-base font-medium text-amber-100 mb-2">
            基本ステータス
          </h4>
          <div class="space-y-1 text-base text-gray-200">
            <div class="flex justify-between">
              <span>HP:</span>
              <span class="font-medium">{{ baseHP }}</span>
            </div>
            <div class="flex justify-between">
              <span>FP:</span>
              <span class="font-medium">{{ baseFP }}</span>
            </div>
            <div class="flex justify-between">
              <span>スタミナ:</span>
              <span class="font-medium">{{ baseStamina }}</span>
            </div>
          </div>
        </div>

        <!-- 最終ステータス -->
        <div class="bg-amber-900/30 border border-amber-600/50 rounded-lg p-3">
          <h4 class="text-base font-medium text-amber-100 mb-2">
            最終ステータス
          </h4>
          <div class="space-y-1 text-base text-gray-200">
            <div class="flex justify-between">
              <span>HP:</span>
              <span class="font-medium">
                {{ finalHP }}
                <span v-if="finalHP !== baseHP" class="text-amber-400">
                  ({{ finalHP > baseHP ? "+" : "" }}{{ finalHP - baseHP }})
                </span>
              </span>
            </div>
            <div class="flex justify-between">
              <span>FP:</span>
              <span class="font-medium">
                {{ finalFP }}
                <span v-if="finalFP !== baseFP" class="text-amber-400">
                  ({{ finalFP > baseFP ? "+" : "" }}{{ finalFP - baseFP }})
                </span>
              </span>
            </div>
            <div class="flex justify-between">
              <span>スタミナ:</span>
              <span class="font-medium">
                {{ finalStamina }}
                <span v-if="finalStamina !== baseStamina" class="text-amber-400">
                  ({{ finalStamina > baseStamina ? "+" : ""
                  }}{{ finalStamina - baseStamina }})
                </span>
              </span>
            </div>
          </div>
        </div>

        <!-- 能力値詳細 -->
        <div class="bg-gray-700 border border-green-600/50 rounded-lg p-3">
          <h4 class="text-base font-medium text-green-300 mb-2">能力値</h4>
          <div class="grid grid-cols-2 gap-1 text-sm text-gray-200">
            <div class="flex justify-between">
              <span>生命力:</span>
              <span class="font-medium">
                {{ finalVitality }}
                <span
                  v-if="finalVitality !== baseVitality"
                  class="text-green-400"
                >
                  (+{{ finalVitality - baseVitality }})
                </span>
              </span>
            </div>
            <div class="flex justify-between">
              <span>精神力:</span>
              <span class="font-medium">
                {{ finalMind }}
                <span v-if="finalMind !== baseMind" class="text-green-600">
                  (+{{ finalMind - baseMind }})
                </span>
              </span>
            </div>
            <div class="flex justify-between">
              <span>持久力:</span>
              <span class="font-medium">
                {{ finalEndurance }}
                <span
                  v-if="finalEndurance !== baseEndurance"
                  class="text-green-400"
                >
                  (+{{ finalEndurance - baseEndurance }})
                </span>
              </span>
            </div>
            <div class="flex justify-between">
              <span>筋力:</span>
              <span class="font-medium">
                {{ finalStrength }}
                <span
                  v-if="finalStrength !== baseStrength"
                  class="text-green-400"
                >
                  (+{{ finalStrength - baseStrength }})
                </span>
              </span>
            </div>
            <div class="flex justify-between">
              <span>技量:</span>
              <span class="font-medium">
                {{ finalDexterity }}
                <span
                  v-if="finalDexterity !== baseDexterity"
                  class="text-green-400"
                >
                  (+{{ finalDexterity - baseDexterity }})
                </span>
              </span>
            </div>
            <div class="flex justify-between">
              <span>知力:</span>
              <span class="font-medium">
                {{ finalIntelligence }}
                <span
                  v-if="finalIntelligence !== baseIntelligence"
                  class="text-green-400"
                >
                  (+{{ finalIntelligence - baseIntelligence }})
                </span>
              </span>
            </div>
            <div class="flex justify-between">
              <span>信仰:</span>
              <span class="font-medium">
                {{ finalFaith }}
                <span v-if="finalFaith !== baseFaith" class="text-green-400">
                  (+{{ finalFaith - baseFaith }})
                </span>
              </span>
            </div>
            <div class="flex justify-between">
              <span>神秘:</span>
              <span class="font-medium">
                {{ finalArcane }}
                <span v-if="finalArcane !== baseArcane" class="text-green-400">
                  (+{{ finalArcane - baseArcane }})
                </span>
              </span>
            </div>
          </div>
        </div>

        <!-- 攻撃力倍率 -->
        <div class="bg-gray-700 border border-red-600/50 rounded-lg p-3">
          <h4 class="text-base font-medium text-red-300 mb-2">攻撃力倍率</h4>
          <div class="space-y-1 text-sm text-gray-200">
            <div class="flex justify-between">
              <span>物理:</span>
              <span class="font-medium"
                >{{ (physicalAttackMultiplier * 100).toFixed(1) }}%</span
              >
            </div>
            <div class="flex justify-between">
              <span>魔力:</span>
              <span class="font-medium"
                >{{ (magicAttackMultiplier * 100).toFixed(1) }}%</span
              >
            </div>
            <div class="flex justify-between">
              <span>炎:</span>
              <span class="font-medium"
                >{{ (fireAttackMultiplier * 100).toFixed(1) }}%</span
              >
            </div>
            <div class="flex justify-between">
              <span>雷:</span>
              <span class="font-medium"
                >{{ (lightningAttackMultiplier * 100).toFixed(1) }}%</span
              >
            </div>
            <div class="flex justify-between">
              <span>聖:</span>
              <span class="font-medium"
                >{{ (holyAttackMultiplier * 100).toFixed(1) }}%</span
              >
            </div>
          </div>
        </div>

        <!-- 武器攻撃力 -->
        <div v-if="selectedWeapon" class="bg-gray-700 border border-amber-600/50 rounded-lg p-3">
          <h4 class="text-base font-medium text-amber-300 mb-2">武器攻撃力</h4>
          <div class="space-y-1 text-sm text-gray-200">
            <div class="flex justify-between">
              <span>武器名:</span>
              <span class="font-medium text-amber-200">{{ selectedWeapon.name }}</span>
            </div>
            <div class="flex justify-between">
              <span>基本攻撃力:</span>
              <span class="font-medium">{{ selectedWeapon.attackPower.total }}</span>
            </div>
            <div class="flex justify-between">
              <span>種別:</span>
              <span class="font-medium">{{ selectedWeapon.type }}</span>
            </div>
            <div class="flex justify-between">
              <span>レアリティ:</span>
              <span class="font-medium" :class="getWeaponRarityColor(selectedWeapon.rarity)">
                {{ selectedWeapon.rarity }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  getEffectsByCategory,
} from "~/data/comprehensive-effects";
import {
  getCharacterStatsAtLevel,
  getAvailableLevels
} from "~/data/level-stats";
import WeaponSelector from "./WeaponSelector.vue";
import WeaponStats from "./WeaponStats.vue";

// デフォルトキャラクターデータ
const defaultCharacters = [
  {
    name: "追跡者",
    baseStats: {
      vitality: 25,
      mind: 15,
      endurance: 20,
      strength: 25,
      dexterity: 20,
      intelligence: 15,
      faith: 15,
      arcane: 15,
    },
  },
  {
    name: "守護者",
    baseStats: {
      vitality: 30,
      mind: 15,
      endurance: 25,
      strength: 20,
      dexterity: 15,
      intelligence: 10,
      faith: 15,
      arcane: 15,
    },
  },
  {
    name: "鉄の目",
    baseStats: {
      vitality: 15,
      mind: 15,
      endurance: 20,
      strength: 15,
      dexterity: 25,
      intelligence: 10,
      faith: 10,
      arcane: 20,
    },
  },
  {
    name: "レディ",
    baseStats: {
      vitality: 15,
      mind: 20,
      endurance: 10,
      strength: 10,
      dexterity: 20,
      intelligence: 25,
      faith: 20,
      arcane: 15,
    },
  },
  {
    name: "無頼漢",
    baseStats: {
      vitality: 25,
      mind: 10,
      endurance: 25,
      strength: 30,
      dexterity: 15,
      intelligence: 10,
      faith: 10,
      arcane: 15,
    },
  },
  {
    name: "復讐者",
    baseStats: {
      vitality: 10,
      mind: 25,
      endurance: 10,
      strength: 15,
      dexterity: 15,
      intelligence: 20,
      faith: 30,
      arcane: 20,
    },
  },
  {
    name: "隠者",
    baseStats: {
      vitality: 10,
      mind: 25,
      endurance: 15,
      strength: 10,
      dexterity: 15,
      intelligence: 30,
      faith: 30,
      arcane: 15,
    },
  },
  {
    name: "執行者",
    baseStats: {
      vitality: 20,
      mind: 10,
      endurance: 20,
      strength: 15,
      dexterity: 30,
      intelligence: 10,
      faith: 10,
      arcane: 30,
    },
  },
];

// 効果カテゴリの定義
const effectCategories = [
  { id: "ability_boost", name: "能力値" },
  { id: "attack_power", name: "攻撃力" },
  { id: "defense", name: "防御" },
  { id: "resistance", name: "耐性" },
  { id: "recovery", name: "回復" },
  { id: "attack_enhance", name: "攻撃強化" },
  { id: "conditional_attack", name: "条件攻撃" },
  { id: "unique", name: "固有効果" },
];

// リアクティブな状態
const selectedCharacter = ref(null);
const availableCharacters = ref(defaultCharacters);
const appliedEffects = ref([]);
const activeCategory = ref("ability_boost");
const selectedLevel = ref(1);
const selectedWeapon = ref(null);

// フィルタされた効果
const filteredEffects = computed(() => {
  return getEffectsByCategory(activeCategory.value);
});

// 遺物効果のマッピング（WeaponStatsコンポーネント用）
const selectedEffects = computed(() => {
  return appliedEffects.value;
});

// 現在のレベルステータス
const currentLevelStats = computed(() => {
  if (!selectedCharacter.value) {
    return { vitality: 0, mind: 0, endurance: 0, strength: 0, dexterity: 0, intelligence: 0, faith: 0, arcane: 0 }
  }
  return getCharacterStatsAtLevel(selectedCharacter.value.name, selectedLevel.value) || selectedCharacter.value.baseStats
});

// 基本ステータス（レベルベース）
const baseVitality = computed(() => currentLevelStats.value.vitality);
const baseMind = computed(() => currentLevelStats.value.mind);
const baseEndurance = computed(() => currentLevelStats.value.endurance);
const baseStrength = computed(() => currentLevelStats.value.strength);
const baseDexterity = computed(() => currentLevelStats.value.dexterity);
const baseIntelligence = computed(() => currentLevelStats.value.intelligence);
const baseFaith = computed(() => currentLevelStats.value.faith);
const baseArcane = computed(() => currentLevelStats.value.arcane);

const baseHP = computed(() => 100 + baseVitality.value * 20);
const baseFP = computed(() => 50 + baseMind.value * 5);
const baseStamina = computed(() => 80 + baseEndurance.value * 2);

// 効果による修正値の計算
const getStatBonus = (statName) => {
  return appliedEffects.value
    .filter(
      (effect) =>
        effect.category === "ability_boost" && effect.id.startsWith(statName)
    )
    .reduce((sum, effect) => sum + (effect.value.flat || 0), 0);
};

const getMaxStatBonus = (statName) => {
  const effect = appliedEffects.value.find(
    (effect) => effect.id === `max_${statName}_boost`
  );
  return effect ? effect.value.flat || 0 : 0;
};

const getAttackMultiplier = (attackType) => {
  return appliedEffects.value
    .filter(
      (effect) =>
        effect.category === "attack_power" && effect.id.startsWith(attackType)
    )
    .reduce(
      (multiplier, effect) => multiplier * (effect.value.multiplier || 1),
      1
    );
};

// 最終ステータス
const finalVitality = computed(
  () => baseVitality.value + getStatBonus("vitality")
);
const finalMind = computed(() => baseMind.value + getStatBonus("mind"));
const finalEndurance = computed(
  () => baseEndurance.value + getStatBonus("endurance")
);
const finalStrength = computed(
  () => baseStrength.value + getStatBonus("strength")
);
const finalDexterity = computed(
  () => baseDexterity.value + getStatBonus("dexterity")
);
const finalIntelligence = computed(
  () => baseIntelligence.value + getStatBonus("intelligence")
);
const finalFaith = computed(() => baseFaith.value + getStatBonus("faith"));
const finalArcane = computed(() => baseArcane.value + getStatBonus("arcane"));

const finalHP = computed(
  () => 100 + finalVitality.value * 20 + getMaxStatBonus("hp")
);
const finalFP = computed(
  () => 50 + finalMind.value * 5 + getMaxStatBonus("fp")
);
const finalStamina = computed(
  () => 80 + finalEndurance.value * 2 + getMaxStatBonus("stamina")
);

// 攻撃力倍率
const physicalAttackMultiplier = computed(() =>
  getAttackMultiplier("physical_attack")
);
const magicAttackMultiplier = computed(() =>
  getAttackMultiplier("magic_attack")
);
const fireAttackMultiplier = computed(() => getAttackMultiplier("fire_attack"));
const lightningAttackMultiplier = computed(() =>
  getAttackMultiplier("lightning_attack")
);
const holyAttackMultiplier = computed(() => getAttackMultiplier("holy_attack"));

// アクション
const selectCharacter = (character) => {
  selectedCharacter.value = character;
  selectedLevel.value = 1; // レベルをリセット
  appliedEffects.value = [];
  selectedWeapon.value = null; // 武器もリセット
};

const resetSelection = () => {
  selectedCharacter.value = null;
  selectedLevel.value = 1;
  appliedEffects.value = [];
  selectedWeapon.value = null;
};

const changeLevel = (delta) => {
  const newLevel = selectedLevel.value + delta;
  if (newLevel >= 1 && newLevel <= 15) {
    selectedLevel.value = newLevel;
  }
};

const canAddEffect = (effect) => {
  if (effect.stackable) return true;

  // 重複不可の効果の場合、同じIDがすでに適用されていないかチェック
  return !appliedEffects.value.some((applied) => applied.id === effect.id);
};

const addEffect = (effect) => {
  if (!canAddEffect(effect)) return;

  appliedEffects.value.push({
    ...effect,
    appliedId: `${effect.id}_${Date.now()}`, // 適用時のユニークID
  });
};

const removeEffect = (appliedId) => {
  appliedEffects.value = appliedEffects.value.filter(
    (effect) => effect.appliedId !== appliedId
  );
};

// 武器レアリティの色を取得
const getWeaponRarityColor = (rarity) => {
  const colors = {
    'コモン': 'text-gray-300',
    'アンコモン': 'text-green-300',
    'レア': 'text-blue-300',
    'レジェンド': 'text-purple-300'
  };
  return colors[rarity] || 'text-gray-300';
};

const clearEffects = () => {
  appliedEffects.value = [];
};

// 初期化時に実際のキャラクターデータの読み込みを試行
onMounted(async () => {
  try {
    const charactersModule = await import("~/data/characters.ts");
    if (charactersModule.CHARACTERS && charactersModule.CHARACTERS.length > 0) {
      availableCharacters.value = charactersModule.CHARACTERS;
      console.log("実際のキャラクターデータを読み込みました");
    }
  } catch (error) {
    console.log("デフォルトキャラクターデータを使用します:", error.message);
  }
});
</script>

<style scoped>
/* レンジスライダーのカスタムスタイル */
.slider::-webkit-slider-thumb {
  appearance: none;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: #d97706;
  cursor: pointer;
  border: 2px solid #f59e0b;
}

.slider::-moz-range-thumb {
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: #d97706;
  cursor: pointer;
  border: 2px solid #f59e0b;
}

.slider::-webkit-slider-track {
  background: #4b5563;
  border-radius: 5px;
}

.slider::-moz-range-track {
  background: #4b5563;
  border-radius: 5px;
}
</style>
