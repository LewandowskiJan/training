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
