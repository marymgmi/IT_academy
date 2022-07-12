class Plane {
    constructor(roominess, country, distance, loadCapacity, id) {
        this.roominess = roominess;
        this.country = country;
        this.distance = distance;
        this.loadCapacity = loadCapacity;
        this.id = id;
    }
}

class PlaneBuilder {
    constructor() {
        this.plane = new Plane();
    }

    addRoominess(roominess) {
        this.plane.roominess = roominess; 
        return this;
    }

    addCountry(country) {
        this.plane.country = country; 
        return this;
    }

    addDistance(distance) {
        this.plane.distance = distance; 
        return this;
    }

    addLoadCapacity(loadCapacity) {
        this.plane.loadCapacity = loadCapacity; 
        return this;
    }

    addId(id) {
        this.plane.id = id;
        return this;
    }

    build() {
        return this.plane;
    }

}

class CargoAirplane extends Plane {
    constructor(roominess, country, distance, loadCapacity, id, cargoType) {
        super(roominess, country, distance, loadCapacity, id);
        this.cargoType = cargoType;
    }
}

class CargoAirlineBuilder extends PlaneBuilder {
    constructor() {
        super();
        this.plane = new CargoAirplane();
    }

    addCargoType(cargoType) {
        this.plane.cargoType = cargoType;
        return this;
    }
}

class PassengerAircraft extends Plane {
    constructor(roominess, country, distance, loadCapacity, id, numberOfSeatsInRow) {
        super(roominess, country, distance, loadCapacity, id);
        this.numberOfSeatsInRow = numberOfSeatsInRow;
    }
}

class PassengerAircraftBuilder extends PlaneBuilder {
    constructor() {
        super();
        this.plane = new PassengerAircraft();
    }

    addNumberOfSeatsInRow(numberOfSeatsInRow) {
        this.plane.numberOfSeatsInRow = numberOfSeatsInRow;
        return this;
    }
}

class WarPlane extends Plane {
    constructor(roominess, country, distance, loadCapacity, id, purpose) {
        super(roominess, country, distance, loadCapacity, id);
        this.purpose = purpose;
    }
}

class WarPlaneBuilder extends PlaneBuilder {
    constructor() {
        super();
        this.plane = new WarPlane();
    }

    addPurpose(purpose) {
        this.plane.purpose = purpose;
        return this;
    }
}

class Airline {
    constructor() {
        this.planes = [];
    }

    addPlane(plane) {
        this.planes.push(plane);
    }

    getCommonLoadCapacity() {
        let commonLoadCapacity = 0;
        for(let i = 0; i < this.planes.length; i++) {
           commonLoadCapacity += this.planes[i].loadCapacity;
        }
        return commonLoadCapacity;
    }


    getCommonRoominess() {
        let getCommonRoominess = 0;
        for(let i = 0; i < this.planes.length; i++) {
            getCommonRoominess += this.planes[i].roominess;
        }
        return getCommonRoominess;
    }

    swapElements(planes, i, j) {
        let tmp = planes[i];
        planes[i] = planes[j];
        planes[j] = tmp;  
    }
    
    sortByDisctance() {
        for (let i = 0; i < this.planes.length; i++) {
            for (let j = 0; j < this.planes.length; j++) {
                if (this.planes[i].distance > this.planes[j].distance) {
                    this.swapElements(this.planes, i, j);
                }
            }
        }
    }   

    filterByRoominess(min, max) {
        for (let i = 0; i < this.planes.length; i++) {
            if (min < this.planes[i].roominess && this.planes[i].roominess < max) {
                return this.planes[i];
            }
        }
    }

    printPlanes() {
        for(let i = 0; i < this.planes.length; i++) {
            console.log(this.planes[i]);
        }
    }
}

let mariaAirline = new Airline();

let plane1 = new CargoAirlineBuilder()
                    .addRoominess(100)
                    .addCountry('China')
                    .addDistance(12000)
                    .addLoadCapacity(500)
                    .addCargoType('meal')
                    .addId('Cargo Airplane 1')
                    .build();

let plane2 = new PassengerAircraftBuilder()
                    .addRoominess(85)
                    .addCountry('US')
                    .addDistance(10000)
                    .addLoadCapacity(350)
                    .addNumberOfSeatsInRow(4)
                    .addId('Passenger Airplane 1')
                    .build();

let plane3 = new PassengerAircraftBuilder()
                    .addRoominess(100)
                    .addCountry('US')
                    .addDistance(8000)
                    .addLoadCapacity(200)
                    .addNumberOfSeatsInRow(6)
                    .addId('Passenger Airplane 2')
                    .build();    
                    
let plane4 = new WarPlaneBuilder()
                    .addRoominess(150)
                    .addCountry('Japan')
                    .addDistance(12500)
                    .addLoadCapacity(400)
                    .addPurpose('fighter')
                    .addId('War Plane 1')
                    .build();

let plane5 = new CargoAirlineBuilder()
                    .addRoominess(200)
                    .addCountry('US')
                    .addDistance(7000)
                    .addLoadCapacity(300)
                    .addCargoType('medicaments')
                    .addId('Cargo Airplane 2')
                    .build();

mariaAirline.addPlane(plane1);
mariaAirline.addPlane(plane2);
mariaAirline.addPlane(plane3);
mariaAirline.addPlane(plane4);
mariaAirline.addPlane(plane5);
console.log('Common load capacity: ' + mariaAirline.getCommonLoadCapacity());
console.log('Common roominess: ' + mariaAirline.getCommonRoominess());
mariaAirline.sortByDisctance();
console.log('Sorted planes:');
mariaAirline.printPlanes();
console.log('Plane filtered by roominess: ' + JSON.stringify(mariaAirline.filterByRoominess(50,90)));