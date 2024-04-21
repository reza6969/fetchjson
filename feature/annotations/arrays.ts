const carMakers = ['ford', 'toyota', 'chevy' ]; // type interface
// const carMakers: string[] = ['ford', 'toyota', 'chevy' ]; // type Annotations
// case study
// const carMakers: string[] = []; // initialize the array

const dates = [new Date(), new Date()];

// const carByMake = [
//   ['f150'],
//   ['corolla'],
//   ['camaro']
// ];
const carByMake: string[][] = [];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car;
})

// Flexible types
// const importantDates = [new Date(), '2030-10-10'];
// const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
const importantDates: (Date | string)[] = [new Date() ];
importantDates.push('2030-10-10');
importantDates.push(new Date());
importantDates.push(100);