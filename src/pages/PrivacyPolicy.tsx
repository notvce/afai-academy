import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-orange-primary">Política de Privacidad de afai-ia.com</h1>
          <p className="text-sm text-muted-foreground mb-8">Fecha de Entrada en Vigor: 08 de diciembre de 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Identificación y Contacto del Responsable</h2>
            <p className="mb-4">
              El responsable del tratamiento de los datos personales recopilados a través del sitio web afai-ia.com es la entidad:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Nombre Legal del Responsable:</strong> [Nombre Legal de la Empresa o Persona Propietaria]</li>
              <li><strong>RUC/Identificación:</strong> [Insertar RUC/Cédula]</li>
              <li><strong>Domicilio Legal:</strong> [Insertar Dirección Completa en Ecuador]</li>
              <li><strong>Correo Electrónico de Contacto para Privacidad:</strong> [Insertar Email dedicado, e.g., privacidad@afai-ia.com]</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Información Personal Recopilada</h2>
            <p className="mb-4">El Responsable recopila datos personales mediante el uso del sitio web, incluyendo:</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border mb-4">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-2 text-left">Método de Recopilación</th>
                    <th className="border border-border p-2 text-left">Categorías de Datos Recopilados</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-2 align-top">Voluntaria (Formularios)</td>
                    <td className="border border-border p-2">Nombre, Apellido, Dirección de correo electrónico, Número de teléfono, Contenido de la consulta, y cualquier otra información que el usuario decida proporcionar.</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 align-top">Automática (Uso Web)</td>
                    <td className="border border-border p-2">Dirección IP, información del dispositivo (navegador y sistema operativo), páginas visitadas, fecha y hora de acceso, y datos recopilados por cookies.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Finalidad del Tratamiento y Base Legal</h2>
            <p className="mb-4">El tratamiento de sus datos se realiza con las siguientes finalidades, amparadas en la Ley Orgánica de Protección de Datos Personales (LOPDP) de Ecuador:</p>
             <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border mb-4">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-2 text-left">Finalidad del Tratamiento</th>
                    <th className="border border-border p-2 text-left">Base Legal (LOPDP)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-2 align-top">Gestión de Consultas</td>
                    <td className="border border-border p-2">Consentimiento del titular (al enviar un formulario de contacto).</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 align-top">Envío de Comunicaciones Comerciales</td>
                    <td className="border border-border p-2">Consentimiento explícito del titular (al marcar la casilla de suscripción al newsletter).</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 align-top">Mejora del Servicio y Analíticas Web</td>
                    <td className="border border-border p-2">Interés legítimo del Responsable (analizar el rendimiento y uso del sitio).</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 align-top">Mantenimiento y Seguridad</td>
                    <td className="border border-border p-2">Cumplimiento de obligaciones legales o protección de intereses legítimos.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Compartición y Transferencia de Datos</h2>
            <p className="mb-4">Sus datos personales podrán ser comunicados a terceros que actúan como Encargados del Tratamiento bajo las instrucciones del Responsable. Estos incluyen:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Proveedores de Alojamiento y Mantenimiento Web.</li>
              <li>Proveedores de Servicios de Email Marketing (para el envío de newsletters).</li>
              <li>Servicios de Analíticas Web (como Google Analytics).</li>
            </ul>
            <p>afai-ia.com no vende, alquila ni divulga datos personales a terceros para sus propios fines comerciales.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Política de Cookies</h2>
            <p>Utilizamos cookies esenciales para el funcionamiento del sitio y cookies de analíticas/rendimiento para mejorar la experiencia. De acuerdo con la normativa ecuatoriana, el uso de cookies no esenciales requiere de su consentimiento expreso, el cual se solicita a través del banner de cookies del sitio web.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Ejercicio de los Derechos del Titular (LOPDP)</h2>
            <p className="mb-4">Como titular de los datos, usted tiene derecho a ejercer los siguientes derechos ante el Responsable, sin justificación y de forma gratuita:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Acceso:</strong> Obtener confirmación sobre el tratamiento de sus datos y acceder a ellos.</li>
              <li><strong>Rectificación:</strong> Modificar datos inexactos o incompletos.</li>
              <li><strong>Supresión (Eliminación):</strong> Eliminar datos cuando ya no sean necesarios.</li>
              <li><strong>Oposición y Limitación:</strong> Oponerse o solicitar la limitación del tratamiento.</li>
              <li><strong>Portabilidad:</strong> Recibir sus datos en un formato estructurado.</li>
              <li><strong>No ser objeto de decisiones automatizadas:</strong> Oponerse a valoraciones automatizadas.</li>
            </ul>
            <p>Para ejercer cualquiera de estos derechos, por favor dirija su solicitud al correo electrónico de contacto para privacidad: [Insertar Email dedicado, e.g., privacidad@afai-ia.com].</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Seguridad y Retención</h2>
            <p className="mb-4">El Responsable adopta las medidas de seguridad técnicas y organizativas adecuadas para proteger sus datos personales contra el acceso no autorizado, la alteración, pérdida o tratamiento ilícito.</p>
            <p>Los datos se conservarán durante el tiempo estrictamente necesario para cumplir las finalidades descritas.</p>
          </section>

          <section className="mb-8">
             <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Modificaciones de la Política</h2>
             <p>El Responsable se reserva el derecho de modificar esta Política de Privacidad en cualquier momento, publicando la versión actualizada en el sitio web con una nueva fecha de entrada en vigor.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
