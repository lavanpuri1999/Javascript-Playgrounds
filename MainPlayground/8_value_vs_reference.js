// Primitives
// 1. Number
// 2. String
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol

// Objects
// 1. Object
// 2. Array
// 3. Function
// 4. Date
// 5. Regex

const a = 5
const b = 5

console.log(a === b) // true

const c = [1,2,3]
const d = [1,2,3]
console.log(c === d) // false

const me = 'Sina' // Primitives are assigned by value
// JS assigns the value on thr RHS to the variable on the LHS

const car = {skill: 'Cook'} // Object is a non primitive type
// JS creates a copy of the object and assigns the reference of the object(in memory) to the variable on the LHS
// Thus two 'Objects' with the same properties are not equal

function incrementAge(age) {
    age += 1
}
const age = 5
incrementAge(age)
console.log(age) // 5, because primitives are passed by value not reference

function incrementAgeObj(person) {
    person.age += 1
}
const person = {name: 'Sina', age: 5}
incrementAgeObj(person)
console.log(person) // {name: 'Sina', age: 6}, because objects are passed by reference

let name1 = 'lavan'
let name2 = name1

name1 = 'sina'
console.log(name1) // sina
console.log(name2) // lavan, because primitives are passed by value

const obj1 = { name: 'lavan'} 
const obj2 = obj1
obj1.name = 'sina'
console.log(obj1) // {name: 'sina'}
console.log(obj2) // {name: 'sina'}, because objects are passed by reference

// Type Utility Functions for Primitives
export function isBoolean(value) {
    return value === true || value === false
    // typeof true or typeof false is boolean
}

export function isNumber(value) {
    return typeof value === 'number'
}

export function isNull(value) {
    return value === null
    // typeof null is object
}

export function isString(value) {
    return typeof value === 'string'
}

export function isSymbol(value) {
    return typeof value === 'symbol'
}

export function isUndefined(value) {
    return value === undefined
    // typeof undefined is undefined
}


// Type Utility Functions for non-primitives
export function isArray(value) {
    return Array.isArray(value)
}

export function isFunction(value) {
    return typeof value === 'function'
}

export function isObject(value) {
if(value == null) return false
    return typeof value === 'object' || typeof value === 'function'
}

export function isPlainObject(value) {
    if(value == null) return false
    const proto = Object.getPrototypeOf(value)
    return proto === Object.prototype || proto === null
}