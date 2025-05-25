const nodemailer = require('nodemailer');


const enviarConsultaPrecio = async (req, res) => {
  const { nombre, email, negocio, telefono, mensaje } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.CORREO_EMISOR,
        pass: process.env.PASS_CORREO_EMISOR,
      }
    });

    await transporter.sendMail({
      from: `"Web ENERGEO" <${process.env.CORREO_EMISOR}>`,
      to: process.env.CORREO_RECEPTOR,
      subject: 'Nueva consulta de precios',
      html: `
        <h3>Consulta de Precio</h3>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Negocio:</strong> ${negocio}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
      `
    });

    return res.status(200).json({ ok: true, msg: 'Consulta enviada correctamente' });

  } catch (error) {
    console.error('Error al enviar consulta de precio:', error);
    return res.status(500).json({ ok: false, msg: 'Error al enviar la consulta' });
  }
};

module.exports = { enviarConsultaPrecio };
