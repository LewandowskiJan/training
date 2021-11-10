import ChessColumnService from '../../chess-column.service.js';
import ChessRowService from '../../chess-row.service.js';
import PieceAbstract from '../pice.abstract.js';

export default class Knight extends PieceAbstract {
  setupAttackScope() {
    this.setupMoveScope();
  }

  setupMoveScope() {
    this.moveScope = [];
    if (this.type === 'knight') {
      const move = {
        column: ChessColumnService.calculateColumnName(this.position.column, 1),
        row: this.position.row + 2,
      };
      const move1 = {
        column: ChessColumnService.calculateColumnName(this.position.column, -1),
        row: this.position.row + 2,
      };
      const move2 = {
        column: ChessColumnService.calculateColumnName(this.position.column, -1),
        row: this.position.row - 2,
      };
      const move3 = {
        column: ChessColumnService.calculateColumnName(this.position.column, +1),
        row: this.position.row - 2,
      };
      const move4 = {
        column: ChessColumnService.calculateColumnName(this.position.column, -2),
        row: this.position.row + 1,
      };
      const move5 = {
        column: ChessColumnService.calculateColumnName(this.position.column, -2),
        row: this.position.row - 1,
      };
      const move6 = {
        column: ChessColumnService.calculateColumnName(this.position.column, +2),
        row: this.position.row + 1,
      };
      const move7 = {
        column: ChessColumnService.calculateColumnName(this.position.column, +2),
        row: this.position.row - 1,
      };
      const lm = document.getElementById(move.column + move.row);
      const lm1 = document.getElementById(move1.column + move1.row);
      const lm2 = document.getElementById(move2.column + move2.row);
      const lm3 = document.getElementById(move3.column + move3.row);
      const lm4 = document.getElementById(move4.column + move4.row);
      const lm5 = document.getElementById(move5.column + move5.row);
      const lm6 = document.getElementById(move6.column + move6.row);
      const lm7 = document.getElementById(move7.column + move7.row);
      if (this.isAllyPiece(lm)) {
        return;
      };

      if (this.isAllyPiece(lm1)) {
        return;
      };

      if (this.isAllyPiece(lm2)) {
        return;
      };

      if (this.isAllyPiece(lm3)) {
        return;
      };

      if (this.isAllyPiece(lm4)) {
        return;
      };

      if (this.isAllyPiece(lm5)) {
        return;
      };

      if (this.isAllyPiece(lm6)) {
        return;
      };

      if (this.isAllyPiece(lm7)) {
        return;
      };
      
      this.moveScope.push(move),
      this.moveScope.push(move1),
      this.moveScope.push(move2),
      this.moveScope.push(move3),
      this.moveScope.push(move4),
      this.moveScope.push(move5),
      this.moveScope.push(move6),
      this.moveScope.push(move7)
    }
  }
}
