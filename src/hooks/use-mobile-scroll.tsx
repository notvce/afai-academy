import { useEffect } from 'react';

/**
 * Hook para optimizar scroll suave en móviles
 * Mejora la experiencia táctil sin afectar desktop
 */
export function useMobileScrollOptimization() {
  useEffect(() => {
    // Solo aplicar en móviles
    if (typeof window === 'undefined' || window.innerWidth >= 768) return;

    // Scroll suave nativo
    document.documentElement.style.scrollBehavior = 'smooth';

    // Optimizar scroll performance (Safari iOS)
    // @ts-expect-error - propiedad webkit legacy para Safari
    document.documentElement.style.webkitOverflowScrolling = 'touch';

    // Prevenir bounce en Safari iOS
    document.body.style.overscrollBehavior = 'none';

    return () => {
      document.documentElement.style.scrollBehavior = '';
      document.body.style.overscrollBehavior = '';
    };
  }, []);
}
