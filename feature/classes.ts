class Vehicle {
  // color: string = 'red';
  // color: string;

  // constructor(color: string) {
  //   this.color = color;
  // }
  constructor(public color: string) {}
  // public drive(): void {
  //   console.log('chugga chugga');
  // }

  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color)
// vehicle.drive();
// Property 'honk' is protected and only accessible within class 'Vehicle' and its subclasses.
// vehicle.honk();

const car = new Car(4, 'red');
car.startDrivingProcess();
// car.honk();