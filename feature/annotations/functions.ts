const add = (a: number, b: number): number => { return a + b; };

const subtract = (a: number, b: number): number => { return a - b; };

function divide(a: number, b: number): number { return a / b; };

const multiply = function(a: number, b: number): number { return a * b; };

export default class Calculator {
  private _add: Function;
  private _subtract: Function;

  constructor(addFunction?: Function, subtractFunction?: Function) {
    this._add = addFunction || add; //function() {}; // Default to no-op if not provided.
    this._subtract = subtractFunction || subtract;
  }
}