import { FIRST_ROW, LAST_ROW } from '../../app.js';
import { rowChessPiecesConfiguration } from './pice.factory.js';

export default class PieceAbstract {
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

  setupNewMoveScope(moveScope, newAttackScope) {
    this.moveScope = moveScope;
    this.attackScope = newAttackScope;
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
