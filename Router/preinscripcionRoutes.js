const express = require('express');
const router = express.Router();
const { enviarPreinscripcion } = require('../controllers/preinscripcionController');

// Ruta POST para recibir preinscripciones
router.post('/preinscripcion', enviarPreinscripcion);

module.exports = router;





