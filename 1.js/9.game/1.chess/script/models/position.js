export default class Position {
  column;
  row;
  id;

  constructor(id) {
    this.id = id;
    this.column = id.split('')[0];
    this.row = +id.split('')[1];
  }

  static removeDuplicatedPosition(allPieces) {
    const attackScope = new Set();

    allPieces.forEach((piece) => {
      piece.attackScope.map((position) => position.id).forEach((pos) => attackScope.add(pos));
    });

    const currentAttackScopeArray = [];

    attackScope.forEach((id) => {
      currentAttackScopeArray.push(new Position(id));
    });

    return currentAttackScopeArray;
  }
}
