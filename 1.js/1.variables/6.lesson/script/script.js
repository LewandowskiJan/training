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
  data = "abcd";
  // return data
}

let testString = 'abcdefgh';


function modify1(data) {
  testString = "x"
}

modify(testString)


// testString = modify(testString); // testString = ABCDEFGH
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
  let x = 0
  function fnNoReturn(){
    x = x + 1
    return;
  }
  fnNoReturn()
  return x;
}

let someValue = 213;

someValue = fnNoReturn();
console.log(someValue); // undefined
