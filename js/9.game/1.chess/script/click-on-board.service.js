export default class ClickOnBoardService {
  target;
  pieceTarget;
  cellTarget;
  hasPiece;
  pieceId;
  cellId;
  cellPosition;

  constructor(target) {
    this.setupClick(target)
  }
  setupClick(target) {
    this.target = target
    if (this.isPieceClicked(target)) {
      this.pieceTarget = target
      this.hasPiece = true
      this.cellTarget = target.parentNode
      this.pieceId = target.id
      this.cellId = target.parentNode.id
      this.cellPosition = this.getCellPosition()
    }
    else {
      if (this.isCellWithPieceClicked()) {
        this.pieceTarget = target.childNodes[0]
        this.hasPiece = true
        this.cellTarget = target
        this.pieceId = target.childNodes[0].id
        this.cellId = target.id
        this.cellPosition = this.getCellPosition()
      }
      else {
        this.pieceTarget = null
        this.hasPiece = false
        this.cellTarget = target
        this.pieceId = null
        this.cellId = target.id
        this.cellPosition = this.getCellPosition()
      }
    }
  }

  getPieceId() {
    return this.pieceId
  }
  getCellId() {
    return this.cellId
  }
  getCellIdAsPosition() {
    return this.cellPosition
  }
  getCellTarget() {
    return this.cellTarget
  }
  getPieceTarget() {
    return this.pieceTarget
  }
  getCellPosition() {
    const selectedPieceId = this.cellId.split('');
    return {
      column: selectedPieceId[0],
      row: +selectedPieceId[1],
    };
  }

  isCellWithPieceOrPieceClicked() {
    return this.isCellWithPieceClicked() || this.isPieceClicked();
  }

  isCellWithPieceClicked() {
    console.log(this.target.childNodes)
    return this.target?.childNodes[0]?.id;
  }

  isPieceClicked() {
    console.log(this.target.className.includes('piece'))
    return this.target.className.includes('piece');
  }




}


