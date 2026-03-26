//T2: Clases / Classes
//U5: Métodos de instancia y métodos de clase / Mètodes d'instància i mètodes de classe
/** 
  -- CASTELLANO
  -- EJERCICIO 2.5.2 ENUNCIADO: 
	Se nos pide, basándonos en todo lo definido en el ejercicio 2.3.1, ampliar la definición de la clase "Car" que representará los distintos coches que se venden
	en un concesionario, de manera que podamos cubrir las siguientes nuevas funcionalidades:  
	- Se pretende implementar una nueva funcionalidad (compareAntiguaty) en donde, dados dos vehículos, se nos devuelva como resultado el vehículo más antiguo 
	(en base a la propiedad year).
	- Tambien es necesario saber, dado un Array que contenga una serie de vehículos, cuál es el de mayor cilindrada (especificada en la propiedad displacement)
	con un nuevo método llamado maxDisplacement.
	- Así mismo, nos piden, con el fin de poder comparar la potencia de los coches clásicos del concesionario con las potencias de los actuales coches eléctricos
	un método (al que llamaremos cv2kw) que nos devuelva la potencia en kW (KiloWatts) a partir de la potencia en CV (Caballos) del vehículo
  (Nota:la equivalencia es 1 CV = 0,736 kW)
  
  En base a la funcionalidad solicitada deberéis decidir qué métodos definís como Métodos de Instancia y cuáles definís como Métodos de Clase.
  Finalmente, crea almenos 3 objetos de la clase Car y haz 3 llamadas a estos nuevos métodos.
  
  -- CATALÀ
  -- EXERCICI 2.5.2 ENUNCIAT:
	Se'ns demana, basant-nos en tot allò definit a l'exercici 2.3.1, ampliar la definició de la classe "Car" que representarà els diferents cotxes que es venen
	en un concessionari, de manera que puguem cobrir les noves funcionalitats següents:
	- Es pretén implementar una nova funcionalitat (compareAntiguaty) on, donats dos vehicles, se'ns torni com a resultat el vehicle més antic
	(en base a la propietat year).
	- També cal saber, donat un Array que contingui una sèrie de vehicles, quin és el de major cilindrada (especificada a la propietat displacement)
	amb un nou mètode anomenat maxDisplacement.
	- Així mateix, ens demanen, per tal de poder comparar la potència dels cotxes clàssics del concessionari amb les potències dels actuals cotxes elèctrics
	un mètode (al qual anomenarem cv2kw) que ens retorni la potència en kW (KiloWatts) a partir de la potència en CV (Cavalls) del vehicle 
  (Nota: l'equivalència és 1 CV = 0,736 kW)
  
	En base a la funcionalitat sol·licitada haureu de decidir quins mètodes definiu com a Mètodes d'Instància i quins definiu com a Mètodes de Classe.
	Finalment, crea almenys 3 objectes de la classe Car i fes 3 crides a aquests nous mètodes.
*/

// MGG - dado Car, implementar compareAntiguaty, maxDisplacement y cv2kw
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
 
const myCar1 = new Car("Ford", "Mustang Boss 429", 7000, 375, 1969);
const myCar2 = new Car("BMW", "520d", 1980, 136, 2002);
const myCar3 = new Car("Mercedes-Benz", "280 SLC", 9746, 136, 1979);

let compareAntiguaty = Car.compareAntiguaty(myCar1, myCar2);
let maxDisplacement = Car.maxDisplacement([myCar1, myCar2, myCar3]);
let cv2kw = myCar2.cv2kw();

// MGG - pruebas unitarias
// console.log("compareAntiguaty = "+JSON.stringify(compareAntiguaty));
// console.log("maxDisplacement = "+JSON.stringify(maxDisplacement));
// console.log("cv2kw = "+cv2kw);

/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, 
 * if you run this code outside of this environment, 
 * please comment or remove the following lines
 */
export function tests() {
    return Car;
}