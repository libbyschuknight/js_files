
//typeof

// complete these definitions so that they will have
// the appropriate types
var anObj = { job: "I'm an object!" };
var aNumber = 42;
var aString = "I'm a string!";

console.log( typeof anObj ); // should print "object"
console.log( typeof aNumber ); // should print "number"
console.log( typeof aString ); // should print "string"



// hasOwnProperty

var myObj = {
    // finish myObj
    name: "Libby"
};

console.log( myObj.hasOwnProperty('name') ); // should print true
console.log( myObj.hasOwnProperty('nickname') ); // should print false


/////
var suitcase = {
    shirt: "Hawaiian"
};

if (suitcase.hasOwnProperty("shorts") === true){
    console.log(suitcase["shorts"]);
} else {
    suitcase["shorts"] = "purple";
    console.log(suitcase["shorts"]);
}


// for in loop - properties of object
var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

for (var property in nyc) {
    console.log(property);
}



// for in loop for values of properties

var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

// write a for-in loop to print the value of nyc's properties

for (var x in nyc) {
    console.log(nyc[x]);
}

for (var value in nyc) {
    console.log(nyc[value]);
}



















