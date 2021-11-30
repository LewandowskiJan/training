function add(a,b){
    return a+b;
}
console.log(add(2,5))

// Stworzyć kolejne funkcje na podstawie funkcji add

/*
1. możliwosć dodania/odjęcia/mnożenia/dzielenia dwóch liczb które będą miały zmienne przecinkowe, a będzie zwracała liczbę zaokrągloną (Math.roud)
2. 

*/

function add(a,b){
    return Math.round(a+b);
    
}

console.log(add(17.4,5.2))

console.log('===================');

function substriction(a,b){
    return Math.round(a-b);
}
console.log(substriction(17,5))

console.log('===================');

function divide(a,b){
    return (a/b);
}
console.log(divide(10,3))

console.log('===================');

function multiply(a,b){
    return Math.round(a*b);
}
console.log(multiply(17,5))
