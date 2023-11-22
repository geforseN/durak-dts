import type { ConnectStatus, DurakGame, User, UserGamePlayer, UserProfile, UserGameStat } from "./generated/client/index";
export type { ConnectStatus, DurakGame, User, UserGamePlayer, UserProfile, UserGameStat, };
declare const allowedPlayerKinds: readonly ["AllowedAttacker", "AllowedDefender"];
export type AllowedPlayerKind = (typeof allowedPlayerKinds)[number];
export declare const playerKinds: readonly ["Attacker", "Defender", "Player", "AllowedAttacker", "AllowedDefender", "SurrenderedDefender"];
export type PlayerKind = (typeof playerKinds)[number];
export declare function isPlayerKind(kind: string | PlayerKind): kind is PlayerKind;
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
export type BasePlayer = {
    info: PlayerInfo;
    kind: PlayerKind;
    id: string;
    isAllowedToMove: boolean;
} | {
    info: PlayerInfo;
    kind: AllowedPlayerKind;
    id: string;
    isAllowedToMove: boolean;
    whenMayBecomeDisallowed: {
        UTC: number;
    };
};
export type Card = {
    rank: Rank;
    suit: Suit;
};
export type CardDTO = Card;
export declare const ranks: readonly ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
export type Rank = (typeof ranks)[number];
export declare const suits: readonly ["♠", "♦", "♥", "♣"];
export type Suit = (typeof suits)[number];
export declare const powers: Record<Rank, number>;
export type Power = (typeof powers)[keyof typeof powers];
export declare const allowedDurakGameTypes: readonly ["basic", "perevodnoy"];
export type DurakGameType = (typeof allowedDurakGameTypes)[number];
export declare const allowedTalonCardCount: readonly [24, 36, 52];
export type TalonCardCount = (typeof allowedTalonCardCount)[number];
export declare const allowedPlayerCount: readonly [2, 3, 4, 5, 6];
export type PlayerCount = (typeof allowedPlayerCount)[number];
export declare const allowedMissingCardCount: readonly [0, 1, 2, 3, 4, 5, 6];
export type AllowedMissingCardCount = (typeof allowedMissingCardCount)[number];
export type DeskSlot = {
    attackCard?: Card;
    defendCard?: Card;
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
    userCount: PlayerCount;
    cardCount: TalonCardCount;
    gameType: DurakGameType;
    moveTime: number;
};
export declare const defaultInitialGameSettings: InitialGameSettings;
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
export type Self = BasePlayer & {
    cards: Card[];
};
export type Enemy = BasePlayer & {
    cardCount: number;
};
export type GameState = {
    self: BasePlayer & {
        cards: Card[];
    };
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
//# sourceMappingURL=index.d.ts.map