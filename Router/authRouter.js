const express = require ('express');
const usuarioModel = require('../Model/usuarioModel');
const routerAuth= express.Router();

routerAuth.post('login', (req,res)=> {
    res.send ('Login');
});

routerAuth.post('/registro', async (req,res) =>{
    const{name,edad,email,password} = req.body;
    //validaciones
    if (name === ''|| edad === ''|| email === ''|| password === ''){
        res.send('Todos los campos son obligatorios')
    };

    //en el caso que no exista el correo en la base de datos, creamos una instancia
    const usuario = new usuarioModel(req.body);

    //guardarlo en la base de datos
    await usuario.save();

   res.send('usuario registrado');
});



module.exports= routerAuth;