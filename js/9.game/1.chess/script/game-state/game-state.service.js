import Player from '../models/player.js';
import Position from '../models/position.js';

export default class GameStateService {
  players = [];
  gameStatus = 'pre-start';
  roundService;

  enemyAttackScope = [];

  constructor(roundService) {
    this.roundService = roundService;
  }

  setupGameState() {
    this.#setupPlayers();
  }

  setupEnemyAttackScope(playerIndex = 0) {
    let allPieces = this.getPlayers()[playerIndex].onGamePieces;
    this.enemyAttackScope = Position.removeDuplicatedPosition(allPieces);
  }

  getPlayers() {
    return this.players;
  }

  addPieceToPlayer(currentPiece, playerNumber) {
    this.players[playerNumber].pushPiece(currentPiece, playerNumber === 0 ? 'bottom' : 'top');
  }

  endGame() {
    // todo: sprawdzic po rundzie ktory player poddal
    this.gameStatus = 'end';
  }

  getRound() {
    return this.roundService.roundNumber;
  }

  whichPlayerNumberRound() {
    return this.roundService.isPlayerOneRound() ? 0 : 1;
  }

  whichEnemyPlayerNumberRound() {
    return this.roundService.isPlayerOneRound() ? 1 : 0;
  }

  isPlayerOneRound() {
    return this.roundService.isPlayerOneRound();
  }

  nextRound() {
    const currentEnemyPlayerIndex = this.whichEnemyPlayerNumberRound();
    this.setupEnemyAttackScope(currentEnemyPlayerIndex);
    this.roundService.nextRound();
  }

  isGameEnd() {
    return this.gameStatus === 'end';
  }

  #setupPlayers() {
    this.players.push(new Player('Joe', 'white', this), new Player('Jane', 'black', this));
  }
}
