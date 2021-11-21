import Position from '../../position.js';
import ChessColumnService from '../../../utils/chess-column.service.js';
import ChessRowService from '../../../utils/chess-row.service.js';
import PieceAbstract from '../pice.abstract.js';

export default class Rook extends PieceAbstract {
  setupAttackScope() {
    this.attackScope = [];
    this.setupMoveScope();
    this.attackScope.push(...this.moveScope);
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
      if (ChessColumnService.calculateColumnName(this.position.column, -leftColumnIndex)) {
        const position = new Position(
          ChessColumnService.calculateColumnName(this.position.column, -leftColumnIndex) + this.position.row
        );

        const lm = document.getElementById(position.id);

        if (this.isAllyPiece(lm)) {
          this.attackScope.push(position);
          return;
        }
        if (this.isEnemyPiece(lm)) {
          lastLoop = true;
        }
        this.moveScope.push(position);
        leftColumnIndex++;
        left = ChessColumnService.hasNextColumnName(this.position.column, -leftColumnIndex);
      } else {
        break;
      }
    }
  }

  #selectRookQueenRightMovingCells() {
    let rightColumnIndex = 1;
    let lastLoop = false;
    let right = ChessColumnService.hasNextColumnName(this.position.column, rightColumnIndex);
    while (right && !lastLoop) {
      if (ChessColumnService.calculateColumnName(this.position.column, rightColumnIndex)) {
        const position = new Position(
          ChessColumnService.calculateColumnName(this.position.column, rightColumnIndex) + this.position.row
        );

        const lm = document.getElementById(position.id);

        if (this.isAllyPiece(lm)) {
          this.attackScope.push(position);
          return;
        }
        if (this.isEnemyPiece(lm)) {
          lastLoop = true;
        }
        this.moveScope.push(position);
        rightColumnIndex++;
        right = ChessColumnService.hasNextColumnName(this.position.column, rightColumnIndex);
      } else {
        break;
      }
    }
  }

  #selectRookQueenTopMovingCells() {
    let upperRowIndex = 1;
    let lastLoop = false;
    let top = ChessRowService.hasRowNumber(this.position.row + upperRowIndex);
    while (top && !lastLoop) {
      if (ChessRowService.hasRowNumber(this.position.row + upperRowIndex)) {
        const position = new Position(this.position.column + (this.position.row + upperRowIndex));

        const lm = document.getElementById(position.id);

        if (this.isAllyPiece(lm)) {
          this.attackScope.push(position);
          return;
        }
        if (this.isEnemyPiece(lm)) {
          lastLoop = true;
        }
        this.moveScope.push(position);
        upperRowIndex++;
        top = ChessRowService.hasRowNumber(this.position.row + upperRowIndex);
      } else {
        break;
      }
    }
  }

  #selectRookQueenBottomMovingCells() {
    let lowerRowIndex = 1;
    let lastLoop = false;
    let bottom = ChessRowService.hasRowNumber(this.position.row - lowerRowIndex);
    while (bottom && !lastLoop) {
      if (ChessRowService.hasRowNumber(this.position.row - lowerRowIndex)) {
        const position = new Position(this.position.column + (this.position.row - lowerRowIndex));

        const lm = document.getElementById(position.id);

        if (this.isAllyPiece(lm)) {
          this.attackScope.push(position);
          return;
        }
        if (this.isEnemyPiece(lm)) {
          lastLoop = true;
        }
        this.moveScope.push(position);
        lowerRowIndex++;
        bottom = ChessRowService.hasRowNumber(this.position.row - lowerRowIndex);
      } else {
        break;
      }
    }
  }
}
