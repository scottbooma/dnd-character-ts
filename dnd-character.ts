export class DnDCharacter {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  hitpoints: number;

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
  }

  getModifierFor() {}

  static generateAbilityScore() {
    return this.topThreeRolls().reduce((sum, number) => {
      return sum + number;
    }, 0);
  }

  static topThreeRolls() {
    const sortedRolls = this.rollFourTimes().sort();
    const lowestRoll = sortedRolls.shift();
    return sortedRolls;
  }

  static rollFourTimes() {
    const diceRolls: number[] = [];
    while (diceRolls.length < 4) {
      diceRolls.push(this.randomDiceRoll());
    }
    return diceRolls;
  }

  static randomDiceRoll() {
    return Math.ceil(Math.random() * 6);
  }
}
