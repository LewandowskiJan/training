import { FIRST_ROW, LAST_ROW } from '../script.js';

export const rowChessPiecesConfiguration = new Map([
  ['a', { type: 'rook', icon: '&#128136;' }],
  ['b', { type: 'knight', icon: '&#127943;' }],
  ['c', { type: 'bishop', icon: '&#127939;' }],
  ['d', { type: 'queen', icon: '&#128120;' }],
  ['e', { type: 'king', icon: '&#129332;' }],
  ['f', { type: 'bishop', icon: '&#127939;' }],
  ['g', { type: 'knight', icon: '&#127943;' }],
  ['h', { type: 'rook', icon: '&#128136;' }],
  ['pawn', { type: 'pawn', icon: '&#128023;' }],
]);

export default class PieceAbstract {
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

  constructor(position, type, icon) {
    this.position = position;
    this.type = type;
    this.icon = icon;
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

  setupAttackScope() {}

  setupMoveScope() {}

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

  deletePieceInstance() {
    this.moveScope = [];
    this.attackScope = [];
    this.position = {
      column: 'z',
      row: 99,
    };
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

  isAllyPiece(target) {
    const id = target?.childNodes[0]?.id;
    return this.id <= 15 ? id <= 15 : id > 15;
  }

  isEnemyPiece(target) {
    return target?.childNodes[0] && !this.isAllyPiece(target);
  }

  isCellWithPieceOrPieceClicked(target) {
    return (this.#isCellWithPieceClicked(target) || this.#isPieceClicked(target)) && this.isAllyPiece(target);
  }

  isCellBlockedByPiece(target) {
    return (this.#isCellWithPieceClicked(target) || this.#isPieceClicked(target)) && this.isAllyPiece(target);
  }

  #isCellWithPieceClicked(target) {
    return target?.childNodes[0]?.id;
  }

  #isPieceClicked(target) {
    return target?.className?.includes('piece');
  }
}
