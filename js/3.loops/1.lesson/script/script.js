/**
 * loops
 */

// while
// execute min 0 time
const whileLoopFn = (() => {
  let i = 0;
  while (i < 5) {
    i++;
    console.log('whileLoopFn: ', i);
  }
})();

// do while
// execute min 1 time
const doWhileLoopFn = (() => {
  let i = 0;
  do {
    i++;
    console.log('doWhileLoopFn: ', i);
  } while (i < 5);
})();

// for
// execute min 0 time
const forLoopFn = (() => {
  for (let i = 0; i < 5; i++) {
    console.log('forLoopFn: ', i);
  }
})();

// switch
// with group cases
const switchLoopWithGroupCasesFn = ((someNumber = 10) => {
  switch (someNumber) {
    case 1:
    case 10:
    case 100:
    case 1000:
      console.log('switchLoopWithGroupCasesFn: ', someNumber);
      break;
    case 2:
      console.log('switchLoopWithGroupCasesFn: ', 20);
      break;
    default:
      console.log('switchLoopWithGroupCasesFn: default');
      break;
  }
})();

// switch
// with true as condition
const switchLoopWithTrueAsKeyFn = ((someNumber = 5) => {
  switch (true) {
    case someNumber < 5:
      console.log('not much');
      break;
    case someNumber <= 10:
      console.log('not bad');
      break;
    case someNumber > 10:
      console.log('nice');
      break;
    default:
      console.log('...');
      break;
  }
})();
