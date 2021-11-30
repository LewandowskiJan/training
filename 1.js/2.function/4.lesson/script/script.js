const logConfiguration = {
  logThis1: true,
  logThis2: true,
};

const logThis1 = logConfiguration['logThis1'];

class MyRegularTestClass {
  constructor(data) {
    this.data = data;
  }

  myRegularFnMethod() {
    logThis1 && console.log(this.data);
  }
}

class MyArrowTestClass {
  constructor(data) {
    this.data = data;
  }

  myArrowFnMethod = () => {
    logThis1 && console.log(this.data);
  };
}

// ========================
// TEST 13 > DIFFERENCE

const regFn = new MyRegularTestClass('test');
const arrowFn = new MyArrowTestClass('test');

regFn.myRegularFnMethod(); // test
arrowFn.myArrowFnMethod(); // test

// ========================
// TEST 14 > DIFFERENCE AS CB

setTimeout(regFn.myRegularFnMethod, 1000);
// after 1 second logs "undefined"

setTimeout(regFn.myRegularFnMethod.bind(regFn), 1000);
// after 1 second logs "test"

setTimeout(arrowFn.myArrowFnMethod, 1000);
// after 1 second logs "test"

// ========================
// TEST 15 > NO DIFFERENCE

const regFunction = () => console.log(this);
const arrowFunction = function () {
  console.log(this);
};

setTimeout(regFunction, 1000); // window
// after 1 second logs "a"

setTimeout(regFunction, 1000); // window
// after 1 second logs "a"

setTimeout(arrowFunction, 1000); // window
// after 1 second logs "a"

// ========================
// TEST 16 > NO DIFFERENCE

const regFunction1 = () => console.log('a');
const arrowFunction1 = function () {
  console.log('a');
};

setTimeout(regFunction1, 1000);
// after 1 second logs "a"

setTimeout(regFunction1, 1000);
// after 1 second logs "a"

setTimeout(arrowFunction1, 1000);
// after 1 second logs "a"
