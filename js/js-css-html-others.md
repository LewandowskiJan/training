# Useful information about how to work with

1. [How to work with it](##How-to-work-with-it)
2. [Naming rules](##Naming)

## How to work with it

### For git skill improvement

1. Create a few branch
   - base_tutorial one for all exercises without result (base state, where you can add another exercise to resolve)
   - current_state one for actual status of completion all exercise (you can merge branch above to get actual list of exercise)
   - exercise_name each branch for every exercise (like in real project, so after completion, you can merge to branch with all solution to upgrade the current state)

## Naming

### JS

#### Variable | Object | Function | Array -> lower camel case

```javascript

// Variable | Object | Function | Array -> lower camel case
const myVariable = '' // variable
const myObject = {} // Object
const myArray = [] // Array
const myFunctionExpression = function () {} // function
myFunctionDeclaration () {} // function

// Class (in .ts Enum, Interface) -> upper camel case
class MyClassName {}

// Global constants -> all upper snake case
const MY_CONSTANT_VARIABLE_LIKE_ENV = 'prod';

```

### CSS

```css
// class kebab case
.my-new-class {
}

// id lower camel case
#newId123 {
}
```

### HTML

```html
<!-- for custom component kebab case -->
<my-custom-component></my-custom-component>
```
