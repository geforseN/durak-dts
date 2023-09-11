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

export type Rank =
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "J"
  | "Q"
  | "K"
  | "A";

export type Suit = "♠" | "♦" | "♥" | "♣";

export type GameType = "basic" | "perevodnoy";
export type CardCount = 24 | 36 | 52;
export type UserCount = 2 | 3 | 4 | 5 | 6;
export type AllowedMissingCardCount = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type DeskSlot = { attackCard?: Card; defendCard?: Card };

export type GameSettings = {
  userCount: UserCount;
  gameType: GameType;
  cardCount: CardCount;
  moveTime: number;
  initialDistribution: {
    finalCardCount: AllowedMissingCardCount;
    cardCountPerIteration: AllowedMissingCardCount;
  };
  desk: {
    allowedFilledSlotCount: AllowedMissingCardCount;
    slotCount: AllowedMissingCardCount;
  };
};

export type GameState = {
  self: BasePlayer & { cards: Card[] };
  enemies: (BasePlayer & { cardCount: number })[];
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
