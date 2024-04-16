const add = (a: number, b: number): number => { return a + b; };

const subtract = (a: number, b: number): number => { return a - b; };

function divide(a: number, b: number): number { return a / b; };

const multiply = function(a: number, b: number): number { return a * b; };

const logger = (message: string): void => { console.log(message); }

const throwError = (message: string): void => { // never and string final void 
  if(!message) {
    throw new Error(message);
  }

  // return message
}

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

// const logWeather = (forecast: { date: Date, weather: string }): void => {
//   console.log(forecast.date);
//   console.log(forecast.weather);
// };


//ES2015
// const logWeather = ({ date, weather }) => {
//   console.log(date);
//   console.log(weather);
// }

const logWeather = ({date, weather}: { date: Date, weather: string }): void => {
  console.log(date);
  console.log(weather);
};


logWeather(todaysWeather);
export default class Calculator {
  private _add: Function;
  private _subtract: Function;

  constructor(addFunction?: Function, subtractFunction?: Function) {
    this._add = addFunction || add; //function() {}; // Default to no-op if not provided.
    this._subtract = subtractFunction || subtract;
  }
}