const logConfiguration = {
  logThis1: true,
  logThis2: true,
  logThis3: true,
  logThis4: true,
  logThis5: true,
  logThis6: true,
  logThis7: true,
};
/*
 this - regular function
*/

// TEST 1 > NO DIFFERENCE

const logThis1 = logConfiguration['logThis1'];

function regularFnLogThis() {
  logThis1 && console.log('regularFnLogThis: ', this);
}

const arrFnLogThis = () => {
  logThis1 && console.log('arrFnLogThis: ', this);
};

regularFnLogThis(); // logs global object (window)
arrFnLogThis(); // logs global object (window)

// ========================
// TEST 2 > DIFFERENCE

const logThis2 = logConfiguration['logThis2'];

const myRegularFnObject = {
  method() {
    logThis2 && console.log(this); // return object
  },
};

const myArrFnObj = {
  method: () => {
    logThis2 && console.log(this); // return window
  },
};

myRegularFnObject.method();
myArrFnObj.method();

// ========================
// TEST 3 > DIFFERENCE

const logThis3 = logConfiguration['logThis3'];

function myRegularFnWithContext() {
  logThis3 && console.log(this);
}

const myArrFnWithContext = () => {
  logThis3 && console.log(this);
};

const testObj = { value: 'A' };

myRegularFnWithContext.call(testObj); // logs { value: 'A' }
myRegularFnWithContext.apply(testObj); // logs { value: 'A' }

myArrFnWithContext.call(testObj); // logs window obj;
myArrFnWithContext.apply(testObj); // logs window obj;

// ========================
// TEST 4 > DIFFERENCE

const logThis4 = logConfiguration['logThis4'];

function MyRegularFunctionConstructor() {
  logThis4 && console.log(this);
}

const MyArrFnConstructor = () => {
  logThis4 && console.log(this);
};

new MyRegularFunctionConstructor(); // logs an instance of MyFunction
// new MyArrFnClass(); //  TypeError: MyArrFnClass is not a constructor

// ========================
// TEST 5 > DIFFERENCE

const logThis5 = logConfiguration['logThis5'];

const myRegularFnObjectWithFnInsideMethod = {
  myRegularFnMethod(items) {
    logThis5 && console.log(this); // logs myRegularFnObjectWithFnInsideMethod
    function myRegularFnInsideMethod() {
      logThis5 && console.log(this); // logs window object
    }
    items.forEach(myRegularFnInsideMethod);
  },
};

const myArrFnObject = {
  myRegularArrFnMethodWithCallback(items) {
    logThis5 && console.log(this); // logs myRegularArrFnMethodWithCallback
    const callback = () => {
      logThis5 && console.log(this); // logs myRegularArrFnMethodWithCallback
    };
    items.forEach(callback);
  },
};

myRegularFnObjectWithFnInsideMethod.myRegularFnMethod([1, 2]);
myArrFnObject.myRegularArrFnMethodWithCallback([1, 2]);

// ========================
// TEST 6 > NO DIFFERENCE

const logThis6 = logConfiguration['logThis6'];

const myObjectWithArrMethodAndRegularFnInsideMethod = {
  myArrFnMethod: (items) => {
    logThis6 && console.log(this); // logs window object
    function myRegularFnInsideMethod() {
      logThis6 && console.log(this); // logs window object
    }
    items.forEach(myRegularFnInsideMethod);
  },
};

const myObjectWithArrMethodAndArrFnInsideMethod = {
  myArrFnMethod: (items) => {
    logThis6 && console.log(this); // logs window object
    const callback = () => {
      logThis6 && console.log(this); // logs window object
    };
    items.forEach(callback);
  },
};

myObjectWithArrMethodAndRegularFnInsideMethod.myArrFnMethod([1, 2]);
myObjectWithArrMethodAndArrFnInsideMethod.myArrFnMethod([1, 2]);

// ========================
// TEST 7 > DIFFERENCE

const logThis7 = logConfiguration['logThis7'];

const myRegularFnInRegularFn = {
  myRegularFnMethod(items) {
    logThis7 && console.log(this); // logs object
    function myRegularFnInsideMethod() {
      logThis7 && console.log(this); // logs window object
    }
    items.forEach(myRegularFnInsideMethod);
  },
};

const myArrFnInArrFn = {
  myArrFnMethod: (items) => {
    logThis7 && console.log(this); // logs window object
    const callback = () => {
      logThis7 && console.log(this); // logs window object
    };
    items.forEach(callback);
  },
};

myRegularFnInRegularFn.myRegularFnMethod([1, 2]);
myArrFnInArrFn.myArrFnMethod([1, 2]);
