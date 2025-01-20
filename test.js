// test.js

// Importamos las funciones desde app.js
const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

// Prueba para la conversión de euros a dólares
test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5); // Llamamos a la función
    const expected = 3.5 * 1.07; // Calculamos el valor esperado
    expect(dollars).toBeCloseTo(expected); // Comparamos el resultado con el valor esperado
});

// Prueba para la conversión de dólares a yenes
test("One dollar should be 156.5 yens", function() {
    const yens = fromDollarToYen(1); // Llamamos a la función
    const expected = (1 / 1.07) * 156.5; // Calculamos el valor esperado
    expect(yens).toBeCloseTo(expected); // Comparamos el resultado con el valor esperado
});

// Prueba para la conversión de yenes a libras
test("One pound should be 136.1 yen", function() {
    const pounds = fromYenToPound(1); // Llamamos a la función
    const expected = (1 / 156.5) * 0.87; // Calculamos el valor esperado
    expect(pounds).toBeCloseTo(expected); // Comparamos el resultado con el valor esperado
});