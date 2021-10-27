// Reminder

//  keyword needed to create Class
//  |
//  |       class name
//  |       |
class OrcExample {
  // class fields | properties
  hp;

  // constructor with param
  // constructor are invoke by 'new' keyword
  // eg. const orc1 = new Orc(1200, 123);
  constructor(hp, attack) {
    // in constructor we setup the object with start value
    this.hp = a;
    this.attack = b; // this (field | property) will be added with value b after creation
  }

  // methods
  // class can contains more than one method (methods are the same as functions)
  // can have (params | arguments)
  // can change the class fields
  // can return values
  methodsExample(paramExample = 1) {
    // this line change the state of the class's field 'hp'
    this.hp = this.hp - paramExample;

    // this line make this method return some value
    return paramExample * 2;

    // we can both effect (change state of class, return some value) or one of them
  }
}

/* ==========================
      Class exercises
========================== */

/**
 * 1. Create class Goblin
 *
 * 2. with fields:
 *  - name: string
 *  - hp: number
 *  - attack: number
 *  - defence: number
 *  - speedAttack: number
 *  - isDead: boolean = false
 *
 * 3. add constructor, with params 'name', 'hp', 'attack', 'defence', 'speedAttack'
 *  - set (bind) the all params to class instance in constructor using 'this.'
 *
 * 4. add methods
 *  - getAttack
 *      return attack
 *  - getDamage
 *      takes one param 'dmg: number'
 *      set new value of 'hp' hp - (dmg - defence)
 *      and return the current hp
 *      return hp
 *  - getDefence
 *      return defence
 *  - getAttackSpeed
 *      return attackSpeed
 */

/**
 *
 * 1. create 2 instances of Goblin with different values
 * 2. create global variable 'timeStamp' : number
 * 3. create loop using 'while' working till one of the goblin died
 *  3. in loop
 *   a) use goblins instance to attack each other
 *   b) check if one of the goblins die, if true
 *      - console.log('goblin: ', goblinInstance, ' wins!') and use break;
 *   c) increment timeStamp by one
 */

/**
 * advance!
 *
 * use speedAttack to calculate how many times goblins can dmg in one round
 *
 * for example:
 * we set that rule speedAttack = 1 means you can attack 1 per round (loop)
 * if speedAttack = 2 means you can attack 2 per 1 rounds and so on;
 *  goblin1 has speedAttack 2
 *  goblin2 has speedAttack 3
 *
 * to work properly you cannot multiply speedAttack * attack
 * because the attacks have to be alternately
 * eg.
 * goblin1.attack
 * goblin2.attack
 * goblin1.attack
 * goblin2.attack
 * goblin1.attack
 */



//  1. Create class Goblin
class Goblin { }

// * 2. with fields:
//  *  - name: string
//  *  - hp: number
//  *  - attack: number
//  *  - defence: number
//  *  - speedAttack: number
//  *  - isDead: boolean = false

class Goblin0 {
  name;
  hp;
  attack;
  defence;
  speedAttack;
  isDead = false
}

// 3. add constructor, with params 'name', 'hp', 'attack', 'defence', 'speedAttack'
// *  - set (bind) the all params to class instance in constructor using 'this.'

class Goblin2 {
  name;
  hp;
  attack;
  defence;
  speedAttack;
  isDead = false

  constructor(name, hp, attack, defence, speedAttack) {
    this.name = name
    this.hp = hp
    this.attack = attack
    this.defence = defence
    this.speedAttack = speedAttack
  }
}

// * 4. add methods
//  *  - getAttack
//  *      return attack
//  *  - getDamage
//  *      takes one param 'dmg: number'
//  *      set new value of 'hp' hp - (dmg - defence)
//  *      and return the current hp
//  *      return hp
//  *  - getDefence
//  *      return defence
//  *  - getAttackSpeed
//  *      return attackSpeed

class Goblin3 {
  name;
  hp;
  attack;
  defence;
  speedAttack;
  isDead = false

  constructor(name, hp, attack, defence, speedAttack) {
    this.name = name
    this.hp = hp
    this.attack = attack
    this.defence = defence
    this.speedAttack = speedAttack
  }
  getAttack() {
    return attack
  }
  getDamage(dmg) {
    hp = hp - (dmg - defence)
    return hp
  }
  getDefence() {
    return defence
  }
  getSpeedAttack() {
    return speedAttack
  }
}