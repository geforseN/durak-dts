"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPlayerKind = exports.playerKinds = void 0;
exports.playerKinds = [
    "Attacker",
    "Defender",
    "Player",
    "AllowedAttacker",
    "AllowedDefender",
    "SurrenderedDefender",
];
function isPlayerKind(kind) {
    return exports.playerKinds.includes(kind);
}
exports.isPlayerKind = isPlayerKind;
