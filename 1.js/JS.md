# Plan

0. First at all, go [here](js-others.md)
1. developer mozilla: [source](https://developer.mozilla.org/)

## Primitive types | Arrays | Variables | Function and math operation [folder location](1.variables/)

- naming and override
- scope
- types

### Primitive types

- string
- boolean
- number
- bigint
- undefined
- symbol
- null

#### All primitives are immutable => cannot be altered.

#### Primitive wrapper objects

- String
- Number
- BigInt
- Boolean
- Symbol

#### examples:

```javascript
const string = 'example';
const primitiveWrapperStringObjects = new String('example');

const searchValue = string.match(/asd/);
searchValue; // null

// create new symbol
let symbol1 = Symbol();
let symbol2 = Symbol('example');
```

### global variables

### var (not recommended)

- function scope
- hosting

### let

- block scope

### const

```javascript

const example = "sth"
const example = 12
const example = true

```

- block scope

### function expression vs function declaration

## Operators [folder location](2.operators/)

## Loops [folder location](3.loops/)

## Iterations [folder location](4.iterations/)

## Objects [folder location](5.objects/)
