// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
 }

//Que un dollar es 167.4 Yenes segun mi calculadora"
const fromDollarToYen = function(valueindollar) {
    let valueInYen = valueindollar * 167.4;

    return valueInYen;
 }

//Que un pound es 136.1 Yenes segun mi calculadora"
const fromYenToPound = function(valueinyen) {
    let valueInPounds = valueinyen * 136.1;

    return valueInPounds;
 }

 // We include fromEuroToDollar here as well because it needs to be exported
module.exports = {  fromYenToPound, fromDollarToYen, fromEuroToDollar }


