export default class GameFormView {
  constructor() {
    this.addButton = document.getElementById("add-game-button");
    this.gameForm = document.getElementById("game-form");

    // Set the default date to today's date
    const today = new Date().toISOString().split("T")[0];
    document.querySelector("#game-date").value = today;

    this.gameForm.addEventListener("submit", (event) => {
      event.preventDefault();
      this.submitForm();
    });
  }

  render() {
    this.addButton.style.display = "none";
    this.gameForm.style.display = "block";
  }
  submitForm() {
    const date = document.querySelector("#game-date").value;
    const numFullHouses = document.querySelector("#num-full-houses").value;
    const numLargeStraights = document.querySelector(
      "#num-large-straights"
    ).value;
    const numSmallStraights = document.querySelector(
      "#num-small-straights"
    ).value;

    const gameData = {
      date: date,
      numFullHouses: numFullHouses,
      numLargeStraights: numLargeStraights,
      numSmallStraights: numSmallStraights,
    };

    console.log(gameData);
  }
}
