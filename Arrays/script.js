// Object -> collection of key value pair
// Key -> string , pair -> any type

let person = {
  name: "Ansh",
  usn: 34,
  city: "Bangalore",
  pin: 560107,
  message: function () {
    console.log("Hey! My name is:", this.name);
  },
};

console.log(person.name);
console.log(person["usn"]);

// Adding a property
person.isJob = true;

// Modifying a property
person.city = "Gurugram";

// Deleting a property
delete person.usn;
console.log(person);

console.log(typeof person.message);

//  Arrays: collection of items of same datatype or different datatype.
