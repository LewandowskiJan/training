import PieceFactory from '../models/pice/pice.factory.js';
import Position from '../models/position.js';
import ChessColumnService from '../utils/chess-column.service.js';

export default class GameState {
  status = 'pre';
  roundNumber = 0;
  onMovePlayerNumber = 0;
  enemyPlayerNumber = 1;
  onGamePieces = new Map();
  outGamePieces = new Map();
  move;
  counter = 0;

  constructor(configuration) {
    if (configuration) {
      this.status = configuration.status;
      this.roundNumber = configuration.roundNumber + 1;
      this.onMovePlayerNumber = configuration.enemyPlayerNumber;
      this.enemyPlayerNumber = configuration.onMovePlayerNumber;
      this.move = configuration.move;
      this.onGamePieces = this.setupPieces(configuration.onGamePieces);
      this.outGamePieces = this.setupPieces(configuration.outGamePieces);
    } else {
      this.setupDefaultConfiguration();
    }
  }

  setMove(move) {
    this.move = move;
  }

  getEnemyPieces() {
    const pieces = [];
    this.onGamePieces.forEach((value) => {
      if (value.playerNumber === this.enemyPlayerNumber) pieces.push(value);
    });

    return pieces;
  }

  getAllyPieces() {
    const pieces = [];
    this.onGamePieces.forEach((value) => {
      if (value.playerNumber === this.onMovePlayerNumber) pieces.push(value);
    });

    return pieces;
  }

  setupDefaultConfiguration() {
    for (let column = 1; column <= 8; column++) {
      const columnName = ChessColumnService.getColumnNameByColumnNumber(column);
      this.createPiece(columnName, 7, 8);
      this.createPiece(columnName, 1, 2);
    }
    this.status = 'on game';
  }

  createPiece(columnName, rowStart, rowEnd) {
    for (let row = rowStart; row <= rowEnd; row++) {
      const playerNumber = row >= 7 ? 1 : 0;
      const position = new Position(columnName + row);
      const piece = PieceFactory.generatePiece(position, playerNumber);
      piece.setupPieceView(columnName, row, this.counter);
      this.onGamePieces.set(piece.id, piece);
      this.counter++;
    }
  }

  setupPieces(pieces = []) {
    const newMap = new Map();
    pieces.forEach((value) => {
      const currentPiece = PieceFactory.createPieceFromPositionTypeIcon(
        value.position,
        value.type,
        value.icon,
        value.playerNumber
      );

      if (value.playerNumber === this.enemyPlayerNumber) {
        currentPiece.setupAttackScope();
      }

      newMap.set(value.id, value);
    });

    return newMap;
  }
}
