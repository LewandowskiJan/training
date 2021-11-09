import ChessColumnService from '../../chess-column.service.js';
import ChessRowService from '../../chess-row.service.js';
import PieceAbstract from '../pice.abstract.js';

export default class Queen extends PieceAbstract {
  setupAttackScope() {
    this.setupMoveScope();
  }
  setupMoveScope() {
    this.moveScope = [];
    if (this.type === 'rook' || this.type === 'queen') {
      this.#selectRookQueenTopMovingCells();
      this.#selectRookQueenBottomMovingCells();
      this.#selectRookQueenRightMovingCells();
      this.#selectRookQueenLeftMovingCells();
      this.#selectBishopQueenTopRightMovingCells();
      this.#selectBishopQueenTopLeftMovingCells();
      this.#selectBishopQueenBottomRightMovingCells();
      this.#selectBishopQueenBottomLefMovingCells();
    }
  }

  #selectRookQueenLeftMovingCells() {
    let leftColumnIndex = 1;

    let left = ChessColumnService.hasNextColumnName(this.position.column, -leftColumnIndex);

    while (left) {
      const move = {
        column: ChessColumnService.calculateColumnName(this.position.column, -leftColumnIndex),
        row: this.position.row,
      };

      this.moveScope.push(move);
      leftColumnIndex++;
      left = ChessColumnService.hasNextColumnName(this.position.column, -leftColumnIndex);
    }
    if (this.side === 'top') {
      const move1 = {
        column: this.position.column,
        row: this.position.row - 1,
      };
      // console.log(move1);
      this.moveScope.push(move1);
    }
  }

  #selectRookQueenRightMovingCells() {
    let rightColumnIndex = 1;
    let right = ChessColumnService.hasNextColumnName(this.position.column, rightColumnIndex);
    while (right) {
      const move = {
        column: ChessColumnService.calculateColumnName(this.position.column, rightColumnIndex),
        row: this.position.row,
      };

      this.moveScope.push(move);
      rightColumnIndex++;
      right = ChessColumnService.hasNextColumnName(this.position.column, rightColumnIndex);
    }
  }

  #selectRookQueenTopMovingCells() {
    let upperRowIndex = 1;
    let top = ChessRowService.hasRowNumber(this.position.row + upperRowIndex);
    while (top) {
      const move = {
        column: this.position.column,
        row: this.position.row + upperRowIndex,
      };
      // console.log(move)
      this.moveScope.push(move);
      upperRowIndex++;
      top = ChessRowService.hasRowNumber(this.position.row + upperRowIndex);
    }
  }

  #selectRookQueenBottomMovingCells() {
    let lowerRowIndex = 1;
    let bottom = ChessRowService.hasRowNumber(this.position.row - lowerRowIndex);
    while (bottom) {
      const move = {
        column: this.position.column,
        row: this.position.row - lowerRowIndex,
      };

      this.moveScope.push(move);
      lowerRowIndex++;
      bottom = ChessRowService.hasRowNumber(this.position.row - lowerRowIndex);
    }
  }
  #selectBishopQueenTopRightMovingCells() {
    let q = 1;
    let topRight =
      ChessRowService.hasRowNumber(this.position.row + q) && ChessColumnService.hasColumnName(this.position.column, q);
    while (topRight) {
      const move = {
        column: ChessColumnService.calculateColumnName(this.position.column, q),
        row: this.position.row + q,
      };
      this.moveScope.push(move);
      q++;
      topRight =
        ChessRowService.hasRowNumber(this.position.row + q) &&
        ChessColumnService.hasNextColumnName(this.position.column, q);
    }
  }

  #selectBishopQueenTopLeftMovingCells() {
    let w = 1;
    let topLeft =
      ChessRowService.hasRowNumber(this.position.row + w) && ChessColumnService.hasColumnName(this.position.column, -w);
    while (topLeft) {
      const move = {
        column: ChessColumnService.calculateColumnName(this.position.column, -w),
        row: this.position.row + w,
      };
      this.moveScope.push(move);
      w++;
      topLeft =
        ChessRowService.hasRowNumber(this.position.row + w) &&
        ChessColumnService.hasNextColumnName(this.position.column, -w);
    }
  }

  #selectBishopQueenBottomRightMovingCells() {
    let r = 1;

    let bottomRight =
      ChessRowService.hasRowNumber(this.position.row - r) && ChessColumnService.hasColumnName(this.position.column, r);

    while (bottomRight) {
      const move = {
        column: ChessColumnService.calculateColumnName(this.position.column, r),
        row: this.position.row - r,
      };
      this.moveScope.push(move);
      r++;
      bottomRight =
        ChessRowService.hasRowNumber(this.position.row - r) &&
        ChessColumnService.hasNextColumnName(this.position.column, r);
    }
  }

  #selectBishopQueenBottomLefMovingCells() {
    let e = 1;
    let bottomLeft =
      ChessRowService.hasRowNumber(this.position.row - e) && ChessColumnService.hasColumnName(this.position.column, -e);
    while (bottomLeft) {
      const move = {
        column: ChessColumnService.calculateColumnName(this.position.column, -e),
        row: this.position.row - e,
      };
      this.moveScope.push(move);
      e++;
      bottomLeft =
        ChessRowService.hasRowNumber(this.position.row - e) &&
        ChessColumnService.hasNextColumnName(this.position.column, -e);
    }
  }
}
