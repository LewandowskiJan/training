export default class GameBoard {
  selectedPiece;
  selectedPieceInstance;
  players;

  constructor(players) {
    this.players = players;
  }

  selectAndMovePiece(target) {
    this.clearAvailableMove();
    if (this.selectedPiece?.id === this.getClickedPiece(target)?.id) {
      return this.clearSelected();
    }
    if (!this.isPieceSelected() || this.isCellWithPieceOrPieceClicked(target)) {
      this.clearSelected();
      return this.selectPiece(target);
    }
    if (this.isPieceSelected() || !this.isCellWithPieceOrPieceClicked(target)) {
      this.changePiecePosition(target);
      this.clearSelected();
      return;
    }
  }

  movePiece(target) {
    if (this.#isOutOfTheMoveScope(target)) return;
    target.appendChild(this.selectedPiece);
  }

  #isOutOfTheMoveScope(target) {
    // dodac implementacje, sprawdzic, czy zaznaczona figura moze sie ruszyc w dane miejsce
    // informacja powinna być w this.selectedPieceInstance.getMoveScope()

    return false;
  }

  selectPiece(target) {
    this.selectedPiece = this.getClickedPiece(target);
    if (this.selectedPiece) {
      this.selectedPiece.className = this.selectedPiece.className + ' active';
      this.selectedPieceInstance = this.players[this.selectedPiece.id < 16 ? 1 : 0].getPieceById(this.selectedPiece.id);
      this.selectedPieceInstance.setupAttackScope();
      this.selectedPieceInstance.setupMoveScope();
      this.showAvailableMove();
    }
  }

  showAvailableMove() {
    this.selectedPieceInstance.getMoveScope().forEach((element) => {
      const cell = document.getElementById(element.column + element.row);
      cell.style = 'background-color: rgba(160, 250, 160, .5);';
    });
  }

  clearAvailableMove() {
    if (!this.selectedPieceInstance) return;
    this.selectedPieceInstance.getMoveScope().forEach((element) => {
      const cell = document.getElementById(element.column + element.row);
      cell.style = '';
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
    return !!this.selectedPiece;
  }

  changePiecePosition(target) {
    // wyciągnąć position z targetu i przypisać do klasy pionka w js
    // id rozbic na 2 elementy - kolumnę i wiersz
    // przypisać to do obiektu {column, row} (przy zachowaniu string i number)
    // wyciągnięte position przypisać do position w thisSelectedPieceInstance przy uzyciu metody setPosition()
    // dodać implementację tej metody(set position) (czyli napisać tą metodę po prostu)
    // wskazówka: do podzielenia stringa na 2 tablice z poszczególnymi literami nalezy użyć metody .split("")
    const selectedPieceId = target.id.split('');
    const position = {
      column: selectedPieceId[0],
      row: +selectedPieceId[1],
    };
    this.selectedPieceInstance.setPosition(position);
    this.movePiece(target);
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
