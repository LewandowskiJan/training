import GameState from './game-state.js';
import Position from '../models/position.js';

export default class Game {
  currentRound = 0;
  currentState;
  previousState;
  gameStatesMap = new Map();
  enemyAttackScope;

  constructor(configuration) {
    if (configuration) {
      this.gameStatesMap = configuration.gameStatesMap;
      this.setCurrentState(this.gameStatesMap.get(this.gameStatesMap.size - 1));
      if (this.gameStatesMap.size > 2) {
        this.setPreviousState(this.gameStatesMap.get(this.gameStatesMap.size - 2));
      }

      this.currentState.onGamePieces.forEach((piece) => {
        piece.setupPieceView(piece.position.column, piece.position.row, piece.id);
      });
    } else {
      this.startGame();
    }
  }

  idPlayerOneMove() {
    return this.currentState.onMovePlayerNumber === 0;
  }

  startGame(configuration) {
    this.setCurrentState(this.gameStatesMap.set(this.currentRound, new GameState(configuration)).get(0));
  }

  setMove(piece, fromPosition) {
    this.currentState && this.currentState.setMove(piece, fromPosition);
  }

  setupEnemyAttackScope() {
    this.enemyAttackScope = Position.removeDuplicatedPosition(this.currentState.getEnemyPieces());
    return this.enemyAttackScope;
  }

  setupMoveScope() {
    this.currentState.getAllyPieces().forEach((piece) => {
      piece.setupAttackScope();
    });
  }

  getAllyPieces() {
    return this.currentState.getAllyPieces();
  }

  getAllPieces() {
    return this.currentState.onGamePieces;
  }

  nextRound() {
    console.log('next round changing start ', this.currentState);
    const nextRound = this.currentRound + 1;
    if (this.gameStatesMap.has(nextRound)) {
      this.setPreviousState(this.gameStatesMap.get(this.currentRound));
      this.setCurrentState(this.gameStatesMap.get(nextRound));
      this.currentRound = nextRound;
    } else {
      this.gameStatesMap.set(nextRound, new GameState(this.currentState));
      this.setCurrentState(this.gameStatesMap.get(nextRound));
      this.currentRound = nextRound;
    }

    console.log('next round changing end ', this.currentState);
    console.log(this.gameStatesMap);
  }

  navigateToNextRound() {
    this.nextRound();
  }

  navigateToPreviousRound() {
    this.previousRound();
  }

  backLastRound() {
    if (this.currentRound === this.gameStatesMap.size - 1) {
      this.previousRound();
      this.gameStatesMap.delete(this.currentRound + 1);
    }
  }

  previousRound() {
    const previousRound = this.currentRound - 1;
    if (this.gameStatesMap.has(previousRound)) {
      this.setCurrentState(this.gameStatesMap.get(previousRound));
      this.currentRound = previousRound;

      if (this.gameStatesMap.has(previousRound - 1)) {
        this.setPreviousState(this.gameStatesMap.get(previousRound - 1));
      }
    }
  }

  setCurrentState(state) {
    this.currentState = state;
  }

  setPreviousState(state) {
    this.previousState = state;
  }
}
