// Prototypes

/* const person = {
  name: "Joel"
}

console.log(person);

function Person(fName, lName) {
  this.firstName = fName,
  this.lastName = lName
}

Person.prototype.gender = "Male";
// Person.gender = "Male" Error

Person.prototype.getFullName = function() {
  return this.firstName +" "+ this.lastName
}

const person1 = new Person("Joel", "Fernandes");
const person2 = new Person("Susana", "Torcato");

console.log(person1);
console.log(person2.gender);
console.log(person1.getFullName()); */

// Changing prototype value

function Person() {
  this.name = "Joel Fernandes"
}

Person.prototype.age = 16;

const person1 = new Person();

Person.prototype = {age: 15}

const person2 = new Person()

console.log(person1.age);
console.log(person2.age);

