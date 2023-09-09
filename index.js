"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPlayerKind = exports.playerKinds = void 0;
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
