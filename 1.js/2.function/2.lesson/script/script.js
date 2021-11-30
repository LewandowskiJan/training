const logConfiguration = {
  logThis1: true,
  logThis2: true,
};

// ========================
// TEST 8 > DIFFERENCE

const logThis1 = logConfiguration['logThis1'];

function myRegularFnArg() {
  logThis1 && console.log('myRegularFnArg: ', arguments);
}

const myArrFnArg = () => {
  logThis1 && console.log('arrFnLogThis: ', arguments); // there are no arguments in arrow fn
};

myRegularFnArg('a', 'b'); // logs { 0: 'a', 1: 'b', length: 2 }
// myArrFnArg('a', 'b'); // ReferenceError: arguments is not defined

// ========================
// TEST 9 > DIFFERENCE

const logThis2 = logConfiguration['logThis2'];

function myRegularFnWithRegularInside() {
  function regularFnInside() {
    console.log('regularFnInside with arg "c", "d": ', arguments); // takes arguments from inside function
  }
  regularFnInside('c', 'd');
}

function myRegularFnWithArrInside() {
  const arrowFnInside = () => {
    console.log('arrowFnInside with arg "c", "d": ', arguments); // takes arguments from inside function
  };
  arrowFnInside('c', 'd');
}

myRegularFnWithRegularInside('a', 'b'); // logs { 0: 'c', 1: 'd', length: 2 }
myRegularFnWithArrInside('a', 'b'); // logs { 0: 'a', 1: 'b', length: 2 }
