// In JavaScript, debounce is a powerful technique used to optimize event handling by 
// delaying the execution of a function until after a specified period of inactivity

// The event will not be called until x seconds are passed since the last event call

function debounce(func, wait) {
    let timeout = null
    const debouncedFunction = function(...args) {
        clearTimeout(timeout)
        console.log(this, 'this1') // holds the this scope for when it was called!, thus the me object
        setTimeout(() => { 
            console.log(this, 'this2') // holds the this scope for when it was created!, thus the me object
            // func() // is bound to window object because being called without anyone on the left side of the dot
            func.apply(this, args) // is bound to the me object because of the apply method
        }, wait)
    }
    return debouncedFunction
} 

let i = 0
const increment = function(s) {
    console.log(this, s)
    i += 1
}
// const debouncedIncrement = debounce(increment, 1000)
// console.log(i);
// debouncedIncrement();

const me = {
    name: 'Sina',
    inc: debounce(increment, 1000)
}
me.inc('final function with argument check')

setTimeout(() => console.log(i), 2000)

// When a JavaScript function is said to be throttled with a wait time of X milliseconds
// it can only be invoked at most once every X milliseconds
function throttle(func, wait) {
  
    let isExecuted = false
    return(function(...args) {
      if(!isExecuted) {
        func.apply(this, args)
        isExecuted = true
      } else return
      setTimeout(() => isExecuted = false, wait)
    })
  }