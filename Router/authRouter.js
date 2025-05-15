const express = require('express');
const usuarioModel = require('../model/usuario-model'); // ruta consistente en minúsculas
const { crearUsuario, loginUsuario } = require('../controllers/authController');
const routerAuth = express.Router();

routerAuth.post('/login', loginUsuario);

routerAuth.post('/registro', crearUsuario );

module.exports = routerAuth;
