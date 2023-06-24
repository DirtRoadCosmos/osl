class PlayerView {
  constructor() {
    this.playerListElement = document.getElementById("player-list");
  }

  createPlayerInput() {
    const playerElement = document.createElement("div");
    playerElement.classList.add("player", "mb-3");

    const playerTitle = document.createElement("h3");
    playerTitle.textContent = `Player ${
      this.playerListElement.children.length + 1
    }`;
    playerElement.appendChild(playerTitle);

    const playerInput = document.createElement("input");
    playerInput.type = "text";
    playerInput.classList.add("form-control", "mb-2");
    playerInput.placeholder = "Enter player stats";
    playerElement.appendChild(playerInput);

    const removePlayerButton = document.createElement("button");
    removePlayerButton.type = "button";
    removePlayerButton.classList.add("btn", "btn-danger", "remove-player");
    removePlayerButton.textContent = "Remove Player";
    playerElement.appendChild(removePlayerButton);

    return playerElement;
  }

  addPlayer() {
    const playerElement = this.createPlayerInput();
    this.playerListElement.appendChild(playerElement);
  }

  removePlayer(playerElement) {
    this.playerListElement.removeChild(playerElement);
  }
}

export default PlayerView;
