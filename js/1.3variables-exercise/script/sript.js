/*
Needed information:
function syntax

  js key word, needed to declare new function
  |      function name
  |      |           first param
  |      |          |   second param
  |      |          |   |
function myFunction(a, b) {
   code to be executed
   return value;
}
*/

let position = { x: 10, y: 10 };

// 1. Create 'moveUp' function with param object 'position' { x: number, y: number } and return new object where y is increment by 1

console.log(moveUp(position), 'should be x: 10, y: 11');

//  2. Create 'moveDown' function with param object 'position' { x: number, y: number } and return new object where y is decrement by 1

console.log(moveDown(position), 'should be x:10, y:9');

// 3. Create 'moveRight' function with param object 'position' { x: number, y: number } and return new object where x is increment by 1

console.log(moveRight(position), 'should be x:11, y: 10');

// 4. Create 'moveLeft' function with param object 'position' { x: number, y: number } and return new object where x is decrement by 1

console.log(moveLeft(position), 'should be x:10, y:10');

// 5. Create 'moveUpLeft' function with param object 'position' { x: number, y: number } and return new object where x is decrement by 1 and y increment by 1

console.log(moveUpLeft(position), 'should be x:9, y:11');

// 6. Create 'moveUpRight' function with param object 'position' { x: number, y: number } and return new object where x is increment by 1 and y increment by 1

console.log(moveUpRight(position), 'should be x:11, y:11');

// 7. Create 'moveDownLeft' function with param object 'position' { x: number, y: number } and return new object where x is decrement by 1 and y decrement by 1

console.log(moveDownLeft(position), 'should be x:9, y:9');

// 8. Create 'moveDownRight' function with param object 'position' { x: number, y: number } and return new object where x is increment by 1 and y decrement by 1

console.log(moveDownRight(position), 'should be x:11, y:9');

/*
 9. Create 'move' function with param string 'direction' (can be up, down, left, right, upLeft, upRight, downLeft, downRight) 
 and call one of the function above depends on choice, if string is falsy (null, undefined, empty) return default function => moveUp
*/
// 9.1) base on switchCase

// 9.2) base on if else

// 9.3) base on object
