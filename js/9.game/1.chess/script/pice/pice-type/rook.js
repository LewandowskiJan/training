import ChessColumnService from '../../chess-column.service.js';
import ChessRowService from '../../chess-row.service.js';
import PieceAbstract from '../pice.abstract.js';

export default class Rook extends PieceAbstract {
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
}
