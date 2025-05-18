// IMPORTANT: Outside a function this keyword refers to the global Window object
// IMPORTANT: Objects do NOT create a binding with this, Functions DO create a binding with this
// IMPORTANT: With normal javascript functions, `this` is bound when the function is called. 
// IMPORTANT: With arrow functions, `this` is bound to the context in which the function is originally created.

// IMPORTANT: Normal (non-arrow) functions have their own execution context
// Thus what matters is who is calling them, what's to the left of them when they are called

// Example
const nestedObject = {
    nestedFunc1: function() {
        console.log(this, 'nested1') // this will print the nestedObject
        function nestedFunc2() {
            console.log(this, 'nested2') 
        }
        nestedFunc2() // this will print the window object, because when called there is nothing on the LHS thus Execution context = window object
    }
}
console.log(nestedObject.nestedFunc1())

function talk() {
    return `${this.name} is talking`
}
// IMPORTANT: const and let variables do not get attached to the window object
// IMPORTANT: var variables get attached to the window object
const me = {
    name: "Kush",
    talk
}

const you = {
    name: "Faaez",
    talk
}

console.log(me.talk(), "Me talk") // it will print the 'me' object
console.log(you.talk(), "You talk") // it will print the 'you' object
// This keyword refers to the object that is executing the current function 
// (basically who is on the left side of the dot)

console.log(talk()) //  it will print the global Window object, thus undefined for window.name
// When you say talk() you are in a way saying window.talk(), so the left side is the window object

const random = {
    name: "Random",
}
const randomTalk = talk.bind(random) // bind overwrites the meaning of 'this' keyword inside the talk function
console.log(randomTalk(), "bind call")

function talkTwo(lang) {
    if (lang === 'en') {
        return `I am ${this.name}`
    } else if (lang === 'es') {
        return `Yo soy ${this.name}`
    }
}

const meTwo = {
    name: "Kush",
}

console.log(talkTwo.call(meTwo, 'en'), "'call' call") // call is the same as bind
// but it executes the function immediately and you can pass a parameter to the function

console.log(talkTwo.apply(meTwo, ['es']), "apply call") // apply is the same as call except it takes an array of parameters for the function

function Person(name) {
    this.name = name
    this.talk = function() {
        console.log(this) // this will print Person object
    }

    // Exceptions
    setTimeout(function() {
        console.log(this) // this will print global Window object  
    }, 100)

    // fix for exception
    setTimeout(function() {
        console.log(this) // this will print Person object because we binding the Person object to the setTimeout callback function  
    }.bind(this), 100)

    // arrow function exception
    setTimeout(() => {
        console.log(this) // this will print Person object
    }, 100)
}

const kush = new Person('Kush')
kush.talk()



const trialTalk = {
    name: "Trial",
    thisAttr: this, // IMPORTANT: OUTSIDE A FUNCTION: this refers to the global Window object
    talk // IMPORTANT: INSIDE A FUNCTION: this refers to the object that is executing the current function
}

console.log("this attr")
console.log(trialTalk.thisAttr, "trial straight check") // this will print global Window object
console.log(trialTalk.talk(), "trial function check") // this will print trialTalk's name, since the function is being called by trailTalk object