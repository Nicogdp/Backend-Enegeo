require('dotenv').config();

//forma de importar node
const express = require ('express');
const dbConection = require('./dataBase/config');
const cors = require('cors');
const app = express();
const consultaPrecioRoutes = require('./routes/consultaPrecio');
const allowedOrigins = [
  'http://localhost:5173',
  'https://energeotuc.netlify.app'
];



app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

//lectura y parseo del body
app.use(express.json());

app.use('/auth', require ('./Router/authRouter'));
app.use('/admin', require ('./Router/adminRouter'));
app.use('/api', require('./Router/preinscripcionRoutes'));
app.use('/api/email', consultaPrecioRoutes);

dbConection();


app.listen(process.env.PORTLOCAL,() => {
    console.log (`Ejecutandose en el puerto ${process.env.PORTLOCAL}`)
});
