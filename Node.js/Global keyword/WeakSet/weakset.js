const myWeakSet = new WeakSet()

{
  let myObj = { a: 1}
  myWeakSet.add(myObj);
  console.log(myWeakSet);
}

setTimeout(() => console.log(myWeakSet))

{
  let myObj2 = { a: 2}
  myWeakSet.add(myObj2);
  console.log(myWeakSet);
}
