// A block in javascript is a set of statements that are grouped together
// using curly braces.
var height = 2; 
let age = 22;
let a = 20;

// this block scope is the same as a function or loop scope
// Scope rules are same in normal functions and arrow functions
{
    const name = 'Lavan'; // in block scope, separate from global scope, cannot be accessed outside the block
    let age = 21; // in block scope, separate from global scope, cannot be accessed outside the block
    var height = 5.8; // in global scope, can be accessed outside the block

    console.log(age, "inside") // 21, shadows the global age variable

    // var a = 10; // Illegal shadowing of the global variable a
    let a = 10; // legal shadowing of the global variable a

    // IMPORTANT: If a variable is shadowing something, it should not cross the boundary of its scope
}

console.log(height) // 5.8
console.log(age, "outside") // 22