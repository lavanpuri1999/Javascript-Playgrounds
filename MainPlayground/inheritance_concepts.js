class Person {
    talk() {
        console.log('Personn is talking');
    }
}

const lavan = new Person();
const faaez = new Person();
console.log(Person.prototype === lavan.__proto__); // true  // both contains the method, like talk()

lavan.talk = function() {
    console.log('HAHA I am talking');
}
faaez.talk()
lavan.talk() // HAHA I am talking, because we have overridden the talk() method on the lavan object

function AnotherPerson() {
    this.age = 40
    this.talk = function() {
        console.log('Another Person is talking');
    }
}
const kush = new AnotherPerson();
console.log(kush.__proto__); // does not contain talk() because it is on the this object, which is specific to that instance
// If we have another AnotherPerson instance, it will have its own talk() function, changing one will not affect the other

AnotherPerson.prototype.talkCommon = function() {
    console.log('Another Person is talking but using inheritance');
}
console.log(kush.__proto__); // now it contains talkCommon() because it is on the prototype

AnotherPerson.age = 12
console.log(kush.age); // 40, changing AnotherPerson.age does not affect kush.age because it is not in prototype of AnotherPerson

class Human {
    talk() {
        console.lof('Human is talking');
    }
}

class SuperHuman extends Human {
    fly() {
        console.log('SuperHuman is flying');
    }
}

const superman = new SuperHuman();
console.log(superman.__proto__); // contains both talk() and fly() methods, however talk() is in one level deep inside the prototype chain


// __proto__ belongs to an instance, prototype belongs to a class/constructor function

// const me = {}  < is the same as > const me = new Object()