class Car {
	constructor(wheels, speed, color) {
		this.wheels = wheels;
		this.speed = speed;
		this.color = color;
	}

	travel() {
		return this.speed / 4;
	}
}

let truck = new Car(6, 110, "red");
let van = new Car(4, 80, "white");

console.log(truck, van);
console.log(truck.travel(), van.travel());