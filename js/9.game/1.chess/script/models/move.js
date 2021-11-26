export default class Move {
  movedPiece;
  fromPosition;
  toPosition;

  constructor(movedPiece, fromPosition) {
    this.movedPiece = movedPiece;
    this.fromPosition = fromPosition;
    this.toPosition = movedPiece.position;
  }
}
