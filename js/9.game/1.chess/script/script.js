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

import ClickOnBoardService from './click-on-board.service.js';
import GameState from './game-state.js';
import GameBoard from './gameboard.js';

export const COLUMN_SIZE = 8;
export const ROW_SIZE = 8;

export const FIRST_ROW = 1;
export const LAST_ROW = 8;

let gameBoardElement;

window.onload = () => {
  const gamestate = new GameState(0, [], 0);
  gamestate.setupGame();
  gameBoardElement = document.getElementById('chessboard');
  const gameBoard = new GameBoard(gamestate.getPlayers(), gamestate);
  gameBoardElement.addEventListener('click', function (e) {
    gameBoard.selectAndMovePiece(new ClickOnBoardService(e.target));
  });
};
