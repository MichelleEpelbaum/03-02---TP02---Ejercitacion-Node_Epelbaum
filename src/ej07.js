let monedaDelPais, codigoPais;

import{getCurrencyAbbreviation } from 'currency-map-country';

codigoPais = "UK";

monedaDelPais = getCurrencyAbbreviation   (codigoPais);

console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

codigoPais = "UZA";

monedaDelPais = getCurrencyAbbreviation   (codigoPais);

console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);
