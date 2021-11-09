import ChessColumnService from '../../chess-column.service.js';
import ChessRowService from '../../chess-row.service.js';
import PieceAbstract from '../pice.abstract.js';

export default class Bishop extends PieceAbstract {
  setupAttackScope() {
    this.setupMoveScope();
  }

  setupMoveScope() {
    this.moveScope = [];
    this.#selectBishopQueenTopRightMovingCells();
    this.#selectBishopQueenTopLeftMovingCells();
    this.#selectBishopQueenBottomRightMovingCells();
    this.#selectBishopQueenBottomLefMovingCells();
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
