import Position from '../models/position.js';

export default class ClickOnBoardService {
  target;
  pieceTarget;
  cellTarget;
  hasPiece;
  pieceId;
  cellId;
  cellPosition;

  constructor(target) {
    this.setupClick(target);
  }
  setupClick(target) {
    this.target = target;
    if (this.isPieceClicked(target)) {
      this.pieceTarget = target;
      this.hasPiece = true;
      this.cellTarget = target.parentNode;
      this.pieceId = target.id;
      this.cellId = target.parentNode.id;
      this.cellPosition = this.getCellPosition();
    } else {
      this.cellTarget = target;
      this.cellId = target.id;
      this.cellPosition = this.getCellPosition();

      if (this.isCellWithPieceClicked()) {
        this.pieceTarget = target.childNodes[0];
        this.hasPiece = true;
        this.pieceId = target.childNodes[0].id;
      } else {
        this.pieceTarget = null;
        this.hasPiece = false;
        this.pieceId = null;
      }
    }
  }

  getPieceId() {
    return this.pieceId;
  }
  getCellId() {
    return this.cellId;
  }
  getCellIdAsPosition() {
    return this.cellPosition;
  }
  getCellTarget() {
    return this.cellTarget;
  }
  getPieceTarget() {
    return this.pieceTarget;
  }
  getCellPosition() {
    return new Position(this.cellId);
  }

  isCellWithPieceOrPieceClicked() {
    return this.isCellWithPieceClicked() || this.isPieceClicked();
  }

  isCellWithPieceClicked() {
    return this.target?.childNodes[0]?.id;
  }

  isPieceClicked() {
    return this.target.className.includes('piece');
  }
}
