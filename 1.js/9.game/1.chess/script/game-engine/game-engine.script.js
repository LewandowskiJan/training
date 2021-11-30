import Move from '../models/move.js';

export default class GameEngineService {
  selectedPiece;
  selectedPieceInstance;
  gameBoardService;
  gameStateService;
  fromPosition;

  constructor(gameStateService, gameBoardService) {
    this.gameStateService = gameStateService;
    this.gameBoardService = gameBoardService;
  }

  startGame() {
    this.onStartNewRound();
  }

  selectAndMovePiece() {
    if (this.selectedPiece && this.selectedPieceInstance) {
      if (this.selectedPiece?.id === this.gameBoardService.clickGameService.getPieceId()) {
        return this.clearSelected();
      }

      if (this.#canChangeSelection()) {
        this.clearSelected();
        this.selectPiece();
        return;
      }

      if (this.#canSelectedPieceChangePosition()) {
        console.log('here');
        this.makePieceMoveAndGoToNextRound();
        return;
      }
    } else {
      if (this.#canSelectPiece()) {
        this.clearSelected();
        return this.selectPiece();
      }
    }

    this.clearSelected();
  }

  checkIsCheckOrCheckmate() {
    return false;
  }

  selectPiece() {
    this.selectedPiece = this.getClickedPiece();
    if (this.selectedPiece) {
      this.gameBoardService.drawActiveClass(this.selectedPiece);
      this.selectedPieceInstance = this.gameStateService.getAllPieces().get(+this.selectedPiece.id);
      this.selectedPieceInstance.setupAttackScope(this.gameStateService.setupEnemyAttackScope());
      this.fromPosition = this.selectedPieceInstance.position;
      this.showAvailableMove();
    }
  }

  makePieceMoveAndGoToNextRound() {
    this.onChangeToNextRound();
  }

  onChangeToNextRound() {
    this.changePiecePosition();
    const move = new Move(this.selectedPieceInstance, this.fromPosition);
    this.gameStateService.setMove(move);
    this.clearAvailableAttackScope();
    this.clearSelected();
    this.gameStateService.nextRound();
    this.onStartNewRound();
  }

  changePiecePosition() {
    const newPiecePosition = this.gameBoardService.drawNewPiecePositionOnBoard(
      this.selectedPieceInstance.getMoveScope(),
      this.selectedPiece,
      this.gameStateService.getAllPieces()
    );
    if (!newPiecePosition) return;
    this.selectedPieceInstance.setPosition(newPiecePosition);
    this.clearAvailableMove();
    this.selectedPieceInstance.setupAttackScope();
  }

  clearSelected() {
    this.clearAvailableMove();
    this.gameBoardService.clearActiveClass(this.selectedPiece);
    this.selectedPiece = null;
    this.selectedPieceInstance = null;
  }

  onStartNewRound() {
    this.showAvailableAttackScope();
    this.gameStateService.setupMoveScope();
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
    this.gameStateService.setupEnemyAttackScope().forEach((position) => {
      this.gameBoardService.drawAvailableAttackScope(position);
    });
  }

  clearAvailableAttackScope() {
    this.gameStateService.setupEnemyAttackScope().forEach((position) => {
      this.gameBoardService.clearAvailableAttackScope(position);
    });
  }

  getClickedPiece() {
    return this.gameBoardService.getClickSelection(this.gameStateService.idPlayerOneMove());
  }

  isPieceSelected() {
    return !!this.selectedPiece && !!this.selectedPieceInstance;
  }

  setupPlayersPiecesAttackScopes() {
    this.gameStateService.getAllPieces().forEach((piece) => {
      piece.setupAttackScope(this.gameStateService.setupEnemyAttackScope());
    });
  }

  giveUp() {
    this.gameBoardService.gameOver();
  }

  navigateToNextRound() {
    this.gameStateService.navigateToNextRound();
    this.gameBoardService.reloadView(this.gameStateService.getAllPieces());
  }

  navigateToPreviousRound() {
    this.gameStateService.navigateToPreviousRound();
    this.gameBoardService.reloadView(this.gameStateService.getAllPieces());
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
