//      function name
//      |
//      |             js key word, needed to declare new function
//      |             |
//      |             |        first param
//      |             |       |
//      |             |       |   second param
//      |             |       |   |
const myFunction = function (a, b) {
  /* code to be executed */
};

// execute function
myFunction('param-1-value', 'param-2-value');

// ====== EXERCISES ======

// write new function expression WITH NEW NAME each exercise base on code above

// 1. log the 'abc'


const exerciseOne = function() {
return "abc";
}

console.log(exerciseOne());





// console.log(
// functionName(), 'should log abc'
// )

// ========================================

// 2. function with one param and log the given param,
const paramExample = '114';

const exerciseTwo = function(x) {
return x
}

console.log(exerciseTwo(paramExample));


// console.log(
// functionName(paramExample), 'should log 114'
// )

// ========================================

// 3. function with two params and log the given params as concat string (param1 + param2),
const paramExample1 = 'abc';
const paramExample2 = 'def';

const exerciseThree = function(x , y) {
return x + y
}

console.log(exerciseThree(paramExample1, paramExample2));

// console.log(
// functionName(paramExample1, paramExample2), 'should log abcdef'
// )
