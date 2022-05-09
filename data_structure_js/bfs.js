// BFS Breadth-First Search
// using queue to implement
// 최단거리 찾는 경우 사용

const bfs = (grapah, startNode) => {
  // 방문한 노드
  const visited = [];
  // 방문할 노드
  let needVisit = [];

  // 시작점
  needVisit.push(startNode);

  //
  while (needVisit.length !== 0) {
    const node = needVisit.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      needVisit = [...needVisit, ...grapah[node]];
    }
  }
  return visited;
};
