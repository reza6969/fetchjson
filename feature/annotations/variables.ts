const apples: number = 5;

let tomato: number = 3;
// tomato = 'dfdfdfdfd';

let speed: string = 'fast';
let hasName: boolean = false;

// speed.fdgfgfgfdgfdgfdg
speed.toUpperCase();

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

// when to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20};

// coordinates.dsfdfdfdsfdsfds

// 2) When we declare a variable on one line
// and initalizate it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}