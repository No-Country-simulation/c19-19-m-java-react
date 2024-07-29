const nodemailer = require('nodemailer');
require('dotenv').config();


const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true para el puerto 465, false para otros puertos
    auth: {
      user: 'guatapenocountry@gmail.com', // Tu correo de Gmail
      pass: 'kgiz adhs boqt hedg' // Tu contraseña de Google o contraseña de aplicación
    }
  });
const sendSubscriptionReminder = (email, first_name, last_name, subscriptionExpiresAt) => {

 const mailOptions = {
 from:"guatapenocountry@gmail.com", // Utiliza las variables de entorno para mayor seguridad
 to: email,
 subject: 'Recordatorio de vencimiento de suscripción',
 text: `Hello ${first_name} ${last_name}, tu suscripción expira el ${subscriptionExpiresAt}. Por favor, renueva tu suscripción.`,
 };

return transporter.sendMail(mailOptions);
};

module.exports = { sendSubscriptionReminder };
