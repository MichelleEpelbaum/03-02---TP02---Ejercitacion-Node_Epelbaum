let miUrl = null;

let miObjeto = null;

miUrl = "una url";

miObjeto = parsearUrl(miUrl);

console.log(miObjeto);

function parsearUrl(laURL) {

    const myURL = new URL(laURL);
    try{
    return {
        host: myURL.host,
        pathname: myURL.pathname ,
        parametros: myURL.searchParams
    }
    }catch(exeption){
    console.log(exeption)
}
}
