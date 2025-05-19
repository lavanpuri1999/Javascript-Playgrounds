function createPerson(name) {
    return {
        name,
        talk() {
            return `I am ${this.name}`
        }
    }
}

const me = createPerson('Lavan')
const you = createPerson('Kush')

console.log(me)
console.log(you)

console.log(me.talk()) // 'I am Lavan'
console.log(you.talk()) // 'I am Kush'

me.talk = function () {
    return `Hello, I am ${this.name}`
}

console.log(me.talk()) // 'Hello, I am Lavan'
console.log(you.talk()) // 'I am Kush'
// The you object is unchanged, because we used a factory function to creae these two objects

// Workaround: use const me = Object.create('someprototype object', { someProperty: { value: 'somevalue' } })

// Constructor function and prototype example
function Person(name) {
    this.name = name;
}

const ben = new Person('Ben');

Person.prototype.talk = function() {
    return `Hello, I am ${this.name}`;
};

const sam = new Person('Sam');

console.log(ben);
console.log(ben.talk()); // 'Hello, I am Ben'

console.log(sam);
console.log(sam.talk()); // 'Hello, I am Sam'

// Update the prototype method to Italian greeting (added at the end)
Person.prototype.talk = function() {
    return `Ciao, io sono ${this.name}`;
};

console.log(ben.talk()); // 'Ciao, io sono Ben'
console.log(sam.talk()); // 'Ciao, io sono Sam'



