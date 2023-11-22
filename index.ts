import type {
  ConnectStatus,
  DurakGame,
  User,
  UserGamePlayer,
  UserProfile,
  UserGameStat,
} from "./generated/client/index";

export type {
  ConnectStatus,
  DurakGame,
  User,
  UserGamePlayer,
  UserProfile,
  UserGameStat,
};

const allowedPlayerKinds = ["AllowedAttacker", "AllowedDefender"] as const;
export type AllowedPlayerKind = (typeof allowedPlayerKinds)[number];

export const playerKinds = [
  "Attacker",
  "Defender",
  "Player",
  ...allowedPlayerKinds,
  "SurrenderedDefender",
] as const;
export type PlayerKind = (typeof playerKinds)[number];

export function isPlayerKind(kind: string | PlayerKind): kind is PlayerKind {
  return playerKinds.includes(kind as PlayerKind);
}

// TODO read https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry

export { DurakGameSocket } from "./durak-game-socket";

export type NotificationAlert = {
  message: string;
  type: "Error" | "Warning" | "Success";
  durationInMS: number;
  id: string;
};

export type PlayerInfo = {
  id: string;
  isAdmin: boolean;
  profile: {
    userId: string;
    nickname: string;
    photoUrl: string;
    personalLink: string;
    connectStatus: "ONLINE" | "AWAY" | "OFFLINE";
  };
};

export type BasePlayer =
  | {
      info: PlayerInfo;
      kind: PlayerKind;
      id: string;
      isAllowedToMove: boolean;
    }
  | {
      info: PlayerInfo;
      kind: AllowedPlayerKind;
      id: string;
      isAllowedToMove: boolean;
      whenMayBecomeDisallowed: { UTC: number };
    };

export type Card = {
  rank: Rank;
  suit: Suit;
};
export type CardDTO = Card;

export const ranks = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
] as const;
export type Rank = (typeof ranks)[number];

export const suits = ["♠", "♦", "♥", "♣"] as const;
export type Suit = (typeof suits)[number];

export const powers: Record<Rank, number> = {
  "2": 1,
  "3": 2,
  "4": 3,
  "5": 4,
  "6": 5,
  "7": 6,
  "8": 7,
  "9": 8,
  "10": 9,
  J: 10,
  Q: 11,
  K: 12,
  A: 13,
} as const;
export type Power = (typeof powers)[keyof typeof powers];

export const allowedDurakGameTypes = ["basic", "perevodnoy"] as const;
export type DurakGameType = (typeof allowedDurakGameTypes)[number];

export const allowedTalonCardCount = [24, 36, 52] as const;
export type TalonCardCount = (typeof allowedTalonCardCount)[number];

export const allowedPlayerCount = [2, 3, 4, 5, 6] as const;
export type PlayerCount = (typeof allowedPlayerCount)[number];

export const allowedMissingCardCount = [0, 1, 2, 3, 4, 5, 6] as const;
export type AllowedMissingCardCount = (typeof allowedMissingCardCount)[number];

export type DeskSlot = { 
  attackCard?: Card;
   defendCard?: Card
};
export type EmptyDeskSlot = {
  attackCard: undefined;
  defendCard: undefined;
};
export type AttackedDeskSlot = {
  attackCard: Card;
  defendCard: undefined;
};
export type DefendedDeskSlot = {
  attackCard: Card;
  defendCard: Card;
};

export type InitialGameSettings = {
  playerCount: PlayerCount;
  talonCardCount: TalonCardCount;
  gameType: DurakGameType;
  moveTime: number;
};

export const defaultInitialGameSettings: InitialGameSettings = {
  playerCount: 2,
  talonCardCount: 36,
  gameType: "basic",
  moveTime: 30_000,
};

export type GameSettings = {
  players: {
    count: PlayerCount;
    moveTime: number;
  };
  type: DurakGameType;
  talon: {
    count: TalonCardCount;
    trumpCard?: Card;
  };
  initialDistribution: {
    finalCardCount: AllowedMissingCardCount;
    cardCountPerIteration: AllowedMissingCardCount;
  };
  desk: {
    allowedFilledSlotCount: AllowedMissingCardCount;
    slotCount: AllowedMissingCardCount;
  };
};
export type Self = BasePlayer & { cards: Card[] };
export type Enemy = BasePlayer & { cardCount: number };

export type GameState = {
  self: BasePlayer & { cards: Card[] };
  enemies: Enemy[];
  discard: {
    isEmpty: boolean;
  };
  round: {
    number: number;
  };
  status: "starts" | "started" | "ended";
  desk: {
    slots: DeskSlot[];
  };
  settings: GameSettings;
  talon: {
    trumpCard: Card;
    isEmpty: boolean;
    hasOneCard: boolean;
  };
};
