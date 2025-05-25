const express = require('express');
const router = express.Router();
const { enviarPreinscripcion } = require('../controllers/preinscripcionController');

router.post('/preinscripcion', enviarPreinscripcion);

module.exports = router;