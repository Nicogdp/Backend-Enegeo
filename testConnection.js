const { MongoClient } = require("mongodb");

const uri = "mongodb://Nicolas:EG2AOgRpmBznl1A9@ac-r2xx9db-shard-00-00.9csdzz0.mongodb.net:27017,ac-r2xx9db-shard-00-01.9csdzz0.mongodb.net:27017,ac-r2xx9db-shard-00-02.9csdzz0.mongodb.net:27017/?ssl=true&replicaSet=atlas-z146wb-shard-0&authSource=admin&retryWrites=true&w=majority";


async function testConnection() {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: true,
    tlsAllowInvalidCertificates: true, // 👈 esto relaja el chequeo de certificados SSL
  });

  try {
    await client.connect();
    console.log("✅ ¡Conexión exitosa a MongoDB Atlas!");
  } catch (error) {
    console.error("❌ Error al conectar:", error);
  } finally {
    await client.close();
  }
}

testConnection();
