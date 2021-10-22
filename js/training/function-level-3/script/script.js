//      function name
//      |
//      |             js key word, needed to declare new function
//      |             |
//      |             |        first param
//      |             |       |
//      |             |       |   second param
//      |             |       |   |
const myFunctionExpression = function (a, b) {
  /* code to be executed */
};

//   js key word, needed to declare new function
//   |
//   |      function name
//   |      |
//   |      |        first param
//   |      |       |
//   |      |       |   second param
//   |      |       |   |
function myFunctionDeclaration(a, b) {
  /* code to be executed */
}

// execute function
myFunctionExpression('param-1-value', 'param-2-value');
myFunctionDeclaration('param-1-value', 'param-2-value');

// ====== EXERCISES ======

// INFO: use the syntax you like
// write new function WITH NEW NAME each exercise base on code above
// you will know the input, and the output, write implementation to get the correct result
// all instruction is in the docs block - between /** */

// ==========================================
// ====== EXERCISES 1 ======
/**
 * Function takes 2 params and return boolean as result of question: is `num1` is higher than `num2`
 * if num1 and num2 are the same return false
 * @param num1: {number}
 * @param num2: {number}
 * @returns boolean
 */

// ==========================================
// ====== EXERCISES 2 ======
// Use function from exe.1 to accomplished exercise below

/**
 * Function takes 3 params, and return boolean as result of question: is `firstPosition` is higher than `secondPosition`
 * 3rd param - `rule` is a string and have only 2 values: 'horizontally' or 'vertically'
 * when `rule` has value 'horizontally', function compare firstPosition.x, secondPosition.x
 * when `rule` has value 'vertically', function compare firstPosition.y, secondPosition.y
 * @param firstPosition: { x: number, y: number}
 * @param secondPosition: { x:number, y: number}
 * @param rule: string = 'horizontally' | 'vertically'
 * @default rule = 'horizontally'
 * @returns boolean
 */

// ==========================================
// ====== EXERCISES 3 ======
// Use all function above to accomplished exercise below

/**
 * Function takes 2 params, and return string as result of question:
 * in what direction the `secondPosition` is in relation to the `firstPosition`
 *
 * |-----|-----------------|-----|
 * |  1  |        2        |  3  |
 * |-----|-----------------|-----|
 * |  8  |  firstPosition  |  4  |
 * |-----|-----------------|-----|
 * |  7  |        6        |  5  |
 * |-----|-----------------|-----|
 *
 * where:
 *
 * 1. topLeft
 * 2. top
 * 3. topRight
 * 4. Right
 * 5. bottomRight
 * 6. bottom
 * 7. bottomLeft
 * 8. Left
 *
 * @param firstPosition: { x: number, y: number}
 * @param secondPosition: { x:number, y: number}
 * @returns string
 */

// ==========================================
// ====== EXERCISES 4 ======

/**
 * Function takes param = `position`, and return the index of sprite sheet row for animation
 *
 * `position` can be a value of:
 * - 'topLeft' and return 1
 * - 'top' and return 2
 * - 'topRight' and return 3
 * - 'Right' and return 4
 * - 'bottomRight' and return 5
 * - 'bottom' and return 6
 * - 'bottomLeft' and return 7
 * - 'Left' and return 8
 *
 * @param position: string
 * @returns number
 */
