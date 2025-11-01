interface EmailData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const sendContactFormEmail = async (data: EmailData) => {
  try {
    const BREVO_API_KEY = import.meta.env?.VITE_BREVO_API_KEY;
    const TO_EMAIL = import.meta.env?.VITE_NOTIFICATION_EMAILS || "info@afai-ia.com,direccion@afai-ia.com";

    if (!BREVO_API_KEY) {
      throw new Error("Falta la configuración de Brevo. Por favor, configura VITE_BREVO_API_KEY.");
    }

    console.log("Debug - Configuración:", {
      apiKey: BREVO_API_KEY ? "Configurado" : "No configurado",
      toEmails: TO_EMAIL,
      fromEmail: "noreply@afai-ia.com"
    });

    // Email para el administrador
    console.log("Debug - Enviando email al administrador...");
    const adminResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": BREVO_API_KEY,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: "AFAI Academy",
          email: "noreply@afai-ia.com"
        },
        to: TO_EMAIL.split(",").map(email => ({ email: email.trim() })),
        replyTo: {
          email: data.email,
          name: data.name
        },
        subject: `Nueva solicitud de información - ${data.name}`,
        htmlContent: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #F97316 0%, #EA580C 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1>📧 Nueva Solicitud de Información</h1>
              <p>AFAI Academy - Máster en IA Generativa</p>
            </div>
            <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px;">
              <div style="margin-bottom: 20px;">
                <div style="font-weight: bold; color: #F97316;">👤 Nombre Completo:</div>
                <div style="background: white; padding: 12px; border-left: 3px solid #F97316; margin-top: 5px;">${data.name}</div>
              </div>
              <div style="margin-bottom: 20px;">
                <div style="font-weight: bold; color: #F97316;">📧 Correo Electrónico:</div>
                <div style="background: white; padding: 12px; border-left: 3px solid #F97316; margin-top: 5px;"><a href="mailto:${data.email}">${data.email}</a></div>
              </div>
              <div style="margin-bottom: 20px;">
                <div style="font-weight: bold; color: #F97316;">📱 Teléfono:</div>
                <div style="background: white; padding: 12px; border-left: 3px solid #F97316; margin-top: 5px;"><a href="tel:${data.phone}">${data.phone}</a></div>
              </div>
              <div style="margin-bottom: 20px;">
                <div style="font-weight: bold; color: #F97316;">💬 Mensaje:</div>
                <div style="background: white; padding: 12px; border-left: 3px solid #F97316; margin-top: 5px;">${data.message.replace(/\n/g, "<br>")}</div>
              </div>
            </div>
            <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
              <p>Este es un email automático, por favor no responda directamente a este correo.</p>
              <p>Para contactar al solicitante, utilice su correo: ${data.email}</p>
            </div>
          </div>
        `
      })
    });

    const adminResponseData = await adminResponse.json();
    console.log("Debug - Respuesta del servidor (admin):", adminResponseData);

    if (!adminResponse.ok) {
      throw new Error(`Error al enviar el correo al administrador: ${JSON.stringify(adminResponseData)}`);
    }

    // Email de confirmación para el cliente
    console.log("Debug - Enviando email de confirmación al cliente...");
    const clientResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": BREVO_API_KEY,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: "AFAI Academy",
          email: "noreply@afai-ia.com"
        },
        to: [{ email: data.email, name: data.name }],
        subject: "Hemos recibido tu mensaje - AFAI Academy",
        htmlContent: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #F97316 0%, #EA580C 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1>¡Gracias por contactarnos!</h1>
              <p>AFAI Academy - Máster en IA Generativa</p>
            </div>
            <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px;">
              <p>Hola ${data.name},</p>
              <p>Hemos recibido tu mensaje correctamente. Nuestro equipo revisará tu solicitud y te contactaremos lo antes posible.</p>
              
              <div style="background: #fff; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #F97316; margin-bottom: 15px;">Resumen de tu mensaje:</h3>
                <p><strong>Nombre:</strong> ${data.name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Teléfono:</strong> ${data.phone}</p>
                <p><strong>Mensaje:</strong></p>
                <p style="background: #f5f5f5; padding: 10px; border-radius: 4px;">${data.message.replace(/\n/g, "<br>")}</p>
              </div>

              <p>Si tienes alguna pregunta adicional, no dudes en contactarnos.</p>
            </div>
            <div style="text-align: center; margin-top: 20px; padding: 20px; background: #f5f5f5; border-radius: 8px;">
              <p style="margin: 0; color: #666;">AFAI Academy</p>
              <p style="margin: 5px 0; color: #666;">
                <a href="https://afai-ia.com" style="color: #F97316; text-decoration: none;">afai-ia.com</a>
              </p>
            </div>
            <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
              <p>Este es un email automático, por favor no responda a este correo.</p>
              <p>Si necesitas ayuda, contáctanos a través de nuestra página web.</p>
            </div>
          </div>
        `
      })
    });

    const clientResponseData = await clientResponse.json();
    console.log("Debug - Respuesta del servidor (cliente):", clientResponseData);

    if (!clientResponse.ok) {
      throw new Error(`Error al enviar el correo de confirmación: ${JSON.stringify(clientResponseData)}`);
    }

    return await adminResponse.json();
  } catch (error: any) {
    console.error("Error detallado al enviar los emails:", {
      message: error.message,
      error: error
    });
    throw new Error(`Error al enviar el email: ${error.message}`);
  }
};