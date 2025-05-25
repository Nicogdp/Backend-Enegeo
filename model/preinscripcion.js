// models/Preinscripcion.js
const mongoose = require('mongoose');

const PreinscripcionSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  email: String,
  mensaje: String,
  fecha: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Preinscripcion', PreinscripcionSchema);
