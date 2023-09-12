"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.powers = exports.suits = exports.ranks = exports.isPlayerKind = exports.playerKinds = void 0;
const allowedPlayerKinds = ["AllowedAttacker", "AllowedDefender"];
exports.playerKinds = [
    "Attacker",
    "Defender",
    "Player",
    ...allowedPlayerKinds,
    "SurrenderedDefender",
];
function isPlayerKind(kind) {
    return exports.playerKinds.includes(kind);
}
exports.isPlayerKind = isPlayerKind;
exports.ranks = [
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
];
exports.suits = ["♠", "♦", "♥", "♣"];
exports.powers = {
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
};
