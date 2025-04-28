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
  
//A

app.get('/saludar/:nombre', (req,res)=>{
  let nombre=req.params.nombre;
res.status(200).send('Hola '+nombre)
})
app.get('/validarfecha/:anio/:mes/:dia', (req, res)=>{
  
   const anio=req.params.anio
  const mes=req.params.mes
  const dia=req.params.dia
  const fecha = new Date(anio, mes, dia)
  if(Number.isNaN(Date.parse(fecha)))
  {
    res.status(404).send('fecha invalida')
  }
  else{res.status(200).send('fecha valida')}
})

//B

app.get('/matematica/sumar', (req, res)=>{
  let num1=parseInt(req.query.num1)
  let num2=parseInt(req.query.num2)
  let resultado=sumar(num1, num2)
res.status(200).send(resultado)
})

app.get('/matematica/restar', (req, res)=>{
  let num1=parseInt(req.query.num1)
  let num2=parseInt(req.query.num2)
  let resultado=restar(num1, num2)
res.status(200).send(resultado)
})

app.get('/matematica/multiplicar', (req, res)=>{
  let num1=parseInt(req.query.num1)
  let num2=parseInt(req.query.num2)
  let resultado=multiplicar(num1, num2)
res.status(200).send(resultado)
})

app.get('/matematica/dividir', (req, res)=>{
  let num1=parseInt(req.query.num1)
  let num2=parseInt(req.query.num2)
  let resultado=dividir(num1, num2)
  if(num1%num2>0)
  {
    res.status(404).send('El divisor no puede ser cero')
  }
  else{res.status(200).send(resultado)}//no termine

})



app.get('/alumno', (req, res)=>{
  res.status(200).send('OK')
})
app.get('/alumno', (req, res)=>{
  let dni=parseInt(req.query.dni)
  //falta buscar los alumnos por el dni
})





app.get('')
  app.listen(port, () => { // Inicia el servidor en el puerto 3000
    console.log('Servidor escuchando en puerto 3000'); // Mensaje en consola
  });