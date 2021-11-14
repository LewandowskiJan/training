export default class ClickOnBoardService {
  target;
  pieceTarget;
  cellTarget;
  hasPiece;
  pieceId;
  cellId;
  cellPosition;

  setupClick(target) {
    this.target = target
    if (this.#isPieceClicked(target)) {
      this.pieceTarget = target
      this.hasPiece = true
      this.cellTarget = target.parentNode
      this.pieceId = target.id
      this.cellId = target.parentNode.id
      this.cellPosition = this.getCellPosition()
    }
    else {
      if (this.#isCellWithPieceClicked(target)) {
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

  isCellWithPieceOrPieceClicked(target) {
    return this.#isCellWithPieceClicked(target) || this.#isPieceClicked(target);
  }

  #isCellWithPieceClicked(target) {
    return target?.childNodes[0]?.id;
  }

  #isPieceClicked(target) {
    return target.className.includes('piece');
  }




}


