import ChessColumnService from '../../chess-column.service.js';
import ChessRowService from '../../chess-row.service.js';
import PieceAbstract from '../pice.abstract.js';

export default class Queen extends PieceAbstract {
  setupAttackScope() {
    this.setupMoveScope();
  }

  setupMoveScope() {
    this.moveScope = [];
    this.#selectBishopQueenTopRightMovingCells();
    this.#selectBishopQueenTopLeftMovingCells();
    this.#selectBishopQueenBottomRightMovingCells();
    this.#selectBishopQueenBottomLefMovingCells();
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
  #selectBishopQueenTopRightMovingCells() {
    let q = 1;
    let lastLoop = false;
    let topRight =
      ChessRowService.hasRowNumber(this.position.row + q) && ChessColumnService.hasColumnName(this.position.column, q);

    while (topRight && !lastLoop) {
      const move = {
        column: ChessColumnService.calculateColumnName(this.position.column, q),
        row: this.position.row + q,
      };
      const lm = document.getElementById(move.column + move.row);

      if (this.isAllyPiece(lm)) {
        return;
      }
      if (this.isEnemyPiece(lm)) {
        lastLoop = true;
      }
      this.moveScope.push(move);
      q++;
      topRight =
        ChessRowService.hasRowNumber(this.position.row + q) &&
        ChessColumnService.hasNextColumnName(this.position.column, q);
    }
  }

  #selectBishopQueenTopLeftMovingCells() {
    let w = 1;
    let lastLoop = false;
    let topLeft =
      ChessRowService.hasRowNumber(this.position.row + w) && ChessColumnService.hasColumnName(this.position.column, -w);

    while (topLeft && !lastLoop) {
      const move = {
        column: ChessColumnService.calculateColumnName(this.position.column, -w),
        row: this.position.row + w,
      };
      const lm = document.getElementById(move.column + move.row);

      if (this.isAllyPiece(lm)) {
        return;
      }
      if (this.isEnemyPiece(lm)) {
        lastLoop = true;
      }
      this.moveScope.push(move);
      w++;
      topLeft =
        ChessRowService.hasRowNumber(this.position.row + w) &&
        ChessColumnService.hasNextColumnName(this.position.column, -w);
    }
  }

  #selectBishopQueenBottomRightMovingCells() {
    let r = 1;
    let lastLoop = false;

    let bottomRight =
      ChessRowService.hasRowNumber(this.position.row - r) && ChessColumnService.hasColumnName(this.position.column, r);

    while (bottomRight && !lastLoop) {
      const move = {
        column: ChessColumnService.calculateColumnName(this.position.column, r),
        row: this.position.row - r,
      };
      const lm = document.getElementById(move.column + move.row);

      if (this.isAllyPiece(lm)) {
        return;
      }
      lastLoop = this.isEnemyPiece(lm);
      this.moveScope.push(move);
      r++;
      bottomRight =
        ChessRowService.hasRowNumber(this.position.row - r) &&
        ChessColumnService.hasNextColumnName(this.position.column, r);
    }
  }

  #selectBishopQueenBottomLefMovingCells() {
    let e = 1;
    let lastLoop = false;
    let bottomLeft =
      ChessRowService.hasRowNumber(this.position.row - e) && ChessColumnService.hasColumnName(this.position.column, -e);
    while (bottomLeft && !lastLoop) {
      const move = {
        column: ChessColumnService.calculateColumnName(this.position.column, -e),
        row: this.position.row - e,
      };
      const lm = document.getElementById(move.column + move.row);

      if (this.isAllyPiece(lm)) {
        return;
      }
      // if (this.isEnemyPiece(lm)) {
      lastLoop = this.isEnemyPiece(lm);
      // }
      this.moveScope.push(move);
      e++;
      bottomLeft =
        ChessRowService.hasRowNumber(this.position.row - e) &&
        ChessColumnService.hasNextColumnName(this.position.column, -e);
    }
  }
}
