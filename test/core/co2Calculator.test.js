const Co2Calculator = require('../../lib/core/co2Calculator.js');
const {UNIT_OF_DISTANCE} = require('../../lib/config/unitInterface.js');

describe('Co2 calculator', () => {
    test('should not update distance value for km unit', () => {
        //given
        let inputDistance = 15;
        let co2Calculator = new Co2Calculator(inputDistance, 'bus', UNIT_OF_DISTANCE.KILOMETER);
        let desiredDistance = 15;

        //when
        co2Calculator.updateDistanceForUnit();

        //then
        expect(co2Calculator.distance).toBe(desiredDistance);
    });

    test('should update distance value for m unit', () => {
        //given
        let inputDistance = 15230;
        let co2Calculator = new Co2Calculator(inputDistance, 'bus', UNIT_OF_DISTANCE.METER);
        let desiredDistance = 15.23;

        //when
        co2Calculator.updateDistanceForUnit();

        //then
        expect(co2Calculator.distance).toBe(desiredDistance);
    });

    test('should return co2 emission result for 14500m of train travel', () => {
        //given
        let inputDistance = 14500;
        let co2Calculator = new Co2Calculator(inputDistance, 'train', UNIT_OF_DISTANCE.METER);
        let desiredEmission = 87;

        //when
        co2Calculator.updateDistanceForUnit();
        let actualEmission = co2Calculator.calculateEmission();

        //then
        expect(actualEmission).toBe(desiredEmission);
    });

    test('should return co2 emission result for 1800.5km of large-petrol-car travel', () => {
        //given
        let inputDistance = 1800.5;
        let co2Calculator = new Co2Calculator(inputDistance, 'large-petrol-car', UNIT_OF_DISTANCE.KILOMETER);
        let desiredEmission = 507.741 * 1000;

        //when
        co2Calculator.updateDistanceForUnit();
        let actualEmission = co2Calculator.calculateEmission();

        //then
        expect(actualEmission).toBe(desiredEmission);
    });

    test('should give error if mandatory parameter input distance is not provided', () => {
        expect(() => new Co2Calculator(undefined, 'bus', UNIT_OF_DISTANCE.KILOMETER)).toThrowError(new Error('Please provide valid distance'));
    });

    test('should give error if mandatory parameter input distance provided is negative', () => {
        expect(() => new Co2Calculator(-10, 'bus', UNIT_OF_DISTANCE.KILOMETER)).toThrowError(new Error('Please provide valid distance'));
    });

    test('should give error if mandatory parameter transportation method is not provided', () => {
        expect(() => new Co2Calculator(95, undefined, UNIT_OF_DISTANCE.KILOMETER)).toThrowError(new Error('Please provide valid transportation method'));
    });

    test('should give error if mandatory parameter transportation method is not valid', () => {
        expect(() => new Co2Calculator(95, 'my-car', UNIT_OF_DISTANCE.KILOMETER)).toThrowError(new Error('Please provide valid transportation method'));
    });
});