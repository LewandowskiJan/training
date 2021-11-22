import { COLUMN_SIZE, ROUND_MODE_DISABLE, ROW_SIZE } from '../app.js';
import PieceFactory from '../models/pice/pice.factory.js';
import Position from '../models/position.js';
import ChessColumnService from '../utils/chess-column.service.js';

export default class GameBoardService {
  gameStateService;
  clickGameService;

  constructor(gameStateService) {
    this.gameStateService = gameStateService;
  }

  setupGame() {
    this.#drawChessBoard();
  }

  setupClick(clickGameService) {
    this.clickGameService = clickGameService;
  }

  getClickSelection() {
    if (ROUND_MODE_DISABLE) return document.getElementById(this.clickGameService.getPieceId());
    if (this.gameStateService.isPlayerOneRound() && this.clickGameService.getPieceId() > 15) {
      return document.getElementById(this.clickGameService.getPieceId());
    }
    if (!this.gameStateService.isPlayerOneRound() && this.clickGameService.getPieceId() < 16) {
      return document.getElementById(this.clickGameService.getPieceId());
    }
  }

  drawNewPiecePositionOnBoard(moveScope, selectedPiece) {
    if (this.#isOutOfMoveScope(moveScope, this.clickGameService.getCellId())) return;

    if (this.clickGameService.isCellWithPieceOrPieceClicked()) {
      this.deletePiece(this.clickGameService.getCellTarget(), selectedPiece);
    }
    this.movePiece(this.clickGameService.getCellTarget(), selectedPiece);
    return this.clickGameService.getCellPosition();
  }

  movePiece(target, selectedPiece) {
    target.appendChild(selectedPiece);
  }

  drawAvailableMove(position) {
    const id = position.column + position.row;
    const cell = document.getElementById(id);
    if (cell) cell.style = 'background-color: rgba(160, 250, 160, .5) !important;';
  }

  clearAvailableMoveScope(position) {
    const id = position.column + position.row;
    const cell = document.getElementById(id);
    if (cell) cell.style = '';
  }

  drawAvailableAttackScope(position) {
    const cell = document.getElementById(position.id);
    if (cell) cell.classList.add('attack');
  }

  clearAvailableAttackScope(position) {
    const cell = document.getElementById(position.id);
    if (cell) cell.classList.remove('attack');
  }

  deletePiece(target, selectedPiece) {
    this.gameStateService.getPlayers()[selectedPiece.id < 16 ? 0 : 1].removePieceById(target.childNodes[0].id);
    target.removeChild(target.childNodes[0]);
  }

  drawActiveClass(selectedPiece) {
    selectedPiece && selectedPiece.classList.add('active');
  }

  clearActiveClass(selectedPiece) {
    selectedPiece && selectedPiece.classList.remove('active');
  }

  canChangeSelection(isPieceSelected, moveScope) {
    return (
      isPieceSelected &&
      this.#isOutOfMoveScope(moveScope, this.clickGameService.getCellId()) &&
      this.clickGameService.isCellWithPieceOrPieceClicked()
    );
  }

  canSelectPiece(isPieceSelected) {
    return !isPieceSelected && this.clickGameService.isCellWithPieceOrPieceClicked();
  }

  canSelectedPieceChangePosition(isPieceSelected, moveScope) {
    return (
      this.#isInMoveScope(moveScope, this.clickGameService.getCellId()) &&
      (isPieceSelected || !this.clickGameService.isCellWithPieceOrPieceClicked())
    );
  }

  gameOver(playerWin, playerLose) {
    const chessboard = document.getElementById('chessboard');
    const gameOver = document.getElementById('game-over');
    gameOver.innerHTML = `
    <p><strong>${gameOver.innerText}</strong><p>
    <p>Player ${playerWin} win!</p> 
    <p>Player ${playerLose} lose!</p> 
    `;
    chessboard.classList.add('hide');
    gameOver.classList.remove('hide');
  }

  #isInMoveScope(moveScope, cellId) {
    return !this.#isOutOfMoveScope(moveScope, cellId);
  }

  #isOutOfMoveScope(moveScope = [], cellId) {
    return !moveScope.some(({ column, row }) => {
      return cellId === column + row;
    });
  }

  #setupCurrentPieceView(currentPiece, cellColumn, chessRow, counter) {
    currentPiece.setupPieceView(cellColumn, chessRow, counter);
  }

  #addPieceToPlayer(currentPiece, playerNumber) {
    this.gameStateService.addPieceToPlayer(currentPiece, playerNumber);
  }

  #isInitialRowWithPieces(row) {
    return this.#isTopRow(row) || this.#isBottomRow(row);
  }

  #isTopRow(row) {
    return row > 6;
  }

  #isBottomRow(row) {
    return row < 3;
  }

  #drawChessBoard() {
    let counter = 0;
    const pieces = [];
    for (let chessRow = ROW_SIZE; chessRow > 0; chessRow--) {
      if (this.#isInitialRowWithPieces(chessRow)) {
        for (let chessColumn = 1; chessColumn <= COLUMN_SIZE; chessColumn++) {
          const cellColumn = ChessColumnService.getColumnNameByColumnNumber(chessColumn);
          const factory = new PieceFactory();

          const position = new Position(cellColumn + chessRow);
          const currentPiece = factory.generatePiece(position);

          if (this.#isBottomRow(chessRow)) {
            this.#addPieceToPlayer(currentPiece, 0);
            pieces.push({ p: 0, currentPiece });
          }
          if (this.#isTopRow(chessRow)) {
            this.#addPieceToPlayer(currentPiece, 1);
            pieces.push({ p: 1, currentPiece });
          }

          this.#setupCurrentPieceView(currentPiece, cellColumn, chessRow, counter);
          counter++;
        }
      }
    }
    this.drawInitialAttackScope(pieces);
  }

  drawInitialAttackScope(pieces) {
    pieces.forEach(({ p, currentPiece }) => {
      currentPiece.setupAttackScope();
      if (p) {
        currentPiece.attackScope.forEach((position) => {
          this.drawAvailableAttackScope(position);
        });
      }
    });
  }
}
