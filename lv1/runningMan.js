function solution(players, callings) {
  const playersMap = {};

  players.forEach((player, idx) => {
    playersMap[player] = idx;
  });

  for (let i = 0; i < callings.length; i++) {
    const player = callings[i];
    const playerIndex = playersMap[player];
    let frontPlayerIndex = playerIndex - 1;

    playersMap[player]--;
    playersMap[players[frontPlayerIndex]]++;

    const temp = players[frontPlayerIndex];
    players[frontPlayerIndex] = players[playerIndex];
    players[playerIndex] = temp;
  }
  return players;
}
