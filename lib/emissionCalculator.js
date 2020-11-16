const Co2Calculator = require('./core/co2Calculator.js');
const EmissionFormatter = require('./core/emissionFormatter.js');
let { argv } = require("yargs")
    .scriptName("co2-calculator")
    .usage("Usage: $0 --distance num --transportation-method string --unit-of-distance string --output string")
    .example(
        "$0 --distance 15 --transportation-method train --unit-of-distance km --output kg",
        "Returns the CO2-equivalent emission in kg for 15km of train travel."
    )
    .option("distance", {
        alias: "d",
        describe: "The distance of travel.",
        demandOption: "The distance is required.",
        type: "number",
        nargs: 1,
    })
    .option("transportation-method", {
        alias: "t",
        describe: "The mode used for transportation.",
        demandOption: "The transportation-method is required.",
        type: "string",
        nargs: 1,
    })
    .option("unit-of-distance", {
        alias: "u",
        describe: "The unit for distance specified.",
        default: 'km',
        type: "string",
        nargs: 1,
    })
    .option("output", {
        alias: "o",
        describe: "The unit in which output is displayed.",
        type: "string",
        nargs: 1,
    })
    .describe("help", "Show help.");

let co2Calculator = new Co2Calculator(argv.d, argv.t, argv.u);
co2Calculator.updateDistanceForUnit();
let co2Emission = co2Calculator.calculateEmission();

let outputFormatter = new EmissionFormatter(co2Emission, argv.u, argv.o);
outputFormatter.updateValuesForUnit();
let formattedOutput = outputFormatter.formatOutput();
console.log(formattedOutput);