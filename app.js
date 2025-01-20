// app.js

// Definimos el objeto con las tasas de conversión
let oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07,  // dólar estadounidense
    "GBP": 0.87   // libra esterlina
};

// Función para convertir de dólares a yenes
function fromDollarToYen(dollars) {
    let euros = dollars / oneEuroIs["USD"]; // Convertimos dólares a euros
    let yen = euros * oneEuroIs["JPY"]; // Convertimos euros a yenes
    return yen;
}

// Función para convertir de euros a dólares
function fromEuroToDollar(euros) {
    let dollars = euros * oneEuroIs["USD"]; // Convertimos euros a dólares
    return dollars;
}

// Función para convertir de yenes a libras
function fromYenToPound(yen) {
    let euros = yen / oneEuroIs["JPY"]; // Convertimos yenes a euros
    let pounds = euros * oneEuroIs["GBP"]; // Convertimos euros a libras
    return pounds;
}

// Exportamos las funciones para que puedan ser utilizadas en otros archivos
module.exports = {
    fromDollarToYen,
    fromEuroToDollar,
    fromYenToPound
};