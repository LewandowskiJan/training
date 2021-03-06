
## Typescript

### type vs interface

|     | Type                               | Interface                            |
| --- | ---------------------------------- | ------------------------------------ |
| 1   | syntax 'type' keyword              | syntax 'interface' keyword           |
| 2   | type A = {a: number;}              | interface A ={ a:number }            |
| 3   | create new name of type            | define the entities                  |
| 4   | less capabilities                  | more capabilities                    |
| 5   | cannot merged multiply declaration | cannot merged multiply declaration   |
| 6   | cannot use extend for obj          | can be use for extend object         |
| 7   | no duplicated names                | duplicated names, it will get merged |
| 8   | can only be declare                | can be implement                     |
| 9   | tuples friendly                    | tuples limited                       |

for example

1. (in table 4. 6.) capabilities

```typescript
// Possible for `interface`, impossible for `types`

class Weapon {
  dealDmg() {
    console.log('hit!');
  }
}

interface Sword extends Weapon {
  name: string;
}

class Saber implements Sword {
  name: 'Saber';
  constructor(dmg: number) {
    this.dmg = dmg;
    this.name = name;
  }

  dealDmg() {
    console.log('hit by ', this.dmg);
  }
}

/*_____________________*INTERFACE*_____________________*/
// Interface should be consume the fields in 100% and more
interface Orc {
  name: string;
  hp: number;
}

// we implement all interfaced fields, and even more => dmg
// its work
const orc1: Orc = {
  name: 'Fo',
  hp: 1200,
  dmg: 120
}

// we implement just `name` from interfaced fields
// its not work, throw error
const orc2: Orc = {
  name: 'Mu',
}

/*_____________________*TYPES*_____________________*/
// Types should be consume the fields in strict 100%
type Goblin {
  name: string;
  hp: number;
}

// we implement all type's fields
// its work
const goblin0: Goblin = {
  name: 'Lo',
  hp: 1200
}

// we implement all type's fields, and even more => dmg
// its not work, throw error
const goblin1: Goblin = {
  name: 'Zo',
  hp: 1200,
  dmg: 120
}

// we implement just `name` from type's fields
// its not work, throw error
const goblin2: Goblin = {
  name: 'Go',
}

```

2. (in table 5. 7. 8.) duplicated names

```typescript
interface King {
  name: string;
}

interface King {
  country: string;
}

// both interfaces get merged
const king: King = {
  name: 'Arthur',
  country: 'GB',
};

// Cannot work for types
type King {
  name: string;
}

type King {
  country: string;
}

// Duplicate identifier King.

```

3. Types cannot be merged but can be combine using `Intersection`

```typescript
type King {
  name: string;
}

type Country {
  countrySymbol: string;
}

type Kingdom = King & Country;

// we can also combine 2 interfaces into type alias

interface King {
  name: string;
}

interface Country {
  countrySymbol: string;
}

type Kingdom = King & Country;

// but we cant combine 2 types into interface alias

type King {
  name: string;
}

type Country {
  countrySymbol: string;
}

interface Kingdom = King & Country; // not work

```

4. For some kind of 'optional merge' we can use `Union`

```typescript
type King {
  name: string;
}

type Country {
  countrySymbol: string;
}

type Kingdom = King | Country;

// we can also combine 2 interfaces into type alias

interface King {
  name: string;
}

interface Country {
  countrySymbol: string;
}

type Kingdom = King | Country;

// but we cant combine 2 types into interface alias

type King {
  name: string;
}

type Country {
  countrySymbol: string;
}

interface Kingdom = King | Country; // not work

```

5. (in table 9.) `Tuples` => array with 2 elements (pair) [key, value]

```typescript
// fancy tuple type
type ProductQty = [string, number];

// some similar implementation of tuples using interface
interface ProductQty {
  value: [string, number];
}
```
