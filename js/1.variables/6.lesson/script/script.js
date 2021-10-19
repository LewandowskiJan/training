/*
Explanation of variables declaration, override

var exampleVar
let exampleVar
const exampleVar

*/

/**
 * Function change the string by upper case the chars
 * @param {string} data
 * @returns string
 */
function modify(data) {
  return data.toUpperCase();
}

let testString = 'abcdefgh';

testString = modify(testString); // testString = ABCDEFGH
console.log('after assigning a value from modify() - ', testString);

testString = 'aaa ccc'; // testString = aaa ccc
console.log("after assigning a value 'aaa ccc' - ", testString);

modify(testString); // testString = aaa ccc
console.log('after just call modify() - ', testString);

/**
 * Function returns void
 * @returns void
 */
function fnNoReturn() {
  return;
}

let someValue = 213;

someValue = fnNoReturn();
console.log(someValue); // undefined
