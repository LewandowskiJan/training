export default class GameEngineService {
  selectedPiece;
  selectedPieceInstance;
  gameStateService;
  gameBoardService;

  constructor(gameStateService, gameBoardService) {
    this.gameStateService = gameStateService;
    this.gameBoardService = gameBoardService;
  }

  startGame() {
    this.onStartNewRound();
  }

  selectAndMovePiece() {
    if (this.selectedPiece && this.selectedPieceInstance) {
      /* czy cos jest zaznaczone - tak
        mozemy odznaczyć - przez klikniecie w ta sama figure, w pole na ktore nie mozna sie ruszyc (nawet z wroga figura), po wykonaniu ruchu
        mozemy sie ruszyc - tylko w miejsce do ruchu (zakres moveScope)
        mozemy zaatakowac - tylko w miejsce do ataku (attackScope)
        mozemy zmienic zaznaczenie - klikajac w figure gracza ktory jest przy ruchu
    */
      if (this.selectedPiece?.id === this.gameBoardService.clickGameService.getPieceId()) {
        return this.clearSelected();
      }

      if (this.#canChangeSelection()) {
        this.clearSelected();
        this.selectPiece();
        return;
      }

      if (this.#canSelectedPieceChangePosition()) {
        console.log('changes');
        this.makePieceMoveAndGoToNextRound();
        return;
      }
    } else {
      /* czy cos jest zaznaczone- nie
        mozemy zaznaczyc
        mozemy kliknac w wolne pole - bez efektu (na razie)
    */
      if (this.#canSelectPiece()) {
        this.clearSelected();
        return this.selectPiece();
      }
    }

    this.clearSelected();
  }

  selectPiece() {
    this.selectedPiece = this.getClickedPiece();
    if (this.selectedPiece) {
      this.gameBoardService.drawActiveClass(this.selectedPiece);
      this.selectedPieceInstance = this.gameStateService
        .getPlayers()
        [this.selectedPiece.id < 16 ? 1 : 0].getPieceById(this.selectedPiece.id);

      this.selectedPieceInstance.setupAttackScope(this.gameStateService.enemyAttackScope);

      this.showAvailableMove();
    }
  }

  makePieceMoveAndGoToNextRound() {
    this.onChangeToNextRound();
  }

  onChangeToNextRound() {
    this.changePiecePosition();
    this.clearCellAttackClass();
    this.clearSelected();
    this.gameStateService.nextRound();
    this.onStartNewRound();
  }

  onStartNewRound() {
    this.gameStateService.setupEnemyAttackScope();
    this.showAvailableAttackScope();
  }

  changePiecePosition() {
    const newPiecePosition = this.gameBoardService.drawNewPiecePositionOnBoard(
      this.selectedPieceInstance.getMoveScope(),
      this.selectedPiece
    );
    if (!newPiecePosition) return;
    this.selectedPieceInstance.setPosition(newPiecePosition);
    this.clearAvailableMove();
    this.selectedPieceInstance.setupAttackScope();
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
    this.gameStateService.getEnemyAttackScope().forEach((position) => {
      this.gameBoardService.drawAvailableAttackScope(position);
    });
  }

  clearCellAttackClass() {
    this.gameStateService.getEnemyAttackScope().forEach((position) => {
      this.gameBoardService.clearAvailableAttackScope(position);
    });
  }

  getClickedPiece() {
    return this.gameBoardService.getClickSelection();
  }

  clearSelected() {
    this.clearAvailableMove();
    this.gameBoardService.clearActiveClass(this.selectedPiece);
    this.selectedPiece = null;
    this.selectedPieceInstance = null;
  }

  isPieceSelected() {
    return !!this.selectedPiece && !!this.selectedPieceInstance;
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
