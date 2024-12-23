// Hosting
// var a = undefined;

console.log(a);

var a = 2;

// Global scope
var b = "Joel";
let c = 16; 
const d = "ID";


// Local scope (Function)

function MyFunc() {
  let firstNumber = 3;
  let secondNumber = 1;
  
// Local scope (Block)
  {
  console.log(firstNumber + secondNumber)
  secondNumber = 3;
  }
}

MyFunc()

// Average two grades

let primeiraNota = prompt("Your first grade: ");
let segundaNota = 3;

console.log(primeiraNota + segundaNota / 2);

// 

