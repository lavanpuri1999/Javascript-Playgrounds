// A function that returns an object is called a factory function
// Basically reusability of code 
// Each returned object creates its own copy of the whole object returned by the factory function

function createElement(type, text, color) {
    const el = document.createElement(type);
    el.innerText = text;
    el.style.color = color;
    document.body.append(el)
    
    return {
        el,
        setText(newText) {
            el.innerText = newText;
        },
        setColor(newColor) {
            el.style.color = newColor;
        }
    }
}

const h1 = createElement('h1', 'Hello', 'red');
const p = createElement('p', 'This is a paragraph', 'blue');

// IMPORTANT: In JavaScript, any function can return a new object.
// IMPORTANT: When it’s not a constructor function or class, it’s called a factory function.

// Alternative of creating objects using factory functions while setting prototypes
// Basically alternative of creating an object using the new keyword on a constructor function
const myCoolPrototype = {
    sayHi() {
        console.log(`Hi, my name is ${this.name}` );
    }
}

function createObject(props) {
    return Object.create(myCoolPrototype, props);
}

const obj = createObject({ name: { value: 'Lavan' } });
console.log(obj); // obj's prototype is myCoolPrototype

// You can implement data privacy using factory functions more easily than constructor functions
function createPerson(name) {
    return {
        talk() {
            return `Hi, my name is ${name}`;
        }
    }
}

const me = createPerson('Lavan');
console.log(me.talk()); // Hi, my name is Lavan
console.log(me.name); // undefined , cannot access name property, it is hidden

const anotherPerson = createPerson('Kush');
console.log(anotherPerson.talk()); // Hi, my name is Kush

createPerson.talk

