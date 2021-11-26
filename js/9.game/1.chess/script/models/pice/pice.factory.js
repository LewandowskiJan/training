import Bishop from './pice-type/bishop.js';
import Rook from './pice-type/rook.js';
import Pawn from './pice-type/pawn.js';
import Queen from './pice-type/queen.js';
import King from './pice-type/king.js';
import Knight from './pice-type/knight.js';

import { FIRST_ROW, LAST_ROW } from '../../app.js';

export const rowChessPiecesConfiguration = new Map([
  ['a', { type: 'rook', icon: '&#128136;' }],
  ['b', { type: 'knight', icon: '&#127943;' }],
  ['c', { type: 'bishop', icon: '&#127939;' }],
  ['d', { type: 'queen', icon: '&#128120;' }],
  ['e', { type: 'king', icon: '&#129332;' }],
  ['f', { type: 'bishop', icon: '&#127939;' }],
  ['g', { type: 'knight', icon: '&#127943;' }],
  ['h', { type: 'rook', icon: '&#128136;' }],
  ['pawn', { type: 'pawn', icon: '&#128023;' }],
]);

export default class PieceFactory {
  static generatePiece(position, playerNumber) {
    const { type, icon } = PieceFactory.getCurrentPiceConfiguration(position.column, position.row);
    return PieceFactory.createPieceFromPositionTypeIcon(position, type, icon, playerNumber);
  }

  static createPieceFromPositionTypeIcon(position, type, icon, playerNumber) {
    switch (type) {
      case 'pawn':
        return new Pawn(position, type, icon, playerNumber);
      case 'queen':
        return new Queen(position, type, icon, playerNumber);
      case 'king':
        return new King(position, type, icon, playerNumber);
      case 'bishop':
        return new Bishop(position, type, icon, playerNumber);
      case 'knight':
        return new Knight(position, type, icon, playerNumber);
      case 'rook':
        return new Rook(position, type, icon, playerNumber);
    }
  }

  static getCurrentPiceConfiguration(cellColumn, chessRow) {
    return PieceFactory.isFirstOrLastRow(chessRow)
      ? rowChessPiecesConfiguration.get(cellColumn)
      : rowChessPiecesConfiguration.get('pawn');
  }

  static isFirstOrLastRow(row) {
    return row === FIRST_ROW || row === LAST_ROW;
  }
}
