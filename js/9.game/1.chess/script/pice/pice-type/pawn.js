import ChessColumnService from '../../chess-column.service.js';
import PieceAbstract from '../pice.abstract.js';

export default class Pawn extends PieceAbstract {
  setupAttackScope() {
    // potrzebujemy: typ figury(pionek,wieza itp) (this.type)
    // strona (top,bottom) (dostępne w klasie piece this.side)
    // obecna pozycja (this.position z przemapowaniem liternki na numer i z powrotem)
    // będziemy ustawiać this.attackScope[]
    this.attackScope = [];
    const attackStep = this.side === "bottom" ? 1 : -1;

    const attack1 = {
      column: ChessColumnService.calculateColumnName(this.position.column, -1),
      row: this.position.row + attackStep,
    };
    const attack2 = {
      column: ChessColumnService.calculateColumnName(this.position.column, 1),
      row: this.position.row + attackStep,
    };
    this.attackScope.push(attack1);
    this.attackScope.push(attack2);
    this.setupMoveScope()
  }

  // isEnemyPiece(target)
  setupMoveScope() {
    this.moveScope = [];
    const moveStep = this.side === "bottom" ? 1 : -1;
    const move = {
      column: this.position.column,
      row: this.position.row + moveStep,
    };
    const lm = document.getElementById(move.column + move.row);
    const en1 = document.getElementById(this.attackScope[0].column + this.attackScope[0].row);
    const en2 = document.getElementById(this.attackScope[1].column + this.attackScope[1].row);
    if (this.isEnemyPiece(en1)) {
      this.moveScope.push(this.attackScope[0])
    };
    if (this.isEnemyPiece(en2)) {
      this.moveScope.push(this.attackScope[1])
    };
    if (this.isAllyPiece(lm) || this.isEnemyPiece(lm)) {
      return;
    };
    if ((this.side === "bottom" && this.position.row === 2) || (this.side === "top" && this.position.row === 7)) {
      const firstMove = this.side === "bottom" ? 2 : -2;
      const move2 = {
        column: this.position.column,
        row: this.position.row + firstMove,
      };
      const lm2 = document.getElementById(move2.column + move2.row);
      if (!this.isAllyPiece(lm2) && !this.isEnemyPiece(lm2)) {
        this.moveScope.push(move2);
      }
    }
    this.moveScope.push(move);
  

  }
}