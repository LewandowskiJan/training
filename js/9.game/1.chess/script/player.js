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
    return x
  }
  giveUp() {
    return x
  }
  removePiece() {
    return x
  }
  restorePiece() {
    return x
  }
  pushPiece(piece) {
    piece.setPlayerColor(this.color)
    this.onGamePieces.push(piece)
  }
}