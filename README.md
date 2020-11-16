#Co2 Emission Calulator

A command-line tool to calculate the Co2 equivalent emitted by a transportation method when travelled certain distance.
Follow below intructions for installing dependencies, running unit-tests and executing the tool.

## Installing dependencies
Execute below command to install dependencies in the folder where `package.json` file is present.

```
npm install
```

## Executing Unit-Tests
Execute below command to execute the unit-tests in the folder where `package.json`. Below command creates the folder `unit-tests-reports` which includes the test report and coverage report.

```
npm run test
```

## Executing the CLI tool
Use below command to execute the CLI tool to find out the Co2 equivalent emission for specified arguments,

```
node lib/emissionCalculator.js --unit-of-distance km --distance 15 --transportation-method medium-diesel-car
```

Use below command to show help for command arguments,

```
node lib/emissionCalculator.js --help
```

## Samples
The command line tool can be called with a numeric `distance` , a `unit-of-distance` (kilometer km or meter m ) and a
`transportation-method`

```
node lib/emissionCalculator.js --transportation-method medium-diesel-car --distance 15 --unit-of-distance km
```

> Your trip caused 2.6kg of CO2-equivalent.

The default value for unit is kilometer `km`.

```
node lib/emissionCalculator.js --distance 1800.5    --transportation-method=large-petrol-car
```

> Your trip caused 507.7kg of CO2-equivalent.

The output shows the amount of CO2-equivalent in kilogram `kg` or gram `g` .

```
node lib/emissionCalculator.js --transportation-method train --distance 14500 --unit-of-distance m
```

> Your trip caused 87g of CO2-equivalent.

```
node lib/emissionCalculator.js --transportation-method train --distance 14500 --unit-of-distance m --output kg
```

> Your trip caused 0.1kg of CO2-equivalent.

Named parameters can be put in any order and either use a space ( ) or equal sign ( = ) between key and value.

```
node lib/emissionCalculator.js --unit-of-distance=km --distance 15 --transportation-method=medium-diesel-car
```

> Your trip caused 2.6kg of CO2-equivalent.
