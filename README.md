##Testing DOM manipulation with Jasmine


###General concepts:

* function declaration vs function expression:

function area(w, h) {} vs var area = function(w, h) {}

The interpreter looks for function declarations and variables first.

The function expression id not processed until the interpreter get to that statement.

A variable actually references a value that is stored in memory.(var x = true; var y = true; pointing to the same true)

Property: variable part of an object;

Method: function part of an object;

HTML elements --> attribute names/values

CSS --> property names/values

3 ways to create an object:
var newObject = {}
var newObject = Object.create( Object.prototype )
var newObject = new Object()
4 ways to assign key/values:

1. Literal notation: {}, key : value. Acessing with dot notation(member operator). 
2. Acessing [], key --> number or variable

3. Object.defineProperty
,,,
Object.defineProperty( newObject, "someKey", {
    value: "any value",
    writable: true,
    enumerable: true,
    configurable: true
});
//short hand for the above:

var defineProp = function (obj, key, value ) {
    var config = {
    value: value,
    writable: true,
    enumerable: true,
    configurable: true
    };
    Object.defineProperty( obj, key, config);
};

var person = Object.create( Object.prototype );
 defineProp( person, "car", "Delorean");
,,,

4. Object.defineProperties

,,,
Object.defineProperties( newObject, {
    "someKey": {
        value: "Hello World",
        writable: false  
    },

    "anotherKey": {
        value: "Foo bar",
        writable: false
    }
})
,,,

>> These methods can be used for inheritance:

,,,
var driver = Object.create( person );

defineProp(driver, "topSpeed", "100mph");

//Get an inherited property from person car = "Delorean"
console.log( driver.dateOfBirth)
,,,

Functions like almost all objects in Javascript, contain a "prototype" object.

[Object literals](http://rmurphey.com/blog/2009/10/15/using-objects-to-organize-your-code/) vs Module pattern.

the module pattern still uses object literals but only as the return value of a scoping function.

- To delete a property: delete object.property

The default object in the browser scope is the window. Therefore all global variables become properties of the window object.

WINDOW
    - DOCUMENT
    - HISTORY
    - LOCATION
    - NAVIGATOR
    - SCREEN





