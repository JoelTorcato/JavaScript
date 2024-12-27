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
// console.log(data.); // See how to search for example age.

// Reference Type

// Object

let person = {
  firstName: "Joel",
  lastName: "Fernandes",
  age: 16,
};

console.log(person);

console.log(typeof person.firstName); // String
console.log(person.lastName);
console.log(person.age);

console.log(typeof person); // Object

// Bug (null)
let n = null;
console.log(typeof n); // Object

// Classes

/* const me = {
  talk() {
    return "Talking";
  }
}
console.log(me.talk());

const you = {
  talk() {
    return "Talking"
  }
}
console.log(you.talk()); */

class Person {
  talk() {
    return "Talking";
  }
}

const he = new Person();

// he.age = 12;
// console.log(he.age)

console.log(he.talk());
console.log(typeof he); // Object

Person.prototype.talk = function() {
  return "New and improved talking";
}
console.log(he.talk())

console.log(Person.prototype === he.__proto__); // True
console.log(Person.prototype.talk());