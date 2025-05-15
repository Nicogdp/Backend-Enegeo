//aqui tenemos el modelo de esquema de los que queremos guardar en la base de datos

const { Schema, model } = require('mongoose');

const usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    edad: {
        type: Number,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    rol: {
        type: String,
        default:'usuario',
    }
});

module.exports = model('Usuario', usuarioSchema);
