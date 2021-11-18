export default class RoundService {
roundNumber = 1;


  isPlayerOneRound() {
    return this.roundNumber % 2 !== 0;
  }
  nextRound() {
    this.roundNumber++;
  }
}
