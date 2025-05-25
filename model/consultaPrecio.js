const mongoose = require('mongoose');

const ConsultaPrecioSchema = new mongoose.Schema({
  nombre: String,
  email: String,
  negocio: String,
  telefono: number,
  mensaje: String,
});

module.exports = mongoose.model('ConsultaPrecio', ConsultaPrecioSchema);
