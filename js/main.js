/* function sum(a, b) {
    return a + b
}; // named function with multiple parameters

let sum2 = (a, b) => a + b; // ARROW: named function with multiple parameters

function isPositive(number) {
    return number >= 0
}; // named function with 1 parameter

let isPositive2 = number => number >= 0; // ARROW: named function with 1 parameter- can drop the (parenthesis) around the parameter when there is only a single parmeter

function randomNumber() {
    return Math.random
}; // named function with no parameters

let randomNumber2 = () => Math.random; // ARROW: named function with no parameters

document.addEventListener('click', function() {
    console.log('Click')
}); // anonymous function

document.addEventListener('click', () => console.log('Click')); */ // ARROW: anonymous function

class Person {
    constructor(name) {
        this.name = name;
    };

    printNameArrow() {
        setTimeout(() => {
            console.log('Arrow: ' + this.name)
        }, 100);
    };

    printNameFunction() {
        setTimeout(function() {
            console.log('Function: ' + this.name);
        }, 100);
    };
};

let person = new Person('Bob');
person.printNameArrow(); // console.log "Arrow: Bob"
person.printNameFunction(); // console.log "Function: "