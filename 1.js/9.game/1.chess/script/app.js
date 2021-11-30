import ClickOnBoardService from './services/click-on-board.service.js';
import GameBoardService from './game-board/game-board.service.js';
import GameEngineService from './game-engine/game-engine.script.js';
import GameStateService from './game-state/game-state.service.js';
import { chessConfigurationMock } from './utils/chess-configuration-mock.js';

export const COLUMN_SIZE = 8;
export const ROW_SIZE = 8;

export const FIRST_ROW = 1;
export const LAST_ROW = 8;
export const ROUND_MODE_DISABLE = false;

let gameOver = false;
let gameStart = false;

window.onload = () => {
  const gameBoardElement = document.getElementById('chessboard');

  const gameBoardService = new GameBoardService();
  const gameStateService = new GameStateService(chessConfigurationMock.get('4vs4-'));
  const gameEngineService = new GameEngineService(gameStateService, gameBoardService);

  gameEngineService.startGame();

  gameBoardElement.addEventListener('click', function (e) {
    const clickService = new ClickOnBoardService(e.target);
    gameBoardService.setupClick(clickService);
    gameEngineService.selectAndMovePiece();
  });

  setupButtons(gameBoardElement, gameEngineService);
};

function setupButtons(gameBoardElement, gameEngineService) {
  const startGameButton = document.getElementById('game-start');
  const giveUpButton = document.getElementById('give-up');
  const nextButton = document.getElementById('next');
  const previousButton = document.getElementById('previous');

  startGameButton.addEventListener('click', () => {
    gameBoardElement.classList.remove('hide');
    startGameButton.classList.add('hide');
    gameStart = true;
  });

  giveUpButton.addEventListener('click', (e) => {
    if (!gameOver) {
      gameEngineService.giveUp();
      giveUpButton.classList.add('disabled');
      gameOver = true;
    }
  });

  nextButton.addEventListener('click', (e) => {
    gameEngineService.navigateToNextRound();
  });

  previousButton.addEventListener('click', (e) => {
    gameEngineService.navigateToPreviousRound();
  });

  if (gameStart) {
    gameBoardElement.classList.remove('hide');
    startGameButton.classList.add('hide');
  }
}
