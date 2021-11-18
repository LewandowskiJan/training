import { ROUND_MODE_DISABLE } from './script.js';


export default class GameBoard {
  selectedPiece;
  selectedPieceInstance;
  players;
  gameState;
  roundService;
  currentAttackScope = new Set();

  constructor(players, gameState, roundService) {
    this.players = players;
    this.gameState = gameState;
    this.roundService = roundService;
    this.setupPlayersPiecesAttackScopes();
  }

  selectAndMovePiece(clickOnBoardService) {
    this.clearAvailableMove();
    this.setupPlayersPiecesAttackScopes();
    if (this.selectedPiece?.id === clickOnBoardService.getPieceId()) {
      console.log(2);
      return this.clearSelected();
    }

    if (this.#canSelectPiece(clickOnBoardService) || this.#canChangeSelection(clickOnBoardService)) {
      this.clearSelected();
      return this.selectPiece(clickOnBoardService);
    }

    if (this.#canSelectedPieceChangePosition(clickOnBoardService)) {
      console.log(4);
      this.changePiecePosition(clickOnBoardService);
      this.clearCellAttackClass();
      const currentEnemyPlayerIndex =  this.roundService.isPlayerOneRound() ? 1 : 0;
      this.calculateKingMoveLimitedMoveScope(currentEnemyPlayerIndex);

      this.selectedPieceInstance.setupAttackScope();
      this.clearSelected();
      // this.showAvailableMove();

      return;
    }
  }

  movePiece(target) {
    target.appendChild(this.selectedPiece);
  }

  deletePiece(target) {
    this.players[this.selectedPiece.id < 16 ? 0 : 1].removePieceById(target.childNodes[0].id);
    target.removeChild(target.childNodes[0]);
    // console.log(this.players);
  }

  selectPiece(clickOnBoardService) {
    this.selectedPiece = this.getClickedPiece(clickOnBoardService);
    if (this.selectedPiece) {
      this.selectedPiece.className = this.selectedPiece.className + ' active';
      this.selectedPieceInstance = this.players[this.selectedPiece.id < 16 ? 1 : 0].getPieceById(this.selectedPiece.id);
      this.clearCellAttackClass();
      const currentEnemyPlayerIndex =  this.roundService.isPlayerOneRound() ? 1 : 0;
      this.calculateKingMoveLimitedMoveScope(currentEnemyPlayerIndex);
      
      this.selectedPieceInstance.setupAttackScope();
      this.showAvailableMove();
    }
  }

  setupPlayersPiecesAttackScopes() {
    [...this.players[0].onGamePieces, ...this.players[1].onGamePieces].forEach((piece) => {
      piece.setupAttackScope();
    });
  }

  calculateKingMoveLimitedMoveScope(playerIndex = 0) {
    let allPiecesAttackScope = [];
    const attackScope = new Set();
    let allPieces = this.players[playerIndex].onGamePieces;

    allPieces.forEach((piece) => {
      piece.attackScope
        .filter((position) => position.column)
        .filter((position) => position.row > 0)
        .map((position) => {
          console.log(position);
          return position.column + position.row;
        })
        .forEach((pos) => {
          // console.log(pos);
          attackScope.add(pos);
        });
    });

    // for (let i = 0; i <= allPiecesAttackScope.length; i++){
    //   return allPiecesAttackScope[i].column
    // }

    // console.log(this.players[0].onGamePieces[25].attackScope)
    // console.log(this.players[0].onGamePieces[15].attackScope);
    // console.log(this.players[0].onGamePieces);
    // console.log([...[1, 2, 3], ...[4, 5, 6]]);
    // console.log([
    //   [1, 2, 3],
    //   [4, 5, 6],
    // ]);
    // console.log(allPiecesAttackScope);
    this.currentAttackScope = attackScope;
    // return attackScope;
    this.showAvailableAttackScope();
  }

  showAvailableMove() {
    this.selectedPieceInstance.getMoveScope().forEach((element) => {
      const cell = document.getElementById(element.column + element.row);
      if (cell) cell.style = 'background-color: rgba(160, 250, 160, .5) !important;';
    });
  }

  showAvailableAttackScope() {
    this.currentAttackScope.forEach((key) => {
      const elem = { column: key.split('')[0], row: key.split('')[1] };
      const cell = document.getElementById(elem.column + elem.row);
      if (cell) cell.classList.add('attack');
    });
  }

  clearCellAttackClass() {
    this.currentAttackScope.forEach((key) => {
      const elem = { column: key.split('')[0], row: key.split('')[1] };
      const cell = document.getElementById(elem.column + elem.row);
      if (cell) cell.classList.remove('attack');
    });
  }

  clearAvailableMove() {
    if (!this.selectedPieceInstance) return;
    this.selectedPieceInstance.getMoveScope().forEach((element) => {
      const cell = document.getElementById(element.column + element.row);
      if (cell) cell.style = '';
    });
  }

  getClickedPiece(clickOnBoardService) {
    if (ROUND_MODE_DISABLE) return document.getElementById(clickOnBoardService.getPieceId());
    if (this.roundService.isPlayerOneRound() && clickOnBoardService.getPieceId() > 15) {
      return document.getElementById(clickOnBoardService.getPieceId());
    }
    if (!this.roundService.isPlayerOneRound() && clickOnBoardService.getPieceId() < 16) {
      return document.getElementById(clickOnBoardService.getPieceId());
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
    if (this.#isOutOfMoveScope(clickOnBoardService.getCellId())) return;
    const piecePosition = clickOnBoardService.getCellPosition();
    if (clickOnBoardService.isCellWithPieceOrPieceClicked()) {
      this.deletePiece(clickOnBoardService.getCellTarget());
    }
    this.movePiece(clickOnBoardService.getCellTarget());
    // console.log(piecePosition);
    this.selectedPieceInstance.setPosition(piecePosition);
    this.#updateAllMoveAndAttackScopes();
    this.roundService.nextRound();
    // console.log(this.gameState.currentRound);
  }

  #updateAllMoveAndAttackScopes() {
    this.players.forEach((player) => {
      player.onGamePieces.forEach((piece) => {
        piece.setupAttackScope();
      });
    });
  }

  #canChangeSelection(clickOnBoardService) {
    return (
      // this.isPieceSelected() &&
      // clickOnBoardService.isCellWithPieceOrPieceClicked() &&
      this.#isOutOfMoveScope(clickOnBoardService.getCellId())
    );
  }

  #canSelectPiece(clickOnBoardService) {
    // console.log(this.isPieceSelected());
    return !this.isPieceSelected() && clickOnBoardService.isCellWithPieceOrPieceClicked();
  }

  #canSelectedPieceChangePosition(clickOnBoardService) {
    return (
      this.isPieceSelected() ||
      !clickOnBoardService.isCellWithPieceOrPieceClicked() ||
      this.#isInMoveScope(clickOnBoardService.getCellId())
    );
  }

  #isOutOfMoveScope(cellId) {
    return !this.selectedPieceInstance?.getMoveScope().some(({ column, row }) => {
      return cellId === column + row;
    });
  }

  #isInMoveScope(cellId) {
    return !this.#isOutOfMoveScope(cellId);
  }
}
