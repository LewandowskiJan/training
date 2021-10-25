/*
MAP
*/

// How to initialize Map?

const myMapExample = new Map();

const myMapExample2 = new Map([
  ['key1', 'value1'],
  ['key2', 2],
  [{ name: 'key3' }, { value: 123 }],
]);

// Map fields

// the equivalent of array.length in Map object is Map.size
console.log(myMapExample2.size); // 3

// Map methods

// Map.set(key, value), to add new record into Map (similar to array.push())
// set method takes two argument 'key', value
// 'key' and value can be any type // eg. Object, Array, primitive
myMapExample.set('key', 'value');
myMapExample.set('anythingElse', { a: 12, b: 34, something: 'blue' });

console.log(myMapExample);

// Map.get(key), to get value from Map
// set method takes one argument 'key'
// if 'key' is not in Map, return undefined

const valueFromCorrectKey1 = myMapExample.get('key');
const valueFromCorrectKey2 = myMapExample.get('anythingElse');

const valueFromIncorrectKey = myMapExample.get(123);

console.log(valueFromCorrectKey1); // value
console.log(valueFromCorrectKey2); // { a: 12, b: 34, something: 'blue' }
console.log(valueFromIncorrectKey); // undefined

// Map.keys(), return object with key's names
// syntax of return is: { 0: key0, 1: key1, ...}
console.log('keys: ', myMapExample.keys()); // { 0: 'key', 1: 'anythingElse'}

// Map.values(), return object with value
// syntax of return is: { 0: value0, 1: value1, ...}
console.log('values: ', myMapExample.values()); // { 0: 'value', 1: { a: 12, b: 34, something: 'blue' }}

// Map.entries(), return object with pairs key => value
// syntax of return is: { 0: key0 => value0, 1: key1 => value1, ...}
console.log('entries: ', myMapExample.entries()); //0: {"key" => "value"} 1: {"anythingElse" => { a: 12, b: 34, something: 'blue' }}

// Map.has(key), return boolean
// true when Map includes key, false if not
console.log(myMapExample.has('anythingElse'));

// Map.clear(), clear whole Map
const myMapExampleToClear = new Map([
  ['key1', 'value1'],
  ['key2', 2],
]);

console.log('before clear: ', myMapExampleToClear); // size 2
myMapExampleToClear.clear();
console.log('after clear: ', myMapExampleToClear); // size 0

// Map.delete(key)
const myMapExampleToDelete = new Map([
  ['key1', 'value1'],
  ['key2', 2],
]);

console.log('before delete: ', myMapExampleToDelete); // size 2
myMapExampleToDelete.delete('key1');
console.log('after delete: ', myMapExampleToDelete); // size 1, deleted key1

// Map.forEach(callback()=>) this method is a loop, which is iterates over all records

const myMapExampleForEach = new Map([
  ['any1', 'something1'],
  ['any2', 'something2'],
  ['any3', 'something3'],
  ['any4', 'something4'],
  ['any5', 'something5'],
]);

myMapExampleForEach.forEach((val, k, m) => {
  val; // is current value in loop
  k; // is current key
  m; // is whole iterating map

  console.log(val); // 1st loop : any1
  console.log(k); // 1st loop : something1
  console.log(m); // all loop:
  /*
    0: {"any1" => "something1"}, 
    1: {"any2" => "something2"}
    2: {"any3" => "something3"}
    3: {"any4" => "something4"}
    4: {"any5" => "something5"}
  */
});
