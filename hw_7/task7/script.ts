type Driver = {
    [key: string]: unknown;
};

class Car {
    model:string;
    manufacturer:string
    year:number;
    maxSpeed:number
    engineVolume: number;
    driver: Driver | null = null;

    constructor(
        model: string,
        manufacturer: string,
        year: number,
        maxSpeed: number,
        engineVolume: number
    ) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }
    drive(){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }

    info() {
        for (const key in this) {
            console.log(key, this[key])
        }
    }

    increaseMaxSpeed(newSpeed: number): void {
        if (this.maxSpeed > 0){
            this.maxSpeed = this.maxSpeed + newSpeed;
        }
    }

    changeYear(newValue: number): void {
        if (newValue > 1886) {
            this.year = newValue;
        }
    }

    addDriver(driver: Driver): void {
        this.driver = driver;
    };
}

const car1 = new Car('Camry', 'Toyota', 2021, 210, 2.5);
console.log(car1)
// const car2 = new Car('Model 3', 'Tesla', 2023, 250, 0);
// const car3 = new Car('Civic', 'Honda', 2020, 195, 1.6);

car1.drive();

car1.increaseMaxSpeed(30);
car1.drive();

car1.changeYear(2024);
console.log(car1.year);

car1.addDriver({ name: 'Ivan', age: 35, license: 'B' });
console.log(car1.driver)

car1.info();