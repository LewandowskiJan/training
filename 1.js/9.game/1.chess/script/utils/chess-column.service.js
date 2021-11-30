export const columnNameToColumnNumber = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3],
  ['d', 4],
  ['e', 5],
  ['f', 6],
  ['g', 7],
  ['h', 8],
]);

export const columnNumberToColumnName = new Map([
  [1, 'a'],
  [2, 'b'],
  [3, 'c'],
  [4, 'd'],
  [5, 'e'],
  [6, 'f'],
  [7, 'g'],
  [8, 'h'],
]);

export default class ChessColumnService {
  static calculateColumnName(columnName, numberToAdd) {
    return ChessColumnService.getColumnNameByColumnNumber(
      ChessColumnService.getColumnNumberByColumnName(columnName) + numberToAdd
    );
  }

  static getColumnNameByColumnNumber(columnNumber) {
    return columnNumberToColumnName.get(columnNumber);
  }

  static getColumnNumberByColumnName(columnName) {
    return columnNameToColumnNumber.get(columnName);
  }

  static hasColumnNumber(columnNumber) {
    return columnNumberToColumnName.has(columnNumber);
  }

  static hasNextColumnName(columnName, numberToAdd) {
    return ChessColumnService.hasColumnName(ChessColumnService.calculateColumnName(columnName, numberToAdd));
  }

  static hasColumnName(columnName) {
    return columnNameToColumnNumber.has(columnName);
  }
}
