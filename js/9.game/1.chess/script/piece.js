import ChessColumnService from './chess-column.service.js';
import ChessRowService from './chess-row.service.js';
import { FIRST_ROW, LAST_ROW } from './script.js';

export const rowChessPiecesConfiguration = new Map([
  ['a', { type: 'rook', icon: '&#128136;' }],
  ['b', { type: 'knight', icon: '&#127943;' }],
  ['c', { type: 'bishop', icon: '&#127939;' }],
  ['d', { type: 'king', icon: '&#129332;' }],
  ['e', { type: 'queen', icon: '&#128120;' }],
  ['f', { type: 'bishop', icon: '&#127939;' }],
  ['g', { type: 'knight', icon: '&#127943;' }],
  ['h', { type: 'rook', icon: '&#128136;' }],
  ['pawn', { type: 'pawn', icon: '&#128023;' }],
]);

export default class Piece {
  schema;
  id;
  type;
  icon;
  playerColor;
  position;
  availableMovement;
  moveScope = [];
  attackScope = [];
  side;

  constructor(position) {
    this.position = position;
  }
  showAvailableMovements() {
    return x;
  }

  move() {
    return x;
  }
  setPosition(position) {
    this.position = position;
  }

  setupPieceView(cellColumn, chessRow, counter) {
    const { type, icon } = this.#getCurrentPiceConfiguration(cellColumn, chessRow);
    this.type = type;
    this.icon = icon;
    this.#drawCurrentPiece(cellColumn + chessRow, counter);
  }

  #generatePieceView(counter, active = '') {
    this.#setupId(counter);
    return `<div class="piece ${active} ${this.type} ${this.playerColor}" id="${this.id}">${this.icon}</div>`;
  }

  #setupId(id) {
    this.id = id;
  }

  setupAttackScope() {
    // potrzebujemy: typ figury(pionek,wieza itp) (this.type)
    // strona (top,bottom) (dostępne w klasie piece this.side)
    // obecna pozycja (this.position z przemapowaniem liternki na numer i z powrotem)
    // będziemy ustawiać this.attackScope[]
    this.attackScope = [];
    if (this.type === 'pawn') {
      if (this.side === 'bottom') {
        const attack1 = {
          column: ChessColumnService.calculateColumnName(this.position.column, -1),
          row: this.position.row + 1,
        };
        const attack2 = {
          column: ChessColumnService.calculateColumnName(this.position.column, 1),
          row: this.position.row + 1,
        };
        // console.log(attack1)
        this.attackScope.push(attack1);
        this.attackScope.push(attack2);
      }
      if (this.side === 'top') {
        // zrobić to samo co powyżej tylko dla "top" inną metodą
        this.attackScope.push();
        this.attackScope.push();
      }
    }
  }

  setupMoveScope() {
    this.moveScope = [];
    if (this.type === 'pawn') {
      if (this.side === 'bottom') {
        const move = {
          column: this.position.column,
          row: this.position.row + 1,
        };
        console.log(move);
        this.moveScope.push(move);
      }
      if (this.side === 'top') {
        // zrobić to samo co powyżej tylko dla "top" inną metodą
        this.moveScope.push();
      }
    }
    if (this.type === 'rook' || this.type === 'queen') {
      this.#selectRookTopMovingCells();
      this.#selectRookBottomMovingCells();
      this.#selectRookRightMovingCells();
      this.#selectRookLeftMovingCells();
    }

    if (this.type === 'bishop' || this.type === 'queen') {
      this.#selectBishopTopRightMovingCells();
      this.#selectBishopTopLeftMovingCells();
      this.#selectBishopBottomRightMovingCells();
      this.#selectBishopBottomLefMovingCells();
    }
  }

  #selectRookLeftMovingCells() {
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
      console.log(move1);
      this.moveScope.push(move1);
    }
  }

  #selectRookRightMovingCells() {
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

  #selectRookTopMovingCells() {
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

  #selectRookBottomMovingCells() {
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

  #selectBishopTopRightMovingCells() {
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

  #selectBishopTopLeftMovingCells() {
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

  #selectBishopBottomRightMovingCells() {
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

  #selectBishopBottomLefMovingCells() {
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

  #drawCurrentPiece(cellId, counter) {
    const cell = document.getElementById(cellId);
    cell.innerHTML = this.#generatePieceView(counter);
  }

  #getCurrentPiceConfiguration(cellColumn, chessRow) {
    return this.#isFirstOrLastRow(chessRow)
      ? rowChessPiecesConfiguration.get(cellColumn)
      : rowChessPiecesConfiguration.get('pawn');
  }

  #isFirstOrLastRow(row) {
    return row === FIRST_ROW || row === LAST_ROW;
  }

  getMoveScope() {
    return this.moveScope;
  }

  getAttackScope() {
    return this.attackScope;
  }

  setupSide(side) {
    this.side = side;
  }

  setPlayerColor(color) {
    this.playerColor = color;
  }
}
