import type { ConnectStatus, DurakGame, User, UserGamePlayer, UserProfile, UserGameStat } from "./generated/client/index";
export type { ConnectStatus, DurakGame, User, UserGamePlayer, UserProfile, UserGameStat, };
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
};
export type Defender = BasePlayer & {
    kind: "Defender";
    isGaveUp: boolean;
};
export type Self = {
    cards: Card[];
} & BasePlayer;
export type Enemy = {
    cardCount: number;
} & BasePlayer;
export type Card = {
    rank: Rank;
    suit: Suit;
};
export type Rank = "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K" | "A";
export type Suit = "♠" | "♦" | "♥" | "♣";
export type GameType = "basic" | "perevodnoy";
export type CardCount = 24 | 36 | 52;
export type UserCount = 2 | 3 | 4 | 5 | 6;
export type AllowedMissingCardCount = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type DeskSlot = {
    attackCard?: Card;
    defendCard?: Card;
};
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
    self: Self;
    enemies: Enemy[];
    discard: {
        isEmpty: boolean;
    };
    round: {
        number: number;
        currentMove: {
            name: string;
            allowedPlayer: {
                id: string;
            };
            endTime: {
                UTC: number;
            };
        };
    };
    isGameEnded: boolean;
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