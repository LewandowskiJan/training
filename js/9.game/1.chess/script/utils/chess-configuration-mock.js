import GameState from '../game-state/game-state.js';
import King from '../models/pice/pice-type/king.js';
import Pawn from '../models/pice/pice-type/pawn.js';
import Queen from '../models/pice/pice-type/queen.js';
import Rook from '../models/pice/pice-type/rook.js';
import Position from '../models/position.js';

const rookCheck = new Rook(new Position('e3'), 'rook', '&#128136;', 0, 13);
const kingCheck1 = new King(new Position('e2'), 'king', '&#129332;', 0, 14);
const queenCheck = new Queen(new Position('f4'), 'queen', '&#128120;', 0, 15);

const kingCheck2 = new King(new Position('e6'), 'king', '&#129332;', 1, 24);

const rookCheckMate = new Rook(new Position('g6'), 'rook', '&#128136;', 0, 13);
const queenCheckMate = new Queen(new Position('g8'), 'queen', '&#128120;', 0, 15);

const kingCheckMate2 = new King(new Position('h8'), 'king', '&#129332;', 1, 24);

// player 1 (index: 0)
const pawn1 = new Pawn(new Position('b3'), 'pawn', '&#128023;', 0, 11);
const pawn2 = new Pawn(new Position('c3'), 'pawn', '&#128023;', 0, 12);
const rook1 = new Rook(new Position('d3'), 'rook', '&#128136;', 0, 13);
const king1 = new King(new Position('e3'), 'king', '&#129332;', 0, 14);
const queen1 = new Queen(new Position('f3'), 'queen', '&#128120;', 0, 15);

// player 2 (index: 1)
const pawn3 = new Pawn(new Position('b6'), 'pawn', '&#128023;', 1, 21);
const pawn4 = new Pawn(new Position('c6'), 'pawn', '&#128023;', 1, 22);
const rook2 = new Rook(new Position('d6'), 'rook', '&#128136;', 1, 23);
const king2 = new King(new Position('e6'), 'king', '&#129332;', 1, 24);
const queen2 = new Queen(new Position('f6'), 'queen', '&#128120;', 1, 25);

const fourVsFourConfiguration = {
  gameStatesMap: new Map([
    [
      0,
      new GameState({
        status: 'pre',
        roundNumber: 3,
        onMovePlayerNumber: 1,
        enemyPlayerNumber: 0,
        onGamePieces: new Map()
          .set(pawn1.id, pawn1)
          .set(pawn2.id, pawn2)
          .set(pawn3.id, pawn3)
          .set(pawn4.id, pawn4)
          .set(rook1.id, rook1)
          .set(king1.id, king1)
          .set(rook2.id, rook2)
          .set(king2.id, king2),
        outGamePieces: new Map(),
        move: null,
        counter: 1,
      }),
    ],
  ]),
};

const sixVsSixConfiguration = {
  gameStatesMap: new Map([
    [
      0,
      new GameState({
        status: 'pre',
        roundNumber: 3,
        onMovePlayerNumber: 1,
        enemyPlayerNumber: 0,
        onGamePieces: new Map()
          .set(pawn1.id, pawn1)
          .set(pawn2.id, pawn2)
          .set(pawn3.id, pawn3)
          .set(pawn4.id, pawn4)
          .set(rook1.id, rook1)
          .set(king1.id, king1)
          .set(rook2.id, rook2)
          .set(king2.id, king2)
          .set(queen1.id, queen1)
          .set(queen2.id, queen2),
        outGamePieces: new Map(),
        move: null,
        counter: 1,
      }),
    ],
  ]),
};

const checkConfiguration = {
  gameStatesMap: new Map([
    [
      0,
      new GameState({
        status: 'pre',
        roundNumber: 3,
        onMovePlayerNumber: 1,
        enemyPlayerNumber: 0,
        onGamePieces: new Map()
          .set(rookCheck.id, rookCheck)
          .set(kingCheck1.id, kingCheck1)
          .set(queenCheck.id, queenCheck)
          .set(kingCheck2.id, kingCheck2),
        outGamePieces: new Map(),
        move: null,
        counter: 1,
      }),
    ],
  ]),
};

const checkMateConfiguration = {
  gameStatesMap: new Map([
    [
      0,
      new GameState({
        status: 'pre',
        roundNumber: 3,
        onMovePlayerNumber: 1,
        enemyPlayerNumber: 0,
        onGamePieces: new Map()
          .set(rookCheckMate.id, rookCheckMate)
          .set(queenCheckMate.id, queenCheckMate)
          .set(kingCheckMate2.id, kingCheckMate2),
        outGamePieces: new Map(),
        move: null,
        counter: 1,
      }),
    ],
  ]),
};

export const chessConfigurationMock = new Map([
  ['4vs4', { ...fourVsFourConfiguration }],
  ['6vs6', { ...sixVsSixConfiguration }],
  ['check', { ...checkConfiguration }],
  ['check-mate', { ...checkMateConfiguration }],
]);
