// Compare Manager is used for comparing two GameCard
import GameCard from 'Models/GameCard';

export default class CompareManager {
  /**
   * returns turn numbers required during the versus.
   * @param cardOne: Attacking Card
   * @param cardTwo: Defending Card
   */
  compare(cardOne: GameCard, cardTwo: GameCard) {
    if (cardOne.attack > cardTwo.attack) {
      var turnNumber = Math.round(
        cardTwo.health / (cardOne.attack - cardTwo.def)
      );
      return turnNumber;
    }
    return cardTwo.health;
  }
}
