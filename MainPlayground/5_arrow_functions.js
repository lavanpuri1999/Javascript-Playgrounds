// 1. Anonymous Function: Function without a name which you assiign to a variable
const functionName = function() {
    console.log("Hello")
}

// 2. Callback function: A function that is passed as an argument to another function
setTimeout(function() {
    return "Hello"
}) // In this example, the anonymous function is the callback function

// Named functions: Like factory or constructor functions, check MainPlayground/constructor_functions.js and MainPlayground/factory_functions.js
// Object Methods, check MainPlayground/inheritance_concepts.js

// We can convert all of the above into arrow functions
const sayHello = (fName, lName) => {
    return `Hello ${fName} ${lName}`
}

// Differences b/w normal and arrow functions
// 1. IMPORTANT: Arrow functions do not have the arguments object
const sayHelloTwo = function() {
    console.log(arguments)  // Prints arguments object
}
sayHelloTwo()
const sayHellotThree =  () => {
    console.log(arguments) // ReferenceError: arguments is not defined
}
// sayHellotThree()

//2. IMPORTANT: Cannot create constructor functions using arrow functions
const Person = (name) => {
    this.name = name
}
// const lavan = new Person('Lavan') // TypeError: Person is not a constructor

//3. IMPORTANT: They can be shorter in size, 
// You can create single line return statements without the return keyword

//4. IMPORTANT: Binding with this and the scope
const me = {
    name: 'Lavan',
    talk: function() {
        console.log(this) // this will print the me object
    },
    arrowTalk: () => {
        console.log(this) // this will print the window object
    }
}
me.talk() // Regular function when invoked 
me.arrowTalk() // Arrow function when invoked
// If you replace the whole arrow function with just the 'this' keyword
// the me object's arrowTalk would refer to window object, thus arrowTalk() will print the window object

// Ask yourself: What would be the value of 'this' outside the arrow function? 
// Look at the surrounding scope around the arrow function creation

function PersonConstructor(name) {
    this.name = name
}

PersonConstructor.prototype.talk = function() {
    console.log(this) // this will print the Person object
}

PersonConstructor.prototype.arrowTalk = () => {
    console.log(this) // this will print the window object
}

const lavan = new PersonConstructor('Lavan')
lavan.talk() // Regular function when invoked
lavan.arrowTalk() // Arrow function when invoked

// IMPORTANT: EventListeneres have the ability to bind your callback function
// to the DOM element on which you are putting the event listener on, thus:
// the LEFT side of whose calling it works here as well for normal functions

document.body.addEventListener('click', function() {
    console.log(this) // this will print the body element
})

document.body.addEventListener('click', () => {
    console.log(this) // this will print the window object
})

// IMPORTANT: SetTimeout and setInterval cannot bind your callback function
// to anything, thus normal functions in SetTimeout point to the window object

// Dont use Arrow functions for
// 1. Object methods
// 2. Constructor functions
// 3. Event handlers
// 4. Prototypes
// 5. Do not use them for CALL, APPLY, BIND methods

// Use arrow functions for
// 1. Callback functions like setTimeout and setInterval
// because it does not have it's own execution context, it uses the surrounding scope's execution context
// so that arrow function will borrow the scope around setTimeout or setInterval