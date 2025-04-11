import express from "express";
const app=express();
const port=3000;
app.get('/', (req, res) => { // Ruta raíz
    res.send('Hola mundo'); // Respuesta al cliente
  });
  
  app.listen(3000, () => { // Inicia el servidor en el puerto 3000
    console.log('Servidor escuchando en puerto 3000'); // Mensaje en consola
  });