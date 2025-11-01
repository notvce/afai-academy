exports.handler = async function(event, context) {
  // Solo permitir POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const data = JSON.parse(event.body);
    
    // Usar variables de entorno de Netlify
    const API_KEY = process.env.VITE_MAILDIVER_API_KEY;
    const TO_EMAIL = process.env.VITE_NOTIFICATION_EMAILS;

    if (!API_KEY || !TO_EMAIL) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "Configuración de MailDiver incompleta en el servidor"
        })
      };
    }

    // Llamada a MailDiver desde el servidor
    const response = await fetch("https://api.maildiver.com/v1/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        to: TO_EMAIL.split(",").map(email => email.trim()),
        from: {
          email: "contacto@afai-academy.com",
          name: "AFAI Academy - Formulario Web"
        },
        subject: `Nueva solicitud de información - ${data.name}`,
        html: data.html,
        text: data.text
      })
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Error al enviar el correo");
    }

    return {
      statusCode: 200,
      body: JSON.stringify(result)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};