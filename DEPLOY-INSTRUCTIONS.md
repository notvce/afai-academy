# 🚀 Deploy Automático a GitHub Pages

## ✅ Configuración Completada

### Archivos Creados/Actualizados:

1. **`.github/workflows/deploy.yml`** - GitHub Actions workflow
2. **`vite.config.ts`** - Configurado con `base: '/'`
3. **`dist/`** - Build de producción listo

---

## 📋 Pasos para Activar el Deploy Automático

### 1. Inicializar Git (si no está inicializado)
```bash
cd /Users/educardenasvillalobos/Downloads/afai-ai-masters-main
git init
git add .
git commit -m "feat: deploy automático con logo AFAI y optimizaciones móviles"
```

### 2. Crear Repositorio en GitHub
1. Ve a https://github.com/new
2. Nombre sugerido: `afai-academy`
3. **NO** inicialices con README, .gitignore o licencia
4. Crea el repositorio vacío

### 3. Conectar y Push
```bash
git branch -M main
git remote add origin https://github.com/TU_USUARIO/afai-academy.git
git push -u origin main
```

### 4. Configurar GitHub Pages
1. Ve al repositorio en GitHub
2. **Settings** → **Pages** (menú izquierdo)
3. En **Source**, selecciona: **GitHub Actions**
4. Guarda los cambios

### 5. Deploy Automático se Activará
- El workflow se ejecutará automáticamente en cada push a `main`
- También puedes ejecutarlo manualmente desde la pestaña **Actions**

---

## 🌐 URLs de Acceso

Una vez desplegado, tu sitio estará en:
- **GitHub Pages**: `https://TU_USUARIO.github.io/afai-academy/`
- **Dominio personalizado** (opcional): Configurable en Settings → Pages

---

## 🔄 Workflow Automático

El archivo `.github/workflows/deploy.yml` hace:

1. **Build**:
   - Instala dependencias (`npm ci`)
   - Compila el proyecto (`npm run build`)
   - Genera archivos en `/dist`

2. **Deploy**:
   - Sube los archivos a GitHub Pages
   - Publica el sitio automáticamente

### Trigger del Deploy:
- ✅ **Push a `main`** - Deploy automático
- ✅ **Manual** - Desde Actions → Deploy to GitHub Pages → Run workflow

---

## 📦 Build Actual

```
dist/
├── index.html (4.68 kB → 1.42 kB gzip)
├── assets/
│   ├── index-BK126Y9L.css (75.92 kB → 12.98 kB gzip)
│   └── index-BOFAxqbf.js (499.98 kB → 157.68 kB gzip)
├── logo-afai.png (155 KB)
├── favicon.ico
├── robots.txt
├── sitemap.xml
└── site.webmanifest
```

**Total gzipped**: ~172 KB (excelente para performance)

---

## ⚙️ Configuración de Vite

```typescript
// vite.config.ts
export default defineConfig({
  base: '/',  // Ruta base para GitHub Pages
  // ... resto de config
});
```

---

## 🔧 Comandos Útiles

```bash
# Build local
npm run build

# Preview del build
npm run preview

# Ver workflow en GitHub
gh workflow view deploy  # (requiere GitHub CLI)

# Ver logs de deploy
gh run list --workflow=deploy
```

---

## 🎯 Características del Deploy

✅ **Optimizaciones aplicadas**:
- Logo AFAI integrado
- SEO completo (meta tags, schema.org, sitemap)
- Versión móvil optimizada
- Bottom nav y CTA flotante
- Scroll suave y touch optimization
- EmailJS configurado
- PWA manifest
- Robots.txt optimizado

✅ **Performance**:
- CSS minificado y gzipped
- JS code-splitting
- Lazy loading de componentes móviles
- Assets optimizados

✅ **Deploy**:
- GitHub Actions automático
- Build en cada push
- Zero downtime
- Rollback fácil (revertir commit)

---

## 🚨 Troubleshooting

### Si el workflow falla:

1. **Permisos de GitHub Actions**:
   - Settings → Actions → General
   - Workflow permissions: "Read and write permissions"
   - Guarda cambios

2. **GitHub Pages no configurado**:
   - Settings → Pages
   - Source: **GitHub Actions**

3. **Build local falla**:
   ```bash
   npm ci
   npm run build
   ```

### Si las rutas no funcionan:

- Verifica que `base: '/'` en `vite.config.ts`
- Si usas subdirectorio: `base: '/nombre-repo/'`

---

## 🎉 ¡Listo para Deploy!

Ejecuta los comandos del paso 1-3 y tu sitio se desplegará automáticamente.

**URLs importantes**:
- Repo: `https://github.com/TU_USUARIO/afai-academy`
- Actions: `https://github.com/TU_USUARIO/afai-academy/actions`
- Sitio: `https://TU_USUARIO.github.io/afai-academy/`
