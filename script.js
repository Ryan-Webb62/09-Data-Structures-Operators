'use strict';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //  ES6 enhanced object literals
  openingHours,
  //  ES6 can create a function within an object with out : function syntax
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order Recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delcious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },
  orderPizza(mainIngredent, ...otherIngredents) {
    console.log(mainIngredent, otherIngredents);
  },
};
//---------Looping Objects: Object Keys, Values, and Entries -----------------
// Property NAMES
const properties = Object.keys(openingHours);
// console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
// console.log(openStr);

// Property Values
const values = Object.values(openingHours);
// console.log(values);

// Entrie object
const entries = Object.entries(openingHours);
// console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
//---------Optional Chaining (?.)----
/* 
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);
// WITHOUT optional chaining - get error
// console.log(restaurant.openingHours.mon.open);

// WITH optional chaining - ? comes after the element we are testing
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

//  Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
console.log(users[0]?.name ?? 'User array empty');
 */
//---------The for-of Loop----------
/* 
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

// for (const item of menu.entries()) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
 */
/* 
// ------ Challenge 1 -------------

// Data
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...players) {
    for (let i = 0; i < players.length; i++) {
      console.log(players[i]);
    }
    console.log(players.length);
  },
};
//1.
const [players1, players2] = game.players;
//2.
const [gk, ...fieldPlayers] = players1;
//3.
const allPlayers = [...players1, ...players2];
//4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
//5.
const { team1, x: draw, team2 } = game.odds;
//6.
game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
console.log('--------With game.scored----------');
game.printGoals(...game.scored);
//7.
const teamOneMessage = function () {
  console.log('Team One Wins');
};

const teamTwoMessage = function () {
  console.log('Team Two Wins');
};
const teamDrawMessage = function () {
  console.log('Game was a draw!');
};
console.log('-----------Win Eval----------');

team1 < team2 && console.log('Team one is more likely to win');

team2 < team1 && console.log('Team two is more likely to win');
 */
/* 
// Lecture on nullish coalescing Operator (??)

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

//  Nullish values: null or undefined (NOT 0 or '')
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);
 */

// Short circuiting (&& and ||)
// Logical operators can use any data type, return any data type, short circuit evaluations
/* 
console.log('-----------OR------------------');
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || null || '' || 0 || 'Hello');

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);
console.log('-----------AND------------------');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log('Hello' && 23 && null && 'Jonas');

// Practicle example to test for exsistance
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'pepperoni');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'pepperoni');
 */
// Lecture on the rest pattern
/* 
// 1. Destructuring _________________________________

// Spread, because it is on the RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// Rest, because it is on the left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//  Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2. Functions ______________________________________

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);
const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('Mushrooms', 'onions', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
 */
// Lecture on the Spread Operator ...
/* 
const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

const goodNewArray = [1, 2, ...arr];
console.log(goodNewArray);

console.log(...goodNewArray);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy Array

const mainMenuArray = [...restaurant.mainMenu];

// Join two Arrays

const menue = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menue);

// Itterabels: Arrays, Strings, maps, sets, but NOT Objects
const str = 'Jonas';
const letters = [...str, ' ', 's'];
console.log(letters);
console.log(...str);

// example of using spread operator to populate a function's params
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
//   prompt("Let's make pasta! Ingredient 3?"),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// Objects

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant.name);
console.log(restaurantCopy.name);
 */
// Lecture on Destructuirng Objects
/* 

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sola 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sola 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(openingHours, hours, tags);

// Setting default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
// Must wrap in parenthasis or JS will see { } and expect a code block
({ a, b } = obj);
console.log(a, b);
 */
// Nested objects

// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// Lecture on Destructuring Arrays
/* 
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = main;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Recieve 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];

// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values

const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r);

 */
