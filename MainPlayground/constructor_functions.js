// A function that creates an object is called a constructor function
// Classes are basically constructor functions: They also follow the same prototype inheritance chain
// Diff between classes and constructor functions:
// 1. Can write inheritance concepts in a simpler way using classes by using extends keyword
// 2. Function can be called without new keyword, but classes cannot be called without new keyword

function SuperElement(type, content) {
    this.el = document.createElement(type);
    this.el.innerText = content;
    document.body.append(this.el);
    this.el.addEventListener('click', () => {
        console.log(this.el);
    })
}

const array = ['a','b','c'];
const myElements = array.map((item) => {
    return new SuperElement('p', item);
})