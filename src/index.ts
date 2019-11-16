type Piece = "X" | "O";
type OptionalPiece = Piece | "";
type Board = OptionalPiece[][];
type coord = 0 | 1 | 2;

interface GameState {
  turn: Piece;
  winner: OptionalPiece;
  board: Board;
}

let gameState: GameState;
let gameHistory: GameState[] = [];

// Model
export const newBoard = () => {
  let buildingBoard: Board = [];
  for (let i = 0; i < 3; i += 1) {
    buildingBoard[i] = [];
    for (let j = 0; j < 3; j += 1) {
      buildingBoard[i][j] = "";
    }
  }
  return buildingBoard;
};
export const gameStart = () =>
  (gameState = {
    turn: "X",
    winner: "",
    board: newBoard()
  });
// Update
export const moveValid = (x: coord, y: coord) =>
  Boolean(gameState.board[x][y] === "");
export const placePiece = (piece: Piece, x: coord, y: coord) => {
  // change place the piece
};
export const checkVictory = (x: coord, y: coord, state: GameState) => {
  const checkFor = gameState.turn;
  // Horizontal
  const row = state.board[x];
  if (row.every(cell => cell == state.turn)) return state.turn;
  // Vertial
  const column = state.board.map(row => row[y]);
  if (column.every(cell => cell === state.turn)) return state.turn;
  // Diagonals
};
console.log(gameStart());

// Update View
