export default class Piece {
  schema;
  type;
  position;
  playercolor;
  availableMovement;
  icon;
  playerColor;

  constructor(position) {
    this.position = position
  }
  showAvailableMovements() {
    return x
  }
  move() {
    return x
  }
  setPosition() {
    return x
  }
  setupPieceView(view) {
    this.type = view.type;
    this.icon = view.icon;
  }
  genratePieceView(counter){
    return '<div class="piece ' + this.type + " "+ this.playerColor + '" id="' + 'p' + counter + '">' + this.icon + '</div>'
  }
  updatePosition() {
    return x
  }
  setPlayerColor(color){
  this.playerColor = color;
  }
}