interface EmailData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const sendContactFormEmail = async (data: EmailData) => {
  try {
    const PLUNK_API_KEY = import.meta.env?.VITE_PLUNK_API_KEY;
    const TO_EMAIL = import.meta.env?.VITE_NOTIFICATION_EMAILS || "info@afai-ia.com,direccion@afai-ia.com";

    if (!PLUNK_API_KEY) {
      throw new Error("Falta la configuración de Plunk. Por favor, configura VITE_PLUNK_API_KEY.");
    }

    const response = await fetch("https://api.useplunk.com/v1/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${PLUNK_API_KEY}`
      },
      body: JSON.stringify({
        to: TO_EMAIL.split(",").map(email => email.trim()),
        subject: `Nueva solicitud de información - ${data.name}`,
        html: `
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
                <div style="background: white; padding: 12px; border-left: 3px solid #F97316; margin-top: 5px;">${data.message.replace(/
/g, "<br>")}</div>
              </div>
            </div>
            <div style="text-align: center; margin-top: 30px; color: #666; font-size: 0.9em;">
              <p>Este email fue enviado desde el formulario de contacto de <strong>AFAI Academy</strong></p>
              <p>Fecha: ${new Date().toLocaleString("es-ES", { timeZone: "America/Guayaquil" })}</p>
            </div>
          </div>
        `,
        replyTo: data.email
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: "Error desconocido" }));
      throw new Error(`Error al enviar el correo: ${errorData.error || response.statusText}`);
    }

    return await response.json();
  } catch (error: unknown) {
    let message = "Error desconocido al enviar el correo.";
    
    if (error instanceof Error) {
      message = error.message;
    }

    console.error("Error al enviar correo:", error);
    throw new Error(`Error al enviar correo: ${message}`);
  }
};
