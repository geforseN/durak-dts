export const playerKinds = ["Attacker", "Defender", "Player"];
export function isPlayerKind(kind) {
    return playerKinds.includes(kind);
}
