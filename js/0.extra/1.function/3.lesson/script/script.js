const logConfiguration = {
  logThis1: true,
  logThis2: true,
  logThis3: true,
  logThis4: true,
  logThis5: true,
};

// ========================
// TEST 10 > NO DIFFERENCE

const logThis1 = logConfiguration['logThis1'];

function myRegularFnReturnValue() {
  return 120;
}

const myArrFnReturnValue = () => {
  return 120;
};

logThis1 && console.log(myRegularFnReturnValue()); // 120
logThis1 && console.log(myArrFnReturnValue()); // 120

// ========================
// TEST 11 > NO DIFFERENCE

const logThis2 = logConfiguration['logThis2'];

function myRegularFnReturnNothing() {
  return;
}

const myArrFnReturnNothing = () => {
  return;
};

logThis2 && console.log(myRegularFnReturnNothing()); // undefined
logThis2 && console.log(myArrFnReturnNothing()); // undefined

// ========================
// TEST 12 > NO DIFFERENCE

const logThis3 = logConfiguration['logThis3'];

function myRegularFnWithoutReturn() {
  1;
}

const myArrFnWithoutReturn = () => {
  1;
};

logThis3 && console.log(myRegularFnWithoutReturn()); // undefined
logThis3 && console.log(myArrFnWithoutReturn()); // undefined

// ========================
// TEST 12 > DIFFERENCE

const logThis4 = logConfiguration['logThis4'];

// function myRegularFnWithoutReturnAndBrackets() 1; // Syntax error

const myArrFnWithoutReturnAndBrackets = () => 11; // one line arrow function, not need brackets and return keyword

// logThis4 && console.log(myRegularFnWithoutReturnAndBrackets()); // error
logThis4 && console.log(myArrFnWithoutReturnAndBrackets()); // 11
