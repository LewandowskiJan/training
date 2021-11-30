import {
  InterfaceExample,
  myAnyArray,
  myArray,
  myBoolean,
  myClassArray,
  myCustomObjArray,
  myCustomObject,
  myInterfaceArray,
  myNumber,
  myString,
  myStringArray,
  myTypeArray,
  TypeExample,
} from './src/0.syntax/syntax';

const people: TypeExample = { name: 'joe' };
const person: InterfaceExample = { interfaceName: 'interfaced' };

console.log(people);
console.log(myString);
console.log(myNumber);
console.log(myBoolean);
console.log(myCustomObject);
console.log(person);

console.log(myArray);
console.log(myStringArray);
console.log(myAnyArray);
console.log(myCustomObjArray);
console.log(myClassArray);
console.log(myInterfaceArray);
console.log(myTypeArray);
