import { ROUND_MODE_DISABLE } from '../app.js';

export default class GameBoardService {
  chessBoardElement;
  clickGameService;

  constructor() {
    this.chessBoardElement = document.getElementById('chessboard');
  }

  setupClick(clickGameService) {
    this.clickGameService = clickGameService;
  }

  reloadView(onGamePieces) {
    this.clearChessBoard(onGamePieces);
    this.setupPiecesView(onGamePieces);
  }

  clearChessBoard(onGamePieces) {
    onGamePieces.forEach((piece) => {
      const pieceEl = document.getElementById(piece.position.column + piece.position.row);
      this.deletePiece(pieceEl);
    });
  }

  setupPiecesView(onGamePieces) {
    onGamePieces.forEach((piece) => {
      piece.setupPieceView(piece.position.column, piece.position.row, piece.id);
    });

    this.drawInitialAttackScope(onGamePieces);
  }

  getClickSelection(isPlayerOneClicked) {
    const currentPieceTarget = this.clickGameService.getPieceTarget();
    if (ROUND_MODE_DISABLE) return document.getElementById(this.clickGameService.getPieceId());
    if (isPlayerOneClicked && currentPieceTarget.classList.contains('p0')) {
      return document.getElementById(this.clickGameService.getPieceId());
    }
    if (!isPlayerOneClicked && currentPieceTarget.classList.contains('p1')) {
      return document.getElementById(this.clickGameService.getPieceId());
    }
  }

  drawNewPiecePositionOnBoard(moveScope, selectedPiece, onGamePieces = new Map()) {
    if (this.#isOutOfMoveScope(moveScope, this.clickGameService.getCellId())) return;

    if (this.clickGameService.isCellWithPieceOrPieceClicked()) {
      onGamePieces.delete(+this.clickGameService.getCellTarget().childNodes[0].id);
      this.deletePiece(this.clickGameService.getCellTarget(), selectedPiece);
    }
    this.movePiece(this.clickGameService.getCellTarget(), selectedPiece);
    return this.clickGameService.getCellPosition();
  }

  movePiece(target, selectedPiece) {
    target.appendChild(selectedPiece);
  }

  drawAvailableMove(position) {
    const cell = document.getElementById(position.id);
    if (cell) cell.style = 'background-color: rgba(160, 250, 160, .5) !important;';
  }

  clearAvailableMoveScope(position) {
    const cell = document.getElementById(position.id);
    if (cell) cell.style = '';
  }

  drawAvailableAttackScope(position) {
    const cell = document.getElementById(position.id);
    if (cell) cell.classList.add('attack');
  }

  clearAvailableAttackScope() {
    const attackCells = document.getElementsByClassName('attack');
    [...attackCells].forEach((cell) => cell.classList.remove('attack'));
  }

  deletePiece(target) {
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
    const gameOver = document.getElementById('game-over');
    gameOver.innerHTML = `
    <p><strong>${gameOver.innerText}</strong><p>
    <p>Player ${playerWin} win!</p> 
    <p>Player ${playerLose} lose!</p> 
    `;
    this.chessBoardElement.classList.add('hide');
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

  drawInitialAttackScope(pieces) {
    pieces.forEach(({ p, currentPiece }) => {
      currentPiece && currentPiece.setupAttackScope();
      if (p) {
        currentPiece.attackScope.forEach((position) => {
          this.drawAvailableAttackScope(position);
        });
      }
    });
  }
}
