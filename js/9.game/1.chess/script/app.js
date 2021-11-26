import ClickOnBoardService from './services/click-on-board.service.js';
import GameBoardService from './game-board/game-board.service.js';
import GameEngineService from './game-engine/game-engine.script.js';
import Game from './game-state/game.js';
import { chessConfigurationMock } from './utils/chess-configuration-mock.js';

export const COLUMN_SIZE = 8;
export const ROW_SIZE = 8;

export const FIRST_ROW = 1;
export const LAST_ROW = 8;
export const ROUND_MODE_DISABLE = false;

let gameOver = false;
let gameStart = true;
let gameBoardElement;

window.onload = () => {
  const startGameButton = document.getElementById('game-start');

  const gameBoardService = new GameBoardService();
  const game = new Game(chessConfigurationMock.get('default'));
  const gameEngineService = new GameEngineService(game, gameBoardService);

  gameEngineService.startGame();

  gameBoardElement = document.getElementById('chessboard');

  gameBoardElement.addEventListener('click', function (e) {
    const clickService = new ClickOnBoardService(e.target);
    gameBoardService.setupClick(clickService);
    gameEngineService.selectAndMovePiece();
  });

  if (gameStart) {
    gameBoardElement.classList.remove('hide');
    startGameButton.classList.add('hide');
  }

  startGameButton.addEventListener('click', () => {
    gameBoardElement.classList.remove('hide');
    startGameButton.classList.add('hide');
    gameStart = true;
  });

  const giveUpButton = document.getElementById('give-up');

  giveUpButton.addEventListener('click', (e) => {
    if (!gameOver) {
      gameEngineService.giveUp();
      giveUpButton.classList.add('disabled');
      gameOver = true;
    }
  });

  const nextButton = document.getElementById('next');

  nextButton.addEventListener('click', (e) => {
    gameEngineService.navigateToNextRound();
  });

  const previousButton = document.getElementById('previous');

  previousButton.addEventListener('click', (e) => {
    game.previousRound();
  });
};
