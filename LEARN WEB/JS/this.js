"use strict";

// this in global space

console.log(this); // globalObject - window , global

// this inside a function 
function x(){
    // the value depends on strict / non-strict mode
    console.log(this);
}

// this inside non-strict mode - (this substitution)

// if the value of this keyword is undefined or null 
// this keyword will be replaced  with globalObject
// only in non strict mode

// this keyword value depends on how the function is called

x(); // undefined 
window.x(); // window

// this inside a object's method

const student = {
    name: "Omil",
    printName: function(){
        console.log(this);
        console.log(this.name);
    },
};

student.printName();
 
const student2 = {
    name: "Deepika", 
};
// call apply bind methods (sharing methods)
student.printName.call(student2); // value of this = student2

// this inside arrow function

const obj = {
    a:10,
    x:() => {
        console.log(this);
    },
};
obj.x();

// this inside resloved arroe function 

const obj2 = {
    a: 20,
    x: function(){
        const y = () => {
            console.log(this);
        };
        y();
    },
};
obj2.x();

// this inside DOM elements => reference to HTML  