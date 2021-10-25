/*
Set
*/

// How to initialize Set?

const mySetExample = new Set();

const mySetExampleWithValues = new Set(['someValue', 'someValue2']);

// Set specification
// Its important to know that Set cant contains duplicate values
const mySetExampleWithDuplicateValues = new Set(['someValue', 'someValue', 'someValue', 'someValue2']);

console.log(mySetExampleWithDuplicateValues); // size: 2, {0: "someValue" 1: "someValue2"}

// Set fields

// the equivalent of array.length in Set object is Set.size
console.log(mySetExampleWithValues.size); // 2

// Set methods

// Set.keys(), Set.values(), Set.entries()
// Set's keys and values are the same,
// its mean that Set.values() and Set.keys() return the same output
// Set.entries returns 0: value => value
console.log(mySetExampleWithValues.entries()); /* 
0: {"someValue" => "someValue"}
1: {"someValue2" => "someValue2"}
*/
console.log(mySetExampleWithValues.keys()); /* 
0: "someValue"
1: "someValue2"
*/
console.log(mySetExampleWithValues.values()); /* 
0: "someValue"
1: "someValue2"
*/

// Set.add(value)
// Set add is needed for add new record to Set
const mySetExampleForAdd = new Set(['someValue', 'someValue2']);
mySetExampleForAdd.add('addedValue');

console.log(mySetExampleForAdd.values()); /* 
0: "someValue"
1: "someValue2"
2: "addedValue"
*/

// Set.has(keyValue)
// returns true when searching value is in the Set, if not returns false
console.log(mySetExampleForAdd.has('addedValue')); // true
console.log(mySetExampleForAdd.has('some-other-key-or-value')); // false

// Set.clear()
// Set clear make Set is empty, size = 0
const mySetExampleForClear = new Set(['someValue', 'someValue2']);
mySetExampleForClear.clear();

console.log(mySetExampleForClear); // {size: 0}

// Set.delete(keyValue)
// take one param of 'keyValue' if value of 'keyValue' exist in Set, it will be remove
const mySetExampleForDelete = new Set(['someValue', 'someValue2']);
mySetExampleForDelete.delete('someValue2');

console.log(mySetExampleForDelete); // {0: "someValue", size: 1}

// Set.forEach(callback()=>) this method is a loop, which is iterates over all records

const mySetExampleForEach = new Set(['someValue', 'someValue2', 'someValue3', 'someValue4']);
mySetExampleForEach.forEach((value1, value2, s) => {
  console.log(value1); // 1st loop: someValue
  console.log(value2); // 1st loop: someValue
  console.log(s); /* {
        0: "someValue",
        1: "someValue2",
        2: "someValue3",
        3: "someValue4",
        size: 4
  }*/
});

// Uses cases:

// Removing duplicates

const exp1Duplicates = new Set([
  { name: 'Rex', age: 12 },
  { name: 'Doggy', age: 2 },
  { name: 'Kitty', age: 4 },
  { name: 'Rex', age: 12 },
]);

console.log(exp1Duplicates); // not working, size 4
// because element of index 0 and 3 have the same values,
// but they are different object

const animals = [];

const animal1 = { name: 'Rex', age: 12 };
const animal2 = { name: 'Doggy', age: 2 };
const animal3 = { name: 'Kitty', age: 4 };

// push 3 object, when animal1 its push twice
animals.push(animal1);
animals.push(animal1);
animals.push(animal2);
animals.push(animal3);

// if we wrap the array using Set, Set remove duplicated object
console.log(new Set(animals)); // size 3

const text = `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
Similique, architecto, eum officia voluptatem necessitatibus incidunt quos nobis
voluptate veritatis modi laborum consequuntur, saepe aspernatur ullam? Optio voluptas
itaque aspernatur minus`


const nowySet = new Set(text.split(""));

console.log(nowySet)