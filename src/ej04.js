import fs from "fs";
import { copyFile } from "node:fs/promises";

const ARCHIVO_ENTRADA = "./archivo-entrada.txt";

const ARCHIVO_SALIDA = "./archivo-salida.txt";

console.clear();

copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);


async function copiar(origen, destino) {
    
        await copyFile(origen, destino);
        console.log(`copiado ${origen} a ${destino}`);
}
