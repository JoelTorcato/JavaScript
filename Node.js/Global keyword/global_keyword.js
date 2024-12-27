// Global keyword (Node.js)

setTimeout(function()
{
  console.log("3 seconds have passed");
}, 3000);

setInterval(function()
{
  time += 2; // time += 2; is equal to time = time + 2;
  console.log(time + ' seconds have passed');
}, 2000)

let time = 0;

var timer = setInterval(function()
{
  time += 2; // time += 2; is equal to time = time + 2;
  console.log(time + ' seconds have passed');

  if (time > 5) 
  {
    clearInterval(timer)
  }
}, 2000)

console.log(__dirname);
console.log(__filename);