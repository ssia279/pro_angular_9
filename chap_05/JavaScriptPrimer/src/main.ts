console.log("Hello");
console.log("Apples");
console.log("This is a statement");
console.log("This is also a statement");

let myFunc = function() {
  console.log("This is a statement");  
}

myFunc();

let myFunc1 = function(name: string, weather: string = "raining") {
  console.log("Hello " + name + ".");
  console.log("It is " + weather + " today");
}

myFunc1("Adam");

let myFunc2 = function(name: string, weather: string, ...extraArgs: any[]) {
  console.log("Hello " + name + ".");
  console.log("It is " + weather + " today");
  for(let i: number = 0; i < extraArgs.length; i++) {
    console.log("Extra Arg: " + extraArgs[i]);
  }
}

myFunc2("Adam", "sunny", "one", "two", "three");

let myFunc3 = function(name: string) {
  return ("Hello " + name + "."); 
}

console.log(myFunc3("Adam"));

let myFunc4 = function(nameFunction: () => string) {
  return ("Hello " + nameFunction() + ".");
}

console.log(myFunc4(() => "Adam_01"));

let myFunc5 = function(nameFunction: () => string) {
  return ("Hello " + nameFunction() + ".");
}

let printName = function(nameFunction: () => string, printFunction: any) {
  printFunction(myFunc5(nameFunction));
}

printName(() => "Adam", console.log);

let messageFunction = function(name: string, weather: string) {
  let message = "Hello, Adam";
  if (weather == "sunny") {
    let message = "It is a nice day";
    console.log(message);
  } else {
    let message = "It is " + weather + " today";
    console.log(message);
  }
  console.log(message);
}

messageFunction("Adam", "raining");

let myArray = [100, "Adam", true];
let otherArray = [...myArray, 200, "Bob", false];

for (let i: number = 0; i < otherArray.length; i++) {
  console.log(`Array item ${i}: ${otherArray[i]}`);
}

let products = [
  { name: "Hat", price: 24.5, stock: 10 },
  { name: "Kayak", price: 289.99, stock: 1 },
  { name: "Soccer Ball", price: 10, stock: 0 },
  { name: "Running Shoes", price: 116.50, stock: 20 },
];

let totalValue = products.filter(item => item.stock > 0)
        .reduce((prev, item) => prev + (item.price * item.stock), 0);

console.log(`Total value: $${totalValue.toFixed(2)}`);