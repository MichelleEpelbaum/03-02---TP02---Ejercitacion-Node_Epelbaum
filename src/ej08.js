import { OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID } from './modules/omdb-wrapper.js';
// Test de la función OMDBSearchByPage
let resultado = await OMDBSearchByPage("cars", 1);
console.log("OMDBSearchByPage", resultado);

// Test de la función OMDBSearchComplete
resultado = await OMDBSearchComplete("cars");
console.log("OMDBSearchComplete", resultado);

// Test de la función OMDBGetByImdbID
resultado = await OMDBGetByImdbID("tt0317219"); // Un ejemplo de IMDB ID
console.log("OMDBGetByImdbID", resultado);