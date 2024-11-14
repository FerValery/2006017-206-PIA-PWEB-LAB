const express = require('express'); // Importamos Express
const app = express(); // Creamos una instancia de la aplicación Express
const port = 3000; // Definimos el puerto

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Hola desde el back-end!');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});