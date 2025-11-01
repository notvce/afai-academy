import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { ContactForm } from "@/components/ui/contact-form";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Botón CTA flotante para móviles
 * Aparece al hacer scroll, solo en pantallas < 768px
 */
export const MobileFloatingCTA = () => {
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isMobile) return;

    const handleScroll = () => {
      // Mostrar después del hero (aprox 600px)
      const shouldShow = window.scrollY > 600;
      // Ocultar cerca del footer (últimos 400px)
      const nearFooter = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 400;
      
      setIsVisible(shouldShow && !nearFooter);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check inicial
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  // No renderizar en desktop
  if (!isMobile) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-20 right-4 z-40 md:hidden"
        >
          <ContactForm variant="mobile-floating">
            <Button
              size="lg"
              className="h-14 w-14 rounded-full bg-gradient-to-br from-orange-primary to-orange-dark hover:from-orange-dark hover:to-orange-primary text-white shadow-2xl hover:shadow-orange-primary/50 transition-all duration-300 active:scale-95 touch-manipulation"
            >
              <Phone className="w-6 h-6" />
            </Button>
          </ContactForm>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
