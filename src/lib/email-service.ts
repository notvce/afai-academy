import emailjs from '@emailjs/browser';

interface EmailData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const sendContactFormEmail = async (data: EmailData) => {
  try {
    // Validaciones de entorno (evita errores silenciosos en producción)
    const PUB = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const SID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    if (!PUB || !SID || !TID) {
      const missing = [
        !PUB ? 'VITE_EMAILJS_PUBLIC_KEY' : null,
        !SID ? 'VITE_EMAILJS_SERVICE_ID' : null,
        !TID ? 'VITE_EMAILJS_TEMPLATE_ID' : null,
      ].filter(Boolean).join(', ');
      const err = new Error(
        `Configuración de EmailJS incompleta (${missing}). Por favor, revisa las variables de entorno.`
      );
      // Adjunta un código para manejo en UI
      // @ts-expect-error añadir campo custom
      err.code = 'ENV_MISSING';
      throw err;
    }

    // Inicializar EmailJS
    emailjs.init(PUB);

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
      SID,
      TID,
      templateParams
    );

    console.log('Correo enviado exitosamente:', response);
    return response;
  } catch (error: unknown) {
    // Normaliza el error para mostrar mensajes útiles en UI
    let message = 'Error desconocido al enviar el correo.';
    // EmailJS suele devolver { text: string } o Error con message
    if (typeof error === 'object' && error !== null) {
      const anyErr = error as Record<string, unknown>;
      if (typeof anyErr.text === 'string') message = anyErr.text;
      if (typeof anyErr.message === 'string') message = anyErr.message;
      // reexpone código si existe (e.g., ENV_MISSING)
      type WithCode = { code?: string };
      const maybeCode = error as WithCode;
      if (maybeCode.code) {
        throw Object.assign(new Error(message), { code: maybeCode.code });
      }
    }
    // Añade un hint común cuando el dominio no está autorizado en EmailJS
    if (typeof window !== 'undefined' && window.location.host.endsWith('github.io')) {
      message += ' | Sugerencia: autoriza tu dominio en EmailJS (Account → Domains)';
    }
    const err = new Error(message);
    console.error('Error al enviar correo:', err);
    throw err;
  }
};