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

  removePieceById(id) {
    const index = this.onGamePieces.findIndex((piece) => piece.id === +id);
    this.onGamePieces[index].deletePieceInstance();
    const deletePiece = this.onGamePieces.splice(index, 1);
    this.outGamePieces.push(...deletePiece);
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
