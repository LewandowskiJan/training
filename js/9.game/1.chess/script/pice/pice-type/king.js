import Position from '../../position.js';
import ChessColumnService from '../../utils/chess-column.service.js';
import ChessRowService from '../../utils/chess-row.service.js';
import PieceAbstract from '../pice.abstract.js';

export default class King extends PieceAbstract {
  setupAttackScope() {
    this.attackScope = [];
    this.setupMoveScope();
    this.attackScope.push(...this.moveScope);
  }
  setupMoveScope() {
    this.moveScope = [];
    const possibleMove = [
      [1, 1],
      [1, 0],
      [1, -1],
      [0, -1],
      [-1, 1],
      [-1, -1],
      [-1, 0],
      [0, 1],
    ];
    possibleMove.forEach(([column, row]) => {
      if (
        ChessColumnService.calculateColumnName(this.position.column, column) &&
        ChessRowService.hasRowNumber(this.position.row + row)
      ) {
        const position = new Position(
          ChessColumnService.calculateColumnName(this.position.column, column) + (this.position.row + row)
        );

        const lm = document.getElementById(position.id);

        if (!this.isAllyPiece(lm)) {
          this.moveScope.push(position);
        }
        this.attackScope.push(position);
      }
    });
  }
}
