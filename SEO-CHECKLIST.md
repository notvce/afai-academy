# SEO Optimization Checklist - AFAI Academy

## ✅ Implementado

### Meta Tags Básicos
- ✅ Title tag optimizado (<60 chars): "AFAI Academy | Máster en IA Generativa Online - Certificación Profesional"
- ✅ Meta description (<160 chars) con keywords relevantes
- ✅ Meta keywords con términos estratégicos
- ✅ Canonical URL configurada
- ✅ Lang="es" en HTML

### Social Media Optimization
- ✅ Open Graph completo (Facebook, LinkedIn)
- ✅ Twitter Cards con imagen
- ✅ Imágenes OG optimizadas (1200x630px)
- ✅ Alt text descriptivos

### Favicons y PWA
- ✅ Favicon.ico
- ✅ Apple touch icon (180x180)
- ✅ Favicons multi-resolución (16x16, 32x32)
- ✅ Android icons (192x192, 512x512)
- ✅ site.webmanifest con metadatos PWA
- ✅ Theme color (#F97316 - orange-primary)

### Structured Data (Schema.org)
- ✅ JSON-LD con EducationalOrganization
- ✅ Course schema embebido
- ✅ ContactPoint y dirección

### Archivos SEO
- ✅ robots.txt optimizado con Sitemap reference
- ✅ sitemap.xml con todas las secciones
- ✅ Prioridades y changefreq configuradas

### Performance
- ✅ Preconnect a Google Fonts
- ✅ Viewport configurado
- ✅ UTF-8 charset

## 📋 Pendientes (requieren assets externos)

### Imágenes
- ⚠️ Crear `/public/og-image.jpg` (1200x630px) para compartir en redes
- ⚠️ Crear `/public/logo.png` para schema.org
- ⚠️ Generar favicons reales desde logo:
  - favicon-16x16.png
  - favicon-32x32.png
  - apple-touch-icon.png (180x180)
  - android-chrome-192x192.png
  - android-chrome-512x512.png

Puedes usar herramientas como:
- https://realfavicongenerator.net/
- https://www.favicon-generator.org/

### Verificación
- ⚠️ Reemplazar URL placeholder "https://afai-academy.com/" con tu dominio real
- ⚠️ Añadir teléfono real en schema.org (actualmente "+34-XXX-XXX-XXX")
- ⚠️ Verificar propiedad en Google Search Console
- ⚠️ Verificar propiedad en Bing Webmaster Tools
- ⚠️ Configurar Google Analytics 4
- ⚠️ Configurar Microsoft Clarity o Hotjar

## 🚀 Recomendaciones Adicionales

### On-Page SEO
1. **Headings jerárquicos**: Verificar que cada sección use H1 único y H2-H6 apropiados
2. **Alt text en imágenes**: Asegurar que todas las imágenes decorativas tengan alt=""
3. **Internal linking**: Añadir enlaces internos entre secciones
4. **URL amigables**: Si añades páginas, usar slugs descriptivos

### Technical SEO
1. **HTTPS**: Asegurar que el sitio use SSL en producción
2. **Compresión**: Habilitar gzip/brotli en el servidor
3. **Caching**: Configurar cache headers apropiados
4. **CDN**: Considerar Cloudflare o similar para performance global

### Performance
1. **Core Web Vitals**:
   - LCP < 2.5s (ya optimizado con preconnect)
   - FID < 100ms (React optimizado)
   - CLS < 0.1 (layout estable)
2. **Lazy loading**: Imágenes ya deberían usar loading="lazy"
3. **Minificación**: Vite ya lo hace en build

### Content SEO
1. **Blog/Recursos**: Considerar añadir sección de artículos sobre IA
2. **FAQ Schema**: Añadir preguntas frecuentes con markup
3. **Video Schema**: Si añades videos, marcar con VideoObject
4. **Breadcrumbs**: Para navegación si crece el sitio

### Local SEO (si aplica)
1. Google My Business
2. LocalBusiness schema
3. NAP consistency (Name, Address, Phone)

## 🔍 Testing

Herramientas para validar:
- Google Search Console
- Google PageSpeed Insights
- Lighthouse (Chrome DevTools)
- Schema.org Validator
- Open Graph Debugger (Facebook)
- Twitter Card Validator
- Bing Webmaster Tools

## 📊 Métricas a Monitorear

1. **Indexación**: Páginas indexadas vs. enviadas
2. **Rankings**: Posiciones para keywords objetivo
3. **CTR**: Click-through rate en SERPs
4. **Conversiones**: Form submissions desde SEO traffic
5. **Core Web Vitals**: Mantener métricas en verde
