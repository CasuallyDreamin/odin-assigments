import knightMoves from "./knightMoves.js";

console.log(knightMoves([0, 0], [1, 2])); // [[0,0],[1,2]]
console.log(knightMoves([0, 0], [3, 3])); // [[0,0],[1,2],[2,4],[3,2],[4,3],[3,3]]
console.log(knightMoves([3, 3], [4, 3])); // [[3,3],[4,5],[5,4],[4,3]]
console.log(knightMoves([0, 0], [7, 7])); // [[0,0],[1,2],[2,4],[3,6],[4,5],[5,7],[6,6],[7,7]]
console.log(knightMoves([0, 0], [6, 2])); // [[0,0],[1,2],[2,4],[3,6],[4,5],[5,7],[6,6],[7,7]]
console.log(knightMoves([0, 0], [5, 1])); // [[0,0],[1,2],[2,4],[3,6],[4,5],[5,7],[6,6],[7,7]]
console.log(knightMoves([0, 0], [4, 4])); // [[0,0],[1,2],[2,4],[3,6],[4,5],[5,7],[6,6],[7,7]]
console.log(knightMoves([0, 0], [3, 3])); // [[0,0],[1,2],[2,4],[3,2],[4,3],[3,3]]
console.log(knightMoves([0, 0], [2, 1])); // [[0,0],[1,2],[2,1]]
console.log(knightMoves([0, 0], [1, 1])); // [[0,0],[1,2],[2,1],[1,3],[0,2],[1,1]]