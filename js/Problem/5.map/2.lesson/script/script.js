class Warrior {
    name;
    armor;
    hp;
    attack;

    constructor(name, armor, hp, attack) {
        this.name = name
        this.armor = armor
        this.hp = hp
        this.attack = attack
    }


// walka o inicjatywę


// const min = 1;
// const max = 7;
getRandomInt(min = 1 , max = 7 ) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  ktoWygral() {
    let result = '';

    if ((random = 2)) {
      result = 'krytyczna Inicjatywa Seby';
    } else if ((random = 3)) {
      result = 'Inicjatywa Seby';
    } else if ((random = 5)) {
      result = 'Inicjatywa Lysego';
    } else if ((random = 6)) {
      result = 'Krytyczna Inicjatywa Lysego';
    } else {
      result = 4;
    }
    return 'ponowne losowanie';
  }
}
