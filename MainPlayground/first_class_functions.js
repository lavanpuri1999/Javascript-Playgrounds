// A programming language is said to have First-class functions
// when functions in that language are treated like any other variable

a() // a will run because it was hoisted
b() // this will throw an error because b is not hoisted
// it's a variable that is undefined until the code execution phase reaches line 11

// Function Statement
function a() { 
    console.log('a called');
}

// Function Expression
const b = function() {
    console.log('b called');
}

// Named Function Expression
const c = function xyz() {
    console.log('c called');
}
xyz() // this will throw an error because xyz does not exist in the global scope

function check(param1, param2) { // param1 and param2 are parameters
    console.log(param1, param2);
}

check(1, 2); // 1 and 2 are arguments