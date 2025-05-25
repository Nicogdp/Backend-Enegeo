//aqui tenemos el modelo de esquema de los que queremos guardar en la base de datos

const { Schema, model } = require('mongoose');

const productoSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    precio:{
        type: Number,
        required: true,
    },
    descripcion:{
        type: String,
        required: true,
    },
    imagen:{
        type:String,
        required:true,
    }
});

module.exports = model('Productos', productoSchema);