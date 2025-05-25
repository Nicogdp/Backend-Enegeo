const usuarioModel = require("../model/usuario-model");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const crearUsuario = async (req, res) => {
   try {
    const {nombre, edad, email, password} = req.body;

    //validaciones
    if (nombre === '' || edad === '' || email === '' || password === '') {
        res.status(400).json({msg: 'todos los campos son obligatorios'})
    }

    //verificamos que el correo ingresado no este registrado
    let usuario = await usuarioModel.findOne({email});
    if (usuario){
       return res.status(400).json({
        msg: 'El usuario que intenta ingresar ya esta registrado'
       })
    }

    //en el caso que el correo no exista en la base de datos creamos una instancia
    usuario = new usuarioModel(req.body)

    //encriptamos password
    //el primer argumento representa la robustes de la contraseña, mayor numero mayor robustes
    //el segundo argumento va encriptar el valor que queremos
    const salt = bcrypt.genSaltSync(10);
    usuario.password = bcrypt.hashSync(password, salt);
  

    //guardamos en la base de datos
    await usuario.save();

    res.status(201).json({msg:'usuario creado'});

   } catch (error) {
    res.status(500).json ({msg: 'por favor contactarse con un administrador'})
   }
}


const loginUsuario = async (req, res) => {
    try {
        const {email, password} = req.body;
    
        if (email === '' || password === ''){
            res.status(400).json({msg: 'Todos los campos son obligatorios'});
        }
        
         // . Admin hardcodeado
        if (email === 'admin@energeo.com' && password === '1234') {
              const token = jwt.sign(
          { email, rol: 'admin' },
           process.env.SECRET_JWT,
        { expiresIn: '22h' }
      );

          return res.status(200).json({
            msg: 'Admin logueado con éxito',
           token,
            rol: 'admin'
       });
    }
    
        let usuario = await usuarioModel.findOne({email});
        if(!usuario){
            return res.status(400).json({msg:'El email o la contraseña es incorrecto'});
        }
    
        //validar password,vamos a validar la contraseña que encontre con la que utilizo el usuario
        const validarPassword =  bcrypt.compareSync(password, usuario.password); 
        if(!validarPassword){
            res.status(400).json({msg: 'El email o la contraseña es incorrecto'})
        }

        //creamos un objeto el cual definimos los datos que vamos a guardar
        const payLoad = {
            nombre: usuario.nombre,
            rol: usuario.rol,
          
        };

        const token = jwt.sign(payLoad,process.env.SECRET_JWT,{
            expiresIn: "22h",
        
        });

        res.status(200).json({msg:'Usuario logueado con exito',token})
        




    } catch (error) {
        console.log(error)
        
    }

}

module.exports = {crearUsuario, loginUsuario}