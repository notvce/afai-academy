interface EmailData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const sendContactFormEmail = async (data: EmailData) => {
  try {
    // Valores de respaldo en caso de que fallen las variables de entorno
    const API_KEY = import.meta.env?.VITE_MAILDIVER_API_KEY || "v1_plU5AQb3dMDX5ueWSz4QMrvhKVbRqqzWxmXzYd7I";
    const TO_EMAIL = import.meta.env?.VITE_NOTIFICATION_EMAILS || "info@afai-ia.com,direccion@afai-ia.com";

    if (!API_KEY || !TO_EMAIL) {
      const missing = [
        !API_KEY ? 'VITE_MAILDIVER_API_KEY' : null,
        !TO_EMAIL ? 'VITE_NOTIFICATION_EMAILS' : null,
      ].filter(Boolean).join(', ');
      throw new Error(
        `Configuración de MailDiver incompleta (${missing}). Por favor, revisa las variables de entorno.`
      );
    }

    // Preparar payload para MailDiver API
    const payload = {
      api_key: API_KEY,
      to: TO_EMAIL,
      from: "contacto@afai-academy.com",
      from_name: "AFAI Academy - Formulario Web",
      subject: `Nueva solicitud de información - ${data.name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #F97316 0%, #EA580C 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #F97316; margin-bottom: 5px; }
              .value { background: white; padding: 12px; border-left: 3px solid #F97316; margin-top: 5px; }
              .footer { text-align: center; margin-top: 30px; color: #666; font-size: 0.9em; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>📧 Nueva Solicitud de Información</h1>
                <p>AFAI Academy - Máster en IA Generativa</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">👤 Nombre Completo:</div>
                  <div class="value">${data.name}</div>
                </div>
                <div class="field">
                  <div class="label">📧 Correo Electrónico:</div>
                  <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
                </div>
                <div class="field">
                  <div class="label">📱 Teléfono:</div>
                  <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
                </div>
                <div class="field">
                  <div class="label">💬 Mensaje:</div>
                  <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
              <div class="footer">
                <p>Este email fue enviado desde el formulario de contacto de <strong>AFAI Academy</strong></p>
                <p>Fecha: ${new Date().toLocaleString('es-ES', { timeZone: 'America/Guayaquil' })}</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
Nueva solicitud de información - AFAI Academy

Nombre: ${data.name}
Email: ${data.email}
Teléfono: ${data.phone}

Mensaje:
${data.message}

---
Enviado desde el formulario de contacto de AFAI Academy
Fecha: ${new Date().toLocaleString('es-ES', { timeZone: 'America/Guayaquil' })}
      `,
      reply_to: data.email,
    };

    // Enviar email via MailDiver API
    const response = await fetch('https://api.maildiver.com/v1/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': window.location.origin,
      },
      mode: 'cors',
      credentials: 'omit',
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      let errorMessage = `Error HTTP ${response.status}`;
      try {
        const errorData = JSON.parse(errorText);
        errorMessage = `Error ${response.status}: ${errorData.error || errorData.message || errorText}`;
      } catch {
        errorMessage += `: ${errorText}`;
      }
      console.error('Respuesta detallada de MailDiver:', {
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries()),
        body: errorText
      });
      throw new Error(errorMessage);
    }

    const result = await response.json();
    console.log('Correo enviado exitosamente via MailDiver:', result);
    return result;
  } catch (error: unknown) {
    // Normaliza el error para mostrar mensajes útiles en UI
    let message = 'Error desconocido al enviar el correo.';
    
    if (error instanceof Error) {
      message = error.message;
    } else if (typeof error === 'object' && error !== null) {
      const anyErr = error as Record<string, unknown>;
      if (typeof anyErr.message === 'string') message = anyErr.message;
      if (typeof anyErr.error === 'string') message = anyErr.error;
    }

    const err = new Error(`Error al enviar correo con MailDiver: ${message}`);
    console.error('Error detallado:', err, error);
    throw err;
  }
};