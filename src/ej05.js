let miUrl = null;

let miObjeto = null;

miUrl = "http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo";

miObjeto = parsearUrl(miUrl);

console.log(miObjeto);

function parsearUrl(laURL) {

    const myURL = new URL(laURL);

    return {
        host: myURL.host,
        pathname: myURL.pathname ,
        parametros: myURL.searchParams
    }
  
}
