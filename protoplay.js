Function.prototype.method = function(fname,func){
    this.prototype[fname] = func;
    return this;
};

Number.method('integer',function() {
    console.log(this);
});

var a = 676;
a.integer();


// THREE TYPES OF INHERITANCE WAYS IN JS : 
// 1. PSEUDOCLASSICAL
// 2. PROTOTYPAL
// 3. FUNCTIONAL

// var obj = function(){
//     this.name = "balh";
// } 

// OR

// function obj(){
//     this.name = "blah";
// }

// THIS IS THE PSEUDOCLASSICAL WAY OF CREATING OBJECTS THAT CAN BE INHERITED USING A CONSTRUCTOR FUNCTION
