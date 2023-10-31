"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createCar(manufacturer, modelName, ...options) {
    const car = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    options.forEach(option => {
        if (typeof option === 'object') {
            Object.assign(car, option);
        }
    });
    return car;
}
const carInfo = createCar('Toyota', 'Corolla');
const carInfo2 = createCar('Kia', 'Sportage', { year: 2020 }, { color: 'Blue' });
const carInfo3 = createCar('Suzuki', 'Swift', { color: 'Silver' }, { Feature: 'Airbag' });
const carInfo4 = createCar('Audi', 'E-Tron GT', { year: 2023 }, { color: 'black' }, { Feature: 'Lithium-ion Batteries' });
console.log(carInfo);
console.log(carInfo2);
console.log(carInfo3);
console.log(carInfo4);
