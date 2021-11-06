const rowNumber = new Set([ 1, 2, 3, 4, 5, 6, 7, 8]);

const columnToNumber = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3],
  ['d', 4],
  ['e', 5],
  ['f', 6],
  ['g', 7],
  ['h', 8],
]);

const numberToColumn = new Map([
  [1, 'a'],
  [2, 'b'],
  [3, 'c'],
  [4, 'd'],
  [5, 'e'],
  [6, 'f'],
  [7, 'g'],
  [8, 'h'],
]);

export default class Piece {
  schema;
  id;
  type;
  icon;
  playerColor;
  position;
  availableMovement;
  moveScope = [];
  attackScope = [];
  side;

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
    // console.log(this.type)
    // console.log(position)

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

  setupAttackScope() {
    // potrzebujemy: typ figury(pionek,wieza itp) (this.type)
    // strona (top,bottom) (dostępne w klasie piece this.side)
    // obecna pozycja (this.position z przemapowaniem liternki na numer i z powrotem)
    // będziemy ustawiać this.attackScope[]
    this.attackScope = []
    if (this.type === "pawn") {
      if (this.side === "bottom") {
        const attack1 = {
          column: numberToColumn.get(columnToNumber.get(this.position.column) - 1),
          row: this.position.row + 1
        }
        const attack2 = {
          column: numberToColumn.get(columnToNumber.get(this.position.column) + 1),
          row: this.position.row + 1
        }
        // console.log(attack1)
        this.attackScope.push(attack1)
        this.attackScope.push(attack2)
      }
      if (this.side === "top") {
        // zrobić to samo co powyżej tylko dla "top" inną metodą
        this.attackScope.push()
        this.attackScope.push()
      }
    }
    // console.log(this.attackScope)

  }

  setupMoveScope() {
    this.moveScope = []
    if (this.type === "pawn") {
      if (this.side === "bottom") {
        const move = {
          column: this.position.column,
          row: this.position.row + 1
        }
        console.log(move)
        this.moveScope.push(move)
      }
      if (this.side === "top") {
        // zrobić to samo co powyżej tylko dla "top" inną metodą
        this.moveScope.push()

      }
    }
    if (this.type === "rook") {
      let i = 1
      let k = 1
      let j = 1
      let v = 1
      let top = rowNumber.has(this.position.row + i)
      let bottom = rowNumber.has(this.position.row - k)
      let right = numberToColumn.has(columnToNumber.get(this.position.column) + j)
      let left = numberToColumn.has(columnToNumber.get(this.position.column) - v)

      while (top) {
        const move = {
          column: this.position.column,
          row: this.position.row + i
        }
        // console.log(move)
        this.moveScope.push(move)
        i++
        top = rowNumber.has(this.position.row + i)
      }
      while (bottom) {
        const move = {
          column: this.position.column,
          row: this.position.row - k
        }
        // console.log(move)
        this.moveScope.push(move)
        k++
        bottom = rowNumber.has(this.position.row - k)
      }
      while (right) {
        const move = {
          column: this.calculateColumnName(this.position.column, j),
          row: this.position.row
        }
        // console.log(move)
        this.moveScope.push(move)
        j++
        right = numberToColumn.has(columnToNumber.get(this.position.column) + j)
      }
      while (left) {
        const move = {
          column: this.calculateColumnName(this.position.column, -v),
          row: this.position.row
        }
        // console.log(move)
        this.moveScope.push(move)
        v++
        left = numberToColumn.has(columnToNumber.get(this.position.column) - v)
      }
    }
  }

  calculateColumnName(columnName, number) {
    return numberToColumn.get(columnToNumber.get(columnName) + number)
  }

  getMoveScope() {
    return this.moveScope;
  }

  getAttackScope() {
    return this.attackScope;
  }

  setupSide(side) {
    this.side = side;
  }

  setPlayerColor(color) {
    this.playerColor = color;
  }

}