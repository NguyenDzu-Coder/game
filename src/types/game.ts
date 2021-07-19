export enum GameSelector {
  SELECTED_POKEMONS_SELECTOR = "SELECTED_POKEMONS_SELECTOR",
}

export interface Pokemon {
  id: string;
  matched: boolean;
  nid?: string;
  image?: string;
  rowIndex?: number;
  colIndex?: number;
}

export enum GameMode {
  SURVIVAL_MODE = "SURVIVAL_MODE",
  SPEED_MODE = "SPEED_MODE",
}

export interface GameSound {
  soundReady: boolean;
  playOpenMenuSound: Function;
  playDisableSound: Function;
  playEnableSound: Function;
  playCompletedGameSound: Function;
  playFailedGameSound: Function;
  playBiteSound: Function;
  playOnSound: Function;
  playOffSound: Function;
  playGlugSound: Function;
  playFanfareSound: Function;
  playRisingPopSound: Function;
  playNearlyEndTimeSound: Function;
  playLevelUpSound: Function;
  playPopUpOnSound: Function;
  playPopUpOffSound: Function;
  playPopDownSound: Function;
  playYouWinSound: Function;
}

export enum GameTypeState {
  GAME_STATE = "GAME_STATE",
  GAME_SOUND_STATE = "GAME_SOUND_STATE",
  GAME_TIMING_STATE = "GAME_TIMING_STATE",
  GAME_OVERLAY_STATE = "GAME_OVERLAY_STATE",
  SELECTED_POKEMONS = "SELECTED_POKEMONS",
}

export enum GameStatus {
  RUNNING = "running",
  PENDING = "pending",
  COMPLETED = "completed",
  FAILED = "failed",
}

export interface GameState {
  status: GameStatus;
  row: number;
  col: number;
  pokemons: Record<string, Pokemon>;
  matrix: Pokemon[][];
  level: GameLevel;
}

export interface GameOverlayState {
  connectingLinePoints: PointCoords[];
}

export enum Direction {
  LEFT = "left",
  RIGHT = "right",
  TOP = "top",
  BOTTOM = "bottom",
}

export enum PointType {
  START = "start",
  END = "end",
  LINE = "line",
}

export interface PointCoords {
  rowIndex: number;
  colIndex: number;
  direction?: Direction;
  type?: PointType;
}

export interface PokemonCoords extends PointCoords {
  nid?: string;
}

export enum GameLevel {
  LEVEL_1 = "1",
  LEVEL_2 = "2",
  LEVEL_3 = "3",
  LEVEL_4 = "4",
  LEVEL_5 = "5",
  LEVEL_6 = "6",
  LEVEL_7 = "7",
  LEVEL_8 = "8",
  LEVEL_9 = "9",
  LEVEL_10 = "10",
  LEVEL_11 = "11",
  LEVEL_12 = "12",
  LEVEL_13 = "13",
  LEVEL_14 = "MAX",
}

export type GameOptions = {
  [key in GameLevel]: {
    row: number;
    col: number;
  };
};

export const gameOptions: GameOptions = {
  [GameLevel.LEVEL_1]: {
    row: 3,
    col: 4,
  },
  [GameLevel.LEVEL_2]: {
    row: 4,
    col: 4,
  },
  [GameLevel.LEVEL_3]: {
    row: 4,
    col: 5,
  },
  [GameLevel.LEVEL_4]: {
    row: 4,
    col: 6,
  },
  [GameLevel.LEVEL_5]: {
    row: 4,
    col: 7,
  },
  [GameLevel.LEVEL_6]: {
    row: 6,
    col: 8,
  },
  [GameLevel.LEVEL_7]: {
    row: 7,
    col: 8,
  },
  [GameLevel.LEVEL_8]: {
    row: 8,
    col: 8,
  },
  [GameLevel.LEVEL_9]: {
    row: 8,
    col: 9,
  },
  [GameLevel.LEVEL_10]: {
    row: 8,
    col: 10,
  },
  [GameLevel.LEVEL_11]: {
    row: 8,
    col: 11,
  },
  [GameLevel.LEVEL_12]: {
    row: 8,
    col: 12,
  },
  [GameLevel.LEVEL_13]: {
    row: 9,
    col: 12,
  },
  [GameLevel.LEVEL_14]: {
    row: 10,
    col: 12,
  },
};

export const nextLevel = {
  [GameLevel.LEVEL_1]: GameLevel.LEVEL_2,
  [GameLevel.LEVEL_2]: GameLevel.LEVEL_3,
  [GameLevel.LEVEL_3]: GameLevel.LEVEL_4,
  [GameLevel.LEVEL_4]: GameLevel.LEVEL_5,
  [GameLevel.LEVEL_5]: GameLevel.LEVEL_6,
  [GameLevel.LEVEL_6]: GameLevel.LEVEL_7,
  [GameLevel.LEVEL_7]: GameLevel.LEVEL_8,
  [GameLevel.LEVEL_8]: GameLevel.LEVEL_9,
  [GameLevel.LEVEL_9]: GameLevel.LEVEL_10,
  [GameLevel.LEVEL_10]: GameLevel.LEVEL_11,
  [GameLevel.LEVEL_11]: GameLevel.LEVEL_12,
  [GameLevel.LEVEL_12]: GameLevel.LEVEL_13,
  [GameLevel.LEVEL_13]: GameLevel.LEVEL_14,
  [GameLevel.LEVEL_14]: GameLevel.LEVEL_14,
};