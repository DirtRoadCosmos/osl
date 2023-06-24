import Game from "../models/Game.js";
import GameFormView from "../views/GameFormView.js";

export default class GameController {
  constructor() {
    this.gameFormView = new GameFormView();
    this.currentGame = null;
  }

  init() {
    this.addEventListeners();
  }

  addEventListeners() {
    const addGameButton = document.getElementById("add-game-button");
    addGameButton.addEventListener("click", () => this.startNewGame());
  }

  startNewGame() {
    this.currentGame = new Game();
    this.gameFormView.render(this.currentGame);
  }
}
