export default class Piece {
  schema;
  id;
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
  genratePieceView(counter, active = "") {
    this.id = counter
    // return '<div class="piece ' + active + " "+ this.type +  " "+ this.playerColor + '" id="' + this.id + '">' + this.icon + '</div>'
    return "".concat('<div class="piece ', active, " ", this.type, " ", this.playerColor, '" id="', this.id, '">', this.icon, '</div>');
  }
  updatePosition() {
    return x
  }
  setPlayerColor(color) {
    this.playerColor = color;
  }
}