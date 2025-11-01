import emailjs from '@emailjs/browser';

interface EmailData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const sendContactFormEmail = async (data: EmailData) => {
  try {
    // Inicializar EmailJS
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    // Template params para EmailJS
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      message: data.message,
      to_name: 'AFAI Academy',
      reply_to: data.email,
    };

    // Enviar correo usando EmailJS
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Correo enviado exitosamente:', response);
    return response;
  } catch (error) {
    console.error('Error al enviar correo:', error);
    throw error;
  }
};