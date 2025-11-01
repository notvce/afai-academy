import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, BookOpen, Lightbulb, Users, Heart, Trophy } from "lucide-react";

const PilarsSection = () => {
  const pilars = [
    {
      icon: Target,
      title: "Misión",
      description: "Formar y capacitar a docentes y profesionales en el uso estratégico de herramientas de Inteligencia Artificial, impulsando su productividad, creatividad y eficiencia en el entorno académico y laboral.",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: BookOpen,
      title: "Enfoque Formativo",
      description: "Capacitación 100% online con sesiones en vivo y materiales asincrónicos. Metodología estructurada y práctica que combina teoría con aplicación directa en tareas reales.",
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      icon: Lightbulb,
      title: "Áreas de Especialización",
      description: "Generacion de documentos, imágenes, gráficos y presentaciones que se adapten a las necesidades de tus estudiantes. Gánale a todos, con la IA tus recursos serán originales.",
      color: "text-yellow-500",
      bgColor: "bg-yellow-50"
    },
    {
      icon: Users,
      title: "Equipo Docente",
      description: "Formadores internacionales con más de 20 años de experiencia en educación, tecnología y gestión de proyectos.",
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: Heart,
      title: "Comunidad y Acompañamiento",
      description: "Grupo exclusivo para actualización de novedades en IA, sesiones de seguimiento semanales e interacción directa con docentes.",
      color: "text-pink-500",
      bgColor: "bg-pink-50"
    },
    {
      icon: Trophy,
      title: "Certificación",
      description: "Diploma digital avalado por AFAI que valida las competencias adquiridas en herramientas de Inteligencia Artificial generativa.",
      color: "text-orange-primary",
      bgColor: "bg-orange-50",
      highlighted: true
    }
  ];

  return (
    <section id="formacion" className="py-20 lg:py-32 bg-gradient-to-b from-gray-50/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium border-orange-primary/20 text-orange-primary bg-orange-primary/5">
            Fundamentos
          </Badge>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Pilares Esenciales de{" "}
            <span className="bg-gradient-to-r from-orange-primary to-orange-dark bg-clip-text text-transparent">
              AFAI Academy
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubre los fundamentos que nos convierten en la academia líder en formación de 
            Inteligencia Artificial
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pilars.map((pilar, index) => (
            <div 
              key={index} 
              className="animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className={`h-full transition-all duration-500 hover:shadow-2xl border-2 group-hover:border-orange-primary/20 ${
                pilar.highlighted 
                  ? 'ring-2 ring-orange-primary shadow-lg border-orange-primary/30' 
                  : 'hover:shadow-xl border-gray-100'
              }`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${pilar.color} ${pilar.bgColor} group-hover:bg-orange-primary/10`}>
                      <pilar.icon className="w-7 h-7" />
                    </div>
                    {pilar.highlighted && (
                      <Badge className="bg-gradient-to-r from-orange-primary to-orange-dark text-white border-0">
                        ⭐ Destacado
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-orange-primary transition-colors">
                    {pilar.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed text-base">
                    {pilar.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PilarsSection;