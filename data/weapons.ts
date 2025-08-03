/**
 * 武器データベース
 * エルデンリングナイトレインの武器データ定義
 * 
 * 🔄 doc/weapons下の全Markdownファイルから統合された完全データベース
 */

import type { Weapon, WeaponType } from "~/types";

/**
 * 完全武器データベース
 * doc/weapons下の全ファイルから統合された全武器データ
 */
export const WEAPONS: Weapon[] = [
  {
    "id": "シミターscimitar",
    "name": "シミター (Scimitar)",
    "type": "曲剣",
    "rarity": "コモン",
    "attackPower": {
      "physical": 72,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 72
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 7,
      "dexterity": 13,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "曲剣系の武器。シミター (Scimitar)の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 3.5,
    "characterCompatibility": {
      "追跡者": 4,
      "守護者": 2,
      "鉄の目": 2,
      "レディ": 4,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 3
    }
  },
  {
    "id": "ファルシオンfalchion",
    "name": "ファルシオン (Falchion)",
    "type": "曲剣",
    "rarity": "コモン",
    "attackPower": {
      "physical": 70,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 70
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 7,
      "dexterity": 13,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "曲剣系の武器。ファルシオン (Falchion)の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 3.5,
    "characterCompatibility": {
      "追跡者": 4,
      "守護者": 2,
      "鉄の目": 2,
      "レディ": 4,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 3
    }
  },
  {
    "id": "盗賊_曲剣banditscurvedsword",
    "name": "盗賊の曲剣 (Bandit's Curved Sword)",
    "type": "曲剣",
    "rarity": "コモン",
    "attackPower": {
      "physical": 73,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 73
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 7,
      "dexterity": 13,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "曲剣系の武器。盗賊の曲剣 (Bandit's Curved Sword)の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 3.5,
    "characterCompatibility": {
      "追跡者": 4,
      "守護者": 2,
      "鉄の目": 2,
      "レディ": 4,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 3
    }
  },
  {
    "id": "流水_曲剣flowingwatercurvedsword",
    "name": "流水の曲剣 (Flowing Water Curved Sword)",
    "type": "曲剣",
    "rarity": "レア",
    "attackPower": {
      "physical": 105,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 105
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 7,
      "dexterity": 13,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "曲剣系の武器。流水の曲剣 (Flowing Water Curved Sword)の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 3.5,
    "characterCompatibility": {
      "追跡者": 4,
      "守護者": 2,
      "鉄の目": 2,
      "レディ": 4,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 3
    }
  },
  {
    "id": "溶岩剣lavasword",
    "name": "溶岩剣 (Lava Sword)",
    "type": "曲剣",
    "rarity": "レア",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 7,
      "dexterity": 13,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "曲剣系の武器。溶岩剣 (Lava Sword)の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 3.5,
    "characterCompatibility": {
      "追跡者": 4,
      "守護者": 2,
      "鉄の目": 2,
      "レディ": 4,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 3
    }
  },
  {
    "id": "ノクス_流剣nokxsfluidsword",
    "name": "ノクスの流剣 (Nokx's Fluid Sword)",
    "type": "曲剣",
    "rarity": "レア",
    "attackPower": {
      "physical": 108,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 108
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 7,
      "dexterity": 13,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "曲剣系の武器。ノクスの流剣 (Nokx's Fluid Sword)の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 3.5,
    "characterCompatibility": {
      "追跡者": 4,
      "守護者": 2,
      "鉄の目": 2,
      "レディ": 4,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 3
    }
  },
  {
    "id": "穢れ_シミターblightedscimitar",
    "name": "穢れのシミター (Blighted Scimitar)",
    "type": "曲剣",
    "rarity": "レジェンド",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 7,
      "dexterity": 13,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "曲剣系の武器。穢れのシミター (Blighted Scimitar)の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 3.5,
    "characterCompatibility": {
      "追跡者": 4,
      "守護者": 2,
      "鉄の目": 2,
      "レディ": 4,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 3
    }
  },
  {
    "id": "蛇神_曲剣serpentgodscurvedsword",
    "name": "蛇神の曲剣 (Serpent God's Curved Sword)",
    "type": "曲剣",
    "rarity": "レジェンド",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 7,
      "dexterity": 13,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "曲剣系の武器。蛇神の曲剣 (Serpent God's Curved Sword)の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 3.5,
    "characterCompatibility": {
      "追跡者": 4,
      "守護者": 2,
      "鉄の目": 2,
      "レディ": 4,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 3
    }
  },
  {
    "id": "獣_曲剣beastscurvedsword",
    "name": "獣の曲剣 (Beast's Curved Sword)",
    "type": "曲剣",
    "rarity": "レジェンド",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 7,
      "dexterity": 13,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "曲剣系の武器。獣の曲剣 (Beast's Curved Sword)の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 3.5,
    "characterCompatibility": {
      "追跡者": 4,
      "守護者": 2,
      "鉄の目": 2,
      "レディ": 4,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 3
    }
  },
  {
    "id": "グレート_エペ",
    "name": "グレート・エペ",
    "type": "重刺剣",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "C",
      "dexterity": "B",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 12,
      "dexterity": 12,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "重刺剣系の武器。グレート・エペの特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 7,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 4,
      "鉄の目": 3,
      "レディ": 2,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 4
    }
  },
  {
    "id": "神肌縫い",
    "name": "神肌縫い",
    "type": "重刺剣",
    "rarity": "アンコモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "C",
      "dexterity": "B",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 12,
      "dexterity": 12,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "重刺剣系の武器。神肌縫いの特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 7,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 4,
      "鉄の目": 3,
      "レディ": 2,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 4
    }
  },
  {
    "id": "血_ヘリケー",
    "name": "血のヘリケー",
    "type": "重刺剣",
    "rarity": "レア",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "C",
      "dexterity": "B",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 12,
      "dexterity": 12,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "重刺剣系の武器。血のヘリケーの特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 7,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 4,
      "鉄の目": 3,
      "レディ": 2,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 4
    },
    "statusEffects": [
      {
        "type": "出血",
        "buildup": 70
      }
    ]
  },
  {
    "id": "竜王_岩剣",
    "name": "竜王の岩剣",
    "type": "重刺剣",
    "rarity": "レジェンド",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "C",
      "dexterity": "B",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 12,
      "dexterity": 12,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "重刺剣系の武器。竜王の岩剣の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 7,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 4,
      "鉄の目": 3,
      "レディ": 2,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 4
    }
  },
  {
    "id": "鉤爪",
    "name": "鉤爪",
    "type": "爪",
    "rarity": "コモン",
    "attackPower": {
      "physical": 56,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 56
    },
    "scaling": {
      "strength": "D",
      "dexterity": "A",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 6,
      "dexterity": 14,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "爪系の武器。鉤爪の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 1,
    "characterCompatibility": {
      "追跡者": 4,
      "守護者": 2,
      "鉄の目": 2,
      "レディ": 3,
      "無頼漢": 3,
      "復讐者": 2,
      "隠者": 2,
      "執行者": 2
    },
    "statusEffects": [
      {
        "type": "出血",
        "buildup": 30
      }
    ]
  },
  {
    "id": "猟犬_爪",
    "name": "猟犬の爪",
    "type": "爪",
    "rarity": "アンコモン",
    "attackPower": {
      "physical": 72,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 72
    },
    "scaling": {
      "strength": "D",
      "dexterity": "A",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 6,
      "dexterity": 14,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "爪系の武器。猟犬の爪の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 1,
    "characterCompatibility": {
      "追跡者": 4,
      "守護者": 2,
      "鉄の目": 2,
      "レディ": 3,
      "無頼漢": 3,
      "復讐者": 2,
      "隠者": 2,
      "執行者": 2
    },
    "statusEffects": [
      {
        "type": "出血",
        "buildup": 34
      }
    ]
  },
  {
    "id": "毒蛇_牙",
    "name": "毒蛇の牙",
    "type": "爪",
    "rarity": "アンコモン",
    "attackPower": {
      "physical": 63,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 63
    },
    "scaling": {
      "strength": "D",
      "dexterity": "A",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 6,
      "dexterity": 14,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "爪系の武器。毒蛇の牙の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 1,
    "characterCompatibility": {
      "追跡者": 4,
      "守護者": 2,
      "鉄の目": 2,
      "レディ": 3,
      "無頼漢": 3,
      "復讐者": 2,
      "隠者": 2,
      "執行者": 2
    },
    "statusEffects": [
      {
        "type": "毒",
        "buildup": 51
      }
    ]
  },
  {
    "id": "猛禽_鉤爪",
    "name": "猛禽の鉤爪",
    "type": "爪",
    "rarity": "レア",
    "attackPower": {
      "physical": 86,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 86
    },
    "scaling": {
      "strength": "D",
      "dexterity": "A",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 6,
      "dexterity": 14,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "爪系の武器。猛禽の鉤爪の特性を持つ。",
    "obtainMethod": "フィールド獲得、ボス報酬",
    "weight": 1,
    "characterCompatibility": {
      "追跡者": 4,
      "守護者": 2,
      "鉄の目": 2,
      "レディ": 3,
      "無頼漢": 3,
      "復讐者": 2,
      "隠者": 2,
      "執行者": 2
    }
  },
  {
    "id": "復讐者_呪爪",
    "name": "復讐者の呪爪",
    "type": "拳",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "E",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "S",
      "arcane": "-"
    },
    "requirements": {
      "strength": 8,
      "dexterity": 10,
      "intelligence": 0,
      "faith": 8,
      "arcane": 0
    },
    "description": "拳系の武器。復讐者の呪爪の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 1.5,
    "characterCompatibility": {
      "追跡者": 4,
      "守護者": 3,
      "鉄の目": 2,
      "レディ": 2,
      "無頼漢": 3,
      "復讐者": 2,
      "隠者": 2,
      "執行者": 3
    }
  },
  {
    "id": "カタール",
    "name": "カタール",
    "type": "拳",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "B",
      "dexterity": "C",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 8,
      "dexterity": 10,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "拳系の武器。カタールの特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 1.5,
    "characterCompatibility": {
      "追跡者": 4,
      "守護者": 3,
      "鉄の目": 2,
      "レディ": 2,
      "無頼漢": 3,
      "復讐者": 2,
      "隠者": 2,
      "執行者": 3
    }
  },
  {
    "id": "セスタス",
    "name": "セスタス",
    "type": "拳",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "B",
      "dexterity": "C",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 8,
      "dexterity": 10,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "拳系の武器。セスタスの特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 1.5,
    "characterCompatibility": {
      "追跡者": 4,
      "守護者": 3,
      "鉄の目": 2,
      "レディ": 2,
      "無頼漢": 3,
      "復讐者": 2,
      "隠者": 2,
      "執行者": 3
    }
  },
  {
    "id": "スパイクセスタス",
    "name": "スパイクセスタス",
    "type": "拳",
    "rarity": "アンコモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "B",
      "dexterity": "C",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 8,
      "dexterity": 10,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "拳系の武器。スパイクセスタスの特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 1.5,
    "characterCompatibility": {
      "追跡者": 4,
      "守護者": 3,
      "鉄の目": 2,
      "レディ": 2,
      "無頼漢": 3,
      "復讐者": 2,
      "隠者": 2,
      "執行者": 3
    },
    "statusEffects": [
      {
        "type": "出血",
        "buildup": 34
      }
    ]
  },
  {
    "id": "鉄球拳",
    "name": "鉄球拳",
    "type": "拳",
    "rarity": "アンコモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "B",
      "dexterity": "C",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 8,
      "dexterity": 10,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "拳系の武器。鉄球拳の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 1.5,
    "characterCompatibility": {
      "追跡者": 4,
      "守護者": 3,
      "鉄の目": 2,
      "レディ": 2,
      "無頼漢": 3,
      "復讐者": 2,
      "隠者": 2,
      "執行者": 3
    }
  },
  {
    "id": "棘球拳",
    "name": "棘球拳",
    "type": "拳",
    "rarity": "アンコモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "B",
      "dexterity": "C",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 8,
      "dexterity": 10,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "拳系の武器。棘球拳の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 1.5,
    "characterCompatibility": {
      "追跡者": 4,
      "守護者": 3,
      "鉄の目": 2,
      "レディ": 2,
      "無頼漢": 3,
      "復讐者": 2,
      "隠者": 2,
      "執行者": 3
    },
    "statusEffects": [
      {
        "type": "出血",
        "buildup": 34
      }
    ]
  },
  {
    "id": "縋り付く手骨",
    "name": "縋り付く手骨",
    "type": "拳",
    "rarity": "レア",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "B",
      "dexterity": "C",
      "intelligence": "B",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 8,
      "dexterity": 10,
      "intelligence": 8,
      "faith": 0,
      "arcane": 0
    },
    "description": "拳系の武器。縋り付く手骨の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 1.5,
    "characterCompatibility": {
      "追跡者": 4,
      "守護者": 3,
      "鉄の目": 2,
      "レディ": 2,
      "無頼漢": 3,
      "復讐者": 2,
      "隠者": 2,
      "執行者": 3
    }
  },
  {
    "id": "秘文字_パタ",
    "name": "秘文字のパタ",
    "type": "拳",
    "rarity": "レア",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "S",
      "arcane": "-"
    },
    "requirements": {
      "strength": 8,
      "dexterity": 10,
      "intelligence": 0,
      "faith": 8,
      "arcane": 0
    },
    "description": "拳系の武器。秘文字のパタの特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 1.5,
    "characterCompatibility": {
      "追跡者": 4,
      "守護者": 3,
      "鉄の目": 2,
      "レディ": 2,
      "無頼漢": 3,
      "復讐者": 2,
      "隠者": 2,
      "執行者": 3
    }
  },
  {
    "id": "接がれた飛竜",
    "name": "接がれた飛竜",
    "type": "拳",
    "rarity": "レジェンド",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "B",
      "dexterity": "C",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 8,
      "dexterity": 10,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "拳系の武器。接がれた飛竜の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 1.5,
    "characterCompatibility": {
      "追跡者": 4,
      "守護者": 3,
      "鉄の目": 2,
      "レディ": 2,
      "無頼漢": 3,
      "復讐者": 2,
      "隠者": 2,
      "執行者": 3
    }
  },
  {
    "id": "鉄_目特化型",
    "name": "鉄の目特化型",
    "type": "弓",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 6,
      "dexterity": 12,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "弓系の武器。鉄の目特化型の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 2,
    "characterCompatibility": {
      "追跡者": 4,
      "守護者": 2,
      "鉄の目": 4,
      "レディ": 3,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 4,
      "執行者": 2
    }
  },
  {
    "id": "毒特化型",
    "name": "毒特化型",
    "type": "弓",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 6,
      "dexterity": 12,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "弓系の武器。毒特化型の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 2,
    "characterCompatibility": {
      "追跡者": 4,
      "守護者": 2,
      "鉄の目": 4,
      "レディ": 3,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 4,
      "執行者": 2
    }
  },
  {
    "id": "聖属性型",
    "name": "聖属性型",
    "type": "弓",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 6,
      "dexterity": 12,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "弓系の武器。聖属性型の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 2,
    "characterCompatibility": {
      "追跡者": 4,
      "守護者": 2,
      "鉄の目": 4,
      "レディ": 3,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 4,
      "執行者": 2
    }
  },
  {
    "id": "複数弓型",
    "name": "複数弓型",
    "type": "弓",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 6,
      "dexterity": 12,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "弓系の武器。複数弓型の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 2,
    "characterCompatibility": {
      "追跡者": 4,
      "守護者": 2,
      "鉄の目": 4,
      "レディ": 3,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 4,
      "執行者": 2
    }
  },
  {
    "id": "高威力特化型",
    "name": "高威力特化型",
    "type": "クロスボウ",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 8,
      "dexterity": 10,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "クロスボウ系の武器。高威力特化型の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 3,
    "characterCompatibility": {
      "追跡者": 3,
      "守護者": 3,
      "鉄の目": 4,
      "レディ": 3,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 3,
      "執行者": 3
    }
  },
  {
    "id": "魔力複合型",
    "name": "魔力複合型",
    "type": "クロスボウ",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 8,
      "dexterity": 10,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "クロスボウ系の武器。魔力複合型の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 3,
    "characterCompatibility": {
      "追跡者": 3,
      "守護者": 3,
      "鉄の目": 4,
      "レディ": 3,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 3,
      "執行者": 3
    }
  },
  {
    "id": "複数装備型",
    "name": "複数装備型",
    "type": "クロスボウ",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 8,
      "dexterity": 10,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "クロスボウ系の武器。複数装備型の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 3,
    "characterCompatibility": {
      "追跡者": 3,
      "守護者": 3,
      "鉄の目": 4,
      "レディ": 3,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 3,
      "執行者": 3
    }
  },
  {
    "id": "機動射撃型",
    "name": "機動射撃型",
    "type": "クロスボウ",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 8,
      "dexterity": 10,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "クロスボウ系の武器。機動射撃型の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 3,
    "characterCompatibility": {
      "追跡者": 3,
      "守護者": 3,
      "鉄の目": 4,
      "レディ": 3,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 3,
      "執行者": 3
    }
  },
  {
    "id": "全キャラクター共通",
    "name": "全キャラクター共通",
    "type": "クロスボウ",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 8,
      "dexterity": 10,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "クロスボウ系の武器。全キャラクター共通の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 3,
    "characterCompatibility": {
      "追跡者": 3,
      "守護者": 3,
      "鉄の目": 4,
      "レディ": 3,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 3,
      "執行者": 3
    }
  },
  {
    "id": "近接特化キャラで_運用",
    "name": "近接特化キャラでの運用",
    "type": "クロスボウ",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 8,
      "dexterity": 10,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "クロスボウ系の武器。近接特化キャラでの運用の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 3,
    "characterCompatibility": {
      "追跡者": 3,
      "守護者": 3,
      "鉄の目": 4,
      "レディ": 3,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 3,
      "執行者": 3
    }
  },
  {
    "id": "魔法特化キャラで_運用",
    "name": "魔法特化キャラでの運用",
    "type": "クロスボウ",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 8,
      "dexterity": 10,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "クロスボウ系の武器。魔法特化キャラでの運用の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 3,
    "characterCompatibility": {
      "追跡者": 3,
      "守護者": 3,
      "鉄の目": 4,
      "レディ": 3,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 3,
      "執行者": 3
    }
  },
  {
    "id": "隠者_杖",
    "name": "隠者の杖",
    "type": "杖",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "S",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 4,
      "dexterity": 6,
      "intelligence": 12,
      "faith": 0,
      "arcane": 0
    },
    "description": "杖系の武器。隠者の杖の特性を持つ。",
    "obtainMethod": "隠者初期装備、フィールド確定入手",
    "weight": 2,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 2,
      "鉄の目": 2,
      "レディ": 2,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 5,
      "執行者": 2
    }
  },
  {
    "id": "星見_杖",
    "name": "星見の杖",
    "type": "杖",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "S",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 4,
      "dexterity": 6,
      "intelligence": 12,
      "faith": 0,
      "arcane": 0
    },
    "description": "杖系の武器。星見の杖の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 2,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 2,
      "鉄の目": 2,
      "レディ": 2,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 5,
      "執行者": 2
    }
  },
  {
    "id": "石掘り_杖",
    "name": "石掘りの杖",
    "type": "杖",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "S",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 4,
      "dexterity": 6,
      "intelligence": 12,
      "faith": 0,
      "arcane": 0
    },
    "description": "杖系の武器。石掘りの杖の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 2,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 2,
      "鉄の目": 2,
      "レディ": 2,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 5,
      "執行者": 2
    }
  },
  {
    "id": "カーリア_輝石杖",
    "name": "カーリアの輝石杖",
    "type": "杖",
    "rarity": "アンコモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "S",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 4,
      "dexterity": 6,
      "intelligence": 12,
      "faith": 0,
      "arcane": 0
    },
    "description": "杖系の武器。カーリアの輝石杖の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 2,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 2,
      "鉄の目": 2,
      "レディ": 2,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 5,
      "執行者": 2
    }
  },
  {
    "id": "クリスタル_杖",
    "name": "クリスタルの杖",
    "type": "杖",
    "rarity": "アンコモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "S",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 4,
      "dexterity": 6,
      "intelligence": 12,
      "faith": 0,
      "arcane": 0
    },
    "description": "杖系の武器。クリスタルの杖の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 2,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 2,
      "鉄の目": 2,
      "レディ": 2,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 5,
      "執行者": 2
    }
  },
  {
    "id": "アズール_輝石杖",
    "name": "アズールの輝石杖",
    "type": "杖",
    "rarity": "レア",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "S",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 4,
      "dexterity": 6,
      "intelligence": 12,
      "faith": 0,
      "arcane": 0
    },
    "description": "杖系の武器。アズールの輝石杖の特性を持つ。",
    "obtainMethod": "フィールド獲得、ボス報酬",
    "weight": 2,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 2,
      "鉄の目": 2,
      "レディ": 2,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 5,
      "執行者": 2
    }
  },
  {
    "id": "ラニ_杖",
    "name": "ラニの杖",
    "type": "杖",
    "rarity": "レア",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "S",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 4,
      "dexterity": 6,
      "intelligence": 12,
      "faith": 0,
      "arcane": 0
    },
    "description": "杖系の武器。ラニの杖の特性を持つ。",
    "obtainMethod": "フィールド獲得、特殊条件",
    "weight": 2,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 2,
      "鉄の目": 2,
      "レディ": 2,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 5,
      "執行者": 2
    }
  },
  {
    "id": "失われた杖",
    "name": "失われた杖",
    "type": "杖",
    "rarity": "レア",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "S",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 4,
      "dexterity": 6,
      "intelligence": 12,
      "faith": 0,
      "arcane": 0
    },
    "description": "杖系の武器。失われた杖の特性を持つ。",
    "obtainMethod": "フィールド獲得、レア入手",
    "weight": 2,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 2,
      "鉄の目": 2,
      "レディ": 2,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 5,
      "執行者": 2
    }
  },
  {
    "id": "カーリア_王笏",
    "name": "カーリアの王笏",
    "type": "杖",
    "rarity": "レジェンド",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "S",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 4,
      "dexterity": 6,
      "intelligence": 12,
      "faith": 0,
      "arcane": 0
    },
    "description": "杖系の武器。カーリアの王笏の特性を持つ。",
    "obtainMethod": "極レア獲得",
    "weight": 2,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 2,
      "鉄の目": 2,
      "レディ": 2,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 5,
      "執行者": 2
    }
  },
  {
    "id": "知力特化型",
    "name": "知力特化型",
    "type": "杖",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 4,
      "dexterity": 6,
      "intelligence": 12,
      "faith": 0,
      "arcane": 0
    },
    "description": "杖系の武器。知力特化型の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 2,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 2,
      "鉄の目": 2,
      "レディ": 2,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 5,
      "執行者": 2
    }
  },
  {
    "id": "バランス型",
    "name": "バランス型",
    "type": "杖",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 4,
      "dexterity": 6,
      "intelligence": 12,
      "faith": 0,
      "arcane": 0
    },
    "description": "杖系の武器。バランス型の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 2,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 2,
      "鉄の目": 2,
      "レディ": 2,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 5,
      "執行者": 2
    }
  },
  {
    "id": "複数杖型",
    "name": "複数杖型",
    "type": "杖",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 4,
      "dexterity": 6,
      "intelligence": 12,
      "faith": 0,
      "arcane": 0
    },
    "description": "杖系の武器。複数杖型の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 2,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 2,
      "鉄の目": 2,
      "レディ": 2,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 5,
      "執行者": 2
    }
  },
  {
    "id": "輝石_飛礫隠者_杖星見_杖",
    "name": "輝石の飛礫（隠者の杖、星見の杖）",
    "type": "杖",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 4,
      "dexterity": 6,
      "intelligence": 12,
      "faith": 0,
      "arcane": 0
    },
    "description": "杖系の武器。輝石の飛礫（隠者の杖、星見の杖）の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 2,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 2,
      "鉄の目": 2,
      "レディ": 2,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 5,
      "執行者": 2
    }
  },
  {
    "id": "砕石石掘り_杖",
    "name": "砕石（石掘りの杖）",
    "type": "杖",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 4,
      "dexterity": 6,
      "intelligence": 12,
      "faith": 0,
      "arcane": 0
    },
    "description": "杖系の武器。砕石（石掘りの杖）の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 2,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 2,
      "鉄の目": 2,
      "レディ": 2,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 5,
      "執行者": 2
    }
  },
  {
    "id": "カーリア_速剣カーリア_輝石杖",
    "name": "カーリアの速剣（カーリアの輝石杖）",
    "type": "杖",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 4,
      "dexterity": 6,
      "intelligence": 12,
      "faith": 0,
      "arcane": 0
    },
    "description": "杖系の武器。カーリアの速剣（カーリアの輝石杖）の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 2,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 2,
      "鉄の目": 2,
      "レディ": 2,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 5,
      "執行者": 2
    }
  },
  {
    "id": "クリスタル系魔術クリスタル_杖",
    "name": "クリスタル系魔術（クリスタルの杖）",
    "type": "杖",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 4,
      "dexterity": 6,
      "intelligence": 12,
      "faith": 0,
      "arcane": 0
    },
    "description": "杖系の武器。クリスタル系魔術（クリスタルの杖）の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 2,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 2,
      "鉄の目": 2,
      "レディ": 2,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 5,
      "執行者": 2
    }
  },
  {
    "id": "彗星アズールアズール_輝石杖",
    "name": "彗星アズール（アズールの輝石杖）",
    "type": "杖",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 4,
      "dexterity": 6,
      "intelligence": 12,
      "faith": 0,
      "arcane": 0
    },
    "description": "杖系の武器。彗星アズール（アズールの輝石杖）の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 2,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 2,
      "鉄の目": 2,
      "レディ": 2,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 5,
      "執行者": 2
    }
  },
  {
    "id": "月光系魔術ラニ_杖",
    "name": "月光系魔術（ラニの杖）",
    "type": "杖",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 4,
      "dexterity": 6,
      "intelligence": 12,
      "faith": 0,
      "arcane": 0
    },
    "description": "杖系の武器。月光系魔術（ラニの杖）の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 2,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 2,
      "鉄の目": 2,
      "レディ": 2,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 5,
      "執行者": 2
    }
  },
  {
    "id": "夜_彗星失われた杖",
    "name": "夜の彗星（失われた杖）",
    "type": "杖",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 4,
      "dexterity": 6,
      "intelligence": 12,
      "faith": 0,
      "arcane": 0
    },
    "description": "杖系の武器。夜の彗星（失われた杖）の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 2,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 2,
      "鉄の目": 2,
      "レディ": 2,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 5,
      "執行者": 2
    }
  },
  {
    "id": "レナラ_満月カーリア_王笏",
    "name": "レナラの満月（カーリアの王笏）",
    "type": "杖",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 4,
      "dexterity": 6,
      "intelligence": 12,
      "faith": 0,
      "arcane": 0
    },
    "description": "杖系の武器。レナラの満月（カーリアの王笏）の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 2,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 2,
      "鉄の目": 2,
      "レディ": 2,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 5,
      "執行者": 2
    }
  },
  {
    "id": "朱い腐敗効果",
    "name": "朱い腐敗効果",
    "type": "杖",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 4,
      "dexterity": 6,
      "intelligence": 12,
      "faith": 0,
      "arcane": 0
    },
    "description": "杖系の武器。朱い腐敗効果の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 2,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 2,
      "鉄の目": 2,
      "レディ": 2,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 5,
      "執行者": 2
    }
  },
  {
    "id": "出血効果",
    "name": "出血効果",
    "type": "杖",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 4,
      "dexterity": 6,
      "intelligence": 12,
      "faith": 0,
      "arcane": 0
    },
    "description": "杖系の武器。出血効果の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 2,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 2,
      "鉄の目": 2,
      "レディ": 2,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 5,
      "執行者": 2
    }
  },
  {
    "id": "攻撃特化型",
    "name": "攻撃特化型",
    "type": "聖印",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 4,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 12,
      "arcane": 0
    },
    "description": "聖印系の武器。攻撃特化型の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 1.5,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 3,
      "鉄の目": 2,
      "レディ": 2,
      "無頼漢": 2,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 5
    }
  },
  {
    "id": "支援特化型",
    "name": "支援特化型",
    "type": "聖印",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 4,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 12,
      "arcane": 0
    },
    "description": "聖印系の武器。支援特化型の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 1.5,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 3,
      "鉄の目": 2,
      "レディ": 2,
      "無頼漢": 2,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 5
    }
  },
  {
    "id": "特殊属性型",
    "name": "特殊属性型",
    "type": "聖印",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 4,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 12,
      "arcane": 0
    },
    "description": "聖印系の武器。特殊属性型の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 1.5,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 3,
      "鉄の目": 2,
      "レディ": 2,
      "無頼漢": 2,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 5
    }
  },
  {
    "id": "複数聖印型",
    "name": "複数聖印型",
    "type": "聖印",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 4,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 12,
      "arcane": 0
    },
    "description": "聖印系の武器。複数聖印型の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 1.5,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 3,
      "鉄の目": 2,
      "レディ": 2,
      "無頼漢": 2,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 5
    }
  },
  {
    "id": "拒絶指_聖印",
    "name": "拒絶（指の聖印）",
    "type": "聖印",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 4,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 12,
      "arcane": 0
    },
    "description": "聖印系の武器。拒絶（指の聖印）の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 1.5,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 3,
      "鉄の目": 2,
      "レディ": 2,
      "無頼漢": 2,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 5
    }
  },
  {
    "id": "雷槍砕石_聖印",
    "name": "雷槍（砕石の聖印）",
    "type": "聖印",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 4,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 12,
      "arcane": 0
    },
    "description": "聖印系の武器。雷槍（砕石の聖印）の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 1.5,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 3,
      "鉄の目": 2,
      "レディ": 2,
      "無頼漢": 2,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 5
    }
  },
  {
    "id": "火投げ巨人_聖印",
    "name": "火投げ（巨人の聖印）",
    "type": "聖印",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 4,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 12,
      "arcane": 0
    },
    "description": "聖印系の武器。火投げ（巨人の聖印）の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 1.5,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 3,
      "鉄の目": 2,
      "レディ": 2,
      "無頼漢": 2,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 5
    }
  },
  {
    "id": "黒炎神狩り_聖印",
    "name": "黒炎（神狩りの聖印）",
    "type": "聖印",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 4,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 12,
      "arcane": 0
    },
    "description": "聖印系の武器。黒炎（神狩りの聖印）の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 1.5,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 3,
      "鉄の目": 2,
      "レディ": 2,
      "無頼漢": 2,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 5
    }
  },
  {
    "id": "獣石爪痕_聖印",
    "name": "獣石（爪痕の聖印）",
    "type": "聖印",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 4,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 12,
      "arcane": 0
    },
    "description": "聖印系の武器。獣石（爪痕の聖印）の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 1.5,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 3,
      "鉄の目": 2,
      "レディ": 2,
      "無頼漢": 2,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 5
    }
  },
  {
    "id": "追跡者_小盾",
    "name": "追跡者の小盾",
    "type": "小盾",
    "rarity": "コモン",
    "attackPower": {
      "physical": 51,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 51
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 6,
      "dexterity": 8,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "小盾系の武器。追跡者の小盾の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 2,
    "characterCompatibility": {
      "追跡者": 3,
      "守護者": 2,
      "鉄の目": 3,
      "レディ": 4,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 2,
      "執行者": 3
    }
  },
  {
    "id": "焼木_盾",
    "name": "焼木の盾",
    "type": "小盾",
    "rarity": "コモン",
    "attackPower": {
      "physical": 47,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 47
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 6,
      "dexterity": 8,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "小盾系の武器。焼木の盾の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 2,
    "characterCompatibility": {
      "追跡者": 3,
      "守護者": 2,
      "鉄の目": 3,
      "レディ": 4,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 2,
      "執行者": 3
    }
  },
  {
    "id": "蛇人_盾",
    "name": "蛇人の盾",
    "type": "小盾",
    "rarity": "アンコモン",
    "attackPower": {
      "physical": 61,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 61
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 6,
      "dexterity": 8,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "小盾系の武器。蛇人の盾の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 2,
    "characterCompatibility": {
      "追跡者": 3,
      "守護者": 2,
      "鉄の目": 3,
      "レディ": 4,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 2,
      "執行者": 3
    }
  },
  {
    "id": "薬師_盾",
    "name": "薬師の盾",
    "type": "小盾",
    "rarity": "レア",
    "attackPower": {
      "physical": 71,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 71
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 6,
      "dexterity": 8,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "小盾系の武器。薬師の盾の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 2,
    "characterCompatibility": {
      "追跡者": 3,
      "守護者": 2,
      "鉄の目": 3,
      "レディ": 4,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 2,
      "執行者": 3
    }
  },
  {
    "id": "咎人_盾",
    "name": "咎人の盾",
    "type": "小盾",
    "rarity": "レア",
    "attackPower": {
      "physical": 79,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 79
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 6,
      "dexterity": 8,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "小盾系の武器。咎人の盾の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 2,
    "characterCompatibility": {
      "追跡者": 3,
      "守護者": 2,
      "鉄の目": 3,
      "レディ": 4,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 2,
      "執行者": 3
    }
  },
  {
    "id": "くすぶり盾",
    "name": "くすぶり盾",
    "type": "小盾",
    "rarity": "レア",
    "attackPower": {
      "physical": 42,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 42
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 6,
      "dexterity": 8,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "小盾系の武器。くすぶり盾の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 2,
    "characterCompatibility": {
      "追跡者": 3,
      "守護者": 2,
      "鉄の目": 3,
      "レディ": 4,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 2,
      "執行者": 3
    }
  },
  {
    "id": "鷹紋_ウッドシールド",
    "name": "鷹紋のウッドシールド",
    "type": "中盾",
    "rarity": "コモン",
    "attackPower": {
      "physical": 59,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 59
    },
    "scaling": {
      "strength": "A",
      "dexterity": "D",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 10,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "中盾系の武器。鷹紋のウッドシールドの特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 4,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 4,
      "鉄の目": 4,
      "レディ": 2,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 4
    }
  },
  {
    "id": "馬紋_ウッドシールド",
    "name": "馬紋のウッドシールド",
    "type": "中盾",
    "rarity": "コモン",
    "attackPower": {
      "physical": 59,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 59
    },
    "scaling": {
      "strength": "A",
      "dexterity": "D",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 10,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "中盾系の武器。馬紋のウッドシールドの特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 4,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 4,
      "鉄の目": 4,
      "レディ": 2,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 4
    }
  },
  {
    "id": "燭樹_ウッドシールド",
    "name": "燭樹のウッドシールド",
    "type": "中盾",
    "rarity": "コモン",
    "attackPower": {
      "physical": 59,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 59
    },
    "scaling": {
      "strength": "A",
      "dexterity": "D",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 10,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "中盾系の武器。燭樹のウッドシールドの特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 4,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 4,
      "鉄の目": 4,
      "レディ": 2,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 4
    }
  },
  {
    "id": "炎紋_ウッドシールド",
    "name": "炎紋のウッドシールド",
    "type": "中盾",
    "rarity": "コモン",
    "attackPower": {
      "physical": 59,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 59
    },
    "scaling": {
      "strength": "A",
      "dexterity": "D",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 10,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "中盾系の武器。炎紋のウッドシールドの特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 4,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 4,
      "鉄の目": 4,
      "レディ": 2,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 4
    }
  },
  {
    "id": "蝕まれた木盾",
    "name": "蝕まれた木盾",
    "type": "中盾",
    "rarity": "コモン",
    "attackPower": {
      "physical": 47,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 47
    },
    "scaling": {
      "strength": "A",
      "dexterity": "D",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 10,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "中盾系の武器。蝕まれた木盾の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 4,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 4,
      "鉄の目": 4,
      "レディ": 2,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 4
    }
  },
  {
    "id": "ラウンドシールド",
    "name": "ラウンドシールド",
    "type": "中盾",
    "rarity": "コモン",
    "attackPower": {
      "physical": 59,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 59
    },
    "scaling": {
      "strength": "A",
      "dexterity": "D",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 10,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "中盾系の武器。ラウンドシールドの特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 4,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 4,
      "鉄の目": 4,
      "レディ": 2,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 4
    }
  },
  {
    "id": "蝕まれた革盾",
    "name": "蝕まれた革盾",
    "type": "中盾",
    "rarity": "コモン",
    "attackPower": {
      "physical": 47,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 47
    },
    "scaling": {
      "strength": "A",
      "dexterity": "D",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 10,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "中盾系の武器。蝕まれた革盾の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 4,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 4,
      "鉄の目": 4,
      "レディ": 2,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 4
    }
  },
  {
    "id": "ヒーターシールド",
    "name": "ヒーターシールド",
    "type": "中盾",
    "rarity": "コモン",
    "attackPower": {
      "physical": 59,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 59
    },
    "scaling": {
      "strength": "A",
      "dexterity": "D",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 10,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "中盾系の武器。ヒーターシールドの特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 4,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 4,
      "鉄の目": 4,
      "レディ": 2,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 4
    }
  },
  {
    "id": "青紋_ヒーターシールド",
    "name": "青紋のヒーターシールド",
    "type": "中盾",
    "rarity": "コモン",
    "attackPower": {
      "physical": 59,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 59
    },
    "scaling": {
      "strength": "A",
      "dexterity": "D",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 10,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "中盾系の武器。青紋のヒーターシールドの特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 4,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 4,
      "鉄の目": 4,
      "レディ": 2,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 4
    }
  },
  {
    "id": "赤紋_ヒーターシールド",
    "name": "赤紋のヒーターシールド",
    "type": "中盾",
    "rarity": "コモン",
    "attackPower": {
      "physical": 59,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 59
    },
    "scaling": {
      "strength": "A",
      "dexterity": "D",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 10,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "中盾系の武器。赤紋のヒーターシールドの特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 4,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 4,
      "鉄の目": 4,
      "レディ": 2,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 4
    }
  },
  {
    "id": "獣紋_ヒーターシールド",
    "name": "獣紋のヒーターシールド",
    "type": "中盾",
    "rarity": "コモン",
    "attackPower": {
      "physical": 59,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 59
    },
    "scaling": {
      "strength": "A",
      "dexterity": "D",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 10,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "中盾系の武器。獣紋のヒーターシールドの特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 4,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 4,
      "鉄の目": 4,
      "レディ": 2,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 4
    }
  },
  {
    "id": "逆さ鷹_ヒーターシールド",
    "name": "逆さ鷹のヒーターシールド",
    "type": "中盾",
    "rarity": "コモン",
    "attackPower": {
      "physical": 59,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 59
    },
    "scaling": {
      "strength": "A",
      "dexterity": "D",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 10,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "中盾系の武器。逆さ鷹のヒーターシールドの特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 4,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 4,
      "鉄の目": 4,
      "レディ": 2,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 4
    }
  },
  {
    "id": "蝕紋_ヒーターシールド",
    "name": "蝕紋のヒーターシールド",
    "type": "中盾",
    "rarity": "コモン",
    "attackPower": {
      "physical": 59,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 59
    },
    "scaling": {
      "strength": "A",
      "dexterity": "D",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 10,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "中盾系の武器。蝕紋のヒーターシールドの特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 4,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 4,
      "鉄の目": 4,
      "レディ": 2,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 4
    }
  },
  {
    "id": "ラージレザーシールド",
    "name": "ラージレザーシールド",
    "type": "中盾",
    "rarity": "コモン",
    "attackPower": {
      "physical": 59,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 59
    },
    "scaling": {
      "strength": "A",
      "dexterity": "D",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 10,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "中盾系の武器。ラージレザーシールドの特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 4,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 4,
      "鉄の目": 4,
      "レディ": 2,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 4
    }
  },
  {
    "id": "ブラックレザーシールド",
    "name": "ブラックレザーシールド",
    "type": "中盾",
    "rarity": "コモン",
    "attackPower": {
      "physical": 59,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 59
    },
    "scaling": {
      "strength": "A",
      "dexterity": "D",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 10,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "中盾系の武器。ブラックレザーシールドの特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 4,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 4,
      "鉄の目": 4,
      "レディ": 2,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 4
    }
  },
  {
    "id": "太陽_都_盾",
    "name": "太陽の都の盾",
    "type": "中盾",
    "rarity": "アンコモン",
    "attackPower": {
      "physical": 59,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 59
    },
    "scaling": {
      "strength": "A",
      "dexterity": "D",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 10,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "中盾系の武器。太陽の都の盾の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 4,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 4,
      "鉄の目": 4,
      "レディ": 2,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 4
    }
  },
  {
    "id": "カイトシールド",
    "name": "カイトシールド",
    "type": "中盾",
    "rarity": "アンコモン",
    "attackPower": {
      "physical": 59,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 59
    },
    "scaling": {
      "strength": "A",
      "dexterity": "D",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 10,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "中盾系の武器。カイトシールドの特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 4,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 4,
      "鉄の目": 4,
      "レディ": 2,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 4
    }
  },
  {
    "id": "青金_カイトシールド",
    "name": "青金のカイトシールド",
    "type": "中盾",
    "rarity": "アンコモン",
    "attackPower": {
      "physical": 59,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 59
    },
    "scaling": {
      "strength": "A",
      "dexterity": "D",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 10,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "中盾系の武器。青金のカイトシールドの特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 4,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 4,
      "鉄の目": 4,
      "レディ": 2,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 4
    }
  },
  {
    "id": "蠍_カイトシールド",
    "name": "蠍のカイトシールド",
    "type": "中盾",
    "rarity": "アンコモン",
    "attackPower": {
      "physical": 59,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 59
    },
    "scaling": {
      "strength": "A",
      "dexterity": "D",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 10,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "中盾系の武器。蠍のカイトシールドの特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 4,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 4,
      "鉄の目": 4,
      "レディ": 2,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 4
    }
  },
  {
    "id": "双鳥_カイトシールド",
    "name": "双鳥のカイトシールド",
    "type": "中盾",
    "rarity": "アンコモン",
    "attackPower": {
      "physical": 59,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 59
    },
    "scaling": {
      "strength": "A",
      "dexterity": "D",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 10,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "中盾系の武器。双鳥のカイトシールドの特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 4,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 4,
      "鉄の目": 4,
      "レディ": 2,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 4
    }
  },
  {
    "id": "真鍮_盾",
    "name": "真鍮の盾",
    "type": "中盾",
    "rarity": "レア",
    "attackPower": {
      "physical": 59,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 59
    },
    "scaling": {
      "strength": "A",
      "dexterity": "D",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 10,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "中盾系の武器。真鍮の盾の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 4,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 4,
      "鉄の目": 4,
      "レディ": 2,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 4
    }
  },
  {
    "id": "失地騎士_盾",
    "name": "失地騎士の盾",
    "type": "中盾",
    "rarity": "レア",
    "attackPower": {
      "physical": 59,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 59
    },
    "scaling": {
      "strength": "A",
      "dexterity": "D",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 10,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "中盾系の武器。失地騎士の盾の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 4,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 4,
      "鉄の目": 4,
      "レディ": 2,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 4
    }
  },
  {
    "id": "しろがね_盾",
    "name": "しろがねの盾",
    "type": "中盾",
    "rarity": "レア",
    "attackPower": {
      "physical": 59,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 59
    },
    "scaling": {
      "strength": "A",
      "dexterity": "D",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 10,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "中盾系の武器。しろがねの盾の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 4,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 4,
      "鉄の目": 4,
      "レディ": 2,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 4
    }
  },
  {
    "id": "獣人_壺盾",
    "name": "獣人の壺盾",
    "type": "中盾",
    "rarity": "レア",
    "attackPower": {
      "physical": 67,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 67
    },
    "scaling": {
      "strength": "A",
      "dexterity": "D",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 10,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "中盾系の武器。獣人の壺盾の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 4,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 4,
      "鉄の目": 4,
      "レディ": 2,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 4
    }
  },
  {
    "id": "カーリア_騎士盾",
    "name": "カーリアの騎士盾",
    "type": "中盾",
    "rarity": "レア",
    "attackPower": {
      "physical": 73,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 73
    },
    "scaling": {
      "strength": "B",
      "dexterity": "D",
      "intelligence": "D",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 10,
      "dexterity": 6,
      "intelligence": 8,
      "faith": 0,
      "arcane": 0
    },
    "description": "中盾系の武器。カーリアの騎士盾の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 4,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 4,
      "鉄の目": 4,
      "レディ": 2,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 4
    }
  },
  {
    "id": "白銀_盾",
    "name": "白銀の盾",
    "type": "中盾",
    "rarity": "レア",
    "attackPower": {
      "physical": 59,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 59
    },
    "scaling": {
      "strength": "A",
      "dexterity": "D",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 10,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "中盾系の武器。白銀の盾の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 4,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 4,
      "鉄の目": 4,
      "レディ": 2,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 4
    }
  },
  {
    "id": "大亀_甲羅",
    "name": "大亀の甲羅",
    "type": "中盾",
    "rarity": "レア",
    "attackPower": {
      "physical": 76,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 76
    },
    "scaling": {
      "strength": "A",
      "dexterity": "D",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 10,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "中盾系の武器。大亀の甲羅の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 4,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 4,
      "鉄の目": 4,
      "レディ": 2,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 4
    }
  },
  {
    "id": "カーリア_騎士盾",
    "name": "カーリアの騎士盾",
    "type": "中盾",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 10,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "中盾系の武器。カーリアの騎士盾の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 4,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 4,
      "鉄の目": 4,
      "レディ": 2,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 4
    }
  },
  {
    "id": "大亀_甲羅",
    "name": "大亀の甲羅",
    "type": "中盾",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 10,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "中盾系の武器。大亀の甲羅の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 4,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 4,
      "鉄の目": 4,
      "レディ": 2,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 4
    }
  },
  {
    "id": "真鍮_盾",
    "name": "真鍮の盾",
    "type": "中盾",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 10,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "中盾系の武器。真鍮の盾の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 4,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 4,
      "鉄の目": 4,
      "レディ": 2,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 2,
      "執行者": 4
    }
  },
  {
    "id": "魔力特化型黄金樹_大盾",
    "name": "魔力特化型（黄金樹の大盾）",
    "type": "大盾",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 14,
      "dexterity": 4,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "大盾系の武器。魔力特化型（黄金樹の大盾）の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 8,
    "characterCompatibility": {
      "追跡者": 1,
      "守護者": 5,
      "鉄の目": 3,
      "レディ": 1,
      "無頼漢": 2,
      "復讐者": 3,
      "隠者": 1,
      "執行者": 4
    }
  },
  {
    "id": "聖属性特化型黄金樹_大盾",
    "name": "聖属性特化型（黄金樹の大盾）",
    "type": "大盾",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 14,
      "dexterity": 4,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "大盾系の武器。聖属性特化型（黄金樹の大盾）の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 8,
    "characterCompatibility": {
      "追跡者": 1,
      "守護者": 5,
      "鉄の目": 3,
      "レディ": 1,
      "無頼漢": 2,
      "復讐者": 3,
      "隠者": 1,
      "執行者": 4
    }
  },
  {
    "id": "状態異常型指石_盾",
    "name": "状態異常型（指石の盾）",
    "type": "大盾",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 14,
      "dexterity": 4,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "大盾系の武器。状態異常型（指石の盾）の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 8,
    "characterCompatibility": {
      "追跡者": 1,
      "守護者": 5,
      "鉄の目": 3,
      "レディ": 1,
      "無頼漢": 2,
      "復讐者": 3,
      "隠者": 1,
      "執行者": 4
    },
    "statusEffects": [
      {
        "type": "発狂",
        "buildup": 56
      }
    ]
  },
  {
    "id": "完全防御型",
    "name": "完全防御型",
    "type": "大盾",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 14,
      "dexterity": 4,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "大盾系の武器。完全防御型の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 8,
    "characterCompatibility": {
      "追跡者": 1,
      "守護者": 5,
      "鉄の目": 3,
      "レディ": 1,
      "無頼漢": 2,
      "復讐者": 3,
      "隠者": 1,
      "執行者": 4
    }
  },
  {
    "id": "属性特化型",
    "name": "属性特化型",
    "type": "大盾",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 14,
      "dexterity": 4,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "大盾系の武器。属性特化型の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 8,
    "characterCompatibility": {
      "追跡者": 1,
      "守護者": 5,
      "鉄の目": 3,
      "レディ": 1,
      "無頼漢": 2,
      "復讐者": 3,
      "隠者": 1,
      "執行者": 4
    }
  },
  {
    "id": "状態異常型",
    "name": "状態異常型",
    "type": "大盾",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 14,
      "dexterity": 4,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "大盾系の武器。状態異常型の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 8,
    "characterCompatibility": {
      "追跡者": 1,
      "守護者": 5,
      "鉄の目": 3,
      "レディ": 1,
      "無頼漢": 2,
      "復讐者": 3,
      "隠者": 1,
      "執行者": 4
    }
  },
  {
    "id": "黄金_報復黄金樹_大盾",
    "name": "黄金の報復（黄金樹の大盾）",
    "type": "大盾",
    "rarity": "コモン",
    "attackPower": {
      "physical": 0,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 0
    },
    "scaling": {
      "strength": "-",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 14,
      "dexterity": 4,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "大盾系の武器。黄金の報復（黄金樹の大盾）の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 8,
    "characterCompatibility": {
      "追跡者": 1,
      "守護者": 5,
      "鉄の目": 3,
      "レディ": 1,
      "無頼漢": 2,
      "復讐者": 3,
      "隠者": 1,
      "執行者": 4
    }
  },
  {
    "id": "無頼漢_大斧",
    "name": "無頼漢の大斧",
    "type": "特大武器",
    "rarity": "コモン",
    "attackPower": {
      "physical": 100,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 100
    },
    "scaling": {
      "strength": "S",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 20,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "特大武器系の武器。無頼漢の大斧の特性を持つ。",
    "obtainMethod": "フィールド獲得、商人購入",
    "weight": 12,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 4,
      "鉄の目": 2,
      "レディ": 1,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 1,
      "執行者": 3
    }
  },
  {
    "id": "腐敗した大斧",
    "name": "腐敗した大斧",
    "type": "特大武器",
    "rarity": "アンコモン",
    "attackPower": {
      "physical": 109,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 109
    },
    "scaling": {
      "strength": "S",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 20,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "特大武器系の武器。腐敗した大斧の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 12,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 4,
      "鉄の目": 2,
      "レディ": 1,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 1,
      "執行者": 3
    }
  },
  {
    "id": "闘士_大斧",
    "name": "闘士の大斧",
    "type": "特大武器",
    "rarity": "アンコモン",
    "attackPower": {
      "physical": 125,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 125
    },
    "scaling": {
      "strength": "S",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 20,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "特大武器系の武器。闘士の大斧の特性を持つ。",
    "obtainMethod": "フィールド獲得、ボス報酬",
    "weight": 12,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 4,
      "鉄の目": 2,
      "レディ": 1,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 1,
      "執行者": 3
    }
  },
  {
    "id": "ゴーレム_斧槍",
    "name": "ゴーレムの斧槍",
    "type": "特大武器",
    "rarity": "レア",
    "attackPower": {
      "physical": 156,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 156
    },
    "scaling": {
      "strength": "S",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 20,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "特大武器系の武器。ゴーレムの斧槍の特性を持つ。",
    "obtainMethod": "ボス報酬、レア獲得",
    "weight": 12,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 4,
      "鉄の目": 2,
      "レディ": 1,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 1,
      "執行者": 3
    }
  },
  {
    "id": "ゴッドフレイ_王斧",
    "name": "ゴッドフレイの王斧",
    "type": "特大武器",
    "rarity": "レジェンド",
    "attackPower": {
      "physical": 181,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 181
    },
    "scaling": {
      "strength": "S",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 20,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "特大武器系の武器。ゴッドフレイの王斧の特性を持つ。",
    "obtainMethod": "極レア獲得",
    "weight": 12,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 4,
      "鉄の目": 2,
      "レディ": 1,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 1,
      "執行者": 3
    }
  },
  {
    "id": "ギーザ_車輪",
    "name": "ギーザの車輪",
    "type": "特大武器",
    "rarity": "レア",
    "attackPower": {
      "physical": 149,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 149
    },
    "scaling": {
      "strength": "S",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 20,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "特大武器系の武器。ギーザの車輪の特性を持つ。",
    "obtainMethod": "フィールド獲得、ボス報酬",
    "weight": 12,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 4,
      "鉄の目": 2,
      "レディ": 1,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 1,
      "執行者": 3
    },
    "statusEffects": [
      {
        "type": "出血",
        "buildup": 56
      }
    ]
  },
  {
    "id": "大型ハンマー",
    "name": "大型ハンマー",
    "type": "特大武器",
    "rarity": "アンコモン",
    "attackPower": {
      "physical": 118,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 118
    },
    "scaling": {
      "strength": "S",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 20,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "特大武器系の武器。大型ハンマーの特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 12,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 4,
      "鉄の目": 2,
      "レディ": 1,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 1,
      "執行者": 3
    }
  },
  {
    "id": "鍛冶屋_大槌",
    "name": "鍛冶屋の大槌",
    "type": "特大武器",
    "rarity": "レア",
    "attackPower": {
      "physical": 134,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 134
    },
    "scaling": {
      "strength": "S",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 20,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "特大武器系の武器。鍛冶屋の大槌の特性を持つ。",
    "obtainMethod": "鍛冶屋関連クエスト、ボス報酬",
    "weight": 12,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 4,
      "鉄の目": 2,
      "レディ": 1,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 1,
      "執行者": 3
    }
  },
  {
    "id": "巨人_鎖鉄球",
    "name": "巨人の鎖鉄球",
    "type": "特大武器",
    "rarity": "レジェンド",
    "attackPower": {
      "physical": 167,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 167
    },
    "scaling": {
      "strength": "S",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 20,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "特大武器系の武器。巨人の鎖鉄球の特性を持つ。",
    "obtainMethod": "極レア獲得",
    "weight": 12,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 4,
      "鉄の目": 2,
      "レディ": 1,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 1,
      "執行者": 3
    }
  },
  {
    "id": "石人_大剣",
    "name": "石人の大剣",
    "type": "特大武器",
    "rarity": "レア",
    "attackPower": {
      "physical": 142,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 142
    },
    "scaling": {
      "strength": "S",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 20,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "特大武器系の武器。石人の大剣の特性を持つ。",
    "obtainMethod": "ボス報酬、レア獲得",
    "weight": 12,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 4,
      "鉄の目": 2,
      "レディ": 1,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 1,
      "執行者": 3
    }
  },
  {
    "id": "黒焔_大剣",
    "name": "黒焔の大剣",
    "type": "特大武器",
    "rarity": "レア",
    "attackPower": {
      "physical": 94,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 94
    },
    "scaling": {
      "strength": "S",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "D",
      "arcane": "-"
    },
    "requirements": {
      "strength": 20,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 8,
      "arcane": 0
    },
    "description": "特大武器系の武器。黒焔の大剣の特性を持つ。",
    "obtainMethod": "ボス報酬、レア獲得",
    "weight": 12,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 4,
      "鉄の目": 2,
      "レディ": 1,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 1,
      "執行者": 3
    }
  },
  {
    "id": "古竜_大剣",
    "name": "古竜の大剣",
    "type": "特大武器",
    "rarity": "レジェンド",
    "attackPower": {
      "physical": 88,
      "magic": 0,
      "fire": 0,
      "lightning": 78,
      "holy": 0,
      "total": 166
    },
    "scaling": {
      "strength": "S",
      "dexterity": "-",
      "intelligence": "-",
      "faith": "D",
      "arcane": "-"
    },
    "requirements": {
      "strength": 20,
      "dexterity": 6,
      "intelligence": 0,
      "faith": 8,
      "arcane": 0
    },
    "description": "特大武器系の武器。古竜の大剣の特性を持つ。",
    "obtainMethod": "極レア獲得",
    "weight": 12,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 4,
      "鉄の目": 2,
      "レディ": 1,
      "無頼漢": 3,
      "復讐者": 3,
      "隠者": 1,
      "執行者": 3
    }
  },
  {
    "id": "レディ_短剣",
    "name": "レディの短剣",
    "type": "短剣",
    "rarity": "コモン",
    "attackPower": {
      "physical": 55,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 55
    },
    "scaling": {
      "strength": "E",
      "dexterity": "S",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 5,
      "dexterity": 10,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "短剣系の武器。レディの短剣の特性を持つ。",
    "obtainMethod": "レディ初期装備",
    "weight": 1.5,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 2,
      "鉄の目": 2,
      "レディ": 5,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 2,
      "執行者": 4
    },
    "skill": {
      "name": "魔術師の短剣",
      "fpCost": 10,
      "description": "魔術師の短剣の効果"
    }
  },
  {
    "id": "ダガー",
    "name": "ダガー",
    "type": "短剣",
    "rarity": "コモン",
    "attackPower": {
      "physical": 58,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 58
    },
    "scaling": {
      "strength": "E",
      "dexterity": "S",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 5,
      "dexterity": 10,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "短剣系の武器。ダガーの特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 1.5,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 2,
      "鉄の目": 2,
      "レディ": 5,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 2,
      "執行者": 4
    }
  },
  {
    "id": "パリングダガー",
    "name": "パリングダガー",
    "type": "短剣",
    "rarity": "コモン",
    "attackPower": {
      "physical": 60,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 60
    },
    "scaling": {
      "strength": "E",
      "dexterity": "S",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 5,
      "dexterity": 10,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "短剣系の武器。パリングダガーの特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 1.5,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 2,
      "鉄の目": 2,
      "レディ": 5,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 2,
      "執行者": 4
    },
    "skill": {
      "name": "パリィ",
      "fpCost": 10,
      "description": "パリィの効果"
    }
  },
  {
    "id": "慈悲_短剣",
    "name": "慈悲の短剣",
    "type": "短剣",
    "rarity": "アンコモン",
    "attackPower": {
      "physical": 72,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 72
    },
    "scaling": {
      "strength": "E",
      "dexterity": "S",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 5,
      "dexterity": 10,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "短剣系の武器。慈悲の短剣の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 1.5,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 2,
      "鉄の目": 2,
      "レディ": 5,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 2,
      "執行者": 4
    }
  },
  {
    "id": "血汚れた短刀",
    "name": "血汚れた短刀",
    "type": "短剣",
    "rarity": "アンコモン",
    "attackPower": {
      "physical": 59,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 59
    },
    "scaling": {
      "strength": "E",
      "dexterity": "S",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 5,
      "dexterity": 10,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "短剣系の武器。血汚れた短刀の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 1.5,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 2,
      "鉄の目": 2,
      "レディ": 5,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 2,
      "執行者": 4
    },
    "statusEffects": [
      {
        "type": "出血",
        "buildup": 38
      }
    ]
  },
  {
    "id": "黄銅_短刀",
    "name": "黄銅の短刀",
    "type": "短剣",
    "rarity": "アンコモン",
    "attackPower": {
      "physical": 75,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 75
    },
    "scaling": {
      "strength": "E",
      "dexterity": "A",
      "intelligence": "D",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 5,
      "dexterity": 10,
      "intelligence": 8,
      "faith": 0,
      "arcane": 0
    },
    "description": "短剣系の武器。黄銅の短刀の特性を持つ。",
    "obtainMethod": "フィールド獲得",
    "weight": 1.5,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 2,
      "鉄の目": 2,
      "レディ": 5,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 2,
      "執行者": 4
    }
  },
  {
    "id": "蠍_針",
    "name": "蠍の針",
    "type": "短剣",
    "rarity": "レア",
    "attackPower": {
      "physical": 71,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 71
    },
    "scaling": {
      "strength": "E",
      "dexterity": "S",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 5,
      "dexterity": 10,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "短剣系の武器。蠍の針の特性を持つ。",
    "obtainMethod": "フィールド獲得、ボス報酬",
    "weight": 1.5,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 2,
      "鉄の目": 2,
      "レディ": 5,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 2,
      "執行者": 4
    },
    "statusEffects": [
      {
        "type": "腐敗",
        "buildup": 50
      }
    ]
  },
  {
    "id": "チンクエディア",
    "name": "チンクエディア",
    "type": "短剣",
    "rarity": "レア",
    "attackPower": {
      "physical": 87,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 87
    },
    "scaling": {
      "strength": "E",
      "dexterity": "S",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 5,
      "dexterity": 10,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "短剣系の武器。チンクエディアの特性を持つ。",
    "obtainMethod": "フィールド獲得、ボス報酬",
    "weight": 1.5,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 2,
      "鉄の目": 2,
      "レディ": 5,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 2,
      "執行者": 4
    }
  },
  {
    "id": "輝石_クリス",
    "name": "輝石のクリス",
    "type": "短剣",
    "rarity": "レア",
    "attackPower": {
      "physical": 57,
      "magic": 31,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 88
    },
    "scaling": {
      "strength": "E",
      "dexterity": "A",
      "intelligence": "D",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 5,
      "dexterity": 10,
      "intelligence": 8,
      "faith": 0,
      "arcane": 0
    },
    "description": "短剣系の武器。輝石のクリスの特性を持つ。",
    "obtainMethod": "フィールド獲得、ボス報酬",
    "weight": 1.5,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 2,
      "鉄の目": 2,
      "レディ": 5,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 2,
      "執行者": 4
    },
    "skill": {
      "name": "輝石の魔術",
      "fpCost": 10,
      "description": "輝石の魔術の効果"
    }
  },
  {
    "id": "レディビア",
    "name": "レディビア",
    "type": "短剣",
    "rarity": "レア",
    "attackPower": {
      "physical": 71,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 71
    },
    "scaling": {
      "strength": "E",
      "dexterity": "S",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 5,
      "dexterity": 10,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "短剣系の武器。レディビアの特性を持つ。",
    "obtainMethod": "フィールド獲得、ボス報酬",
    "weight": 1.5,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 2,
      "鉄の目": 2,
      "レディ": 5,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 2,
      "執行者": 4
    },
    "statusEffects": [
      {
        "type": "出血",
        "buildup": 56
      }
    ],
    "skill": {
      "name": "レディビアの血刃",
      "fpCost": 10,
      "description": "レディビアの血刃の効果"
    }
  },
  {
    "id": "黒_刃",
    "name": "黒の刃",
    "type": "短剣",
    "rarity": "レア",
    "attackPower": {
      "physical": 46,
      "magic": 0,
      "fire": 0,
      "lightning": 0,
      "holy": 0,
      "total": 46
    },
    "scaling": {
      "strength": "E",
      "dexterity": "S",
      "intelligence": "-",
      "faith": "-",
      "arcane": "-"
    },
    "requirements": {
      "strength": 5,
      "dexterity": 10,
      "intelligence": 0,
      "faith": 0,
      "arcane": 0
    },
    "description": "短剣系の武器。黒の刃の特性を持つ。",
    "obtainMethod": "フィールド獲得、ボス報酬",
    "weight": 1.5,
    "characterCompatibility": {
      "追跡者": 2,
      "守護者": 2,
      "鉄の目": 2,
      "レディ": 5,
      "無頼漢": 2,
      "復讐者": 2,
      "隠者": 2,
      "執行者": 4
    },
    "skill": {
      "name": "死の刃",
      "fpCost": 10,
      "description": "死の刃の効果"
    }
  }
];

/**
 * 武器種別でフィルタリングされた武器を取得
 */
export function getWeaponsByType(type: WeaponType): Weapon[] {
  return WEAPONS.filter((weapon) => weapon.type === type);
}

/**
 * キャラクター名による推奨武器を取得（推奨度3以上）
 */
export function getRecommendedWeaponsForCharacter(
  characterName: string,
  minCompatibility: number = 3
): Weapon[] {
  return WEAPONS.filter((weapon) => {
    const compatibility =
      weapon.characterCompatibility[
        characterName as keyof typeof weapon.characterCompatibility
      ];
    return compatibility >= minCompatibility;
  }).sort((a, b) => {
    const aCompat =
      a.characterCompatibility[
        characterName as keyof typeof a.characterCompatibility
      ];
    const bCompat =
      b.characterCompatibility[
        characterName as keyof typeof b.characterCompatibility
      ];
    return bCompat - aCompat;
  });
}

/**
 * 武器IDから武器データを取得
 */
export function getWeaponById(id: string): Weapon | undefined {
  return WEAPONS.find((weapon) => weapon.id === id);
}

/**
 * 武器名から武器データを取得
 */
export function getWeaponByName(name: string): Weapon | undefined {
  return WEAPONS.find((weapon) => weapon.name === name);
}

/**
 * 全武器IDのリストを取得
 */
export function getAllWeaponIds(): string[] {
  return WEAPONS.map((weapon) => weapon.id);
}

/**
 * 全武器名のリストを取得
 */
export function getAllWeaponNames(): string[] {
  return WEAPONS.map((weapon) => weapon.name);
}

/**
 * 武器カテゴリ別のグループ分け
 */
export const WEAPON_GROUPS = {
  melee: WEAPONS.filter((w) => !["弓", "大弓", "クロスボウ", "杖", "聖印"].includes(w.type)),
  ranged: WEAPONS.filter((w) => ["弓", "大弓", "クロスボウ"].includes(w.type)),
  catalyst: WEAPONS.filter((w) => ["杖", "聖印"].includes(w.type)),
  shield: WEAPONS.filter((w) => ["小盾", "中盾", "大盾"].includes(w.type)),
};

/**
 * レアリティ別の武器数
 */
export const WEAPON_COUNT_BY_RARITY = {
  コモン: WEAPONS.filter((w) => w.rarity === "コモン").length,
  アンコモン: WEAPONS.filter((w) => w.rarity === "アンコモン").length,
  レア: WEAPONS.filter((w) => w.rarity === "レア").length,
  レジェンド: WEAPONS.filter((w) => w.rarity === "レジェンド").length,
};

/**
 * 武器種別一覧
 */
export const ALL_WEAPON_TYPES = [
  "短剣", "直剣", "大剣", "刀", "両刃剣", "曲剣", "重刺剣", "刺剣", "特大剣",
  "斧", "大斧", "槌", "大槌", "フレイル", "槍", "大槍", "斧槍", "鎌", "鞭", "爪", "拳",
  "弓", "大弓", "クロスボウ", "松明", "杖", "聖印", "小盾", "中盾", "大盾", "特大武器"
] as const;

/**
 * 武器種別ごとの武器数
 */
export const WEAPON_COUNT_BY_TYPE = Object.fromEntries(
  ALL_WEAPON_TYPES.map(type => [type, WEAPONS.filter(w => w.type === type).length])
);
