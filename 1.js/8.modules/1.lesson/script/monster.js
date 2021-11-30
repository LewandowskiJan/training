// Modules

// First of all there was a change in html file

/*
Before using module: <script src="script/script.js"></script>
After using module: <script type="module" defer src="script/script.js"></script>
*/

export default class Monster {
  name;
  hp;

  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
  }
}

export function countHp(hp, dmg) {
  return hp - dmg;
}

export function isDead(hp) {
  return hp === 0;
}

// or you can
// export default = Monster
// export { countHp, isDead }
