const rowNumberScope = new Set([1, 2, 3, 4, 5, 6, 7, 8]);

export default class ChessRowService {
  static hasRowNumber(rowNumber) {
    return rowNumberScope.has(rowNumber);
  }
}
