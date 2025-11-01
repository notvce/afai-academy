// Configuración de seguridad para el cliente
export const securityConfig = {
  // Tiempo máximo de inactividad en milisegundos (15 minutos)
  sessionTimeout: 15 * 60 * 1000,
  
  // Longitud máxima permitida para inputs
  maxInputLength: 256,
  
  // Lista de dominios permitidos para recursos externos
  allowedDomains: [
    'localhost',
    'afai-ai-masters.com', // Ajustar según el dominio real
  ],
  
  // Patrones de validación
  patterns: {
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    username: /^[a-zA-Z0-9_-]{3,16}$/,
  },
  
  // Función para validar URLs
  validateUrl: (url: string): boolean => {
    try {
      const parsedUrl = new URL(url);
      return securityConfig.allowedDomains.some(domain => 
        parsedUrl.hostname === domain || parsedUrl.hostname.endsWith(`.${domain}`)
      );
    } catch {
      return false;
    }
  },
  
  // Función para sanitizar datos
  sanitizeData: (data: unknown): unknown => {
    if (typeof data === 'string') {
      // Eliminar caracteres potencialmente peligrosos
      return data.replace(/[<>{}]/g, '');
    }
    if (Array.isArray(data)) {
      return data.map(item => securityConfig.sanitizeData(item));
    }
    if (typeof data === 'object' && data !== null) {
      const sanitized: Record<string, unknown> = {};
      for (const [key, value] of Object.entries(data as Record<string, unknown>)) {
        sanitized[key] = securityConfig.sanitizeData(value);
      }
      return sanitized;
    }
    return data;
  },
  
  // Función para validar tokens JWT
  validateToken: (token: string): boolean => {
    if (!token) return false;
    
    // Verificar formato básico de JWT (xxx.yyy.zzz)
    const parts = token.split('.');
    if (parts.length !== 3) return false;
    
    try {
      // Decodificar payload (sin verificar firma)
      const payload = JSON.parse(atob(parts[1]));
      
      // Verificar expiración
      if (payload.exp && Date.now() >= payload.exp * 1000) {
        return false;
      }
      
      return true;
    } catch {
      return false;
    }
  }
};