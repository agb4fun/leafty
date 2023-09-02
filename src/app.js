const express = require('express');
const app = express()
require('dotenv').config()


//Levantar el servidor
const port = process.env.port
app.listen(port, () => {
    console.log(`servidor ejecutandose en http://localhost:${port}`)}
);

