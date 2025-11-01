# 📧 Configuración de MailDiver para AFAI Academy

## ¿Qué es MailDiver?

MailDiver es un servicio de envío de emails transaccionales simple, rápido y confiable. Perfecto para formularios de contacto en sitios estáticos.

## 🚀 Pasos para configurar MailDiver

### 1. Crear cuenta en MailDiver

1. Ve a [https://maildiver.com/](https://maildiver.com/)
2. Regístrate con tu email
3. Verifica tu cuenta por email

### 2. Obtener tu API Key

1. Una vez dentro del dashboard, ve a **API Keys**
2. Copia tu API Key (se ve como: `md_xxxxxxxxxxxxxxxxxx`)

### 3. Configurar variables de entorno

#### Para desarrollo local:

Edita `.env.local`:

```bash
# MailDiver API Key
VITE_MAILDIVER_API_KEY=tu_api_key_de_maildiver_aqui

# Emails que recibirán las notificaciones (separados por coma)
VITE_NOTIFICATION_EMAILS=info@afai-ia.com,direccion@afai-ia.com
```

#### Para producción (GitHub Actions):

```bash
# Desde tu terminal (reemplaza con tu API key real):
gh secret set VITE_MAILDIVER_API_KEY -R notvce/afai-academy -b "tu_api_key_aqui"
gh secret set VITE_NOTIFICATION_EMAILS -R notvce/afai-academy -b "info@afai-ia.com,direccion@afai-ia.com"
```

O desde la web:
1. Ve a https://github.com/notvce/afai-academy/settings/secrets/actions
2. Haz clic en "New repository secret"
3. Añade:
   - Name: `VITE_MAILDIVER_API_KEY`
   - Value: tu API key de MailDiver
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

1. Ve a tu dashboard de MailDiver
2. Sección **Sent Emails**
3. Verás todos los emails enviados con su estado

## 🔒 Ventajas de MailDiver

- ✅ **Simple y rápido**: Setup en minutos
- ✅ **Sin configuración de dominio**: Funciona desde cualquier origen
- ✅ **Confiable**: Alta deliverability
- ✅ **HTML personalizado**: Emails con diseño profesional
- ✅ **Económico**: Planes accesibles y sin costos ocultos

## 🎨 Personalización del email

El template HTML está en `src/lib/email-service.ts`. Puedes modificar:

- Colores del header (actualmente gradient naranja)
- Estructura de los campos
- Footer
- Formato del texto

## ⚠️ Troubleshooting

### Error: "Configuración de MailDiver incompleta"
- Verifica que `VITE_MAILDIVER_API_KEY` y `VITE_NOTIFICATION_EMAILS` estén en `.env.local`

### El email no llega
- Revisa el dashboard de MailDiver para ver el estado del envío
- Verifica que los emails de destino sean correctos
- Chequea la carpeta de spam

### Error 401 Unauthorized
- Tu API key es inválida o expiró
- Genera una nueva key en MailDiver Dashboard

## 📚 Documentación oficial

- [MailDiver Website](https://maildiver.com/)
- [MailDiver API Docs](https://maildiver.com/docs/api)
