require('dotenv').config();


//forma de importar node
const express = require ('express');
const dbConection = require('./dataBase/config');
const app = express();

//lectura y parseo del body
app.use(express.json());

app.use('/auth', require ('./Router/authRouter'));

dbConection();


app.listen(process.env.PORTLOCAL,() => {
    console.log (`Ejecutandose en el puerto ${process.env.PORTLOCAL}`)
});
