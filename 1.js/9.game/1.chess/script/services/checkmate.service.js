export default class CheckmateService {
  currentPlayer = {};
  enemyPlayer = {};
  possibleMove = [];
  enemyAttackScope = new Set();
  moveScope = new Set();
  move = {
    startPosition: '',
    endPosition: ''
  }

  constructor(currentPlayer, enemyPlayer) {
    Object.assign(this.currentPlayer, currentPlayer);
    Object.assign(this.enemyPlayer, enemyPlayer);
  }

  checkPossibleMove() {
    this.currentPlayer.onGamePieces.forEach((piece) => {
      const currentPosition = piece.position;

      piece.moveScope.forEach((position) => {
        this.setupNewAttackScope();
        piece.setupAttackScope(Array.from(this.enemyAttackScope));

        if (this.isKingSafe()) {
          piece.setPosition(position);
          this.setupNewAttackScope();
          if (this.isKingSafe()) {
            this.possibleMove.push(position);
          }
        }
        piece.setPosition(currentPosition);
      });
    });
  }

  setupNewAttackScope() {
    this.enemyAttackScope.clear();
    this.enemyPlayer.onGamePieces.forEach((piece) => {
      piece.attackScope.forEach((position) => {
        this.enemyAttackScope.add(position.id);
      });
    });
  }

  isKingSafe() {
    const king = this.currentPlayer.onGamePieces.find((piece) => piece.type === 'king');
    return !this.enemyAttackScope.has(king.position.id);
  }
}
