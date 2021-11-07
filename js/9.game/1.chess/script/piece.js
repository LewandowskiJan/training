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
    // console.log(this.attackScope)
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
    if (this.type === 'rook') {
      this.#selectRookTopMovingCells();
      this.#selectRookBottomMovingCells();
      this.#selectRookRightMovingCells();
      this.#selectRookLeftMovingCells();
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
