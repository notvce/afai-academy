import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, Users, Laptop, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, springTransition } from "@/lib/animations";
import { ContactForm } from "@/components/ContactForm";

interface StatItemProps {
  icon: React.ElementType;
  value: string;
  label: string;
  color: string;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ icon: Icon, value, label, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className="flex flex-col items-center justify-center text-center p-4"
  >
    <motion.div
      whileHover={{ scale: 1.1, rotate: 360 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={`mb-4 p-3 rounded-lg bg-opacity-10 ${color} ${color.replace('text-', 'bg-')}/10`}
    >
      <Icon className="w-8 h-8" />
    </motion.div>
    <motion.p 
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: delay + 0.2 }}
      className="text-2xl md:text-3xl font-bold mb-2"
    >
      {value}
    </motion.p>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay + 0.3 }}
      className="text-gray-600 text-sm md:text-base"
    >
      {label}
    </motion.p>
  </motion.div>
);

const HeroSection: React.FC = () => {
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
      icon: Users,
      value: "∞",
      label: "Acceso de por Vida",
      color: "text-orange-primary",
      delay: 0.3
    }
  ];

  return (
    <div className="relative min-h-screen flex flex-col justify-center bg-gradient-to-b from-background via-gray-50/50 to-background py-20 lg:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-1/4 right-1/4 w-72 h-72 bg-orange-primary/5 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
      />
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium border-orange-primary/20 text-orange-primary bg-orange-primary/5 inline-flex items-center">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center mr-2"
            >
              <Sparkles className="w-4 h-4" />
            </motion.div>
            Academia Líder en IA
          </Badge>
        </motion.div>
        
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center my-8 md:my-12"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
            <span className="text-black">Revoluciona tu Enseñanza</span>
            <br className="hidden md:block" />
            <motion.span
              className="bg-gradient-to-r from-orange-primary via-orange-dark to-orange-primary bg-clip-text text-transparent block mt-4"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              IA Aplicada a la Educación
            </motion.span>
          </h1>
        </motion.div>
        
        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <p className="text-base text-gray-600 leading-relaxed px-4 max-w-4xl mx-auto">
            Empoderar a docentes y profesionales a través de la formación en{" "}
            <motion.strong 
              whileHover={{ scale: 1.1 }} 
              className="text-orange-primary font-semibold inline-block"
            >
              Inteligencia Artificial
            </motion.strong>
            , mejorando su{" "}
            <motion.strong 
              whileHover={{ scale: 1.1 }} 
              className="text-orange-primary font-semibold inline-block"
            >
              capacidad de enseñanza
            </motion.strong>
            {" "}y{" "}
            <motion.strong 
              whileHover={{ scale: 1.1 }} 
              className="text-orange-primary font-semibold inline-block"
            >
              gestión
            </motion.strong>
            , y permitiéndoles innovar de manera más{" "}
            <motion.strong 
              whileHover={{ scale: 1.1 }} 
              className="text-orange-primary font-semibold inline-block"
            >
              productiva
            </motion.strong>
            {" "}y{" "}
            <motion.strong 
              whileHover={{ scale: 1.1 }} 
              className="text-orange-primary font-semibold inline-block"
            >
              creativa
            </motion.strong>
            .
          </p>
        </motion.div>
        


        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-full max-w-6xl mx-auto mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <StatItem key={index} {...stat} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;