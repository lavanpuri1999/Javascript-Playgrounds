//console.log("Hello");

function Person(){
    this.spec = "human";
    this.name = "Mark";
}

Person.prototype.greeting = function(){
    console.log("Hello "+this.spec+" named "+this.name);
}

function Student(){
    this.genre = "Student";
    this.nick = "Marques";
    Person.apply(this);
}

Student.prototype = Object.create(Person.prototype);


Student.prototype.swaggy = function(){
    console.log("Hello "+this.genre+" nicknamed " + this.nick);
}

Student.pinkie = "This is pinkie"; // THIS ALSO NEEDS TO BE A PROTOTYPE PROPERTY FOR COLLEGESTUDENT TO ACCESS IT, OTHERWISE Collegestudent.pinkie WILL SHOW UNDEFINED

Object.defineProperty(Student.prototype, 'constructor', {
    value: Student,
    enumerable: false, // so that it does not appear in 'for in' loop
    writable: true 
});


function CollegeStudent(){
    this.college = "Vit";
    Student.apply(this); //IF WE REMOVE STUDENT.APPLY(THIS) THEN THE NON PROTOTYPE PROPERTIES(EX. Genre , Nick etc.) OF STUDENT AND PERSON WILL NOT BE INHERITED TO COLLEGESTUDENT
}

CollegeStudent.prototype = Object.create(Student.prototype);

CollegeStudent.prototype.hola = function(){
    console.log("Hola VITIANS");
}

Object.defineProperty(CollegeStudent.prototype, 'constructor', {
    value: CollegeStudent,
    enumerable: false, // so that it does not appear in 'for in' loop
    writable: true 
});

const person1 = new Person();
const student1 = new Student();
const collegestu1 = new CollegeStudent();

console.log(person1);
console.log(student1);
console.log(collegestu1);

console.log(Person.prototype);
console.log(Student.prototype);
console.log(CollegeStudent.prototype);

collegestu1.greeting();
collegestu1.swaggy();
collegestu1.hola();
console.log(collegestu1.pinkie); //Undefined coz of not being protoype property


//TO SIMPLIFY : PROPERTIES DECLARED DURING FUNCTION DEFINITION ARE NON PROTOTYPE AND WILL BE APPLIED USING 'APPLY' TO THE NEXT FUNCTION OBJECT
// THAT WILL USE THE PREVIOUS ONE AS ITS PROTOTYPE (BUT THESE PROPERTIES WILL NOT BE PART OF PROTOTYPE CHAIN ANY FURTHER CAUSE THEY WILL EXIST AS NEW COPIES IN THE CHILD FUNC).
// OTHER PROPERTIES DECLARED AS FUNCNAME.PROTOTYPE.VALUENAME WILL BE TRANSFERED AUTOMATICALLY WHEN WE DO CHILDFUNCTION.PROTOTYPE = OBJECT.CREATE(PARENTFUNC.PROTOTYPE)