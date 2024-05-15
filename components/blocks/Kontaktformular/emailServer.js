// const nodemailer = require('nodemailer');

// // Opret en transporter med SMTP-service
// let transporter = nodemailer.createTransport({
//   host: 'smtp.example.com',
//   port: 587, // SMTP-porten for din udbyder
//   secure: false, // Sand, hvis du bruger TLS
//   auth: {
//     user: 'din@email.com', // Din e-mailadresse
//     pass: 'dinAdgangskode' // Din adgangskode
//   }
// });

// // Funktion til at sende e-mail
// const sendEmail = async (name, email, phone, message) => {
//   try {
//     // Opret e-mailbesked
//     let info = await transporter.sendMail({
//       from: email, // Afsenderens e-mailadresse
//       to: 'modtagers@email.com', // Modtagerens e-mailadresse
//       subject: `Besked fra ${name}`, // Emnet for e-mailen
//       text: `${message}\n\n---\n\nEmail: ${email}\nTelefon: ${phone}` // Teksten i e-mailen
//     });

//     console.log('E-mail sendt: %s', info.messageId);
//   } catch (error) {
//     console.error('Fejl ved afsendelse af e-mail:', error);
//   }
// };

// // Brug funktionen til at sende e-mail
// sendEmail('Navn', 'brugerens@email.com', '12345678', 'Dette er en testbesked.');
