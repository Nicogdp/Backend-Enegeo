const express = require('express');
const { crearProducto, listaProductos, editarProducto, eliminarProducto, listaUsuarios } = require('../controllers/adminController');
const { validarJwt } = require('../middleware/validarJwt');
const routerAdmin = express.Router();

routerAdmin.post('/crearProducto', validarJwt ,crearProducto);

routerAdmin.get('/productos', validarJwt,listaProductos);

routerAdmin.put('/editarProducto',validarJwt, editarProducto);

routerAdmin.delete('/eliminarProducto/:id', validarJwt,eliminarProducto);

routerAdmin.get('/usuarios',validarJwt, listaUsuarios);



module.exports = routerAdmin;
