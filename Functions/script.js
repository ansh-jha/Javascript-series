// Functions -> block of code that performs specific task

function sayMyName() {
  console.log("Ansh Jha");
}

// Calling a function
sayMyName();

// Passing parameter
function printNumber(num) {
  console.log("Printing number:", num);
}

printNumber(5);

// return functions
function sumOfNum(a, b, c) {
  let sum = a + b + c;
  return sum;
}

let ans = sumOfNum(3, 4, 5);
console.log(ans);

function getMyName(firstName, lastName) {
  let finalName = firstName + " " + lastName;
  return finalName;
}

let name = getMyName("Ansh", "Jha");
console.log(name);

// return keyword ke neeche ka koi bhi code kabhi run nhi hoga

// functions in variables
let getMultiply = function (a, b) {
  return a * b;
};

let multi = getMultiply(2, 10);
console.log(multi);

// Arrow Functions

let getExp = (a, b) => {
  let ans = a ** b;
  console.log(ans);
};

console.log(getExp(2, 10));
