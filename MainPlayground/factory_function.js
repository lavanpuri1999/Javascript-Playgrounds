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