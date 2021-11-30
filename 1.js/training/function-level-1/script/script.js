//   js key word, needed to declare new function
//   |
//   |      function name
//   |      |
//   |      |        first param
//   |      |       |
//   |      |       |   second param
//   |      |       |   |
function myFunction(a, b) {
  /* code to be executed */
}

// execute function
myFunction('param-1-value', 'param-2-value');

// ====== EXERCISES ======


function myFunction(a, b) {

}
console.log(myFunction)


// write new function declaration WITH NEW NAME each exercise base on code above
// 1. log the 'abc'

function exerciseOne(x = 3, y = 2) {
  if (x + y === 5)
    return "abc"
}

console.log(exerciseOne())


/*   || co autor miał na myśli
        najprostsze rozwiazanie||


function exerciseSimple()
{
console.log("abc")
}

exerciseSimple()

-------------------------------------------------
*/



// console.log(product); //ReferenceError: product is not defined
// console.log(special); //ReferenceError: product is not defined
// console.log(
// functionName(), 'should log abc'
// )

// ========================================

// 2. function with one param and log the given param,
const paramExample = '114';




function exerciseTwo(x) {
  console.log(x)
  return x
}
exerciseTwo("dupa")
exerciseTwo("lol")
exerciseTwo("lols")


function ikea(x, y, z, v) {
  return x + y + z + v
}

console.log(dupa)
console.log(ikea(ikea(4, 6, 8, 0), 4, 10, 35))
console.log(ikea(dupa = 5, y = 6, z = 5, v = 7))
console.log(ikea(1, 1, 11, 1))


let zzzz = 25
console.log(zzzz)
zzzz = "abcd"
console.log(zzzz)


var dupa = 5
console.log(dupa)

// console.log(
// functionName(paramExample), 'should log 114'
// )

// ========================================

// 3. function with two params and log the given params as concat string (param1 + param2),
const paramExample1 = 'abc';
const paramExample2 = 'def';

// console.log(
// functionName(paramExample1, paramExample2), 'should log abcdef'
// )
