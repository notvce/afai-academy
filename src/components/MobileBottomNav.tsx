import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, Home, BookOpen } from "lucide-react";
import { ContactForm } from "@/components/ui/contact-form";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Barra de navegación flotante optimizada para móviles
 * Solo se muestra en pantallas < 768px
 */
export const MobileBottomNav = () => {
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isMobile) return;

    const handleScroll = () => {
      // Mostrar después de 200px de scroll
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  // No renderizar en desktop
  if (!isMobile) return null;

  const navItems = [
    { icon: Home, label: "Inicio", href: "#inicio" },
    { icon: BookOpen, label: "Contenido", href: "#contenido" },
    { icon: MessageSquare, label: "Info", href: "#metodologia" },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-around py-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="flex flex-col items-center gap-1 text-gray-600 hover:text-orange-primary transition-colors active:scale-95 touch-manipulation min-w-[64px]"
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="text-xs font-medium">{item.label}</span>
                  </a>
                ))}
                <ContactForm variant="mobile">
                  <button className="flex flex-col items-center gap-1 text-orange-primary hover:text-orange-dark transition-colors active:scale-95 touch-manipulation min-w-[64px]">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-primary to-orange-dark rounded-full flex items-center justify-center shadow-lg">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs font-medium">Contacto</span>
                  </button>
                </ContactForm>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
