// Class - declaration
// remember! use upper camel case
class MyClass { }

// To create new instance of class above use 'new' keyword
const myClassInstance = new MyClass();
console.log('class instance: ', myClassInstance); // MyClass {}

// =================
// Class fields
// fields can be visible\declared from beginning or not
// not visible fields are set by constructor or method - explained below
class MyClassWithFields {
  visibleField1;
  visibleField2;
}

// fields can have defaults value
class MyClassWithFieldsWithDefaultValue {
  visibleField1 = 'abc';
  visibleField2 = 123;
}

// to get the fields value, you have to
const classWithSomeValues = new MyClassWithFieldsWithDefaultValue();
console.log('Class with fields with default values ', classWithSomeValues.visibleField1); // abc
console.log('Class with fields with default values ', classWithSomeValues.visibleField2); // 123

// =================
// Class constructor
// it is a special 'method' invoke by 'new' keyword once, when Class is creating
class MyClassWithConstructor {
  visibleField;

  constructor(a, b) {
    this.visibleField = a;
    this.invisibleField = b; // this field will be added with value b after creation
  }
}

const myClassWithConstructorInstance = new MyClassWithConstructor('a-value', 'b-value');
console.log(myClassWithConstructorInstance);
console.log(myClassWithConstructorInstance.visibleField);
console.log(myClassWithConstructorInstance.invisibleField);

// =================
// Class methods

class MyClassWithMethod {
  checkMe() {
    return this;
  }
}
const myExampleClassMethod = new MyClassWithMethod();
console.log(myExampleClassMethod.checkMe());

// =================
// Class static methods

// if we create some util class instead of global function
// we can use Class with static method
// to use static methods not need to create Class instance

class SomeUtils {
  static add(a, b) {
    return a + b;
  }
  static multiply(a, b) {
    return a * b;
  }
}

const resultOfAdd = SomeUtils.add(1, 2);
const resultOfMultiply = SomeUtils.multiply(4, 2);

console.log('Class with static methods: ', resultOfAdd); // 3
console.log('Class with static methods: ', resultOfMultiply); // 8

// =================
// Class 'this' keyword
class MyClassWithThis {
  visibleField;

  constructor(a, b) {
    this.visibleField = a;
    this.invisibleField = b; // this field will be added with value b after creation
  }

  myCoreFunctionality(anotherValue = 1) {
    // this.visibleField, this with class field name
    let tmp = this.visibleField;

    // this.mySupportFunction(), this with class method name
    tmp = this.mySupportFunction(tmp, anotherValue);
    return tmp;
  }

  mySupportFunction(a, secondValue) {
    // console.log(a, secondValue, this.invisibleField);
    return a * secondValue * this.invisibleField;
  }
}

const useClass = new MyClassWithThis(10, 2);
console.log('myCoreFunctionality: ', useClass.myCoreFunctionality(1)); // 10 * 2 * 1 = 20
console.log('myCoreFunctionality: ', useClass.myCoreFunctionality(2)); // 10 * 2 * 2 = 40
console.log('myCoreFunctionality: ', useClass.myCoreFunctionality(3)); // 10 * 2 * 3 = 60

<<<<<<< HEAD


// ================================================================================
class ExampleOne {
  nameExample;
  constructor(name) {
    this.nameExample = name
  }
  checkMe() {
    return this;
  }
}

const ex1 = new ExampleOne("name");
const ex2 = new ExampleOne("name2");
const ex3 = new ExampleOne("name3");
console.log(ex1.checkMe());
console.log(ex2.checkMe());
console.log(ex3.checkMe());
=======
/* =======================================
 ============  Private Fields ============
 ====================================== */

// #encapsulation - cannot access to class's fields direct, only by using public methods
// for add to class private fields
class MyClassWithPrivateFieldAndMethod {
  #visibleField;

  constructor(a) {
    this.#visibleField = a;
  }

  publicMethod() {
    return this.#method();
  }

  #method() {
    return 'abc';
  }
}

const classInstance1 = new MyClassWithPrivateFieldAndMethod();

// console.log(classInstance1.#visibleField); // error: Private field '#visibleField' must be declared in an enclosing class
// console.log(classInstance1.#method()); // error: Private field '#method' must be declared in an enclosing class
>>>>>>> 7624cc3970511d56057f597f2f301e7fc054c700
