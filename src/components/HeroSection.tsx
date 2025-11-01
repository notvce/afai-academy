import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, Users, Laptop, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedStat from "./AnimatedStat";
import { fadeInUp, springTransition } from "@/lib/animations";

const fadeUpAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const HeroSection: React.FC = () => {
  const handleClick = () => {
    // Implementar la lógica del botón aquí
    console.log("Botón clickeado");
  };
  const stats = [
    {
      icon: Globe,
      value: "45+",
      label: "Países",
      color: "text-blue-500",
      delay: 0
    },
    {
      icon: Users,
      value: "20+",
      label: "Años de Experiencia",
      color: "text-green-500",
      delay: 0.1
    },
    {
      icon: Laptop,
      value: "100%",
      label: "Online",
      color: "text-purple-500",
      delay: 0.2
    },
    {
      icon: Users, // Changed from Infinity to Users for consistency
      value: "∞",
      label: "Acceso de por Vida",
      color: "text-orange-primary",
      delay: 0.3
    }
  ];

  return (
    <section id="inicio" className="relative bg-gradient-to-b from-background via-gray-50/50 to-background py-20 lg:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-orange-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-1s' }} />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium border-orange-primary/20 text-orange-primary bg-orange-primary/5">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4 mr-2" />
            </motion.div>
            Academia Líder en IA
          </Badge>
        </motion.div>
        
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Transforma tu futuro con{" "}
            <motion.span
              className="bg-gradient-to-r from-orange-primary via-orange-dark to-orange-primary bg-clip-text text-transparent"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Inteligencia Artificial
            </motion.span>
          </motion.h1>
        </motion.div>
        
        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.p 
            className="text-lg md:text-xl text-gray-600 mb-4 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Forma y capacita en el uso estratégico de herramientas de IA para 
            impulsar tu{" "}
            <motion.strong 
              className="text-orange-primary"
              whileHover={{ scale: 1.1 }}
            >
              productividad
            </motion.strong>
            ,{" "}
            <motion.strong 
              className="text-orange-primary"
              whileHover={{ scale: 1.1 }}
            >
              creatividad
            </motion.strong>
            {" "}y{" "}
            <motion.strong 
              className="text-orange-primary"
              whileHover={{ scale: 1.1 }}
            >
              eficiencia
            </motion.strong>
            {" "}en el entorno académico y laboral.
          </motion.p>

          <motion.p 
            className="text-base text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Capacitación{" "}
            <motion.strong 
              whileHover={{ scale: 1.1 }} 
              className="text-orange-primary font-semibold inline-block"
            >
              100% online
            </motion.strong>
            {" "}con sesiones en vivo y materiales asincrónicos. Metodología estructurada y práctica que combina teoría con{" "}
            <motion.strong 
              whileHover={{ scale: 1.1 }} 
              className="text-orange-primary font-semibold inline-block"
            >
              aplicación directa
            </motion.strong>
            {" "}con tareas reales para la{" "}
            <motion.strong 
              whileHover={{ scale: 1.1 }} 
              className="text-orange-primary font-semibold inline-block"
            >
              enseñanza en el aula
            </motion.strong>
            .
          </motion.p>
        </motion.div>
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-primary to-orange-dark hover:from-orange-dark hover:to-orange-primary text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
            >
              Más Información
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Statistics */}
        <div className="animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="group cursor-pointer transform transition-all duration-300 hover:scale-110"
                style={{ animationDelay: `${1 + index * 0.1}s` }}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-primary/20">
                  <div className="flex flex-col items-center">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 ${stat.color} bg-gray-50 group-hover:bg-orange-primary/10`}>
                      <stat.icon className="w-8 h-8" />
                    </div>
                    <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2 group-hover:text-orange-primary transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 font-medium text-center leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;