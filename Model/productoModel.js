const {Schema, Model, model} = require ('mongoose');

const productoSchema = Schema ({
    nombreProducto:{
        type : String,
        required: true,
    },

    precio:{
        type: Number,
        required:true
    },
    
    stock:{
        type: Boolean,
        required:true,
    },
});

module.exports= model ('Productos', productoSchema);