import type {
  Namespace as SocketIONamespace,
  Socket as SocketIOSocket,
} from "socket.io";
import type {
  PlayerKind,
  BasePlayer as Player,
  Card,
  GameState,
  NotificationAlert,
  User,
  UserProfile,
} from "./index";

export namespace DurakGameSocket {
  export type ClientToServerEvents = {
    player__exitGame: () => void;
    superPlayer__stopMove: () => void;
    superPlayer__putCardOnDesk: (card: Card, slotIndex: number) => void;
  };

  export type ServerToClientEvents = {
    "nonStartedGame::details": (payload: {
      joinedPlayersIds: Player["id"][];
    }) => void;
    "nonStartedGame::playerJoined": (payload: {
      player: { id: Player["id"] };
    }) => void;
    "finishedGame::restore": (payload: {
      state: DurakGame & { players: UserGamePlayer[] };
    }) => void;
    "finishedGame::notFound": () => void;
    "notification::push": (notification: NotificationAlert) => void;
    "game::state::restore": (payload: { state: GameState }) => void;
    // TODO add more payload data to 'game::over' event
    "game::over": (payload: { durak: { id: Player["id"] } }) => void;
  } & DeskServerToClientEvents &
    DiscardServerToClientEvents &
    MoveServerToClientEvents &
    PlayerServerToClientEvents &
    RoundServerToClientEvents &
    TalonServerToClientEvents;

  type DeskServerToClientEvents = {
    "desk::becameClear": () => void;
    "desk::receivedCard": (payload: {
      card: Card;
      slot: { index: number };
      source: { id: Player["id"] };
    }) => void;
  };

  type DiscardServerToClientEvents = {
    "discard::receivedCards": (payload: {
      addedCardsCount: number;
      isReceivedFirstCards: boolean;
      // NOTE: it is not best idea to emit count of discard cards
      // discard cards count can be used for cheating
      // user always can inject JavaScript code
      totalCardsCount?: number;
    }) => void;
  };

  type MoveServerToClientEvents = {
    "move::new": (payload: {
      move: {
        name: string;
        allowedPlayer: { id: string };
        endTime: { UTC: number };
        timeToMove?: number;
      };
    }) => void;
  };

  type PlayerServerToClientEvents = {
    "player::receiveCards": (payload: {
      player:
        | {
            id: Player["id"];
            addedCardsCount: number;
            handCount?: number;
          }
        | {
            addedCards: Card[];
            handCount?: number;
          };
    }) => void;
    "player::removeCard": (
      payload:
        | {
            player: {
              id: Player["id"];
              newCardsCount?: number;
            };
          }
        | {
            player?: { newCardsCount: number };
            card: Card;
          }
    ) => void;
    "player::changedKind": (payload: {
      player:
        | {
            id: Player["id"];
            newKind: PlayerKind;
          }
        | {
            newKind: PlayerKind;
          };
    }) => void;
    "player::leftGame": (
      payload: { player: { id: Player["id"] } } | void
    ) => void;
  };

  type RoundServerToClientEvents = {
    "round::new": (payload: { roundNumber: number }) => void;
    "round::becameEnded": (payload: {
      round: {
        number: number;
        defender: {
          // NOTE: frontend should know who is defender
          // so data about defender id can be omitted
          id?: Player["id"];
          isSuccessfullyDefended: boolean;
        };
      };
    }) => void;
  };

  type TalonServerToClientEvents = {
    "talon::madeDistribution": (payload: {
      receiver: {
        id: Player["id"];
      };
      distributionCards: {
        count: number;
        isMainTrumpCardIncluded: boolean;
      };
      talon: {
        // NOTE: it is not best idea to emit card count of talon
        // talon card count can be used for cheating
        // user always can inject JavaScript code
        cardCount?: number;
        isOnlyTrumpCardRemained: boolean;
      };
    }) => void;
  };

  export type InterServerEvents = Record<string, never>;

  export type SocketData = {
    sid: string;
    user: User & { profile: UserProfile };
  };

  export type Socket = SocketIOSocket<
    DurakGameSocket.ClientToServerEvents,
    DurakGameSocket.ServerToClientEvents,
    DurakGameSocket.InterServerEvents,
    DurakGameSocket.SocketData
  >;

  export type Namespace = SocketIONamespace<
    DurakGameSocket.ClientToServerEvents,
    DurakGameSocket.ServerToClientEvents,
    DurakGameSocket.InterServerEvents,
    DurakGameSocket.SocketData
  >;
}
