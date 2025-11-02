import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { ContactButton } from "@/components/ui/contact-button";

const Footer = () => {


  return (
    <footer className="bg-dark-navy text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-primary via-orange-dark to-orange-primary"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-orange-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* CTA Section */}
        <div className="py-16">
          <Card className="bg-gradient-to-r from-orange-primary to-orange-dark border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-white" />
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  ¿Listo para transformar tu futuro?
                </h2>
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
                Únete a miles de profesionales que ya están dominando la Inteligencia Artificial
              </p>
              <ContactButton variant="footer">
                <Button className="bg-white text-orange-primary hover:bg-gray-100 font-semibold px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                  Más Información
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </ContactButton>
            </CardContent>
          </Card>
        </div>

        {/* Footer Content */}

        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 AFAI Academy. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-orange-primary text-sm transition-colors">
                Términos y Condiciones
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-primary text-sm transition-colors">
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;