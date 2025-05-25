const express = require('express');
const router = express.Router();
const { enviarConsultaPrecio } = require('../controllers/consultaPrecioController');

router.post('/consulta-precio', enviarConsultaPrecio);

module.exports = router;
