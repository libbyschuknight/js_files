// // associative array named bob. bob has a property called firstName which has a value of "Bob".

// var bob = {
//     firstName: "Bob",
//     lastName: "Jones",
//     phoneNumber: "(650) 777-777",
//     email: "bob.jones@example.com"
// };

// console.log(bob.firstName);
// console.log(bob.lastName);
// console.log(bob.email);


// ////
// var bob = {
//     firstName: "Bob",
//     lastName: "Jones",
//     phoneNumber: "(650) 777-7777",
//     email: "bob.jones@example.com"
// };

// var mary = {
//     firstName: "Mary",
//     lastName: "Johnson",
//     phoneNumber: "(650) 888-8888",
//     email: "mary.johnson@example.com"
// };

// var contacts = [];
// contacts[0] = bob;
// contacts[1] = mary;

// console.log(contacts[1].phoneNumber);


// ////


// var bob = {
//     firstName: "Bob",
//     lastName: "Jones",
//     phoneNumber: "(650) 777-7777",
//     email: "bob.jones@example.com"
// };

// var mary = {
//     firstName: "Mary",
//     lastName: "Johnson",
//     phoneNumber: "(650) 888-8888",
//     email: "mary.johnson@example.com"
// };

// var contacts = [bob, mary];

// // printPerson added here
// var printPerson = function(person) {
//     console.log(person.firstName + " " + person.lastName);
// };

// printPerson(contacts[0])
// printPerson(contacts[1])


/////


var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
  var contactsLength = contacts.length;
  for (var i = 0; i < contactsLength; i++) {
     printPerson(contacts[i]);
  }
};

list();



//////////

var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
  var contactsLength = contacts.length;
  for (var i = 0; i < contactsLength; i++) {
    printPerson(contacts[i]);
  }
}

/*Create a search function
then call it passing "Jones"*/

function search(lastName) {
  var contactsLength = contacts.length;
  for (var i = 0; i < contactsLength; i++) {
    if ( lastName === contacts[i].lastName ) {
      printPerson(contacts[i]);
    }
  }
};


search("Jones");

////////

var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
  var contactsLength = contacts.length;
  for (var i = 0; i < contactsLength; i++) {
    printPerson(contacts[i]);
  }
}

/*Create a search function
then call it passing "Jones"*/

function search(lastName) {
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++) {
      if ( lastName === contacts[i].lastName ) {
          printPerson(contacts[i]);
      }
  }
};


search("Jones");

function add(firstName, lastName, email, phoneNumber) {
    contacts[contacts.length] = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email

    };
};

add("Libby", "Knight", "me@knight.com", "555-555-555");

list();





















