export default class GameBoard {
  selectedPiece;
  selectedPieceInstance;
  players;
  gameState

  constructor(players, gameState) {
    this.players = players;
    this.gameState = gameState
  }

  selectAndMovePiece(clickOnBoardService) {
    this.clearAvailableMove();
    console.log(clickOnBoardService.getPieceId())
    console.log(clickOnBoardService.isCellWithPieceClicked())

    if (this.selectedPiece?.id === clickOnBoardService.getPieceId()) {
      console.log(2);
      return this.clearSelected();
    }
    if (!this.isPieceSelected() && clickOnBoardService.isCellWithPieceOrPieceClicked()) {
      console.log(3);
      this.clearSelected();
      return this.selectPiece(clickOnBoardService);
    }
    if (this.isPieceSelected() || !clickOnBoardService.isCellWithPieceOrPieceClicked()
      || !this.#isOutOfTheMoveScope(clickOnBoardService.getCellId())) {
      console.log(4);
      this.changePiecePosition(clickOnBoardService);
      this.clearSelected();
      return;
    }
  }

  movePiece(target) {
    target.appendChild(this.selectedPiece);
  }

  deletePiece(target) {
    this.players[this.selectedPiece.id < 16 ? 0 : 1].removePieceById(target.childNodes[0].id);
    target.removeChild(target.childNodes[0]);
    console.log(this.players);
  }

  #isOutOfTheMoveScope(cellId) {
    return !this.selectedPieceInstance?.getMoveScope().some(({ column, row }) => {
      return cellId === column + row;
    });
  }

  selectPiece(target) {
    this.selectedPiece = this.getClickedPiece(target);
    if (this.selectedPiece) {
      this.selectedPiece.className = this.selectedPiece.className + ' active';
      this.selectedPieceInstance = this.players[this.selectedPiece.id < 16 ? 1 : 0].getPieceById(this.selectedPiece.id);
      this.selectedPieceInstance.setupAttackScope();
      this.showAvailableMove();
    }
  }

  showAvailableMove() {
    this.selectedPieceInstance.getMoveScope().forEach((element) => {
      const cell = document.getElementById(element.column + element.row);
      if (cell) cell.style = 'background-color: rgba(160, 250, 160, .5);';
    });
  }

  clearAvailableMove() {
    if (!this.selectedPieceInstance) return;
    this.selectedPieceInstance.getMoveScope().forEach((element) => {
      const cell = document.getElementById(element.column + element.row);
      if (cell) cell.style = '';
    });
  }

  getClickedPiece(target) {
    // return document.getElementById(target.getPieceId());
    if (this.gameState.isPlayerOneRound() && target.getPieceId() > 15) {
      return document.getElementById(target.getPieceId());
    }
    if (!this.gameState.isPlayerOneRound() && target.getPieceId() < 16) {
      return document.getElementById(target.getPieceId());
    }
  }

  clearSelected() {
    this.clearCssClass();
    this.selectedPiece = null;
    this.selectedPieceInstance = null;
  }

  clearCssClass() {
    if (this.selectedPiece) {
      this.selectedPiece.className = this.selectedPiece.className
        .split(' ')
        .filter((name) => name !== 'active')
        .join(' ');
    }
  }

  isPieceSelected() {
    return !!this.selectedPiece && !!this.selectedPieceInstance;
  }

  changePiecePosition(clickOnBoardService) {
    if (this.#isOutOfTheMoveScope(clickOnBoardService.getCellId())) return;

    const piecePosition = clickOnBoardService.getCellPosition();
    if (clickOnBoardService.isCellWithPieceOrPieceClicked()) {
      console.log(123)
      this.movePiece(clickOnBoardService.getCellTarget());
      this.deletePiece(clickOnBoardService.getCellTarget());
    }
    else {
      this.movePiece(clickOnBoardService.target);
    }

    console.log(piecePosition);
    this.selectedPieceInstance.setPosition(piecePosition);
    this.gameState.nextRound()
    console.log(this.gameState.currentRound)
  }

  isCellWithPieceOrPieceClicked(target) {
    return this.#isCellWithPieceClicked(target) || this.#isPieceClicked(target);
  }

  #isCellWithPieceClicked(target) {
    return target?.childNodes[0]?.id;
  }

  #isPieceClicked(target) {
    return target.className.includes('piece');
  }
}
