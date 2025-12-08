import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Sparkles } from "lucide-react";

const TrainingContentSection = () => {
  const specializationAreas = [
    "Diseño de prompts para generación de contenidos académicos",
    "Evaluaciones adaptativas personalizadas", 
    "Creación de recursos visuales con IA",
    "Técnicas de optimización en distintas disciplinas"
  ];

  const exclusiveBenefits = [
    "Grupo exclusivo para actualización de novedades en IA",
    "Sesiones de seguimiento semanales",
    "Interacción directa con docentes expertos",
    "Certificación digital reconocida internacionalmente"
  ];

  return (
    <section id="formacion" className="py-20 lg:py-32 bg-gradient-to-b from-background to-gray-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] -z-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium border-orange-primary/20 text-orange-primary bg-orange-primary/5">
              <Sparkles className="w-4 h-4 mr-2" />
              Contenido Exclusivo
            </Badge>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
              ¿Qué incluye nuestra formación?
            </h2>
          </div>

          <Card className="animate-scale-in bg-white/95 backdrop-blur-sm border-2 border-orange-primary/30 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
            {/* Gradient header */}
            <div className="h-2 bg-gradient-to-r from-orange-primary via-orange-dark to-orange-primary"></div>
            
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    <h3 className="text-2xl font-bold mb-6 text-orange-primary flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-primary to-orange-dark rounded-lg flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      Áreas de Especialización
                    </h3>
                    <div className="space-y-4">
                      {specializationAreas.map((area, index) => (
                        <div 
                          key={index} 
                          className="flex items-start gap-3 group cursor-pointer p-3 rounded-lg hover:bg-orange-50 transition-all duration-300"
                          style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                        >
                          <div className="w-6 h-6 bg-gradient-to-br from-orange-primary to-orange-dark rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                          <p className="text-gray-700 font-medium leading-relaxed group-hover:text-orange-primary transition-colors">
                            {area}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
                    <h3 className="text-2xl font-bold mb-6 text-orange-primary flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-primary to-orange-dark rounded-lg flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      Beneficios Exclusivos
                    </h3>
                    <div className="space-y-4">
                      {exclusiveBenefits.map((benefit, index) => (
                        <div 
                          key={index} 
                          className="flex items-start gap-3 group cursor-pointer p-3 rounded-lg hover:bg-orange-50 transition-all duration-300"
                          style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                        >
                          <div className="w-6 h-6 bg-gradient-to-br from-orange-primary to-orange-dark rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                          <p className="text-gray-700 font-medium leading-relaxed group-hover:text-orange-primary transition-colors">
                            {benefit}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom decoration */}
              <div className="mt-8 pt-8 border-t border-orange-primary/20 text-center">
                <div className="flex items-center justify-center gap-2 text-orange-primary font-semibold">
                  <Sparkles className="w-5 h-5" />
                  <span>Formación integral respaldada por expertos internacionales</span>
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TrainingContentSection;