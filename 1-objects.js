var getReview = function (movie) {
    switch (movie) {
        case "Toy Story 2":
            return "Great story. Mean prospector.";
        case "Finding Nemo":
            return "Cool animation, and funny turtles.";
        case "The Lion King":
            return "Great songs.";
        default:
            return "I don't know!";
    }
};

//
var bob = {};

var Spencer = {
  age: 22,
  country: "United States"
};

// make your own object here called me
var me = {
    age: 40,
    country: "New Zealand"
};

//
var bob = {
  name: "Bob Smith",
  age: 30
};
var susan = {
  name: "Susan Jordan",
  age: 25
};
// here we save Bob's information - dot notation
var name1 = bob.name;
var age1 = bob.age;
// finish this code by saving Susan's information = bracket nototation
var name2 = susan["name"];
var age2 = susan["age"];


//////////
// Take a look at our next example object, a dog
var dog = {
  species: "greyhound",
  weight: 60,
  age: 4
};

var species = dog["species"];
// fill in the code to save the weight and age using bracket notation
var weight = dog["weight"];
var age = dog["age"];



///
// Our bob object again, but made using a constructor this time
var bob = new Object();
bob.name = "Bob Smith";
bob.age = 30;
// Here is susan1, in literal notation
var susan1 = {
  name: "Susan Jordan",
  age: 24
};
// Make a new susan2 object, using a constructor instead
var susan2 = new Object();
susan2.name  = "Susan Jordan";
susan2.age = 24;


/////
// help us make snoopy using literal notation
// Remember snoopy is a "beagle" and is 10 years old.
var snoopy = {
    species: "beagle",
    age: 10
};

// help make buddy using constructor notation
// buddy is a "golden retriever" and is 5 years old
var buddy = new Object();
buddy.species = "golden retriever";
buddy.age = 5;






