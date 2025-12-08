import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-orange-primary">Términos y Condiciones de Uso de afai-ia.com</h1>
          <p className="text-sm text-muted-foreground mb-8">Fecha de Entrada en Vigor: 08 de diciembre de 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Aceptación de los Términos</h2>
            <p>
              Al acceder y utilizar el sitio web afai-ia.com (en adelante, "el Sitio"), usted acepta estar legalmente obligado por los presentes Términos y Condiciones de Uso (en adelante, "los Términos"), nuestra Política de Privacidad y todas las leyes y regulaciones aplicables. Si no está de acuerdo con estos Términos, no debe utilizar el Sitio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Uso Permitido del Sitio</h2>
            <h3 className="text-xl font-medium mb-2 mt-4 text-foreground">2.1. Edad Mínima</h3>
            <p className="mb-4">
              Usted declara ser mayor de edad o contar con el consentimiento de sus padres o tutor legal si es menor de edad, para utilizar este Sitio y contratar o adquirir los servicios o productos que se ofrecen.
            </p>
            <h3 className="text-xl font-medium mb-2 mt-4 text-foreground">2.2. Conducta del Usuario</h3>
            <p className="mb-2">Usted se compromete a utilizar el Sitio de manera responsable, legal y de acuerdo con estos Términos, obligándose a no:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Utilizar el Sitio con fines ilícitos o fraudulentos.</li>
              <li>Interferir o interrumpir el funcionamiento del Sitio o los servidores que lo alojan.</li>
              <li>Introducir o difundir virus informáticos o cualquier otro código o archivo que pueda dañar sistemas.</li>
              <li>Recopilar información personal de otros usuarios sin su consentimiento.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Propiedad Intelectual</h2>
            <h3 className="text-xl font-medium mb-2 mt-4 text-foreground">3.1. Contenido del Sitio</h3>
            <p className="mb-4">
              Todo el contenido, diseño, logotipos, imágenes, textos, gráficos, software y otros materiales que forman parte del Sitio son propiedad exclusiva del Responsable de afai-ia.com o de sus licenciantes, y están protegidos por las leyes de propiedad intelectual de Ecuador e internacionales.
            </p>
            <h3 className="text-xl font-medium mb-2 mt-4 text-foreground">3.2. Restricciones</h3>
            <p>
              Está estrictamente prohibida la copia, reproducción, modificación, distribución, venta o cualquier otra forma de explotación del contenido del Sitio sin el permiso previo y por escrito del Responsable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Productos o Servicios</h2>
            <p className="mb-4">Si afai-ia.com ofrece la venta de productos o servicios:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Descripción y Precio:</strong> Nos esforzamos por ser lo más precisos posible en la descripción de los productos o servicios y sus precios. Sin embargo, no garantizamos que toda la información sea completamente exacta, completa o libre de errores.</li>
              <li><strong>Pedidos y Pagos:</strong> La aceptación de cualquier pedido de productos o servicios está sujeta a la disponibilidad, la verificación del precio y la aceptación del pago por parte del Responsable.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Enlaces a Terceros</h2>
            <p>
              El Sitio puede contener enlaces a sitios web de terceros que no son propiedad ni están controlados por el Responsable. No somos responsables por el contenido, las políticas de privacidad o las prácticas de cualquier sitio web de terceros. El uso de estos enlaces externos es bajo su propio riesgo.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Exclusión de Garantías y Limitación de Responsabilidad</h2>
            <h3 className="text-xl font-medium mb-2 mt-4 text-foreground">6.1. Sin Garantías</h3>
            <p className="mb-4">
              El Sitio y su contenido se proporcionan "tal cual" y "según disponibilidad", sin garantías de ningún tipo, ya sean expresas o implícitas. El Responsable no garantiza que el Sitio estará libre de errores o que funcionará sin interrupciones.
            </p>
            <h3 className="text-xl font-medium mb-2 mt-4 text-foreground">6.2. Limitación de Responsabilidad</h3>
            <p className="mb-2">El Responsable, sus directores, empleados o afiliados no serán responsables por ningún daño directo, indirecto, incidental, especial, consecuente o punitivo resultante de:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>El uso o la imposibilidad de usar el Sitio.</li>
              <li>Cualquier acceso no autorizado o alteración de sus transmisiones o datos.</li>
              <li>Cualquier conducta o contenido de cualquier tercero en el Sitio.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Ley Aplicable y Jurisdicción</h2>
            <p>
              Estos Términos se regirán e interpretarán de acuerdo con las leyes de la República del Ecuador. Cualquier disputa o controversia que surja en relación con estos Términos se someterá a la jurisdicción de los tribunales competentes de la ciudad de [Insertar Ciudad Principal del Negocio, e.g., Quito o Guayaquil], Ecuador.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Modificaciones</h2>
            <p>
              Nos reservamos el derecho de modificar estos Términos en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en el Sitio. Su uso continuado del Sitio después de dichas modificaciones constituye su aceptación de los nuevos Términos.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
