console.log("Variables & Datatypes");
//  var is function and global scoped but not blocked scoped.

var age = 25;

if (true) {
  console.log(age);
}

function solve() {
  var age = 28;
  console.log(age);
}
console.log(age);
solve();

// let is blocked scoped
{
  let ageA = 10;
  ageA = "Ansh";
  console.log(ageA);
}
// console.log(ageA); error-> ageA is not defined

// const is also block scoped as let
const ages = 20;
// ages = 30; error -> Assignment to constant variable
console.log(ages);
