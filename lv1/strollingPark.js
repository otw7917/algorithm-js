function solution(park, routes) {
  const N = park.length;
  const M = park[0].length;

  let start;

  //시작점 찾기
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (park[i][j] === "S") start = [i, j];
    }
  }

  // 방향, 크기
  const vector = {
    N: [-1, 0],
    S: [1, 0],
    E: [0, 1],
    W: [0, -1],
  };

  routes.map((route) => {
    const [direction, distanceS] = route.split(" ");
    let distance = parseInt(distanceS);
    let [dn, dm] = start;
    let step = 0;
    //
    while (step < distance) {
      dn += vector[direction][0];
      dm += vector[direction][1];
      // out of grid || stopped by obstacle 하나라도 걸리면
      if (dn < 0 || dm < 0 || dn >= N || dm >= M || park[dn][dm] === "X") break;
      step++;
    }

    if (step === distance) start = [dn, dm];
  });

  return start;
}
