// import {
//   InterfaceExample,
//   myAnyArray,
//   myArray,
//   myBoolean,
//   myClassArray,
//   myCustomObjArray,
//   myCustomObject,
//   myInterfaceArray,
//   myNumber,
//   myString,
//   myStringArray,
//   myTypeArray,
//   someVoidFunction,
//   TypeExample,
// } from './src/0.syntax/syntax';

// const people: TypeExample = { name: 'joe' };
// const person: InterfaceExample = { interfaceName: 'interfaced' };

// console.log(people);
// console.log(myString);
// console.log(myNumber);
// console.log(myBoolean);
// console.log(myCustomObject);
// console.log(person);

// console.log(myArray);
// console.log(myStringArray);
// console.log(myAnyArray);
// console.log(myCustomObjArray);
// console.log(myClassArray);
// console.log(myInterfaceArray);
// console.log(myTypeArray);
// console.log("cokolwiek");

// interface PersonalData {
//   name: string;
//   age: number;
//   money?: number;
// }

// function xxx(): void {
//   const x: PersonalData = { name: 'radek', age: 27,};
//   yyy({...x,})
// }

// function yyy(param1: PersonalData ) {
//   console.log(param1.name);
//   return param1
// }
// someVoidFunction();
window.onload = () => {
const winAllConditions: any[] = [
  [1, 2, 3],
  [3, 6, 9],
  [7, 8, 9],
  [1, 4, 7],
  [1, 5, 9],
  [3, 5, 7],
  [2, 5, 8],
  [4, 5, 6],
];

const clickOnBoard: HTMLElement | null = document.getElementById('tictactoe');
let round = 1;
const pushOPositionIdToArray: any[] = [];
const pushXPositionIdToArray: any[] = [];
if (clickOnBoard) {
  clickOnBoard.addEventListener('click', (event: any) => {
    const targetID: string = event.target.id;

    if (round % 2 === 0 && event.target.childNodes.length === 0) {
      addO(targetID);
      pushOPositionIdToArray.push(+targetID);
      console.log(pushOPositionIdToArray);
      round++;
      if (
        pushOPositionIdToArray.length > 2 &&
        winAllConditions.some((option: number[]) => option.every((r: number) => pushOPositionIdToArray.includes(r)))
      ) {
        console.log('Found all of', pushOPositionIdToArray);
        console.log('Player 0 won');
      }
    } else if (round % 2 !== 0 && event.target.childNodes.length === 0) {
      addX(targetID);
      pushXPositionIdToArray.push(+targetID);
      console.log(pushXPositionIdToArray);
      round++;
      if (
        pushXPositionIdToArray.length > 2 &&
        winAllConditions.some((option: number[]) => option.every((r: number) => pushXPositionIdToArray.includes(r)))
      ) {
        console.log('Found all of', pushXPositionIdToArray);
        console.log('Player X won');
      }
    }
  });
}
function addX(clickOnBoard: any) {
  const cell: any = document.getElementById(clickOnBoard);
  cell.innerHTML = '&#10005;';
  return;
}

function addO(clickOnBoard: any) {
  const cell: any = document.getElementById(clickOnBoard);
  cell.innerHTML = '&#9900;';
  return;
}
console.log('lol');
}