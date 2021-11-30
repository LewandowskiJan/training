// array methods

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

// pop, push, shift, reverse, includes

const reverseAnimals = []; // fix it by adding good function

console.log('reverseAnimals: ', reverseAnimals);

// array iteration method
// map, reduce, forEach, sort, some, every, keys, values, entities

const evenAnimals = []
for (const animal of animals) {
  const age = animal.age


  if (age % 2 === 0) {
    // console.log(animal)
    evenAnimals.push(animal)

  }

  // console.log(animal.age)
}
// console.log(evenAnimals)

const evenAnimals2 = animals.filter((animal) => {
  // console.log(animal)
  return animal.age % 2 === 0
}
)

const evenAnimals3 = animals.filter((animal) => animal.age % 2 === 0)
const evenAnimals4 = animals.filter((animal) => {
  return animal.age % 2 === 0
})
// console.log(evenAnimals2)


const animals2 = animals.map((animal) => {

  // animal.age = animal.age * 2
  return {
    ...animal,
    age: animal.age * 2
  }
  return animal
});
// console.log(animals2)

const animals21 = animals.reduce((pv, cv, i) => {
  console.log('pv: ', pv)
  console.log('cv: ', cv)
  console.log('i: ', i)
  return {
    ...pv,
    [cv.name]: cv
  }

}, {});
console.log(animals21)

const err = [
  { code: '0', message: ''},
  { code: '1', message: ''}
]

const myCode = err[0]

const myObj = {
  0: { code: '0', message: ''},
  1: { code: '1', message: ''}
}

myObj[1].message