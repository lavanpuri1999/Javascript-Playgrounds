// A polyfill is a piece of JavaScript code that implements a feature 
// that might be missing from the JavaScript or the browser engine.
// IT IS BASICALLY A BROWSER FALLBACK for a functionality that is not supported by the browser

// forEach, filter, map these are all higher order functions (take another function as an argument) 
// and polyfills are used to implement these functions in older browsers

// Apply
// 1.
Function.prototype.myApply = function (thisArg, argArray = []) {
    const boundFunction = this.bind(thisArg)
    return boundFunction(...argArray)
  };

// 2.
Function.prototype.myApply = function (thisArg, argArray = []) {
    const clonedObject = Object(thisArg)
    const symKey = Symbol()
    Object.defineProperty(clonedObject, symKey, {
      value: this,
      enumerable: false //  Preventing the symkey from being enumerable. So that it does not appear in loops such as for...in loops and Object.keys
    })
    return clonedObject[symKey](...argArray)
};

const me = {
    fname: 'Lavan',
    lname: 'Puri'
}

const printName = () => {
    console.log(this.fname + ' ' + this.lname);
}

printName.apply(me);

// Call
// 1.
Function.prototype.myCall = function (thisArg, ...argArray) {
    return this.bind(thisArg)(...argArray)
};

// 2.
Function.prototype.myCall = function (thisArg, ...argArray) {
    const clonedObject = Object(thisArg)
    const sym = Symbol()
    Object.defineProperty(clonedObject, sym, {
      value: this,
      enumerable: false //  Preventing the symkey from being enumerable. So that it does not appear in loops such as for...in loops and Object.keys
    })
    return clonedObject[sym](...argArray)
  };

// Filter
Array.prototype.myFilter = function (callbackFn, thisArg) {
    let filteredArray = []
    for(let i =0;i < this.length;i++) {
      if(Object.hasOwn(this, i) && callbackFn.call(thisArg, this[i], i, this)) {
        filteredArray.push(this[i])
      }
    }
    return filteredArray
};

// Purpose of thisArg
function withinRange(item) {
    if (typeof item !== 'number') {
        return false;
    }
    return item >= this.minRange && item <= this.maxRange;
}
let myArray = [1, 5, "this", 12, "is", 23, 29, "35", "Simplilearn", 50];
let rangeLimit = {
    minRange: 1,
    maxRange: 30
};
let filteredArray = myArray.filter(withinRange, rangeLimit); // rangeLimit is passed as thisArg for callbackFn
console.log(filteredArray);

// Map
Array.prototype.myMap = function (callbackFn, thisArg) {
    if(typeof callbackFn !== 'function' || !callbackFn.call || !callbackFn.apply) {
      throw 'Callback function is not a function' 
    }
  
    let mappedArray = new Array(this.length) // Done to handle sparse arrays, if original array has empty slots just keep them empty in the mapped array
    for(let i = 0; i < this.length ; i++) {
      if(Object.hasOwn(this, i)) {
        mappedArray[i] = callbackFn.call(thisArg, this[i], i, this)
      }
    }
    return mappedArray
};

// Reduce
Array.prototype.myReduce = function (callbackFn, initialValue) {
    if(initialValue === undefined && this.length === 0) throw 'Array is empty and no initial value'
    
    let reducerValue = initialValue   
    if(initialValue === undefined) reducerValue = 0
    
    for(let i = 0;i < this.length ; i++){
      if(Object.hasOwn(this, i)) reducerValue = callbackFn(reducerValue, this[i], i, this)
    }
    return reducerValue
};

// Bind
// 1. Without call/apply
Function.prototype.myBind = function (thisArg, ...argArray) {
    const wrappedObj = Object(thisArg)
    const sym = Symbol()
    Object.defineProperty(wrappedObj, sym, { value: this, enumerable: false })
  
    const finalFunc =  function(...args) { return wrappedObj[sym](...argArray, ...args) }
    return finalFunc
};

// 2. Using call
Function.prototype.myBind = function (thisArg, ...argArray) {
    const that = this
    return function(...args) {
      return that.call(thisArg, ...argArray, ...args)    
    }
};