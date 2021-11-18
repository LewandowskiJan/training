import Player from './player.js';
import ChessColumnService from './chess-column.service.js';
import { COLUMN_SIZE, ROW_SIZE } from './script.js';
import PieceFactory from './pice/pice.factory.js';

export default class GameState {
  rounds;
  currentRound = 1;
  players = [];
  time;
  gameStatus = 'pre-start';

  constructor(rounds, time) {
    this.rounds = rounds;
    this.time = time;
  }

  setupGame() {
    this.#setupPlayers();
    this.#drawChessBoard();
    this.gameStatus = 'start';
  }

  getPlayers() {
    return this.players;
  }

  #drawChessBoard() {
    let counter = 0;
    for (let chessRow = ROW_SIZE; chessRow > 0; chessRow--) {
      if (this.#isInitialRowWithPieces(chessRow)) {
        for (let chessColumn = 1; chessColumn <= COLUMN_SIZE; chessColumn++) {
          const cellColumn = ChessColumnService.getColumnNameByColumnNumber(chessColumn);
          // const currentPiece = new Piece({ column: cellColumn, row: chessRow });
          const factory = new PieceFactory();

          const currentPiece = factory.generatePiece({ column: cellColumn, row: chessRow });
          if (this.#isBottomRow(chessRow)) this.#addPieceToPlayer(currentPiece, 0);
          if (this.#isTopRow(chessRow)) this.#addPieceToPlayer(currentPiece, 1);

          this.#setupCurrentPieceView(currentPiece, cellColumn, chessRow, counter);

          counter++;
        }
      }
    }
  }

  #setupCurrentPieceView(currentPiece, cellColumn, chessRow, counter) {
    currentPiece.setupPieceView(cellColumn, chessRow, counter);
  }

  #addPieceToPlayer(currentPiece, playerNumber) {
    this.players[playerNumber].pushPiece(currentPiece, playerNumber === 0 ? 'bottom' : 'top');
  }

  #setupPlayers() {
    this.players.push(new Player('Joe', 'white'), new Player('Jane', 'black'));
  }

  #isInitialRowWithPieces(row) {
    return this.#isTopRow(row) || this.#isBottomRow(row);
  }

  #isTopRow(row) {
    return row > 6;
  }

  #isBottomRow(row) {
    return row < 3;
  }

  endGame() {
    this.gameStatus = 'end';
  }
  nextRound() {
    this.currentRound++;
  }

  isPlayerOneRound() {
    return this.currentRound % 2 !== 0;
  }
  beatPiece() {
    return x;
  }
  selectPiece() {
    return x;
  }
  restorePiece() {
    return x;
  }
}
