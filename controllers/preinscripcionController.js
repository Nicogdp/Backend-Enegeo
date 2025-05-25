const nodemailer = require('nodemailer');

const enviarPreinscripcion = async (req, res) => {
  const { nombre, apellido, email, mensaje } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.CORREO_EMISOR, // tu correo (desde .env)
        pass: process.env.PASS_CORREO_EMISOR, // contraseña de aplicación (desde .env)
      }
    });

    await transporter.sendMail({
      from: `"Web ENERGEO" <${process.env.CORREO_EMISOR}>`,
      to: process.env.CORREO_RECEPTOR, // destino (desde .env)
      subject: 'Nueva preinscripción a cursos',
      html: `
        <h3>Nuevo mensaje de preinscripción</h3>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Apellido:</strong> ${apellido}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
      `
    });

    return res.status(200).json({ ok: true, msg: 'Correo enviado correctamente' });

  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return res.status(500).json({ ok: false, msg: 'Error al enviar el correo' });
  }
};

module.exports = { enviarPreinscripcion };
