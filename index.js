const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

const app = express(); //creamos el servidor
conectarDB();

app.use(express.static('public'));

app.use(express.json())
app.use(cors());
app.use('/api/comentarios', require('./routes/comentario'));

app.listen (process.env.PORT, () => {
    console.log ('Servidor corriendo en el puerto '+ process.env.PORT);
})

