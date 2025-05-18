/*

Some things that you can do using the DOM APIs
1. Manage Elements
2. Add content
3. Add attributes
4. Add event listeners
5. Add event listeners
6. Create Elements
7. Add/Remove them

Basically: Get total control of the document object model

*/

document.onclick = () => {
    console.log('HELLO DOM')
}

document.body.append('APPEND THIS NEW THING')

const myHeading = document.createElement('h1')
myHeading.innerText = "I am a header"
document.body.appendChild(myHeading) // can only insert an HTML element, not a string or anything else

myHeading.remove() // remove this

document.getElementsByClassName('blue') 
document.getElementsByTagName('p')
document.querySelector('.blue') // Gives only one element with class blue
document.querySelectorAll('.blue') // Array of elements with class blue

// const newUrl = new URL(window.location)
// window.location = newUrl + "/wowire"