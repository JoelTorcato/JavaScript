// Hosting
// var a = undefined;

console.log(a);

var a = 2;

var x = 1; // Function scope
let y = 2; // Block scope
const z = 3 

console.log(`Global: ${x}`);
console.log(`Global: ${y}`);
console.log(`Global: ${z}`);

function myFunc() {
  var x = 10;
  const z = 5;

  {
    var x = 11; // Function scope
    const z = 6; // Block scope

    console.log(`Block: ${x}`);
    console.log(`Block: ${y}`);
    console.log(`Block: ${z}`);
  }

  console.log(`Function: ${x}`);
  console.log(`Function: ${y}`);
  console.log(`Function: ${z}`);
}

myFunc()

// Global keyword (Node.js)

/* setTimeout(function(){
  console.log("3 seconds have passed");
}, 3000);

setInterval(function(){
  time += 2; // time += 2; is equal to time = time + 2;
  console.log(time + ' seconds have passed');
}, 2000) */

let time = 0;

var timer = setInterval(function(){
  time += 2; // time += 2; is equal to time = time + 2;
  console.log(time + ' seconds have passed');

  if (time > 5) {
    clearInterval(timer)
  }
}, 2000)

console.log(__dirname);
console.log(__filename);

// Data Types

// String
let firstName = "Joel"
let lastName = 'Fernandes'

// Number
let num = 100;
let numFLoat =  75.5;

console.log(numFLoat);

// Boolean
let learning = true;
let completed = false;

console.log(learning);
console.log(typeof completed); // boolean

let number = 20 < 10;
console.log(number);

// Undefined
let age;
console.log(typeof age); // undefined
console.log(age); // undefined

// Null 
let secondNumber = null;

console.log(secondNumber); // null
console.log(typeof secondNumber) // object

// null == undefined

// Symbol (It's immutable and it is unique)

let foo = Symbol('name');
let bar = Symbol('name');

console.log(foo == bar);

let obj = {
  [Symbol('name')]: "Joel",
  [Symbol('age')]: 16,
  'city': "Lisbon",
};
const symbols = Object.getOwnPropertySymbols(obj);
// Object.getOwnPropertySymbols() returns an array of all symbol properties found directly on a given object.

const data = symbols.map(sym => obj[sym]);

console.log(data);
console.log(obj.city);
console.log(data.) // See how to search for example age.