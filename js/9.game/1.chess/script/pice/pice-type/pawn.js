import ChessColumnService from '../../chess-column.service.js';
import ChessRowService from '../../chess-row.service.js';
import PieceAbstract from '../pice.abstract.js';

export default class Pawn extends PieceAbstract {
    setupAttackScope() {
    // potrzebujemy: typ figury(pionek,wieza itp) (this.type)
    // strona (top,bottom) (dostępne w klasie piece this.side)
    // obecna pozycja (this.position z przemapowaniem liternki na numer i z powrotem)
    // będziemy ustawiać this.attackScope[]
    this.attackScope = [];
    if (this.type === 'pawn') {
      if (this.side === 'bottom') {
        const attack1 = {
          column: ChessColumnService.calculateColumnName(this.position.column, -1),
          row: this.position.row + 1,
        };
        const attack2 = {
          column: ChessColumnService.calculateColumnName(this.position.column, 1),
          row: this.position.row + 1,
        };
        // console.log(attack1)
        this.attackScope.push(attack1);
        this.attackScope.push(attack2);
      }
      if (this.side === 'top') {
        // zrobić to samo co powyżej tylko dla "top" inną metodą
        this.attackScope.push();
        this.attackScope.push();
      }
    }
  }

  setupMoveScope() {
    this.moveScope = [];
     let lastLoop = false;
    if (this.type === 'pawn' && lastLoop) {
      console.log(move)
      console.log(lastLoop)
      console.log(moveScope)
      if (this.side === 'bottom') {
        const move = {
          column: ChessColumnService.calculateColumnName(this.position.column),
          row: this.position.row + 1,
        };
        const lm = document.getElementById(move.column + move.row);
        if (this.isAllyPiece(lm)) {
          return;
        }
        if (this.isEnemyPiece(lm)) {
          lastLoop = true;
        }
        console.log(move);
        this.moveScope.push(move);
      }
      if (this.side === 'top') {
        const move = {
          column: this.position.column,
          row: this.position.row - 1,
        };
        if (this.isAllyPiece(lm)) {
          return;
        }
        if (this.isEnemyPiece(lm)) {
          lastLoop = true;
        }
        this.moveScope.push(move);
      }
    }}}