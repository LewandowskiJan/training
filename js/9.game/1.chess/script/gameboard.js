export default class GameBoard {
  selectedPiece;
  selectedPieceInstance;
  players;

  constructor(players) {
    this.players = players;
  }

  selectAndMovePiece(clickOnBoardService) {
    this.clearAvailableMove();
    if (this.selectedPiece?.id === this.getClickedPiece(clickOnBoardService.target)?.id) {
      console.log(2);
      return this.clearSelected();
    }
    if (!this.isPieceSelected() && this.isCellWithPieceOrPieceClicked(clickOnBoardService.target)) {
      this.clearSelected();
      console.log(3);
      return this.selectPiece(clickOnBoardService.target);
    }
    if (this.isPieceSelected() || !this.isCellWithPieceOrPieceClicked(clickOnBoardService.target) || !this.#isOutOfTheMoveScope(clickOnBoardService.target)) {
      this.changePiecePosition(clickOnBoardService.target);
      this.clearSelected();
      console.log(4);
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

  #isOutOfTheMoveScope(target) {
    return !this.selectedPieceInstance.getMoveScope().some(({ column, row }) => {
      return target.id === column + row || target.parentNode.id === column + row;
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
    let clickedPiece;
    if (this.#isCellWithPieceClicked(target)) clickedPiece = document.getElementById(target.childNodes[0].id);
    if (this.#isPieceClicked(target)) clickedPiece = document.getElementById(target.id);
    return clickedPiece;
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

  changePiecePosition(target) {
    if (this.#isOutOfTheMoveScope(target)) return;
    let selectedPieceId;
    if (this.#isPieceClicked(target)) {
      selectedPieceId = target.parentNode.id.split('');
      console.log(selectedPieceId);
      this.movePiece(target.parentNode);
      this.deletePiece(target.parentNode);
    } else if (this.#isCellWithPieceClicked(target)) {
      selectedPieceId = target.id.split('');
      console.log(selectedPieceId);
      this.movePiece(target);
      this.deletePiece(target);
    } else {
      selectedPieceId = target.id.split('');
      this.movePiece(target);
    }

    console.log(selectedPieceId);
    const position = {
      column: selectedPieceId[0],
      row: +selectedPieceId[1],
    };
    this.selectedPieceInstance.setPosition(position);
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
