//Aqui hacemos la conexion de la bse de datos al backend ya que no esta en el mismo servidor que el backend

const mongoose = require('mongoose');

const dbConection = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN)
    console.log('✅ Conexión a MongoDB establecida con éxito');
  } catch (error) {
    console.error('❌ Error al conectar a la base de datos:', error);
    throw new Error('Fallo la conexión a MongoDB');
  }
};

module.exports = dbConection
;
