export default class Player {
  name;
  movements;
  points;
  color;
  onGamePieces = [];
  outGamePieces = [];

  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  movePiece() {
    return x;
  }
  giveUp() {
    return x;
  }
  removePiece() {
    return x;
  }
  restorePiece() {
    return x;
  }
  pushPiece(piece, side) {
    piece.setPlayerColor(this.color);
    piece.setupSide(side);
    this.onGamePieces.push(piece);
  }
  getPieceById(id) {
    return this.onGamePieces.find((piece) => {
      return piece.id === +id;
    });
  }
}
