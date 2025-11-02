interface EmailData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const sendContactFormEmail = async (data: EmailData) => {
  try {
    const response = await fetch('http://localhost:3001/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Error al enviar el email');
    }

    return await response.json();
  } catch (error) {
    console.error('Error al enviar el email:', error);
    throw new Error(error instanceof Error ? error.message : 'No se pudo enviar el email. Por favor, inténtalo de nuevo más tarde.');
  }
};
  }
};