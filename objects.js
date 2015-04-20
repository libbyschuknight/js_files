// // literal notation
// var me = {
//     name: "Libby Schumacher-Knight",
//     age: 40
// }

// // There are two ways to create an object: using object literal notation (which is what you just did) and using the object constructor.

// // Literal notation is just creating an object with curly braces, like this:

// var myObj = {
//     type: 'fancy',
//     disposition: 'sunny'
// };

// var emptyObj = {};

// // When you use the constructor, the syntax looks like this:
// var myObj = new Object();

// // This tells JavaScript: "I want you to make me a new thing, and I want that thing to be an Object.

// // You can add keys to your object after you've created it in two ways:

// myObj["name"] = "Charlie";
// myObj.name = "Charlie";

// // object constructor
// var me = new Object();

// me.name = "Libby Schumacher-Knight";
// me["age"] = 40;


// // REVIEW!!! Arrays and objects

// var object = {
//     key1: "value",
//     key2: "value2"
// }

// var bool = true

// var myArray = [20, bool, "string", object]



// var myArray = [20, true, "string", object = {   // what about making object a var??
//     key1: "value",
//     key2: "value2"
// }]


// var newArray = [
//     [1, 2, 3, 4, 5],
//     [
//          object = {
//             key: "value",
//             key2: "value2"
//         }
//         ]
//     ]




// var myObject = {
//   name: 'Eduardo',
//   type: 'Most excellent',
//   // Add your code here!
//   interests: [1, 2, 3, 4]
// };


// var myOwnObject = {
//     first_name: "Libby",
//     last_name: "Knight",
//     age: 20,
//     sports: ["karate", "surfing"],
//     animals: ["misty", "jessie", "lots and lots"]
// };


// // CONTACT LIST

// var friends = {};
// //

// var friends = {};

// friends["bill"] = {};
// friends["steve"] = {};
// friends["Misty"] = {};
// friends["Jessie"] = {};

// //

// var friends = {};

// friends["bill"] = {
//     firstName: "Bill",
//     lastName: "Gates",
//     number: "20"
// };

// friends["steve"] = {
//     firstName: "Steve",
//     lastName: "Jobs",
//     number: "20"
// };


// friends["Misty"] = {
//     firstName: "Misty",
//     lastName: "Schu",
//     number: "20"
// };

// friends["Jessie"] = {
//     firstName: "Jessie",
//     lastName: "Knight",
//     number: "20"
// };

// // or like this

// var friends = {
//   bill:
//   {
//     firstName: "Bill",
//     lastName: "Gates",
//     number: "20",
//     address: ['One Microsoft Way','Redmond','WA','98052']
//   },

//   steve:
//   {
//     firstName: "Steve",
//     lastName: "Jobs",
//     number: "20",
//     address: ['One Microsoft Way','Redmond','WA','98052']
//   },

//   Misty:
//   {
//     firstName: "Misty",
//     lastName: "Schu",
//     number: "20",
//     address: ['One Microsoft Way','Redmond','WA','98052']
//   },

//   Jessie:
//   {
//     firstName: "Jessie",
//     lastName: "Knight",
//     number: "20",
//     address: ['One Microsoft Way','Redmond','WA','98052']
//   }
// };

//

var friends = {
  bill:
  {
    firstName: "Bill",
    lastName: "Gates",
    number: "20",
    address: ['One Microsoft Way','Redmond','WA','98052']
  },

  steve:
  {
    firstName: "Steve",
    lastName: "Jobs",
    number: "20",
    address: ['One Microsoft Way','Redmond','WA','98052']
  },

  Misty:
  {
    firstName: "Misty",
    lastName: "Schu",
    number: "20",
    address: ['One Microsoft Way','Redmond','WA','98052']
  },

  Jessie:
  {
    firstName: "Jessie",
    lastName: "Knight",
    number: "20",
    address: ['One Microsoft Way','Redmond','WA','98052']
  }
};


function list(friends) {
    for (var key in friends) {
        console.log(key);
    }
}

//

var friends = {
  bill:
  {
    firstName: "Bill",
    lastName: "Gates",
    number: "20",
    address: ['One Microsoft Way','Redmond','WA','98052']
  },

  steve:
  {
    firstName: "Steve",
    lastName: "Jobs",
    number: "20",
    address: ['One Microsoft Way','Redmond','WA','98052']
  },

  Misty:
  {
    firstName: "Misty",
    lastName: "Schu",
    number: "20",
    address: ['One Microsoft Way','Redmond','WA','98052']
  },

  Jessie:
  {
    firstName: "Jessie",
    lastName: "Knight",
    number: "20",
    address: ['One Microsoft Way','Redmond','WA','98052']
  }
};


function list(friends) {
    for (var key in friends) {
        console.log(key);
    }
}



// why is this not doing anything?? DOH!! see below
function search (name) {
    for (var key in friends) {
        if (friends[key].firstName === name) {
            console.log(friends[key]);
            return friends[key];
        } else {
            return console.log("Not in list");
        }
    }
};





// must always remember to CALL the functions!! doh!
list(friends)
search("Misty")
search("Jessie")
search("Bob")

