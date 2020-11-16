const {UNIT_OF_DISTANCE, UNIT_OF_OUTPUT} = require('../config/unitInterface.js');

class EmissionFormatter {
    constructor(co2Emission, unitOfDistance, unitOfOutput) {
        this.co2Emission = co2Emission;
        this.unitOfDistance = unitOfDistance;
        this.unitOfOutput = unitOfOutput;
    }

    formatOutput() {
        return `Your trip caused ${Number((this.co2Emission).toFixed(1))}${this.unitOfOutput} of CO2-equivalent.`;
    }

    updateValuesForUnit() {
        if(!this.unitOfOutput) {
            // convert co2emission when unit of output is not provided and unit of distance is km.
            if(!this.unitOfDistance || this.unitOfDistance === UNIT_OF_DISTANCE.KILOMETER) {
                this.co2Emission = this.co2Emission / 1000;
                this.unitOfOutput = UNIT_OF_OUTPUT.KILOGRAM;
            } else {
                this.unitOfOutput = UNIT_OF_OUTPUT.GRAM;
            }
        } else if(this.unitOfOutput === UNIT_OF_OUTPUT.KILOGRAM) {
            this.co2Emission = this.co2Emission / 1000;
        }
    }
}

module.exports = EmissionFormatter;