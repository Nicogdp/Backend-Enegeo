//forma de importar node
const express = require ('express');
const app = express();

app.get('/saludo', (req,res)=> {
    res.send ('Hola saludos desde el backend');
});

app.post('/Crearusuario', (req,res) =>{
   res.send('usuario creado');
});

app.delete('/eliminarUsuario', (req,res)=>{
    res.send('Usuario eliminado');
});

app.put('/editarUsuario', (req,res)=>{
    res.send('Usuario editado');
});


app.listen(4000,() => {
    console.log ('ejecutandose en el puerto 4000')
});
