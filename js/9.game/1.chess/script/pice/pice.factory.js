import Bishop from './pice-type/bishop.js';
import Rook from './pice-type/rook.js';
import Pawn from './pice-type/pawn.js';
import Queen from './pice-type/queen.js';
import King from './pice-type/king.js';
import Knight from './pice-type/knight.js';

import { FIRST_ROW, LAST_ROW } from '../script.js';

export const rowChessPiecesConfiguration = new Map([
  ['a', { type: 'rook', icon: '&#128136;' }],
  ['b', { type: 'knight', icon: '&#127943;' }],
  ['c', { type: 'bishop', icon: '&#127939;' }],
  ['d', { type: 'king', icon: '&#129332;' }],
  ['e', { type: 'queen', icon: '&#128120;' }],
  ['f', { type: 'bishop', icon: '&#127939;' }],
  ['g', { type: 'knight', icon: '&#127943;' }],
  ['h', { type: 'rook', icon: '&#128136;' }],
  ['pawn', { type: 'pawn', icon: '&#128023;' }],
]);

export default class PieceFactory {
  generatePiece(position) {
    const { type, icon } = this.getCurrentPiceConfiguration(position.column, position.row);
    // console.log(type);
    switch (type) {
      case 'pawn':
        return new Pawn(position, type, icon);
      case 'queen':
        return new Queen(position, type, icon);
      case 'king':
        return new King(position, type, icon);
      case 'bishop':
        return new Bishop(position, type, icon);
      case 'knight':
        return new Knight(position, type, icon);
      case 'rook':
        return new Rook(position, type, icon);
    }
  }

  getCurrentPiceConfiguration(cellColumn, chessRow) {
    return this.isFirstOrLastRow(chessRow)
      ? rowChessPiecesConfiguration.get(cellColumn)
      : rowChessPiecesConfiguration.get('pawn');
  }

  isFirstOrLastRow(row) {
    return row === FIRST_ROW || row === LAST_ROW;
  }
}