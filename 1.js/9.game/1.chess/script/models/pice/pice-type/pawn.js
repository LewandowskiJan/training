import Position from '../../position.js';
import ChessColumnService from '../../../utils/chess-column.service.js';
import ChessRowService from '../../../utils/chess-row.service.js';
import PieceAbstract from '../pice.abstract.js';

export default class Pawn extends PieceAbstract {
  setupAttackScope() {
    // potrzebujemy: typ figury(pionek,wieza itp) (this.type)
    // strona (top,bottom) (dostępne w klasie piece this.side)
    // obecna pozycja (this.position z przemapowaniem liternki na numer i z powrotem)
    // będziemy ustawiać this.attackScope[]
    this.attackScope = [];
    const attackStep = this.#isBottom() ? 1 : -1;

    if (
      ChessColumnService.calculateColumnName(this.position.column, -1) &&
      ChessRowService.hasRowNumber(this.position.row + attackStep)
    ) {
      const id = ChessColumnService.calculateColumnName(this.position.column, -1) + (this.position.row + attackStep);
      const attackPosition = new Position(id);
      this.attackScope.push(attackPosition);
    }

    if (
      ChessColumnService.calculateColumnName(this.position.column, 1) &&
      ChessRowService.hasRowNumber(this.position.row + attackStep)
    ) {
      const id = ChessColumnService.calculateColumnName(this.position.column, 1) + (this.position.row + attackStep);
      const attackPosition = new Position(id);
      this.attackScope.push(attackPosition);

      this.attackScope.push(attackPosition);
    }

    this.setupMoveScope();
  }

  setupMoveScope() {
    this.moveScope = [];

    const moveStep = this.#isBottom() ? 1 : -1;

    const position = new Position(this.position.column + (this.position.row + moveStep));

    const currentCell = document.getElementById(position.id);
    const en1 = document.getElementById(this.attackScope[0]?.column + this.attackScope[0]?.row);
    const en2 = document.getElementById(this.attackScope[1]?.column + this.attackScope[1]?.row);
    if (en1 && this.isEnemyPiece(en1)) {
      this.moveScope.push(this.attackScope[0]);
    }
    if (en2 && this.isEnemyPiece(en2)) {
      this.moveScope.push(this.attackScope[1]);
    }
    if (this.isAllyPiece(currentCell) || this.isEnemyPiece(currentCell)) {
      // this.attackScope.push(position);
      return;
    }
    if ((this.#isBottom() && this.#isBottomInitialPosition()) || (this.#isTop() && this.#isTopInitialPosition())) {
      const firstMove = this.#isBottom() ? 2 : -2;
      const position = new Position(this.position.column + (this.position.row + firstMove));
      const lm2 = document.getElementById(position.id);
      if (!this.isAllyPiece(lm2) && !this.isEnemyPiece(lm2)) {
        this.moveScope.push(position);
      }
    }
    this.moveScope.push(position);
  }

  #isBottomInitialPosition() {
    return this.position.row === 2;
  }

  #isTopInitialPosition() {
    return this.position.row === 7;
  }

  #isBottom() {
    return this.playerNumber === 0;
  }
  #isTop() {
    return this.playerNumber === 1;
  }
}
