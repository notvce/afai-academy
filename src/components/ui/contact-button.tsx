interface ContactButtonProps {
  children: React.ReactNode;
  variant?: "header" | "footer" | "mobile" | "mobile-floating";
}

export function ContactButton({ children, variant = "header" }: ContactButtonProps) {
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Información sobre el Máster en IA Generativa");
    const body = encodeURIComponent("ESCRIBE AQUI TU MENSAJE ANTES DE ENVIAR");
    const mailtoLink = `mailto:info@afai-ia.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <div onClick={handleContactClick}>
      {children}
    </div>
  );
}