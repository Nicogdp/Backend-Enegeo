const jwt = require('jsonwebtoken');

const validarJwt = (req,res,next) => {
    try {
        //recibimos el token atravez de los headers y le ponemos un nombre en este caso x-token
        const token = req.header('x-token');
    
        //si no recibimos un token por ejemplo lo borraron del localStorage tiramos el error
        if(!token){
            return res.status(401).json({msg: 'No hay token en la peticion'});
        };
        

        const verificarToken = jwt.verify(token,process.env.SECRET_JWT);
        console.log(verificarToken)
    } catch (error) {
        res.status(401).json({msg:'Token vencido'})
    };

    //next deja ejecutar el siguienete middleware y si no hay mas ejecuta la funicon del flujo
    next();
};

module.exports={validarJwt};

