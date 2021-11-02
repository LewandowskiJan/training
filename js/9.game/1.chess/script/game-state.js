// export default class GameState {
//   startTime;
//   endTime;
//   players;
// }


class GameState {
  rounds;
  players;
  time;

  constructor(rounds, players, time) {
    this.rounds = rounds
    this.players = players
    this.time = time
  }
  setupGame() {
    return x
  }
  endGame() {
    return x
  }
  nextRound() {
    return x
  }
  beatPiece() {
    return x
  }
  selectPiece() {
    return x
  }
  restorePiece() {
    return x
  }
}

class Piece {
  fields;
  schema;
  type;
  position;
  playercolor;
  availableMovement;

  constructor(fields, schema, type, position, playercolor, availableMovement) {

    this.fields = fields
    this.schema = schema
    this.type = type
    this.position = position
    this.playercolor = playercolor
    this.availableMovement = availableMovement
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
  setupPiece() {
    return x
  }
  updatePosition() {
    return x
  }
}
class Player {
  name;
  movements;
  points;
  onGamePieces;
  outGamePieces;

  constructor(name, movements, points, onGamePieces, outGamePieces) {
    this.name = name
    this.movements = movements
    this.points = points
    this.onGamePieces = onGamePieces
    this.outGamePieces = outGamePieces
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
}