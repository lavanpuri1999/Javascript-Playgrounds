// Closures remember the outer function scope even after creation time

// Closures are used in
// 1. Module design pattern
// 2. Currying
// 3. Function like once
// 4. Memoize
// 5. Maintaining state in async world
// 6. setTimeouts
// 7. Iterators
// 8. and many more
// Can be used for data privacy and encapsulation

// Overconsumption of memory if we create a lot of closures

function executeFaultyClosure() {
    for(var i=0;i<6;i++) {
        setTimeout(() => {
            console.log(i) // closure of i set by reference
        }, 1000*i)
    }
}
executeFaultyClosure() // prints 6, 6, 6, 6, 6, 6

function executeCorrectClosureUsingLet() {
    for(let i=0;i<6;i++) {
        setTimeout(() => {
            console.log(i) // closure set by block scope variable
            // thus each i will be different for each iteration due to different block for per iteration
        }, 1000*i)
    }
}
executeCorrectClosureUsingLet() // prints 0, 1, 2, 3, 4, 5

function executeCorrectClosureUsingPassByValue() {
    for(var i=0;i<6;i++) {
        function callIt(i) {
            setTimeout((i) => {
                console.log(i)
            }, 1000*i, i)
        }
        callIt(i) // passing by value not by reference
    }
}
executeCorrectClosureUsingPassByValue() // prints 0, 1, 2, 3, 4, 5
