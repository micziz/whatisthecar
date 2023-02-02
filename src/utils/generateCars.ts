import { cars } from '../cars.js'

export function generateCar(){
    let car1 = cars[Math.floor(Math.random()*cars.length)];
    let car2 = cars[Math.floor(Math.random()*cars.length)];  
    if ( car1 == car2){
      car2 = cars[Math.floor(Math.random()*cars.length)];  
    }
    return [car1, car2]
}