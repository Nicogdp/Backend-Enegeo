const express = require('express');
const router = express.Router();
const { enviarConsultaPrecio } = require('../controllers/consultaPrecioController');

router.post('/consultaPrecio', enviarConsultaPrecio);

module.exports = router;
