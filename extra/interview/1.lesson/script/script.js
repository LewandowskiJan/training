/*
Funny exercises
*/

// what do they log?

// with &&, check all values
console.log('');
console.log('================= with && =================');
// truthy && truthy
console.log('=========== truthy && truthy ===========');
console.log('2 && 3 = ', 2 && 3); // 3
console.log('true && 3 = ', true && 3); // 3
console.log('123 && 13 = ', '123' && '13'); // 13

// falsy && truthy
console.log('=========== falsy && truthy ===========');
console.log('0 && 3 = ', 0 && 3); // 0
console.log('false && 3 = ', false && 3); // false
console.log('"" && 3 = ', '' && 3); // ""

// truthy && falsy
console.log('=========== truthy && falsy ===========');
console.log('30 && 3 = ', 30 && 3); // 3
console.log('true && false = ', true && false); // false
console.log('"abc" && "zzz" = ', 'abc' && 'zzz'); // "zzz"

// falsy && falsy
console.log('=========== falsy && falsy ===========');
console.log('false && 0 = ', false && 0); // false
console.log('0 && false = ', 0 && false); // 0
console.log('false && "" = ', false && ''); // false
console.log('"" && false = ', '' && false); // ''

// ==================================================
// with ||, check all values
console.log('');
console.log('================= with || =================');
console.log('=========== truthy || truthy ===========');
// truthy || truthy
console.log('2 || 3 = ', 2 || 3); // 2
console.log('true || 3 = ', true || 3); // true
console.log('123 || 13 = ', '123' || '13'); // 123
console.log('=========== falsy || truthy ===========');
// falsy || truthy

console.log('0 || 3 = ', 0 || 3); // 3
console.log('false || 3 = ', false || 3); // 3
console.log('"" || 3 = ', '' || 3); // 3
console.log('=========== truthy || falsy ===========');
// truthy || falsy

console.log('30 || 3 = ', 30 || 3); // 30
console.log('true || false = ', true || false); // true
console.log('"abc" || "zzz" = ', 'abc' || 'zzz'); // "abc"
console.log('=========== falsy || falsy ===========');
// falsy || falsy

console.log('false || 0 = ', false || 0); // 0
console.log('0 || false = ', 0 || false); // false
console.log('false || "" = ', false || ''); // ''
console.log('"" || false = ', '' || false); // false

// ==================================================
console.log('====== for-loop with setTimeout ======');
let i = 0;
for (i; i < 3; i++) {
  setTimeout(() => console.log('"i" defined out of the loop: ', i), 2000);
}
// above loop === below loop
for (var j = 0; j < 3; j++) {
  setTimeout(() => console.log('"j" defined as global variable using "var": ', j), 2000);
}

// 3, 3, 3

for (let k = 0; k < 3; k++) {
  setTimeout(() => console.log('"k" defined in for(let k = 0,...): ', k), 2000);
}

// 0, 1, 2

// ==================================================
console.log('====== prototype ======');
// JS prototype

const arr = Array.prototype;
console.log(arr);
