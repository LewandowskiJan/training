// Class extends

class Item {
  frame;
  position;

  constructor() {}

  setFrame(frame) {
    this.frame = frame;
  }

  setPosition(position) {
    this.position = position;
  }
}

class Weapon extends Item {
  attack;

  constructor() {
    super();
  }

  setAttack(attack) {
    this.attack = attack;
  }

  getAttack() {
    return this.attack;
  }
}

class Sword extends Weapon {
  swordsModifier = {
    undead: 0.8,
    humanLike: 1,
    animals: 1.2,
  };

  constructor() {
    super();
  }
}

class Claymore extends Sword {
  speedAttackModifier = 0.8;

  constructor() {
    super();
  }

  calculateDmg() {
    return this.attack;
  }
}
