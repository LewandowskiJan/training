const winC1 = [1, 2, 3];
const winC2 = [3, 6, 9];
const winC3 = [7, 8, 9];
const winC4 = [1, 4, 7];
const winC5 = [1, 5, 9];
const winC6 = [3, 5, 7];
const winC7 = [2, 5, 8];
const winC8 = [4, 5, 6];

winAllConditions = [
  [1, 2, 3],
  [3, 6, 9],
  [7, 8, 9],
  [1, 4, 7],
  [1, 5, 9],
  [3, 5, 7],
  [2, 5, 8],
  [4, 5, 6],
];

const clickOnBoard = document.getElementById('tictactoe');
let round = 1;
let pushOpositionIdToArray = [];
let pushXpositionIdToArray = [];

clickOnBoard.addEventListener('click', (event) => {
  let targetID = event.target.id;

  if (round % 2 === 0 && event.target.childNodes.length === 0) {
    addO(targetID);
    pushOpositionIdToArray.push(+event.target.id);
    console.log(pushOpositionIdToArray);
    console.log(winC1);
    round++;
    if (
      (pushOpositionIdToArray.length > 2 && winC1.every((r) => pushOpositionIdToArray.includes(r))) ||
      winAllConditions.some(option => option.every(r => pushOpositionIdToArray.includes(r)))
    //   winC2.every((r) => pushOpositionIdToArray.includes(r)) ||
    //   winC3.every((r) => pushOpositionIdToArray.includes(r)) ||
    //   winC4.every((r) => pushOpositionIdToArray.includes(r)) ||
    //   winC5.every((r) => pushOpositionIdToArray.includes(r)) ||
    //   winC6.every((r) => pushOpositionIdToArray.includes(r)) ||
    //   winC7.every((r) => pushOpositionIdToArray.includes(r)) ||
    //   winC8.every((r) => pushOpositionIdToArray.includes(r))
    ) {
      console.log('Found all of', pushOpositionIdToArray);
      console.log('Player 0 won');
    }
  } else if (round % 2 !== 0 && event.target.childNodes.length === 0) {
    addX(targetID);
    pushXpositionIdToArray.push(+event.target.id);
    console.log(pushXpositionIdToArray);
    round++;
    if (
      (pushXpositionIdToArray.length > 2 && winC1.every((r) => pushXpositionIdToArray.includes(r))) ||
      winAllConditions.some((option) => option.every((r) => pushXpositionIdToArray.includes(r)))
    ) {
      console.log('Found all of', pushXpositionIdToArray);
      console.log('Player X won');
    }
  }
});



// const arr = [];
// const arr2 = new Array();
// class List {
//   data;
//   constructor(data) {
//     this.data = data;
//   }
//   everyAisB(callback) {
//     return this.data.split('').map(callback).join('');
//   }
// }
// const list = new List('abcd');
// const xqwe = list.everyAisB((letter) => (letter === 'a' ? 'b' : letter));
// console.log(xqwe);

function addX(clickOnBoard) {
  const cell = document.getElementById(clickOnBoard);
  cell.innerHTML = '&#10005;';
  return;
}

function addO(clickOnBoard) {
  const cell = document.getElementById(clickOnBoard);
  cell.innerHTML = '&#9900;';
  return;
}

// fetch('https://oberon.ogame.fun/game.php?page=galaxy').then((response) => {
//   console.log(response);
// });

// function cantClickSameCell(event){
// event.target.childNodes
// for (let i = 0; i < event.target.childNodes; i++) {
//   if (event.target.childNodes[i].status > 0){}
// }}

// klikniecie i zrobienie X lub O ma pushować id kratki do arraya
// jeżeli na pozycji 1 znajduje się X, i na pozycji 2 znajduje się X i na poz 3 X
// return you won
