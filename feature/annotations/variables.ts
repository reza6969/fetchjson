const apples: number = 5;

let tomato: number = 3;
// tomato = 'dfdfdfdfd';

let speed: string = 'fast';
let hasName: boolean = false;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, true, false ];

//  Classes
class Car {

}
let car: Car = new Car();

//object literal
let point: { x: number, y: number } = {
  x: 10,
  y: 20
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};