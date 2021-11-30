# Differences between regular function (method) and arrow function

## Syntax

| Regular function              | Arrow function                 |
| ----------------------------- | ------------------------------ |
| function functionName(arg) {} | const arrowFunction = () => {} |
|                               |                                |

## Declaration

| Regular function                 | Arrow function                    |
| -------------------------------- | --------------------------------- |
|                                  |                                   |
| 1) function functionName(arg) {} | 1) const arrowFunction = () => {} |
|                                  |                                   |
| 2) const fn = function (arg) {}  |                                   |
|                                  |                                   |

## Constructor

| Regular function | Arrow function |
| ---------------- | -------------- |
| yes              | no             |

```javascript
// can be
function MyFn() {}
new MyFn();

//cant be
const ArrFn = () => {};
new ArrFn(); // TypeError: Car is not a constructor
```

## `this` value

[examples](1.lesson/script/script.js)

| Regular function | Arrow function              |
| ---------------- | --------------------------- |
| from fn          | from parent (window, class) |

## `arguments` object

[examples](2.lesson/script/script.js)

## Implicit `return`

[examples](3.lesson/script/script.js)

## Methods

[examples](4.lesson/script/script.js)
