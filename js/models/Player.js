export default class Player {
  constructor(id) {
    this.id = id;
    this.name = "";
    this.scores = Array(10).fill(0);
  }
}
