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
  setPosition(position) {
    this.position = position;

    // dodać 2 pola do tej klasy
    // pierwsze pole: moveScope
    // drugie pole: attackScope
    // będziemy wyliczać za każdym setPosition()
    // stworzyć mapę, która będzie zamieniać A->1 B->2 C->3 dla pozycji pionka (klucz litera, wartość liczba)
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