# 🎓 AFAI Academy - Máster en IA Generativa

> Academia de Formación de Alto Impacto - Plataforma educativa especializada en Inteligencia Artificial

[![Deploy Status](https://github.com/TU_USUARIO/afai-academy/actions/workflows/deploy.yml/badge.svg)](https://github.com/TU_USUARIO/afai-academy/actions)
[![Built with Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite)](https://vitejs.dev)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript)](https://www.typescriptlang.org)

---

## 🚀 Demo en Vivo

**🌐 [Ver Sitio](https://TU_USUARIO.github.io/afai-academy/)**

---

## ✨ Características

### 🎨 Diseño y UX
- ✅ **Logo AFAI corporativo** integrado
- ✅ **Responsive design** completo (mobile-first)
- ✅ **Dark mode** ready
- ✅ **Animaciones suaves** con Framer Motion
- ✅ **Glassmorphism** effects

### 📱 Optimización Móvil
- ✅ **Bottom navigation** flotante
- ✅ **CTA flotante** inteligente
- ✅ **Touch targets** optimizados (WCAG 2.1)
- ✅ **Scroll suave** nativo
- ✅ **Teclados nativos** (tel, email)
- ✅ **Prevención de zoom** iOS

### 🔍 SEO
- ✅ **Meta tags** completos
- ✅ **Open Graph** & Twitter Cards
- ✅ **Schema.org** (EducationalOrganization)
- ✅ **Sitemap.xml** optimizado
- ✅ **Robots.txt** configurado
- ✅ **PWA Manifest**

### 📧 Funcionalidades
- ✅ **Formulario de contacto** con EmailJS
- ✅ **Validación** en tiempo real
- ✅ **Feedback visual** (loading, success, error)
- ✅ **Envío dual** (usuario + organización)
- ✅ **Auto-cierre** del modal

### 🎯 Componentes
- ✅ Hero section con estadísticas animadas
- ✅ Sección de pilares formativos
- ✅ Metodología de enseñanza
- ✅ Contenido del training
- ✅ Certificación profesional
- ✅ Footer con CTA

---

## 🛠️ Tech Stack

| Categoría | Tecnología |
|-----------|------------|
| **Framework** | React 18.3 + TypeScript 5.8 |
| **Build Tool** | Vite 5.4 |
| **Styling** | Tailwind CSS 3.4 |
| **UI Components** | shadcn/ui + Radix UI |
| **Animations** | Framer Motion 12.23 |
| **Icons** | Lucide React |
| **Forms** | React Hook Form + Zod |
| **Email** | EmailJS |
| **Deploy** | GitHub Pages + Actions |

---

## 📦 Instalación

### Requisitos
- Node.js 20+ ([instalar con nvm](https://github.com/nvm-sh/nvm))
- npm o bun

### Setup Local

```bash
# Clonar repositorio
git clone https://github.com/TU_USUARIO/afai-academy.git
cd afai-academy

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con tus claves de EmailJS

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en: **http://localhost:8080**

---

## 🔧 Scripts Disponibles

```bash
npm run dev          # Desarrollo con hot-reload
npm run build        # Build de producción
npm run preview      # Preview del build
npm run lint         # Linter ESLint
```

---

## 🌐 Deploy Automático

El proyecto usa GitHub Actions para deploy automático a GitHub Pages.

### Primera vez:

1. **Crear repositorio en GitHub**
2. **Conectar y push**:
   ```bash
   git remote add origin https://github.com/TU_USUARIO/afai-academy.git
   git push -u origin main
   ```
3. **Configurar GitHub Pages**:
   - Settings → Pages → Source: **GitHub Actions**

### Actualizaciones:
```bash
git add .
git commit -m "feat: descripción del cambio"
git push
```

El deploy se ejecuta automáticamente en cada push a `main`.

📖 **[Ver guía completa de deploy](./DEPLOY-INSTRUCTIONS.md)**

---

## 📱 Optimizaciones Móviles

El sitio incluye componentes exclusivos para móvil que se activan automáticamente en pantallas < 768px:

- **MobileBottomNav**: Navegación flotante inferior
- **MobileFloatingCTA**: Botón CTA circular
- **Scroll optimization**: Suave y nativo
- **Touch targets**: Mínimo 44x44px

📖 **[Ver documentación móvil](./MOBILE-OPTIMIZATION.md)**

---

## 🔍 SEO

El sitio está optimizado para SEO con:

- Title y description optimizados
- Meta tags para redes sociales
- Schema.org markup (JSON-LD)
- Sitemap.xml con prioridades
- Robots.txt configurado
- Canonical URLs

📖 **[Ver checklist SEO](./SEO-CHECKLIST.md)**

---

## 📧 Configuración EmailJS

Para el formulario de contacto, necesitas configurar EmailJS:

1. Crear cuenta en [EmailJS](https://www.emailjs.com/)
2. Crear un servicio de email
3. Crear una plantilla de email
4. Obtener: Service ID, Template ID, Public Key
5. Añadir a `.env.local`:

```env
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
VITE_NOTIFICATION_EMAILS=info@afai-ia.com,direccion@afai-ia.com
```

---

## 📁 Estructura del Proyecto

```
afai-academy/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/
│   ├── logo-afai.png           # Logo corporativo
│   ├── favicon.ico
│   ├── robots.txt
│   ├── sitemap.xml
│   └── site.webmanifest
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Header con logo
│   │   ├── Hero.tsx            # Hero section
│   │   ├── MobileBottomNav.tsx # Nav móvil
│   │   ├── MobileFloatingCTA.tsx
│   │   └── ui/                 # shadcn/ui components
│   ├── hooks/
│   │   ├── use-mobile.tsx      # Detección móvil
│   │   └── use-mobile-scroll.tsx
│   ├── lib/
│   │   ├── email-service.ts    # EmailJS integration
│   │   └── utils.ts
│   ├── pages/
│   │   └── Index.tsx           # Página principal
│   └── index.css               # Estilos globales
├── index.html                  # HTML con meta tags SEO
├── vite.config.ts              # Configuración Vite
└── package.json
```

---

## 🎨 Personalización

### Colores de Marca
Los colores están definidos en `src/index.css`:

```css
--orange-primary: 16 100% 66%;  /* #F97316 */
--orange-dark: 16 100% 56%;
--dark-navy: 215 28% 17%;
```

### Logo
Reemplazar `/public/logo-afai.png` con tu logo (recomendado: PNG con transparencia).

---

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama: `git checkout -b feature/nueva-funcionalidad`
3. Commit: `git commit -m "feat: descripción"`
4. Push: `git push origin feature/nueva-funcionalidad`
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto es privado y pertenece a **AFAI Academy**.

---

## 📞 Contacto

- **Email**: info@afai-ia.com
- **Email dirección**: direccion@afai-ia.com

---

## 🙏 Agradecimientos

- [Vite](https://vitejs.dev)
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion)
- [EmailJS](https://www.emailjs.com)

---

**Hecho con ❤️ para AFAI Academy** 🎓

- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/6f07929b-6a6c-40a4-b8a6-f01a2bcf0438) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
