// Literal notation creates a single object. Literal notation uses curly brackets { } and the object's default properties are defined within the brackets using property:value notation.
// Constructor notation involves defining an object constructor. And like defining a function, we use the function keyword. You can think of this constructor as a "template" from which you can create multiple objects. To create a new object from a constructor, we use the new keyword.


var james = {
    // add properties to this object!
    job: "programmer",
    married: false
};

function Person(job, married) {
    this.job = job;
    this.married = married;
}

// create a "gabby" object using the Person constructor!
var gabby = new Person("student", true);



// Recall that we can add methods (i.e., functions associated with objects) to a constructor:

function Person(job, married) {
    this.job = job;
    this.married = married;
    // add a "speak" method to Person!
    this.speak = function () {
        console.log("Hello!");
    };
}

var user = new Person("Codecademy Student",false);
user.speak();

/////We can also add methods to objects in literal notation:

var james = {
    job: "programmer",
    married: false,
    speak: function(feeling) {
        console.log("Hello, I am feeling " + feeling);
    }
};

james.speak("great");
james.speak("just okay");


////////////////
var james = {
    job: "programmer",
    married: false,
    sayJob: function() {
        // complete this method
        console.log("Hi, I work as a " + this.job);
    }
};

// james' first job
james.sayJob();

// change james' job to "super programmer" here
james.job = "super programmer";

// james' second job
james.sayJob();



//////
// However, remember that we can also use bracket notation:

// someObj["propName"];
// An advantage of bracket notation is that we are not restricted to just using strings in the brackets. We can also use variables whose values are property names:

// var someObj = {propName: someValue};
// var myProperty = "propName";
// someObj[myProperty];
// The last line is exactly the same as using someObj["propName"];.

var james = {
    job: "programmer",
    married: false
};

// set to the first property name of "james"
var aProperty = "job";

// print the value of the first property of "james"
// using the variable "aProperty"

console.log(james[aProperty]);












