const EmissionFormatter = require('../../lib/core/emissionFormatter.js');
const {UNIT_OF_DISTANCE, UNIT_OF_OUTPUT} = require('../../lib/config/unitInterface.js');

describe('Emission Formatter', () => {
    test('should update the co2Emission unit if output unit is kg', () => {
        //given
        let inputCo2Emission = 87;
        let emissionFormatter = new EmissionFormatter(inputCo2Emission, UNIT_OF_DISTANCE.KILOMETER, UNIT_OF_OUTPUT.KILOGRAM);
        let desiredco2Emission = 0.087;

        //when
        emissionFormatter.updateValuesForUnit();

        //then
        expect(emissionFormatter.co2Emission).toBe(desiredco2Emission);
    });

    test('should not update the co2Emission unit if output unit is g', () => {
        //given
        let inputCo2Emission = 87;
        let emissionFormatter = new EmissionFormatter(inputCo2Emission, UNIT_OF_DISTANCE.KILOMETER, UNIT_OF_OUTPUT.GRAM);
        let desiredco2Emission = 87;

        //when
        emissionFormatter.updateValuesForUnit();

        //then
        expect(emissionFormatter.co2Emission).toBe(desiredco2Emission);
    });

    test('should update the unit of output if unit of distance is m and unit of output is not provided', () => {
        //given
        let inputCo2Emission = 87;
        let emissionFormatter = new EmissionFormatter(inputCo2Emission, UNIT_OF_DISTANCE.METER);
        let desiredUnitOfOutput = UNIT_OF_OUTPUT.GRAM;
        let desiredCo2Emission = 87;

        //when
        emissionFormatter.updateValuesForUnit();

        //then
        expect(emissionFormatter.unitOfOutput).toBe(desiredUnitOfOutput);
        expect(emissionFormatter.co2Emission).toBe(desiredCo2Emission);
    });

    test('should update the unit of output and co2 emission if unit of distance is km and unit of output is not provided', () => {
        //given
        let inputCo2Emission = 87;
        let emissionFormatter = new EmissionFormatter(inputCo2Emission, UNIT_OF_DISTANCE.KILOMETER);
        let desiredUnitOfOutput = UNIT_OF_OUTPUT.KILOGRAM;
        let desiredCo2Emission = 87 / 1000;

        //when
        emissionFormatter.updateValuesForUnit();

        //then
        expect(emissionFormatter.unitOfOutput).toBe(desiredUnitOfOutput);
        expect(emissionFormatter.co2Emission).toBe(desiredCo2Emission);
    });

    test('should return co2 emission output string for 87g Co2 emission', () => {
        //given
        let inputCo2Emission = 87;
        let emissionFormatter = new EmissionFormatter(inputCo2Emission, UNIT_OF_DISTANCE.METER);
        let desiredOutputString = 'Your trip caused 87g of CO2-equivalent.';

        //when
        emissionFormatter.updateValuesForUnit();
        let actualOutputString = emissionFormatter.formatOutput();

        //then
        expect(actualOutputString).toBe(desiredOutputString);
    });

    test('should return co2 emission output string for 87g Co2 emission and unit of output is kg', () => {
        //given
        let inputCo2Emission = 87;
        let emissionFormatter = new EmissionFormatter(inputCo2Emission, UNIT_OF_DISTANCE.METER, UNIT_OF_OUTPUT.KILOGRAM);
        let desiredOutputString = 'Your trip caused 0.1kg of CO2-equivalent.';

        //when
        emissionFormatter.updateValuesForUnit();
        let actualOutputString = emissionFormatter.formatOutput();

        //then
        expect(actualOutputString).toBe(desiredOutputString);
    });

});