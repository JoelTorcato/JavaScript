// Map

const myMap = new Map();
let obj = { a: 1}
console.log(myMap.set(obj, 'This is my object'));

function sample() {
  console.log('Hi')
}
console.log(myMap.set(sample, 'This is a function'));