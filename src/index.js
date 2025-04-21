import express from "express";
import cors from "cors"
import Alumno from "./models/alumno.js"
import {sumar, restar, multiplicar, dividir} from "./modules/matematica.js"

const app=express();
const port=3000;
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => { // Ruta raíz
    res.send('Hola mundo'); // Respuesta al cliente
  });
  
app.get('/saludar/:nombre', (req,res)=>{
  let nombre=req.params.nombre;
res.status(200).send('Hola '+nombre)
})
app.get('')
  app.listen(port, () => { // Inicia el servidor en el puerto 3000
    console.log('Servidor escuchando en puerto 3000'); // Mensaje en consola
  });