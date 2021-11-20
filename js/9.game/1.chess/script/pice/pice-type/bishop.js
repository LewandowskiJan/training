import Position from '../../position.js';
import ChessColumnService from '../../utils/chess-column.service.js';
import ChessRowService from '../../utils/chess-row.service.js';
import PieceAbstract from '../pice.abstract.js';

export default class Bishop extends PieceAbstract {
  setupAttackScope() {
    this.attackScope = [];
    this.setupMoveScope();
    this.attackScope.push(...this.moveScope);
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
      ChessColumnService.hasColumnName(this.position.column, q) && ChessRowService.hasRowNumber(this.position.row + q);

    while (topRight && !lastLoop) {
      if (
        ChessColumnService.calculateColumnName(this.position.column, q) &&
        ChessRowService.hasRowNumber(this.position.row + q)
      ) {
        const position = new Position(
          ChessColumnService.calculateColumnName(this.position.column, q) + (this.position.row + q)
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
        q++;
        topRight =
          ChessRowService.hasRowNumber(this.position.row + q) &&
          ChessColumnService.hasNextColumnName(this.position.column, q);
      } else {
        break;
      }
    }
  }

  #selectBishopQueenTopLeftMovingCells() {
    let w = 1;
    let lastLoop = false;
    let topLeft =
      ChessColumnService.hasColumnName(this.position.column, -w) && ChessRowService.hasRowNumber(this.position.row + w);

    while (topLeft && !lastLoop) {
      if (
        ChessColumnService.calculateColumnName(this.position.column, -w) &&
        ChessRowService.hasRowNumber(this.position.row + w)
      ) {
        const position = new Position(
          ChessColumnService.calculateColumnName(this.position.column, -w) + (this.position.row + w)
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
        w++;
        topLeft =
          ChessRowService.hasRowNumber(this.position.row + w) &&
          ChessColumnService.hasNextColumnName(this.position.column, -w);
      } else {
        break;
      }
    }
  }

  #selectBishopQueenBottomRightMovingCells() {
    let r = 1;
    let lastLoop = false;

    let bottomRight =
      ChessColumnService.hasColumnName(this.position.column, r) && ChessRowService.hasRowNumber(this.position.row - r);

    while (bottomRight && !lastLoop) {
      if (
        ChessColumnService.calculateColumnName(this.position.column, r) &&
        ChessRowService.hasRowNumber(this.position.row - r)
      ) {
        const position = new Position(
          ChessColumnService.calculateColumnName(this.position.column, r) + (this.position.row - r)
        );

        const lm = document.getElementById(position.id);

        if (this.isAllyPiece(lm)) {
          this.attackScope.push(position);
          return;
        }

        lastLoop = this.isEnemyPiece(lm);
        this.moveScope.push(position);
        r++;
        bottomRight =
          ChessRowService.hasRowNumber(this.position.row - r) &&
          ChessColumnService.hasNextColumnName(this.position.column, r);
      } else {
        break;
      }
    }
  }

  #selectBishopQueenBottomLefMovingCells() {
    let e = 1;
    let lastLoop = false;
    let bottomLeft =
      ChessRowService.hasRowNumber(this.position.row - e) && ChessColumnService.hasColumnName(this.position.column, -e);
    while (bottomLeft && !lastLoop) {
      if (
        ChessColumnService.calculateColumnName(this.position.column, -e) &&
        ChessRowService.hasRowNumber(this.position.row - e)
      ) {
        const position = new Position(
          ChessColumnService.calculateColumnName(this.position.column, -e) + (this.position.row - e)
        );

        const lm = document.getElementById(position.id);

        if (this.isAllyPiece(lm)) {
          this.attackScope.push(position);
          return;
        }
        lastLoop = this.isEnemyPiece(lm);
        this.moveScope.push(position);
        e++;
        bottomLeft =
          ChessRowService.hasRowNumber(this.position.row - e) &&
          ChessColumnService.hasNextColumnName(this.position.column, -e);
      } else {
        break;
      }
    }
  }
}
