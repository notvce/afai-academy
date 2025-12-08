import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Monitor, Clock, Wrench, Video } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, springTransition } from "@/lib/animations";

interface MethodologyFeature {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  delay: number;
}

const FeatureCard: React.FC<MethodologyFeature> = ({
  icon: Icon,
  title,
  description,
  color,
  bgColor,
  delay
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="h-full bg-white/80 backdrop-blur-sm border-2 border-gray-100 hover:border-orange-primary/20 transition-all duration-500 hover:shadow-2xl">
        <CardHeader>
          <div className="flex items-start gap-4">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className={`w-16 h-16 rounded-2xl flex items-center justify-center ${color} ${bgColor} group-hover:bg-orange-primary/10`}
            >
              <Icon className="w-8 h-8" />
            </motion.div>
            <div className="flex-1">
              <CardTitle className="text-xl font-bold text-foreground group-hover:text-orange-primary transition-colors mb-2">
                {title}
              </CardTitle>
              <CardDescription className="text-gray-600 leading-relaxed text-base">
                {description}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>
    </motion.div>
  </motion.div>
);

const MethodologySection: React.FC = () => {
  const methodologyFeatures: MethodologyFeature[] = [
    {
      icon: Monitor,
      title: "ENSEÑANZA ONLINE",
      description: "Contamos con una de las plataformas más seguras y confiables a nivel mundial que actúa como un ecosistema digital para la educación en línea que nos permite a los docentes y participantes trabajar dentro de un espacio seguro y cómodo para acceder al nuevo conocimiento.",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      delay: 0
    },
    {
      icon: Clock,
      title: "Acceso de por Vida",
      description: "Acceso permanente a todos los materiales y grabaciones sin restricciones de tiempo.",
      color: "text-green-500",
      bgColor: "bg-green-50",
      delay: 0.1
    },
    {
      icon: Wrench,
      title: "Soporte Continuo",
      description: "Soporte técnico y académico continuo para resolver dudas y guiar tu aprendizaje.",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      delay: 0.2
    },
    {
      icon: Video,
      title: "Sesiones en Vivo",
      description: "Sesiones interactivas en tiempo real con formadores expertos y materiales asincrónicos desde nuestra plataforma disponible las 24 Horas del día.",
      color: "text-orange-primary",
      bgColor: "bg-orange-50",
      delay: 0.3
    }
  ];

  return (
    <div id="metodologia" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-orange-primary/10 to-blue-500/10 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tl from-purple-500/10 to-green-500/10 rounded-full blur-3xl"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium border-orange-primary/20 text-orange-primary bg-orange-primary/5">
            Innovación
          </Badge>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Metodología y{" "}
            <span className="bg-gradient-to-r from-orange-primary to-orange-dark bg-clip-text text-transparent">
              Plataforma
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Aprende con la metodología más avanzada y efectiva del mercado
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {methodologyFeatures.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MethodologySection;