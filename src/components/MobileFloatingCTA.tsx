/**
 * Botón CTA flotante para móviles - Actualmente desactivado
 */
export const MobileFloatingCTA = () => {
  return null; // Componente desactivado temporalmente

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
          <ContactButton variant="mobile-floating">
            <Button
              size="lg"
              className="h-14 w-14 rounded-full bg-gradient-to-br from-orange-primary to-orange-dark hover:from-orange-dark hover:to-orange-primary text-white shadow-2xl hover:shadow-orange-primary/50 transition-all duration-300 active:scale-95 touch-manipulation"
            >
              <Phone className="w-6 h-6" />
            </Button>
          </ContactButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
