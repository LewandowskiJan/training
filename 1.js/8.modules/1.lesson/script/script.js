// Modules

// First of all there was a change in html file

/*
Before using module: <script src="script/script.js"></script>
After using module: <script type="module" defer src="script/script.js"></script>
*/

// Next - check monster.js file

// then look how to import
import Monster, { countHp, isDead } from './monster';

const myMonster = new Monster('goblin', 43);
console.log(myMonster);

const currentHp = countHp(50, 20);
console.log(isSthDead);
