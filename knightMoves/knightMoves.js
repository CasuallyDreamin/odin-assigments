const knightMoves = (start, end) => {
  const isValidPosition = (position) => {
    const [x, y] = position;
    return x >= 0 && x < 8 && y >= 0 && y < 8;
  };

  const getPossibleMoves = (position) => {
    const [x, y] = position;
    const moves = [
        [x + 2, y + 1],
        [x + 2, y - 1],
        [x - 2, y + 1],
        [x - 2, y - 1],
        [x + 1, y + 2],
        [x + 1, y - 2],
        [x - 1, y + 2],
        [x - 1, y - 2],
    ];
    return moves.filter(isValidPosition);
  }
    const queue = [[start]];
    const visited = new Set();
    visited.add(start.toString());
    
    while (queue.length > 0) {
        const path = queue.shift();
        const currentPosition = path[path.length - 1];
        if (currentPosition[0] === end[0] && currentPosition[1] === end[1]) {
            return path;
        }
        const possibleMoves = getPossibleMoves(currentPosition);
        for (const move of possibleMoves) {
            if (!visited.has(move.toString())) {
                visited.add(move.toString());
                queue.push([...path, move]);
            }
        }
    }
    return null; // No path found
}
export default knightMoves;
