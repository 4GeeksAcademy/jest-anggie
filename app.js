// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)


// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return parseFloat(valueInDollar.toFixed(2));
}

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * 127.9;
    return parseFloat(valueInYen.toFixed(2));
}

const fromYenToPound =  function(valueInYen) {
    let valueInPounds = valueInYen * 0.8;
    return parseFloat(valueInPounds.toFixed(2));
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };