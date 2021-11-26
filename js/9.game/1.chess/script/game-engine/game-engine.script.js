import Move from '../models/move.js';

export default class GameEngineService {
  selectedPiece;
  selectedPieceInstance;
  gameBoardService;
  game;
  fromPosition;

  constructor(game, gameBoardService) {
    this.game = game;
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
      this.selectedPieceInstance = this.game.getAllPieces().get(+this.selectedPiece.id);
      this.selectedPieceInstance.setupAttackScope(this.game.setupEnemyAttackScope());
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
    this.game.setMove(move);
    this.clearCellAttackClass();
    this.clearSelected();
    this.game.nextRound();
    this.onStartNewRound();
  }

  onStartNewRound() {
    this.game.setupEnemyAttackScope();
    this.showAvailableAttackScope();
    this.game.setupMoveScope();

    const isCheckOrCheckmate = this.checkIsCheckOrCheckmate();

    if (isCheckOrCheckmate.isCheckmate) {
      this.giveUp();
    }

    if (isCheckOrCheckmate.isCheck) {
      // setup new moveScopes
    }
  }

  changePiecePosition() {
    const newPiecePosition = this.gameBoardService.drawNewPiecePositionOnBoard(
      this.selectedPieceInstance.getMoveScope(),
      this.selectedPiece,
      this.game.getAllPieces()
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
    this.game.setupEnemyAttackScope().forEach((position) => {
      this.gameBoardService.drawAvailableAttackScope(position);
    });
  }

  clearCellAttackClass() {
    this.game.setupEnemyAttackScope().forEach((position) => {
      this.gameBoardService.clearAvailableAttackScope(position);
    });
  }

  getClickedPiece() {
    return this.gameBoardService.getClickSelection(this.game.idPlayerOneMove());
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
    this.game.getAllPieces().forEach((piece) => {
      piece.setupAttackScope(this.game.setupEnemyAttackScope());
    });
  }

  giveUp() {
    this.gameBoardService.gameOver();
  }

  navigateToNextRound() {
    this.game.navigateToNextRound();
    this.gameBoardService.reloadView(this.game.getAllPieces());
  }

  navigateToPreviousRound() {
    this.game.navigateToPreviousRound();
    this.gameBoardService.reloadView(this.game.getAllPieces());
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
