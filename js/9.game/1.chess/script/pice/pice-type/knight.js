import ChessColumnService from '../../chess-column.service.js';
import PieceAbstract from '../pice.abstract.js';

export default class Knight extends PieceAbstract {
  setupAttackScope() {
    this.attackScope = [];
    this.setupMoveScope();
    this.attackScope.push(...this.moveScope);
  }

  setupMoveScope() {
    this.moveScope = [];
    const possibleMove = [
      [1, 2],
      [1, -2],
      [-1, 2],
      [-1, -2],
      [2, 1],
      [2, -1],
      [-2, 1],
      [-2, -1],
    ];
    possibleMove.forEach(([column, row]) => {
      // console.log(column, row)
      const move = {
        column: ChessColumnService.calculateColumnName(this.position.column, column),
        row: this.position.row + row,
      };
      const lm = document.getElementById(move.column + move.row);
      if (!this.isAllyPiece(lm)) {
        this.moveScope.push(move);
      }
    });
  }
}
