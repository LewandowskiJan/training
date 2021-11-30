# Cheat sheet

## Variables

### Construction

```javascript
//   js key word, needed to declare new variable
//   |
//   |      variable name
//   |      |
//   |      |        variable value
//   |      |       |
const example2 = 'some value';
```

Examples:

```javascript
var example1 = '123';
const example2 = 123;
let example3 = { a: 'sth' };
```

## Function

### Construction

```javascript
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
```

### Call a function or invoke a function

```javascript
myFunction(a, b);
```

### Function can return a value or a void

Function can return value (1) or not (2)

```javascript
function myFunction(a, b) {
  return; // (1)
  return a + b; // (2)
}
```

### Params

There is no limit of params.
Param may be:

1.  primitive value (sting, boolean...)
2.  another function (callback)
3.  class
4.  object
5.  arrays

##### Good practice!

```javascript
function myFunction(a, b, c, d, e, f, g, h, i, j, c) {}

// to call function above we have to keep order
myFunction(b, c, a, d, g, f, e, h, c, j, i); // failure => not work properly
myFunction(a, b, c, d, e, f, g, h, i, j, c); // work
```

To prevent this problem, it is good to use object as a param:

```javascript
const params = {
  param1: '1',
  param2: '2',
  param3: '3',
};
function myFunction(params) {}
// we can parse object property name to value
myFunction({ param2, param3, param1 }) {} // work
```

#### Function with no params

```javascript
function myFunction() {}
```

#### Function with params

```javascript
function myFunction(a, b, c) {}
```

### Function with optional params (with default value)

```javascript
function myFunction(a, b = '', c = 0) {}
```

### Closures

Needed to make the function private fields, if the variable 'counter' be outside the function,
other function can change the value

```javascript
const myFunction = (() => {
  let counter = 0; // this is the private field
  return () => {
    return counter++;
  };
})();
```

## Function declaration vs Function expression

Function declaration

```javascript
function functionDeclaration() {
  /* implementation */
}
```

Function expression

```javascript
var functionExpression1 = function () {};

let functionExpression2 = function () {};

const functionExpression3 = function () {};
```

### Hoisting

Function declaration are hoisting in function / global scope, depends on where are declare
Function expression are not hoisting

so:

```javascript
functionDeclaration(); // work, because functionDeclaration() is hoisting with declaration (implementation)
functionExpression1(); // not work, in this line we have 'var functionExpression1 = undefined' || refers to 'var'
functionExpression2(); // not work, because we do not even have a declaration || refers to 'let' or 'const'
function functionDeclaration() {
  /* implementation */
}

var functionExpression1 = function () {};
let functionExpression2 = function () {};

functionExpression1(); // work
functionExpression2(); // work
```

## Expressions and operators

[source and more info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)

### Most needed

#### Math example

```javascript
1 + 2; // 3
3 - 2; // 1
3 * 2; // 6
3 / 3; // 1
3 ** 3; // 27
3 % 3; // 0 Remainder operator
10 % 6; // 4 Remainder operator
```

#### Increment / decrement

```javascript
let a = 0;
a++; // 0 post increment return base value then add 1
a; // 1

++a; // 1 pre increment return increased by one value

let b = 1;
b--; // 1
b; // 0
--b; // 0
```

#### Relational operators

```javascript
5 > 6; // false;
5 < 6; // true;
5 <= 5; // true;
5 >= 6; // false;
```

#### Equality operators

```javascript
5 == 6; // false;
5 != 6; // true;
5 == 5; // true;
5 !== 6; // false;
```

#### Binary logical operators

```javascript
true && false; // false AND;
true || false; // true OR;
null ?? 'abc'; // abc nullish operator;
undefined ?? 'abc'; // abc nullish operator;
```

```javascript
// first value     second value
//     |           |
undefined ?? 'abc';
//        |
//      nullish operator
```

nullish operator return second value only when first is null or undefined

#### Conditional (ternary) operator

condition ? ifTrue : ifFalse;

```javascript
5 > 4 ? 'yes' : 'no';
```

#### Optional Chaining operator

```javascript
exampleObj?.objProperty?.value; // .?
```
