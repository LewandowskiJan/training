// var example
var myVarExample = 123;
console.log(myVarExample);

console.log('======================')

// const example
const myConstExample = 123;
console.log(myConstExample);


console.log('before 1 change: ', myConstExample);
// myConstExample = 'Jane';  // TypeError: Assignment to constant variable.
console.log('after 1 change: ', myConstExample);



// const example
const myConstExampleArray = [];
console.log(myConstExampleArray);


console.log('before 1 change: ', myConstExampleArray);
myConstExampleArray.push('something');
myConstExampleArray.push(123);
myConstExampleArray.push({ name: 'dog' });
console.log('after 1 change: ', myConstExampleArray);
console.log('myConstExampleArray.length: ', myConstExampleArray.length);
console.log('myConstExampleArray[1]: ', myConstExampleArray[1]);

// let example
let myLetExample = 123;
console.log(myLetExample);

console.log('======================')

// let example with object
let myLetObj = {
    name: 'Joe',
    surname: 'Doe',
};

console.log('before 1 change: ', myLetObj);
myLetObj.name = 'Jane';
console.log('after 1 change: ', myLetObj);
// errox example
// console.log('after change: ', myLetObj.age.age);

myLetObj.age = 123;
console.log('after 2 change: ', myLetObj);

myLetObj.pet = { name: 'rex' };
console.log('after 3 change: ', myLetObj);