import Piece from "./piece.js";
import Player from "./player.js";

export const chessColumnConfiguration = new Map([
  [0, "a"],
  [1, "b"],
  [2, "c"],
  [3, "d"],
  [4, "e"],
  [5, "f"],
  [6, "g"],
  [7, "h"],
])
export default class GameState {
  rounds;
  players = [];
  time;

  constructor(rounds, time) {
    this.rounds = rounds
    this.time = time
  }

  setupGame() {
    let counter = 0;
    this.players.push(new Player("Joe", "white"),new Player("Jane", "black"))
    for (let chessRow = 8; chessRow > 0; chessRow = chessRow - 1) {
      if (chessRow > 6 || chessRow < 3) {
        for (let chessColumn = 0; chessColumn < 8; chessColumn++) {
          const cellColumn = chessColumnConfiguration.get(chessColumn)
          const currentPiece = new Piece({ column: cellColumn, row: chessRow })

          if (chessRow < 3){this.players[0].pushPiece(currentPiece)}
          if (chessRow > 6){this.players[1].pushPiece(currentPiece)}

          switch (chessColumn) {
            case 0:
              currentPiece.setupPieceView(this.#isFirstOrLastRow(chessRow)
                ? { type: 'rook', icon: '&#128136;' }
                : { type: 'pawn', icon: '&#128023;' })
              break;
            case 1:

              currentPiece.setupPieceView(this.#isFirstOrLastRow(chessRow)
                ? { type: 'knight', icon: '&#127943;' }
                : { type: 'pawn', icon: '&#128023;' });
              break;
            case 2:
              currentPiece.setupPieceView(this.#isFirstOrLastRow(chessRow)
                ? { type: 'bishop', icon: '&#127939;' }
                : { type: 'pawn', icon: '&#128023;' });
              break;
            case 3:
              currentPiece.setupPieceView(this.#isFirstOrLastRow(chessRow)
                ? { type: 'king', icon: '&#129332;' }
                : { type: 'pawn', icon: '&#128023;' });
              break;
            case 4:
              currentPiece.setupPieceView(this.#isFirstOrLastRow(chessRow)
                ? { type: 'queen', icon: '&#128120;' }
                : { type: 'pawn', icon: '&#128023;' });
              break;
            case 5:
              currentPiece.setupPieceView(this.#isFirstOrLastRow(chessRow)
                ? { type: 'bishop', icon: '&#127939;' }
                : { type: 'pawn', icon: '&#128023;' });
              break;
            case 6:
              currentPiece.setupPieceView(this.#isFirstOrLastRow(chessRow)
                ? { type: 'knight', icon: '&#127943;' }
                : { type: 'pawn', icon: '&#128023;' });
              break;
            case 7:
              currentPiece.setupPieceView(this.#isFirstOrLastRow(chessRow)
                ? { type: 'rook', icon: '&#128136;' }
                : { type: 'pawn', icon: '&#128023;' });
              break;
          }

          const cell = document.getElementById(cellColumn + chessRow);
          cell.innerHTML = currentPiece.genratePieceView(counter);

          counter++;
        }
      }
    }
  }
  endGame() {
    return x
  }
  nextRound() {
    return x
  }
  beatPiece() {
    return x
  }
  selectPiece() {
    return x
  }
  restorePiece() {
    return x
  }
  #isFirstOrLastRow(row) {
    return row === 8 || row === 1;
  }
}
