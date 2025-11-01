# 📧 Configuración de Mailtrap para AFAI Academy

## ¿Qué es Mailtrap?

Mailtrap es un servicio de envío de emails transaccionales confiable, sin límites de dominio y con excelente deliverability. Perfecto para producción.

## 🚀 Pasos para configurar Mailtrap

### 1. Crear cuenta en Mailtrap

1. Ve a [https://mailtrap.io/](https://mailtrap.io/)
2. Regístrate con tu email (plan gratuito incluye 1,000 emails/mes)
3. Verifica tu cuenta por email

### 2. Obtener tu API Token

1. Una vez dentro del dashboard, ve a **Settings** → **API Tokens**
2. Crea un nuevo token con permisos de **Send emails**
3. Copia el token (se ve como: `1a2b3c4d5e6f7g8h9i0j...`)

### 3. Configurar variables de entorno

#### Para desarrollo local:

Edita `.env.local`:

```bash
# Mailtrap API Token
VITE_MAILTRAP_API_TOKEN=tu_token_de_mailtrap_aqui

# Emails que recibirán las notificaciones (separados por coma)
VITE_NOTIFICATION_EMAILS=info@afai-ia.com,direccion@afai-ia.com
```

#### Para producción (GitHub Actions):

El sistema ya está configurado para leer los secretos desde GitHub. Solo necesitas añadirlos:

```bash
# Desde tu terminal (reemplaza con tu token real):
gh secret set VITE_MAILTRAP_API_TOKEN -R notvce/afai-academy -b "tu_token_aqui"
gh secret set VITE_NOTIFICATION_EMAILS -R notvce/afai-academy -b "info@afai-ia.com,direccion@afai-ia.com"
```

O desde la web:
1. Ve a https://github.com/notvce/afai-academy/settings/secrets/actions
2. Haz clic en "New repository secret"
3. Añade:
   - Name: `VITE_MAILTRAP_API_TOKEN`
   - Value: tu token de Mailtrap
4. Repite para `VITE_NOTIFICATION_EMAILS`

### 4. Probar localmente

```bash
# Asegúrate de tener las variables en .env.local
npm run dev

# Abre http://localhost:8080
# Haz clic en "Inscríbete" o "Más Información"
# Rellena el formulario y envía
# Deberías ver "¡Mensaje enviado con éxito!"
```

### 5. Verificar emails enviados

1. Ve a tu dashboard de Mailtrap
2. Sección **Email Sending** → **Emails**
3. Verás todos los emails enviados con su estado (delivered, bounced, etc.)

## 🔒 Ventajas sobre EmailJS/Web3Forms

- ✅ **Sin límite de dominios**: Funciona desde cualquier dominio (github.io, custom, localhost)
- ✅ **Alta deliverability**: Los emails no van a spam
- ✅ **HTML personalizado**: Emails con diseño profesional
- ✅ **Analytics**: Métricas de entrega, aperturas, clics
- ✅ **Escalable**: Plan gratuito 1,000 emails/mes, planes pagos con más volumen

## 🎨 Personalización del email

El template HTML está en `src/lib/email-service.ts`. Puedes modificar:

- Colores del header (actualmente gradient naranja)
- Estructura de los campos
- Footer
- Formato del texto

## ⚠️ Troubleshooting

### Error: "Configuración de Mailtrap incompleta"
- Verifica que `VITE_MAILTRAP_API_TOKEN` y `VITE_NOTIFICATION_EMAILS` estén en `.env.local`

### El email no llega
- Revisa el dashboard de Mailtrap para ver el estado del envío
- Verifica que los emails de destino sean correctos
- Chequea la carpeta de spam

### Error 401 Unauthorized
- Tu API token es inválido o expiró
- Genera un nuevo token en Mailtrap Dashboard

## 📚 Documentación oficial

- [Mailtrap Docs](https://help.mailtrap.io/)
- [API Reference](https://api-docs.mailtrap.io/)
- [Node.js SDK](https://github.com/railsware/mailtrap-nodejs)
