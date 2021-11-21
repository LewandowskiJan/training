export default class GameEngineService {
  selectedPiece;
  selectedPieceInstance;
  gameStateService;
  gameBoardService;

  constructor(gameStateService, gameBoardService) {
    this.gameStateService = gameStateService;
    this.gameBoardService = gameBoardService;
    this.setupPlayersPiecesAttackScopes();
    this.showAvailableAttackScope();
  }

  selectAndMovePiece(clickOnBoardService) {
    this.clearAvailableMove();
    const currentEnemyPlayerIndex = this.gameStateService.whichEnemyPlayerNumberRound();
    this.gameStateService.setupEnemyAttackScope(currentEnemyPlayerIndex);

    if (this.selectedPiece && this.selectedPieceInstance) {
      /* czy cos jest zaznaczone - tak
        mozemy odznaczyć - przez klikniecie w ta sama figure, w pole na ktore nie mozna sie ruszyc (nawet z wroga figura), po wykonaniu ruchu
        mozemy sie ruszyc - tylko w miejsce do ruchu (zakres moveScope)
        mozemy zaatakowac - tylko w miejsce do ataku (attackScope)
        mozemy zmienic zaznaczenie - klikajac w figure gracza ktory jest przy ruchu
    */
    } else {
      /* czy cos jest zaznaczone- nie
        mozemy zaznaczyc
        mozemy kliknac w wolne pole - bez efektu (na razie)
    */
    }

    if (this.selectedPiece?.id === clickOnBoardService.getPieceId()) {
      return this.clearSelected();
    }

    if (this.#canSelectPiece() || this.#canChangeSelection()) {
      this.clearSelected();
      return this.selectPiece(clickOnBoardService);
    }

    if (this.#canSelectedPieceChangePosition()) {
      this.changePiecePosition();
      this.clearCellAttackClass();

      this.selectedPieceInstance && this.selectedPieceInstance.setupAttackScope(this.gameStateService.enemyAttackScope);
      this.clearSelected();

      return;
    }
  }

  selectPiece(clickOnBoardService) {
    this.selectedPiece = this.getClickedPiece(clickOnBoardService);
    if (this.selectedPiece) {
      this.gameBoardService.drawActiveClass(this.selectedPiece);
      this.selectedPieceInstance = this.gameStateService
        .getPlayers()
        [this.selectedPiece.id < 16 ? 1 : 0].getPieceById(this.selectedPiece.id);
      this.clearCellAttackClass();

      this.selectedPieceInstance.setupAttackScope(this.gameStateService.enemyAttackScope);
      this.showAvailableAttackScope();
      this.showAvailableMove();
    }
  }

  showAvailableMove() {
    if (!this.selectedPieceInstance) return;
    this.selectedPieceInstance.getMoveScope().forEach((position) => {
      this.gameBoardService.drawAvailableMove(position);
    });
  }

  clearAvailableMove() {
    if (!this.selectedPieceInstance) return;

    this.selectedPieceInstance.getMoveScope().forEach((position) => {
      this.gameBoardService.clearAvailableMoveScope(position);
    });
  }

  showAvailableAttackScope() {
    this.gameStateService.enemyAttackScope.forEach((position) => {
      this.gameBoardService.drawAvailableAttackScope(position);
    });
  }

  clearCellAttackClass() {
    this.gameStateService.enemyAttackScope.forEach((position) => {
      this.gameBoardService.clearAvailableAttackScope(position);
    });
  }

  getClickedPiece() {
    return this.gameBoardService.getClickSelection();
  }

  clearSelected() {
    this.gameBoardService.clearActiveClass(this.selectedPiece);
    this.selectedPiece = null;
    this.selectedPieceInstance = null;
  }

  isPieceSelected() {
    return !!this.selectedPiece && !!this.selectedPieceInstance;
  }

  changePiecePosition() {
    const newPiecePosition = this.gameBoardService.drawNewPiecePositionOnBoard(
      this.selectedPieceInstance?.getMoveScope(),
      this.selectedPiece
    );
    if (!newPiecePosition) return;
    this.selectedPieceInstance.setPosition(newPiecePosition);
    this.setupPlayersPiecesAttackScopes();
    this.gameStateService.nextRound();
  }

  setupPlayersPiecesAttackScopes() {
    this.gameStateService.getPlayers().forEach((player) => {
      player.onGamePieces.forEach((piece) => {
        piece.setupAttackScope(this.gameStateService.enemyAttackScope);
      });
    });
  }

  giveUp() {
    this.gameStateService.endGame();
    this.gameBoardService.gameOver();
  }

  #canChangeSelection() {
    return this.gameBoardService.canChangeSelection(this.isPieceSelected(), this.selectedPieceInstance?.getMoveScope());
  }

  #canSelectPiece() {
    return this.gameBoardService.canSelectPiece(this.isPieceSelected());
  }

  #canSelectedPieceChangePosition() {
    return this.gameBoardService.canSelectedPieceChangePosition(
      this.isPieceSelected(),
      this.selectedPieceInstance?.getMoveScope()
    );
  }
}
