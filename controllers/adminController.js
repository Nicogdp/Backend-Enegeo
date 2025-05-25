const productoModel = require("../model/producto-model");
const usuarioModel = require("../model/usuario-model")


const crearProducto = async (req,res)  => {
    try {
        const {nombre,precio,descripcion} = req.body;

    //validacione
    //...
    //fin de las validaciones

    //verificar si el producto existe
    //  let productoValidar = await productoModel.findOne({nombre});
    //     if (productoValidar){
    //        return res.status(400).json({
    //         msg: 'El producto que intenta cargar ya existe'
    //        })
    //     }

    producto = new productoModel(req.body)
    
        //guardamos en la base de datos
     await producto.save();

     return res.status(201).json({msg: 'producto creado'})

    } catch (error) {
       return res.status(500).json({msg:'contactese con un administrador'})
    }
 
    
};

const listaProductos = async (req,res) => {
    try {
        //si al metodo findo no le pongo nada en el parametro me retornara todo el arreglo
        const listaProductos = await productoModel.find();

       return res.status(200).json({msg:'lista de productos enviada',listaProductos,})

    } catch (error) {
        return   res.status(500).json({msg:'error, contactese con un administrador'})
    }
}

const editarProducto = async (req,res) => {
    try {
        
        const productoEditar = productoModel.findById(req.body._id)

        if(!productoEditar){
            res.status(400).json({msg:'El producto que desea editar no existe'});
        };

        //si el producto que queremos editar existe buscamos por el id en toda la lista 
        // y reemplazamos el valor encontrado por el que mando el usuario
       await productoModel.findByIdAndUpdate(req.body._id, req.body)

       return res.status(200).json({msg:'producto editado'})
        
    } catch (error) {
        return res.status(500).json({msg:'error, contactese con un administrador'})
    }

}

const eliminarProducto = async (req,res) => {
    try {
        //recibimos por parametro el id del producto que queremos eliminar y lo comparamos con todos los id de la
        //base de datos del modelo producto
        const productoEliminar = await productoModel.findById(req.params.id);

        if(!productoEliminar){
             res.status(400).json({msg:'No existe ningun producto con esta id'});
        }

        //en caso de que el producto que quiera eliminar se encuentre buscamos por id y
        // el que coincida lo elimina de la base de datos.
        await productoModel.findByIdAndDelete(req.params.id)


        return res.status(200).json({msg:'producto eliminado'})

        
    } catch (error) {
       return res.status(500).json({msg:'error, contactese con un administrador'})
    }

}

const listaUsuarios = async (req,res) =>{
    try {
        const listaUsuarios = await usuarioModel.find();

       return res.status(200).json({msg:'lista de usuarios enviada',listaUsuarios,})



    } catch (error) {
        return  res.status(500).json({msg:'error, contactese con un administrador'})
    }
}

module.exports = {crearProducto,listaProductos,editarProducto,eliminarProducto,listaUsuarios};