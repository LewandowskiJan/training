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

const moveUp = function (dupa) {
  const dupax = dupa.x
  const dupay = dupa.y

  return { x: dupax, y: dupay + 1 }
}

console.log(moveUp(position), 'should be x: 10, y: 11');

//  2. Create 'moveDown' function with param object 'position' { x: number, y: number } and return new object where y is decrement by 1

const moveDown = function (dupa) {
  return { x: dupa.x, y: dupa.y + 1 }
}

console.log(moveDown(position), 'should be x:10, y:9');

// 3. Create 'moveRight' function with param object 'position' { x: number, y: number } and return new object where x is increment by 1

const moveRight = function (dupa) {
  // const x=dupa.x
  // const y=dupa.y
  const { x, y } = dupa

  return { x: x + 1, y }
}

console.log(moveRight(position), 'should be x:11, y: 10');

// 4. Create 'moveLeft' function with param object 'position' { x: number, y: number } and return new object where x is decrement by 1

const moveLeft = (dupa) => {
  const { x, y } = dupa

  return { x: x - 1, y }
}

console.log(moveLeft(position), 'should be x:9, y:10');

// 5. Create 'moveUpLeft' function with param object 'position' { x: number, y: number } and return new object where x is decrement by 1 and y increment by 1

const moveUpLeft = (dupa) => {
  const { x, y } = dupa

  return { x: x - 1, y: y + 1 }
}

console.log(moveUpLeft(position), 'should be x:9, y:11');

// 6. Create 'moveUpRight' function with param object 'position' { x: number, y: number } and return new object where x is increment by 1 and y increment by 1

const moveUpRight = (dupa) => {
  const { x, y } = dupa

  return { x: x + 1, y: y + 1 }
}

console.log(moveUpRight(position), 'should be x:11, y:11');

// 7. Create 'moveDownLeft' function with param object 'position' { x: number, y: number } and return new object where x is decrement by 1 and y decrement by 1

const moveDownLeft = (dupa) => {
  const { x, y } = dupa

  return { x: x - 1, y: y - 1 }
}


console.log(moveDownLeft(position), 'should be x:9, y:9');

// 8. Create 'moveDownRight' function with param object 'position' { x: number, y: number } and return new object where x is increment by 1 and y decrement by 1

const moveDownRight = (dupa) => {
  const { x, y } = dupa

  return { x: x + 1, y: y - 1 }
}

console.log(moveDownRight(position), 'should be x:11, y:9');

/*
 9. Create 'move' function with param string 'direction' (can be up, down, left, right, upLeft, upRight, downLeft, downRight)
 and call one of the function above depends on choice, if string is falsy (null, undefined, empty) return default function => moveUp
*/

// 9.1) base on switchCase

const move1 = (siano) => {
  switch (siano) {
    case 'down':
      return moveDown(position)
    case 'left':
      return moveLeft(position)
    case 'right':
      return moveRight(position)
    case 'upLeft':
      return moveUpLeft(position)
    case 'upRight':
      return moveUpRight(position)
    case 'downLeft':
      return moveDownLeft(position)
    case 'downRight':
      return moveDownRight(position)
    default:
      return moveUp(position)
  }
}

console.log(move1('dupa'));
console.log(move1("downRight"));
console.log(move1("left"));

// 9.2) base on if else

const move2 = (siano) => {
  if (siano === 'down') {
    return moveDown(position)
  }
  else if (siano === 'left') {
    return moveLeft(position)
  }
  else if (siano === 'right') { return moveRight(position) }
  else if (siano === 'upLeft') { return moveUpLeft(position) }
  else if (siano === 'upRight') { return moveUpRight(position) }
  else if (siano === 'downLeft') { return moveDownLeft(position) }
  else if (siano === 'downRight') { return moveDownRight(position) }
  else { return moveUp(position) }
}
console.log(move2('dupa'));
console.log(move2("downRight"));
console.log(move2("left"));


// 9.3) base on object

const dupnaKonfiguracja = {
  up: moveUp,
  down: moveDown,
  left: moveLeft,
  right: moveRight,
  upLeft: moveUpLeft,
  upRight: moveUpRight,
  downLeft: moveDownLeft,
  downRight: moveDownRight, 
  default: moveUp,
}

const move3 = ((siano,posx= {x:10 , y:10}) => {
  return (dupnaKonfiguracja[siano] || dupnaKonfiguracja["default"])(posx);
})

console.log(move3('dupa'));
console.log(move3("downRight"));
console.log(move3("left"));

// ######################################################

const box = document.getElementById('myBox');
function godown() {

  const top = move3('down', {x : 0 , y: +box.style.top.replace("px","")});
  console.log(top)
  console.log(box.style.top)
 

  box.style = `
  position:absolute;
  width: 10px;
  background-color: cadetblue;
  height: 10px;
  top: ${top.y}px;
  left: 0;
  `; 
}
// psychoAnimate()

box.addEventListener('mouseover', event =>{
 console.log('dupa')
  godown();

} );