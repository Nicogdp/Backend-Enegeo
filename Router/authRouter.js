//Aqui generemos los endpoints donde si se hace un pat a la peticion login con un post por ejemplo ejecuta
//toda la logica de login que esta en la carpeta controllers

const express = require('express');
const { crearUsuario, loginUsuario } = require('../controllers/authController');
const routerAuth = express.Router();

routerAuth.post('/login', loginUsuario);

routerAuth.post('/registro', crearUsuario );

module.exports = routerAuth;
