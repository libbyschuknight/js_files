//
  // Accepts a number x as input and returns its square
  var square = function (x) {
    return x * x;
  };

  // Write the function multiply below
  // It should take two parameters and return the product
  var multiply = function (x, y) {
      return x * y;
  };

  multiply(2, 3)

////////
  // here is bob again, with his usual properties
  var bob = new Object();
  bob.name = "Bob Smith";
  bob.age = 30;
  // this time we have added a method, setAge
  bob.setAge = function (newAge){
    bob.age = newAge;
  };
  // here we set bob's age to 40
  bob.setAge(40);
  // bob's feeling old.  Use our method to set bob's age to 20
  bob.setAge(20);

  var bob = new Object();
  bob.age = 17;
  // this time we have added a method, setAge
  bob.setAge = function (newAge){
    bob.age = newAge;
  };

  bob.getYearOfBirth = function () {
    return 2014 - bob.age;
  };
  console.log(bob.getYearOfBirth());


  // here we define our method using "this", before we even introduce bob
  var setAge = function (newAge) {
    this.age = newAge;
  };
  // now we make bob
  var bob = new Object();
  bob.age = 30;
  // and down here we just use the method we already made
  bob.setAge = setAge;

  // change bob's age to 50 here
  bob.setAge(50);

  ////////
  // here we define our method using "this", before we even introduce bob
  var setAge = function (newAge) {
    this.age = newAge;
  };
  // now we make bob
  var bob = new Object();
  bob.age = 30;
  bob.setAge = setAge;

  // make susan here, and first give her an age of 25
  var susan = new Object();
  susan.age = 25;
  susan.setAge = setAge;


  // here, update Susan's age to 35 using the method
  susan.setAge(35)



var rectangle = new Object();
rectangle.height = 3;
rectangle.width = 4;
// here is our method to set the height
rectangle.setHeight = function (newHeight) {
  this.height = newHeight;
};
// help by finishing this method
rectangle.setWidth = function (newWidth) {
    this.width = newWidth;
};


// here change the width to 8 and height to 6 using our new methods
rectangle.setHeight(6);
rectangle.setWidth(8);



///////
var square = new Object();
square.sideLength = 6;
square.calcPerimeter = function() {
  return this.sideLength * 4;
};
// help us define an area method here

var calcArea = new Object();
square.calcArea = function() {
  return this.sideLength * this.sideLength;
};

var p = square.calcPerimeter();
var a = square.calcArea();


//////////
// here we make bob using the Object constructor
var bob = new Object();
bob.name = "Bob Smith";
// add bob's age here and set it equal to 20
bob.age = 20;

// Custom Constructors
// But this approach of adding in properties one at a time for every object is tedious! Instead of always using the boring Object constructor, we can make our own constructors.

function Person(name,age) {
  this.name = name;
  this.age = age;
}

// Let's make bob and susan again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 25);
// help us make george, whose name is "George Washington" and age is 275
var george = new Person("George Washington", 275);


function Cat(age, color) {
  this.age = age;
  this.color = color;
}

// make a Dog constructor here
function Dog(age, color, breed, cuteness_level) {
  this.age = age;
  this.color = color;
  this.breed = breed;
  this.cuteness_level = cuteness_level;
};



function Person(name,age) {
  this.name = name;
  this.age = age;
  this.species = "Homo Sapiens";
}

var sally = new Person("Sally Bowles", 39);
var holden = new Person("Holden Caulfield", 16);

console.log("sally's species is " + sally.species + " and she is " + sally.age);
console.log("holden's species is " + holden.species + " and he is " + holden.age);


function Rectangle(height, width) {
  this.height = height;
  this.width = width;
  this.calcArea = function() {
      return this.height * this.width;
  };
  // put our perimeter function here!
  this.calcPerimeter = function() {
    return (2 * this.height) + (2 * this.width);
  };
}

var rex = new Rectangle(7,3);
var area = rex.calcArea();
var perimeter = rex.calcPerimeter();

console.log(area);
console.log(perimeter);




































