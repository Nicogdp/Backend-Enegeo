const express = require('express');
const { crearProducto, listaProductos, editarProducto, eliminarProducto, listaUsuarios } = require('../controllers/adminController');
const routerAdmin = express.Router();

routerAdmin.post('/crearProducto', crearProducto);

routerAdmin.get('/productos', listaProductos);

routerAdmin.put('/editarProducto', editarProducto);

routerAdmin.delete('/eliminarProducto/:id', eliminarProducto);

routerAdmin.get('/usuarios', listaUsuarios);



module.exports = routerAdmin;
