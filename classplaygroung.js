//console.log("Hello");

const objold = {
    hello : function(cb){ console.log("Entry in hello func , now calling cb"); cb(); }, 
    pic : "Held",
    chapati : function(){console.log(this)},
    anotherone : function(){
        
        this.hello(this.chapati); //THE CALLBACK CALLED(CHAPATI) WILL LOG OUT THW WINDOW OBJECT , SINCE IT IS A CALLBACK FUNCTION 

        console.log(this); //THIS WILL LOG OUT THE obj OBJECT
    }
}

objold.anotherone();

class Animal {
    speak() {   
      console.log(this);
    }
    static eat() {
      console.log(this);
    }
  }

  Animal.prototype.randy = function(){
      console.log("Hello from the other side");
  }

  // speak and randy both functions are added as protoypes of the class Animal.

  let obj = new Animal();
  obj.speak(); // the Animal object
  let speak = obj.speak;
  speak(); // undefined
  
  Animal.eat() // class Animal
  let eat = Animal.eat;
  eat(); // undefined


//ABOVE EXAMPLE IN FUNCTION PROTOTYPAL MANNER, I.E. IN NON STRICT MODE

function AnimalF() { }

AnimalF.prototype.speak = function() {
  console.log(this);
}

AnimalF.eat = function() {
  console.log(this);
}

let objF = new AnimalF();
let speakF = objF.speak;
speakF(); // global object (in non–strict mode)

let eatF = AnimalF.eat;
eatF(); // global object (in non-strict mode)


/*

class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name) {
      super(name); // call the super class constructor and pass in the name parameter
    }
  
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  let d = new Dog('Mitzie');
  d.speak(); // Mitzie barks.

*/

/*

function Animal (name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a noise.`);
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

let d = new Dog('Mitzie');
d.speak(); // Mitzie barks.

// For similar methods, the child's method takes precedence over parent's method

*/

/*

const Animal = {
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
};

class Dog {
  constructor(name) {
    this.name = name;
  }
}

// If you do not do this you will get a TypeError when you invoke speak
Object.setPrototypeOf(Dog.prototype, Animal);

let d = new Dog('Mitzie');
d.speak(); // Mitzie makes a noise

*/