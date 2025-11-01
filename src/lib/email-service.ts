import * as Brevo from '@getbrevo/brevo';

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

    const apiInstance = new Brevo.TransactionalEmailsApi();
    apiInstance.setApiKey(Brevo.TransactionalEmailsApiApiKeys.apiKey, BREVO_API_KEY);

    const sendSmtpEmail = new Brevo.SendSmtpEmail();
    sendSmtpEmail.to = TO_EMAIL.split(",").map(email => ({ email: email.trim() }));
    sendSmtpEmail.subject = `Nueva solicitud de información - ${data.name}`;
    sendSmtpEmail.htmlContent = `
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
      </div>
    `;
    sendSmtpEmail.sender = { name: "AFAI Academy", email: "noreply@afai-ia.com" };
    sendSmtpEmail.replyTo = { email: data.email, name: data.name };

    const response = await apiInstance.sendTransacEmail(sendSmtpEmail);
    return response;
  } catch (error) {
    console.error("Error al enviar el email:", error);
    throw new Error("No se pudo enviar el email. Por favor, inténtalo de nuevo más tarde.");
  }
};