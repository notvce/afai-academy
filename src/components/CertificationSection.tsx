import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Shield, Globe, Star, CheckCircle, Trophy, ArrowRight } from "lucide-react";

const CertificationSection = () => {
  const certificationPoints = [
    {
      icon: Star,
      text: "Dominio en diseño de prompts efectivos"
    },
    {
      icon: CheckCircle,
      text: "Competencias en creación de recursos visuales con IA"
    },
    {
      icon: Trophy,
      text: "Aplicación estratégica de herramientas de IA"
    },
    {
      icon: Award,
      text: "Optimización de productividad y creatividad"
    },
    {
      icon: Globe,
      text: "Evaluaciones adaptativas personalizadas"
    }
  ];

  const certificateAdvantages = [
    "Válido en más de 45 países",
    "Respaldado por formadores con 20+ años de experiencia",
    "Formato digital verificable",
    "Actualización continua de competencias"
  ];

  return (
    <section id="certificacion" className="py-20 lg:py-32 bg-gradient-to-b from-dark-section via-dark-navy to-dark-section text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-primary/20 to-transparent rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-blue-500/20 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium border-orange-primary/30 text-orange-primary bg-orange-primary/10">
            <Trophy className="w-4 h-4 mr-2" />
            Certificación Oficial
          </Badge>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Certificación{" "}
            <span className="bg-gradient-to-r from-orange-primary to-orange-light bg-clip-text text-transparent">
              Reconocida Mundialmente
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Obtén tu diploma digital avalado por la Academia de Formación de Alto Impacto (AFAI)
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Certificate Card */}
          <div className="animate-scale-in">
            <Card className="bg-white text-dark-navy p-8 shadow-2xl border-0 relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-primary via-orange-dark to-orange-primary"></div>
              
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-primary to-orange-dark rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800 mb-4">
                  Diploma Digital AFAI
                </CardTitle>
                <p className="text-gray-600 leading-relaxed">
                  Certificado que valida tus competencias adquiridas en herramientas de Inteligencia 
                  Artificial generativa, reconocido internacionalmente.
                </p>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center group cursor-pointer">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-primary to-orange-dark rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-md group-hover:scale-110 transition-transform">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-sm font-medium text-gray-700">Avalado por AFAI</p>
                  </div>
                  <div className="text-center group cursor-pointer">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-primary to-orange-dark rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-md group-hover:scale-110 transition-transform">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-sm font-medium text-gray-700">Reconocimiento Internacional</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Certification Details */}
          <div className="space-y-8">
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-orange-primary flex items-center gap-3">
                <Star className="w-8 h-8" />
                ¿Qué certifica tu diploma?
              </h3>
              <div className="space-y-4">
                {certificationPoints.map((point, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 group cursor-pointer p-3 rounded-lg hover:bg-white/5 transition-all duration-300"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-primary to-orange-dark rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <point.icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                      {point.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-semibold text-orange-primary flex items-center gap-2">
                    <Trophy className="w-5 h-5" />
                    Ventajas del Certificado AFAI
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {certificateAdvantages.map((advantage, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-orange-primary flex-shrink-0" />
                        <span className="text-gray-300">{advantage}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA eliminado a solicitud: Botón 'Obtén tu Certificación Ahora' */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;