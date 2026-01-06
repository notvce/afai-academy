import http from 'http';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { escape } from 'html-escaper';

dotenv.config({ path: '.env.local' });

// Configuración de entorno
const isProduction = process.env.NODE_ENV === 'production';

// CORS - Orígenes permitidos
const allowedOrigins = [
  'https://afai-academy.com',
  'https://www.afai-academy.com',
  'http://localhost:8080',
  'http://localhost:5173'
];

// Configurar el transporter de nodemailer
// Validar variables de entorno requeridas
const requiredEnvVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS'];
for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    console.error(`Error: ${envVar} no está definido en las variables de entorno`);
    process.exit(1);
  }
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: isProduction, // Verificar certificados en producción
    minVersion: 'TLSv1.2'
  },
  debug: !isProduction // Solo debug en desarrollo
});

// Verificar la conexión SMTP antes de iniciar el servidor
transporter.verify((error, success) => {
  if (error) {
    console.error('Error al verificar la conexión SMTP:', error);
    process.exit(1);
  } else {
    console.log('Servidor SMTP está listo para enviar emails');
  }
});

// Función para sanitizar input de usuario
const sanitizeInput = (input) => {
  if (typeof input !== 'string') return '';
  return escape(input.trim());
};

const server = http.createServer(async (req, res) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  
  // Configurar CORS con orígenes específicos
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.method === 'POST' && req.url === '/send-email') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', async () => {
      try {
        const data = JSON.parse(body);
        const TO_EMAIL = process.env.NOTIFICATION_EMAILS || 'info@afai-ia.com,direccion@afai-ia.com';

        // Sanitizar todos los inputs del usuario
        const safeName = sanitizeInput(data.name);
        const safeEmail = sanitizeInput(data.email);
        const safePhone = sanitizeInput(data.phone);
        const safeMessage = sanitizeInput(data.message).replace(/\n/g, '<br>');

        // Validar email básico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Email inválido' }));
          return;
        }

        // Email para el administrador
        await transporter.sendMail({
          from: {
            name: 'AFAI Academy',
            address: process.env.SMTP_FROM || 'info@afai-ia.com'
          },
          to: TO_EMAIL.split(',').map(email => email.trim()),
          replyTo: `"${safeName}" <${data.email}>`,
          subject: `Nueva solicitud de información - ${safeName}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: linear-gradient(135deg, #F97316 0%, #EA580C 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
                <h1>📧 Nueva Solicitud de Información</h1>
                <p>AFAI Academy - Máster en IA Generativa</p>
              </div>
              <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px;">
                <div style="margin-bottom: 20px;">
                  <div style="font-weight: bold; color: #F97316;">👤 Nombre Completo:</div>
                  <div style="background: white; padding: 12px; border-left: 3px solid #F97316; margin-top: 5px;">${safeName}</div>
                </div>
                <div style="margin-bottom: 20px;">
                  <div style="font-weight: bold; color: #F97316;">📧 Correo Electrónico:</div>
                  <div style="background: white; padding: 12px; border-left: 3px solid #F97316; margin-top: 5px;"><a href="mailto:${safeEmail}">${safeEmail}</a></div>
                </div>
                <div style="margin-bottom: 20px;">
                  <div style="font-weight: bold; color: #F97316;">📱 Teléfono:</div>
                  <div style="background: white; padding: 12px; border-left: 3px solid #F97316; margin-top: 5px;"><a href="tel:${safePhone}">${safePhone}</a></div>
                </div>
                <div style="margin-bottom: 20px;">
                  <div style="font-weight: bold; color: #F97316;">💬 Mensaje:</div>
                  <div style="background: white; padding: 12px; border-left: 3px solid #F97316; margin-top: 5px;">${safeMessage}</div>
                </div>
              </div>
            </div>
          `
        });

        // Email de confirmación para el cliente
        await transporter.sendMail({
          from: {
            name: 'AFAI Academy',
            address: process.env.SMTP_FROM || 'info@afai-ia.com'
          },
          to: `"${safeName}" <${data.email}>`,
          subject: 'Hemos recibido tu mensaje - AFAI Academy',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: linear-gradient(135deg, #F97316 0%, #EA580C 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
                <h1>¡Gracias por contactarnos!</h1>
                <p>AFAI Academy - Máster en IA Generativa</p>
              </div>
              <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px;">
                <p>Hola ${safeName},</p>
                <p>Hemos recibido tu mensaje correctamente. Nuestro equipo revisará tu solicitud y te contactaremos lo antes posible.</p>
                
                <div style="background: #fff; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <h3 style="color: #F97316; margin-bottom: 15px;">Resumen de tu mensaje:</h3>
                  <p><strong>Nombre:</strong> ${safeName}</p>
                  <p><strong>Email:</strong> ${safeEmail}</p>
                  <p><strong>Teléfono:</strong> ${safePhone}</p>
                  <p><strong>Mensaje:</strong></p>
                  <p style="background: #f5f5f5; padding: 10px; border-radius: 4px;">${safeMessage}</p>
                </div>

                <p>Si tienes alguna pregunta adicional, no dudes en contactarnos.</p>
              </div>
              <div style="text-align: center; margin-top: 20px; padding: 20px; background: #f5f5f5; border-radius: 8px;">
                <p style="margin: 0; color: #666;">AFAI Academy</p>
                <p style="margin: 5px 0; color: #666;">
                  <a href="https://afai-ia.com" style="color: #F97316; text-decoration: none;">afai-ia.com</a>
                </p>
              </div>
            </div>
          `
        });

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Emails enviados correctamente' }));
      } catch (error) {
        console.error('Error al enviar email:', error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        // No exponer detalles del error en producción
        res.end(JSON.stringify({ 
          error: isProduction ? 'Error interno del servidor' : error.message
        }));
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Servidor de emails escuchando en http://localhost:${PORT}`);
  console.log(`Modo: ${isProduction ? 'PRODUCCIÓN' : 'DESARROLLO'}`);
});