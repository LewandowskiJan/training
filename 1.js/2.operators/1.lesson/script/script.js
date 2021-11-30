/*
Solve the FizzBuzz

log Fizz when integer is divisible by 3  
log Buzz when integer is divisible by 5  
log FizzBuzz when integer is divisible by 3 and 5  
log number if integer is not divisible by 3 and 5

use:
 - function taken a 1 param which is number
 - reminder operator '%'
 - if () {} statement
 - logical operators && ||

 optional: use Conditional (ternary) operator
 condition ? true : false
*/

/**
 * Returns void, log the string Fizz if divisible by 3 or Buzz if divisible by 5, or number
 * @param num: number
 */
function fizzBuzzResolver(num) {
  let result = '';

  // write implementation below
  // console.log(num, num % 5, num % 5 === 0) 

  if (num % 5 === 0 && num % 3 === 0) { result = "FizzBuzz" }
  else if (num % 5 === 0) { result = "Buzz" }
  else if (num % 3 === 0) { result = "Fizz" }
  else { result = num }
  return result;
}

console.log(fizzBuzzResolver(1), ' 1');
console.log(fizzBuzzResolver(3), ' Fizz');
console.log(fizzBuzzResolver(5), ' Buzz');
console.log(fizzBuzzResolver(8), ' 8');
console.log(fizzBuzzResolver(9), ' Fizz');
console.log(fizzBuzzResolver(15), ' FizzBuzz');
console.log(fizzBuzzResolver(99), ' Fizz');

/*
Check is the object reached destination
*/

/**
 * Returns true when both params are equal, else return false.
 * @param currentPosition: { x: number, y: number}
 * @param destination: { x: number, y: number}
 */
function isReachedDestination(currentPosition, destination) {
  // write implementation below
  return currentPosition.x === destination.x && currentPosition.y === destination.y;
}

console.log(isReachedDestination({ x: 1, y: 1 }, { x: 1, y: 1 }), ' true');
console.log(isReachedDestination({ x: 1, y: 2 }, { x: 2, y: 3 }), ' false');
console.log(isReachedDestination({ x: 3, y: 4 }, { x: 5, y: 1 }), ' false');

/**
 * Returns value of health after subtracting the value of the damage
 * If damage value is bigger than health, function return 0
 * @param damage: number
 * @param health:  number
 * @default health = 100
 */
function calculateHealthAfterDamage(damage, health = 100) {
  // write implementation below

  return (health >= damage) ? health - damage : "0"
}

console.log(calculateHealthAfterDamage(100, 80), ' 0');
console.log(calculateHealthAfterDamage(10, 80), ' 70');
console.log(calculateHealthAfterDamage(50, 60), ' 10');

/**
 * Returns value of damage after subtracting the value of the defence
 * rules:
 * 1. check if Math.random() * 100 is less than ability if true, return 0
 * 2. increase 20% of damage if heightLevelDifference is -1
 *    reduce 20% of damage if heightLevelDifference is 1
 *    when heightLevelDifference is 0 leave
 * 3. subtract armor from damage, if armor is higher than damage, return 1
 * @param damage: number
 * @param defenceModifiers:  { armor: number, ability: number, heightLevelDifference: -1 | 0 | 1 }
 */
function calculateDamageAfterDefenceModifiers(damage, defenceModifiers) {
  let result = 0;
  // write implementation below

  if (Math.random() * 100 < defenceModifiers.ability) {
    return 0;
  }
  if (defenceModifiers.heightLevelDifference === -1) {
    result = damage * 1.2;
  }
  if (defenceModifiers.heightLevelDifference === 1) {
    result = damage * 0.8;
  }
  if (defenceModifiers.heightLevelDifference === 0) {
    result = damage * 1;
  }
  if (defenceModifiers.armor > result) {
    return 1
  }
  else { return result - defenceModifiers.armor }
}

console.log(calculateDamageAfterDefenceModifiers(100, { armor: 0, ability: 0, heightLevelDifference: -1 }), ' 120');
console.log(calculateDamageAfterDefenceModifiers(100, { armor: 0, ability: 0, heightLevelDifference: 1 }), ' 80');
console.log(calculateDamageAfterDefenceModifiers(100, { armor: 0, ability: 0, heightLevelDifference: 0 }), ' 100');
console.log(calculateDamageAfterDefenceModifiers(200, { armor: 0, ability: 100, heightLevelDifference: 0 }), ' 0');
console.log(calculateDamageAfterDefenceModifiers(30, { armor: 300, ability: 0, heightLevelDifference: 0 }), ' 1');
