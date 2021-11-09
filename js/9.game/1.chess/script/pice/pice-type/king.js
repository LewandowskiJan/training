import ChessColumnService from '../../chess-column.service.js';
import ChessRowService from '../../chess-row.service.js';
import PieceAbstract from '../pice.abstract.js';

export default class King extends PieceAbstract {
  setupAttackScope() {
    this.setupMoveScope();
  }
  setupMoveScope() {
    this.moveScope = [];
if (this.type === 'king') {
      const move = {
        column: ChessColumnService.calculateColumnName(this.position.column, 1),
        row: this.position.row + 1,
      };
      const move1 = {
        column: ChessColumnService.calculateColumnName(this.position.column, 1),
        row: this.position.row,
      };
      const move2 = {
        column: ChessColumnService.calculateColumnName(this.position.column, 1),
        row: this.position.row - 1,
      };
      const move3 = {
        column: ChessColumnService.calculateColumnName(this.position.column, 0),
        row: this.position.row - 1,
      };
      const move4 = {
        column: ChessColumnService.calculateColumnName(this.position.column, -1),
        row: this.position.row + 1,
      };
      const move5 = {
        column: ChessColumnService.calculateColumnName(this.position.column, -1),
        row: this.position.row - 1,
      };
      const move6 = {
        column: ChessColumnService.calculateColumnName(this.position.column, -1),
        row: this.position.row,
      };
      const move7 = {
        column: ChessColumnService.calculateColumnName(this.position.column, 0),
        row: this.position.row + 1,
      };
      console.log(move, move1, move2, move3, move4, move5, move6, move7);
      this.moveScope.push(move, move1, move2, move3, move4, move5, move6, move7);
    }}}