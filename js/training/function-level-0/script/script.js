// Quick reminder

// =========== RULES ================

// To declare a variable you can use:
// var
// const
// let

// example:
let something = 123;
var cat = 'Kitty';
const myArray = [];

// You cannot declare the same variable twice

// like this:
// let something = 123;
// let something = 'why?'; // get error

var szkoda = 7
var szkoda2 = szkoda
szkoda2 = 9
szkoda === 9 // true
szkoda2 === 7 // true

console.log(szkoda, szkoda2)

/*

all variables have its own block scope

to explain what the blocks are
all blocks are between brackets '{' '}'
so we have that construction a kind of `russian matryoshka` which can be:
* object
* function 
* method
* if statement
* loop statement



block 1 start            { 
    block 2 start             {
        block 3 start             {
            block 4 start             {
                            
            block 4 end               }
            block 5 start             {
                            
            block 5 end               }            
        block 3 end               }
    block 2 end               }
block 1 end       }



all variables defined on the beginning (on top) of block 1, have access to itself and its children (block 2-5)
by analogy block 2 (on top), have access to itself and its children (block 3-5), and so on...

if the blocks are in the same level (blocks 4-5), their variables are invisible for each other
*/

// so follow the number of steps to get whats happened

/* -scope global                steps-num */
/* -scope global                        2 */ // variable; // this variable is out of the scope, it is use before initialization at line 26
/* -scope global                        1 */ const variable = 1; // 1 declare variable
/* -scope global                        x */
/* -scope global                        3 */ // declare function - start 'function' block from `{` to `}`
/* -scope global                        3 */ function test(a, b) {
  /* -scope global function             4 */ variable; // we have access to that variable
  /* -scope global function             5 */ // let variable // we can declare second variable here, but it override the variable in line 26, its very bad practice
  /* -scope global function             x */
  /* -scope global function             6 */ // 6 create a loop - start 'for-loop' block from `{` to `}`
  /* -scope global function             6 */ for (let i = 0; i < variable; i++) {
    /* -scope global function for-loop  7 */ const someValue = 111; // declare in loop
    /* -scope global function for-loop  x */
    /* -scope global function for-loop  8 */ someValue; // we have access
    /* -scope global function for-loop  9 */ variable; // we have access, declared in block parent
    /* -scope global function for-loop  x */
  }
  /* -scope global function             x */
  /* -scope global function            10 */ // someValue // 9 we have not access here - out of the scope
  /* -scope global function             x */
}
/* -scope global                       11 */ variable; // 11 we have access
/* -scope global                        x */




/* Przykład na to gdzie nie powinno sienadawać tej samej nazwy zmiennej jak np i w kolejnych zagnieżdżeniach 
*/
const tablica = [[1, 2, 20], [3, 4], [5, 6, 60, 100], [11, 12, 13]]
console.log(tablica)
console.log(tablica[0].length)
console.log(tablica[0][0])
console.log(tablica.length)

for (let i = 0; i < tablica.length; i++) {
  console.log("pierwsza petla: ", i, tablica[i])
//  for (let i = 0; i < tablica[i].length; i++) {
// console.log(tablica[i][i])
  for (let j = 0; j < tablica[i].length; j++) {
    console.log(tablica[i][j])
  }
}