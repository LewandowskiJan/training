// use `break` and `continue`

// array iteration

// for
// for in
// for of

const demon = { name: 'demon', hp: 400, armor: 20, attack: 130 }

const animals = [
        { name: 'Rex', type: 'dog', age: 3 },
        { name: 'Kittens', type: 'cat', age: 8 },
        { name: 'Queen', type: 'cat', age: 2 },
        { name: 'Fiona', type: 'dog', age: 4 },
        { name: 'Smiley', type: 'crocodile', age: 24 },
        { name: 'Dumbo', type: 'elephant', age: 12 },
        { name: 'El', type: 'monkey', age: 3 },
        { name: 'Mun', type: 'monkey', age: 4 },
        { name: 'Do', type: 'monkey', age: 5 },
    ];

const monsters = [
    { name: 'demon', hp: 400, armor: 20, attack: 130 },
    { name: 'dwarf defender', hp: 350, armor: 60, attack: 80 },
    { name: 'dwarf warrior', hp: 250, armor: 40, attack: 100 },
    { name: 'dwarf leader', hp: 500, armor: 60, attack: 100 },
    { name: 'wolf', hp: 200, armor: 20, attack: 50 },
    { name: 'goblin', hp: 300, armor: 30, attack: 60 },
];

// for

// console.log(animals[0])
// console.log(animals.length)

for (let i = 0; i < animals.length; i++) {
    // console.log(animals[i])
}

// console.log(demon["hp"])
for (const key in demon) {
    // console.log(key)
    if (Object.hasOwnProperty.call(demon, key)) {
        const element = demon[key];
        // console.log(element)
    }
}

// for in

for (const key in animals) {
    // console.log(key)
    if (Object.hasOwnProperty.call(animals, key)) {
        const element = animals[key];
        // console.log(element)
    }
}

//  for of

for (const iterator of monsters) {
    // console.log(iterator)
}


/**
 * Returns void, log the string Fizz if divisible by 3 or Buzz if divisible by 5, or number
 * @param num: number
 */
function fizzBuzzResolver(num) {
    let result = '';

    // write implementation below
    // console.log(num, num % 5, num % 5 === 0) 

    if (num % 5 === 0 && num % 3 === 0) { result = "FizzBuzz" }
    else if (num % 5 === 0) { result = "Buzz" }
    else if (num % 3 === 0) { result = "Fizz" }
    else { result = num }
    return result;
}

for (let i = 1; i <= 100; i++) {
    // console.log(fizzBuzzResolver(i))
}

// -------------------------------------------------------------------------------------------------
// even parzysty odd nieparzysty ||Wypełnij tablice nimerami 1->100 bez nieparzystych


function pushNumber() {
    const tablica = []
    for (let i = 0; i <= 100; i++) {
        if (i % 2 === 0) { tablica.push(i) }
    }
    return tablica
}
pushNumber()
// console.log(pushNumber())
// console.log(tablica.push(1), tablica)


function nowaFunkcja() {
    const tablica = []
    for (let i = 1; i <= 100; i = i + 2) {
        tablica.push(i)
    }
    return tablica
}
// console.log(nowaFunkcja())

const numbers = nowaFunkcja()
const animals2 = [
    { name: 'Rex', type: 'dog', age: 3 },
    { name: 'Kittens', type: 'cat', age: 8 },
    { name: 'Queen', type: 'cat', age: 2 },
    { name: 'Fiona', type: 'dog', age: 4 },
    { name: 'Smiley', type: 'crocodile', age: 24 },
    { name: 'Dumbo', type: 'elephant', age: 12 },
    { name: 'El', type: 'monkey', age: 3 },
    { name: 'Mun', type: 'monkey', age: 4 },
    { name: 'Do', type: 'monkey', age: 5 },
];

// console.log(animals2.some((animal) =>
// {console.log(animal)
//     console.log(animal.age)
//     console.log(animal.age % 2)
//     return animal.age % 2 === 0
// }))




// console.log(animals2.filter((animal) =>
// {console.log(animal)
//     console.log(animal.age)
//     console.log(animal.age % 2)
//     return animal.age % 2 === 0
// }))

const animals3 = [
    { name: 'Rex', type: 'dog', age: 3 },
    { name: 'Kittens', type: 'cat', age: 8 },
    0,
    { name: 'Fiona', type: 'dog', age: 4 },
    false,
    { name: 'Smiley', type: 'crocodile', age: 24 },
    null,
    { name: 'El', type: 'monkey', age: 3 },
    undefined,
    { name: 'Do', type: 'monkey', age: 5 },
]

console.log(animals3.filter(Boolean))
console.log(animals3.filter(Boolean).map(Boolean))
console.log(animals3.filter(Boolean).some(Boolean))






// funkcjafn(()=>{})     funcka strzalkowa - po funkcji => oznacza callback

