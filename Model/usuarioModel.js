const {Schema, Model} = require ('mongoose');

const usuarioSchema = Schema ({
    name:{
        type : String,
        required: true,
    },

    edad:{
        type: Number,
    },

    email:{
        type: String,
        required: true,
    },

    password:{
        type: String,
        required:true,
    },
});

module.exports = ('Usuarios', usuarioSchema);