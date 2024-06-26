const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// const pepsi = ['brown', true, 40];
// pepsi[0] = 40;
// pepsi[2] =  'brown';
const pepsi: [string, boolean, number] = ['brown', true, 40];
pepsi[0] = 40 ;

// Type alias
type Drink = [string, boolean, number];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354
}