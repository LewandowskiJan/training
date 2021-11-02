/**
 * Chess one pc, multiplayer (without server side)
 *
 * translate:
 * piece - `figura`
 * pawn - `pionek`
 * rook - `wieza`
 * bishop - `goniec`
 * knight - `skoczek`
 * king, queen
 *
 * Problems
 * We have chess board with 64 cell, and 2 players with 16 Pieces each.
 *
 * *========================================================
 * * The round:
 * Player1
 * can select the Piece from his Pieces, we have to check if the selected Piece is his
 * after selecting:
 * to unselect he can click to other Piece (or anywhere on the board where the Piece cant move - not good idea)
 * to move, he can click to cell that te Piece can reach
 *
 * after move Player1's round is over, and the Player2 can move
 *
 * *========================================================
 * * Pieces
 * Pieces can move specific to these Pieces type (pawn is different than rook, bishop, knight)
 * Limitation of move by others Pieces (you cant move to cell which contain your other Piece)
 * Knight can jump over the others Piece type, rest can be blocked
 *
 * Starts with instruction below, then implement the functionality, make more methods | fields or rename existing
 *
 * * Exercise 1
 * ======= configuration =======
 * todo: create ChessColumnsConfiguration map
 *  - should map 0 => 'a'
 *  - should map 1 => 'b'
 *  - ...
 *  - should map 7 => 'h'
 *
 * todo: create ChessPiecesConfiguration map
 * pieceType => PieceConfiguration
 * e.g:
 *  - should map 'pawn' => {
 *                  icon: '&#128023;',
 *                  movementSchema: 'y+1 | y-1',
 *                  canChangeToOtherPiece: true,
 *                  attackSchema: 'x+1-1 | y-1 y+1',
 *                  htmlSchema: <div class="pawn"></div>
 *              }
 *
 * * Exercise 2
 * ======== prototyping ========
 *
 * todo: create GameState class
 * todo: create Piece class
 * todo: create Player class
 *
 * class GameState has
 * * fields:
 * - rounds
 * - players
 * - time
 * * methods:
 * - setupGame()
 * - endGame()
 * - nextRound()
 * - beatPiece()
 * - selectPiece()
 * - restorePiece() // form pawn, when its reach end of the board
 *
 * class Piece has
 * * fields:
 * - schema
 * - type
 * - position
 * - side \\ black white (top bottom) it is important to calculate possible move for pawn (can go only from top to bottom or from bottom to top)
 * - availableMovement
 * * methods:
 * - showAvailableMovements()
 * - move()
 * - setPosition()
 * - #setupPiece()
 * - #updatePosition()
 *
 *  * class Player has
 * * fields:
 * - name
 * - movements
 * - points
 * - onGamePieces
 * - outGamePieces
 * * methods:
 * - movePiece()
 * - giveUp()
 * - removePiece()
 * - restorePiece()
 */

let gameBoard;
const selected = [];

window.onload = () => {
  gameBoard = document.getElementById('chessboard');
  let counter = 0;
  for (let chessRow = 8; chessRow > 0; chessRow = chessRow - 1) {
    if (chessRow > 6 || chessRow < 3) {
      for (let chessColumn = 0; chessColumn < 8; chessColumn++) {
        let cellColumn;
        let pieceType;
        let icon;
        let piece = { type: '', icon: '', cellColumn: '' };

        switch (chessColumn) {
          case 0:
            cellColumn = 'a';
            pieceType = isFirstOrLastRow(chessRow) ? 'rook' : 'pawn';
            icon = isFirstOrLastRow(chessRow) ? '&#128136;' : '&#128023;';
            piece = isFirstOrLastRow(chessRow)
              ? { type: 'rook', icon: '&#128136;' }
              : { type: 'pawn', icon: '&#128023;' };
            break;
          case 1:
            cellColumn = 'b';
            // piecetype = (chessRow === 8 || chessRow === 1) ? "knight" : "pawn";
            // icon = (chessRow === 8 || chessRow === 1) ? "&#127943;" : "&#128023;";
            piece =
              chessRow === 8 || chessRow === 1
                ? { type: 'knight', icon: '&#127943;' }
                : { type: 'pawn', icon: '&#128023;' };
            break;
          case 2:
            cellColumn = 'c';
            // piecetype = (chessRow === 8 || chessRow === 1) ? "bishop" : "pawn";
            // icon = (chessRow === 8 || chessRow === 1) ? "&#127939;" : "&#128023;";
            piece =
              chessRow === 8 || chessRow === 1
                ? { type: 'bishop', icon: '&#127939;' }
                : { type: 'pawn', icon: '&#128023;' };
            break;
          case 3:
            cellColumn = 'd';
            // piecetype = (chessRow === 8 || chessRow === 1) ? "king" : "pawn";
            // icon = (chessRow === 8 || chessRow === 1) ? "&#128120;" : "&#128023;";
            piece =
              chessRow === 8 || chessRow === 1
                ? { type: 'king', icon: '&#129332;' }
                : { type: 'pawn', icon: '&#128023;' };
            break;
          case 4:
            cellColumn = 'e';
            // piecetype = (chessRow === 8 || chessRow === 1) ? "queen" : "pawn";
            // icon = (chessRow === 8 || chessRow === 1) ? "&#129332;" : "&#128023;";
            piece =
              chessRow === 8 || chessRow === 1
                ? { type: 'queen', icon: '&#128120;' }
                : { type: 'pawn', icon: '&#128023;' };
            break;
          case 5:
            cellColumn = 'f';
            // piecetype = (chessRow === 8 || chessRow === 1) ? "bishop" : "pawn";
            // icon = (chessRow === 8 || chessRow === 1) ? "&#127939;" : "&#128023;";
            piece =
              chessRow === 8 || chessRow === 1
                ? { type: 'bishop', icon: '&#127939;' }
                : { type: 'pawn', icon: '&#128023;' };
            break;
          case 6:
            cellColumn = 'g';
            // piecetype = (chessRow === 8 || chessRow === 1) ? "knight" : "pawn";
            // icon = (chessRow === 8 || chessRow === 1) ? "&#127943;" : "&#128023;";
            piece =
              chessRow === 8 || chessRow === 1
                ? { type: 'knight', icon: '&#127943;' }
                : { type: 'pawn', icon: '&#128023;' };
            break;
          case 7:
            cellColumn = 'h';
            // piecetype = (chessRow === 8 || chessRow === 1) ? "rook" : "pawn";
            // icon = (chessRow === 8 || chessRow === 1) ? "&#128136;" : "&#128023;";
            piece =
              chessRow === 8 || chessRow === 1
                ? { type: 'rook', icon: '&#128136;' }
                : { type: 'pawn', icon: '&#128023;' };
            break;
        }

        // console.log(chessColumn);
        const cell = document.getElementById(cellColumn + chessRow);
        // cell.style = "background-color:red"
        // cell.innerHTML = `<div class="${piecetype}" id="p${counter}">&#128023;</div>`;
        // cell.innerHTML = '<div class="' + piecetype + '" id="' + 'p' + counter + '">' + icon + '</div>';
        cell.innerHTML = '<div class="piece ' + piece.type + '" id="' + 'p' + counter + '">' + piece.icon + '</div>';

        counter++;
      }
      // startowa wartośąć = 7, do póki i będzie > 1, przy każdej iteracji odejmij od i 5
      // console.log(chessRow);
    }
  }

  gameBoard.addEventListener('click', function (e) {
    // console.log(e);
    // console.log(selected);
    // console.log(isCellHasPieceInside(e.target) || isPieceSelected(e.target));

    if (isNonePieceSelected(selected)) {
      const selectedPiece = selectPiece(e.target);
      selectedPiece && selected.splice(0, 1, selectedPiece);
      return;
    } else {
      if (isCellHasPieceInside(e.target) || isPieceSelected(e.target)) {
        const selectedPiece = selectPiece(e.target);
        selectedPiece && selected.splice(0, 1, selectedPiece);
        return;
      }
      e.target.appendChild(selected[0]);
      clearSelection(selected);
    }
  });
};

function selectPiece(target) {
  let selectedPiece;
  if (isCellHasPieceInside(target)) selectedPiece = document.getElementById(target.childNodes[0].id);
  if (isPieceSelected(target)) selectedPiece = document.getElementById(target.id);
  return selectedPiece;
}

function isCellHasPieceInside(target) {
  return target?.childNodes[0]?.id;
}

function isPieceSelected(target) {
  return target.className.includes('piece');
}

function isNonePieceSelected(selection) {
  return selection.length === 0;
}

function clearSelection(selection) {
  selection.splice(0, 1);
}

function isFirstOrLastRow(row) {
  return row === 8 || row === 1;
}
