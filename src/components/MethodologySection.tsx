import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Monitor, Clock, Wrench, Video } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: delay * 0.2
    }
  })
};

const MethodologySection = () => {
  const methodologyFeatures = [
    {
      icon: Monitor,
      title: "ENSEÑANZA ONLINE",
      description: "Contamos con una de las plataformas más seguras y confiables a nivel mundial que actúa como un ecosistema digital para la educación en línea que nos permite a los docentes y participantes trabajar dentro de un espacio seguro y cómodo para acceder al nuevo conocimiento.",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Clock,
      title: "Acceso de por Vida",
      description: "Acceso permanente a todos los materiales y grabaciones sin restricciones de tiempo.",
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      icon: Wrench,
      title: "Soporte Continuo",
      description: "Soporte técnico y académico continuo para resolver dudas y guiar tu aprendizaje.",
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: Video,
      title: "Sesiones en Vivo",
      description: "Sesiones interactivas en tiempo real con formadores expertos y materiales asincrónicos desde nuestra plataforma disponible las 24 Horas del día.",
      color: "text-orange-primary",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <section id="metodologia" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-orange-primary/10 to-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tl from-purple-500/10 to-green-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium border-orange-primary/20 text-orange-primary bg-orange-primary/5">
              Innovación
            </Badge>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Metodología y{" "}
            <span className="bg-gradient-to-r from-orange-primary to-orange-dark bg-clip-text text-transparent">
              Plataforma
            </span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Aprende con la metodología más avanzada y efectiva del mercado
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {methodologyFeatures.map((feature, index) => (
            <motion.div 
              key={index}
              className="group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              variants={cardVariants}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border-2 border-gray-100 hover:border-orange-primary/20 transition-all duration-500 hover:shadow-2xl group-hover:shadow-orange-primary/10">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center ${feature.color} ${feature.bgColor} group-hover:bg-orange-primary/10`}
                      >
                        <feature.icon className="w-8 h-8" />
                      </motion.div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold text-foreground group-hover:text-orange-primary transition-colors mb-2">
                          {feature.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 leading-relaxed text-base">
                          {feature.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;