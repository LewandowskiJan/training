import ChessColumnService from '../../chess-column.service.js';
import ChessRowService from '../../chess-row.service.js';
import PieceAbstract from '../pice.abstract.js';

export default class Rook extends PieceAbstract {
  setupAttackScope() {
    this.setupMoveScope();
  }
  setupMoveScope() {
    this.moveScope = [];
      this.#selectRookQueenTopMovingCells();
      this.#selectRookQueenBottomMovingCells();
      this.#selectRookQueenRightMovingCells();
      this.#selectRookQueenLeftMovingCells();
  }

  #selectRookQueenLeftMovingCells() {
    let leftColumnIndex = 1;
    let lastLoop = false;
    let left = ChessColumnService.hasNextColumnName(this.position.column, -leftColumnIndex);

    while (left && !lastLoop) {
      const move = {
        column: ChessColumnService.calculateColumnName(this.position.column, -leftColumnIndex),
        row: this.position.row,
      };
      const lm = document.getElementById(move.column + move.row);
      if (this.isAllyPiece(lm)) {
        return;
      }
      if (this.isEnemyPiece(lm)) {
        lastLoop = true;
      }
      this.moveScope.push(move);
      leftColumnIndex++;
      left = ChessColumnService.hasNextColumnName(this.position.column, -leftColumnIndex);
    }
  }

  #selectRookQueenRightMovingCells() {
    let rightColumnIndex = 1;
    let lastLoop = false;
    let right = ChessColumnService.hasNextColumnName(this.position.column, rightColumnIndex);
    while (right && !lastLoop) {
      const move = {
        column: ChessColumnService.calculateColumnName(this.position.column, rightColumnIndex),
        row: this.position.row,
      };
      const lm = document.getElementById(move.column + move.row);

      if (this.isAllyPiece(lm)) {
        return;
      }
      if (this.isEnemyPiece(lm)) {
        lastLoop = true;
      }
      this.moveScope.push(move);
      rightColumnIndex++;
      right = ChessColumnService.hasNextColumnName(this.position.column, rightColumnIndex);
    }
  }

  #selectRookQueenTopMovingCells() {
    let upperRowIndex = 1;
    let lastLoop = false;
    let top = ChessRowService.hasRowNumber(this.position.row + upperRowIndex);
    while (top && !lastLoop) {
      const move = {
        column: this.position.column,
        row: this.position.row + upperRowIndex,
      };
      const lm = document.getElementById(move.column + move.row);

      if (this.isAllyPiece(lm)) {
        return;
      }
      if (this.isEnemyPiece(lm)) {
        lastLoop = true;
      }
      this.moveScope.push(move);
      upperRowIndex++;
      top = ChessRowService.hasRowNumber(this.position.row + upperRowIndex);
    }
  }

  #selectRookQueenBottomMovingCells() {
    let lowerRowIndex = 1;
    let lastLoop = false;
    let bottom = ChessRowService.hasRowNumber(this.position.row - lowerRowIndex);
    while (bottom && !lastLoop) {
      const move = {
        column: this.position.column,
        row: this.position.row - lowerRowIndex,
      };
      const lm = document.getElementById(move.column + move.row);

      if (this.isAllyPiece(lm)) {
        return;
      }
      if (this.isEnemyPiece(lm)) {
        lastLoop = true;
      }
      this.moveScope.push(move);
      lowerRowIndex++;
      bottom = ChessRowService.hasRowNumber(this.position.row - lowerRowIndex);
    }
  }
}
