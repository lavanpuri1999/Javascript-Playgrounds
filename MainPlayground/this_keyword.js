function talk() {
    return `${this.name} is talking`
}

const me = {
    name: "Kush",
    talk
}

const you = {
    name: "Faaez",
    talk
}

console.log(me.talk()) // it will print the 'me' object
console.log(you.talk()) // it will print the 'you' object
// This keyword refers to the object that is executing the current function (basically who is on the left side of the dot)

const random = {
    name: "Random",
}
const randomTalk = talk.bind(random) // bind overwrites the meaning of 'this' keyword inside the talk function
console.log(randomTalk())

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

console.log(talkTwo.call(meTwo, 'en')) // call is the same as bind
// but it executes the function immediately and you can pass a parameter to the function

console.log(talkTwo.apply(meTwo, ['es'])) // apply is the same as call except it takes an array of parameters for the function

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
