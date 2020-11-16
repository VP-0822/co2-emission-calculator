const co2Data = require('../config/co2Data.json');
const {UNIT_OF_DISTANCE} = require('../config/unitInterface.js');

class Co2Calculator {
    constructor(distance, transportationMethod, unitOfDistance) {
        this.distance = distance;
        this.transportationMethod = transportationMethod;
        this.unitOfDistance = unitOfDistance;
        this.validateInput();
    }

    validateInput() {
        // Validate mandatory arguments
        if(!this.distance || this.distance < 0) {
            throw new Error('Please provide valid distance');
        }

        if(!Object.keys(co2Data).includes(this.transportationMethod)) {
            throw new Error('Please provide valid transportation method');
        }
    }
    
    calculateEmission() {
        let emissionRate = co2Data[this.transportationMethod];
        let co2Emission = this.distance * emissionRate;
        return co2Emission;
    }

    updateDistanceForUnit() {
        if(this.unitOfDistance && this.unitOfDistance === UNIT_OF_DISTANCE.METER)  {
            this.distance = this.distance / 1000;
        }
    }

}

module.exports = Co2Calculator;