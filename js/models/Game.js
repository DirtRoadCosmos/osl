export default class Game {
  constructor() {
    this.date = "";
    this.numFullHouses = 0;
    this.numLargeStraights = 0;
    this.numSmallStraights = 0;
  }

  setDate(date) {
    this.date = date;
  }

  setNumFullHouses(num) {
    this.numFullHouses = num;
  }

  setNumLargeStraights(num) {
    this.numLargeStraights = num;
  }

  setNumSmallStraights(num) {
    this.numSmallStraights = num;
  }
}
