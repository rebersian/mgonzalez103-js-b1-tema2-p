//T2: Clases / Classes
//U6: Serialización de objetos con JSON / Serialització d'objectes amb JSON
/** 
  -- CASTELLANO
  -- EJERCICIO 2.6.2 ENUNCIADO: 
	Dado en el valor de la constante denominada myJSON, un texto plano en formato JSON que contiene la descripción de un Array con tres objetos de la clase Car,
  vista en el ejercicio 2.5.2. Se nos pide:
	- Definir en una constante denominada myCars un Array de objetos Car a partir de este texto.
	- Obtener un nuevo Array en otra constante (a la que llamaremos lessThan25) todos los coches definidos en el Array anterior (myCars) 
  que tienen una antiguedad inferior a 25 años.
	- Pasar este nuevo Array a un texto plano JSON en una nueva constante denominada newCarsJSON.
	
  
  -- CATALÀ
  -- EXERCICI 2.6.2 ENUNCIAT:
	Donat el valor de la constant anomenada myJSON, un text pla en format JSON que conté la descripció d'un Array amb tres objectes de la classe Car,
  vista a l'exercici 2.5.2. Se'ns demana:
	- Definir en una constant anomenada myCars un Array d'objectes Car a partir d'aquest text.
	- Obtenir un nou Array en una altra constant (a la qual anomenarem lessThan25) tots els cotxes definits a l'Array anterior (myCars) 
  que tenen una antiguitat inferior a 25 anys.
	- Passar aquest nou Array a un text pla JSON en una nova constant anomenada newCarsJSON.
*/

const myJSON= '[{"brand":"Ford","model":"Mustang Boss 429","displacement":7000,"horsePower":375,"year":1969},{"brand":"BMW","model":"520d","displacement":1980,"horsePower":136,"year":2002},{"brand":"Mercedes-Benz","model":"280 SLC","displacement":2746,"horsePower":136,"year":1979}]';

// MGG - myCars, lessThan25, newCarsJSON
class Car {
  constructor(brand, model, displacement, horsePower, year) {
    this.brand = brand;
    this.model = model;
    this.displacement = displacement;
    this.horsePower = horsePower;
    this.year = year;
  }

  set carAntiguaty(antiguaty) {
    this.year = 2023 - antiguaty;
  }

  get getCarDescription() {
    return `${this.brand} ${this.model} ${this.displacement}cc`;
  }

  get getCarAntiguaty(){
    return this.carAntiguaty;
  }

  cv2kw() {
	  return this.horsePower*0.736;
  }

  static compareAntiguaty(car1, car2) {
	  return car1.year < car2.year ? car1 : car2;
  }

  static maxDisplacement(cars) {
    let max = cars[0];
    for (let i=1; i<cars.length; i++) {
      if (cars[i].displacement>max.displacement) max = cars[i];
    }
    return max;
  }
}

function menosDe25(car) {
    if (2026-car.year<25) return car;
}

const myCars = JSON.parse(myJSON);
const lessThan25 = myCars.filter(menosDe25);
const newCarsJSON = JSON.stringify(lessThan25);

// MGG - para pruebas unitarias
// console.log(myCars);
// console.log(lessThan25);
// console.log(newCarsJSON);

/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, 
 * if you run this code outside of this environment, 
 * please comment or remove the following lines
 */
export function tests() {
  return [myCars, lessThan25, newCarsJSON];
}