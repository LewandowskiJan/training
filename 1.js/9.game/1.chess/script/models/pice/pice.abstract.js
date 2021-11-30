import { FIRST_ROW, LAST_ROW } from '../../app.js';
import GameState from '../../game-state/game-state.js';
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
  playerNumber;

  constructor(position, type, icon, playerNumber, id) {
    this.position = position;
    this.type = type;
    this.icon = icon;
    this.playerNumber = playerNumber;
    this.playerColor = playerNumber === 0 ? 'white' : 'black';
    this.id = id;
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
    if (this.type && this.icon) {
      this.#drawCurrentPiece(cellColumn + chessRow, counter);
    } else {
      const { type, icon } = this.#getCurrentPiceConfiguration(cellColumn, chessRow);
      this.type = type;
      this.icon = icon;
      this.#drawCurrentPiece(cellColumn + chessRow, counter);
    }
  }

  #drawCurrentPiece(cellId, counter) {
    const cell = document.getElementById(cellId);
    cell.innerHTML = this.#generatePieceView(counter);
  }

  #generatePieceView(counter, active = '') {
    this.#setupId(counter);

    return `<div class="piece ${active} ${this.type} ${this.playerColor} p${this.playerNumber}" id="${this.id}">${this.icon}</div>`;
  }

  #setupId(id) {
    this.id = id;
  }

  setupAttackScope() {}

  setupMoveScope() {}

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

  setPlayerColor(color) {
    this.playerColor = color;
  }

  isAllyPiece(target) {
    const classList = target?.childNodes[0]?.classList;
    const currentPlayerClass = `p${this.playerNumber}`;
    return classList && classList.contains(currentPlayerClass);
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
