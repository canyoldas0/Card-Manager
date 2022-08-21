export default class GameCard {
  attack: number;
  def: number;
  health: number;
  name: string;

  constructor(attack: number, def: number, health: number, name: string) {
    this.attack = attack;
    this.def = def;
    this.health = health;
    this.name = name;
  }
}
