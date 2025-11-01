import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Loader2, Send } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { sendContactFormEmail } from "@/lib/email-service"
import { AlertCircle, CheckCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface ContactFormProps {
  children: React.ReactNode
  variant?: "header" | "footer" | "mobile" | "mobile-floating"
}

export function ContactForm({ children, variant = "header" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string>("")
  const [open, setOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
  setSubmitStatus('idle')
  setErrorMessage("")

    try {
      await sendContactFormEmail(formData)
      setSubmitStatus('success')
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      })
      
      // Cerrar el diálogo después de 3 segundos
      setTimeout(() => {
        setOpen(false)
        setSubmitStatus('idle')
      }, 3000)
    } catch (error) {
      console.error('Error:', error)
      setSubmitStatus('error')
      const msg = (error instanceof Error && error.message)
        ? error.message
        : 'No pudimos enviar tu mensaje.'
      setErrorMessage(msg)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-orange-primary mb-2 flex items-center gap-2">
            Solicitar Información
          </DialogTitle>
          <DialogDescription className="text-base text-gray-600">
            ¿Te interesa formarte en IA? Déjanos tus datos y te contactaremos para brindarte toda la información sobre nuestros programas.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Input
              placeholder="Nombre completo"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full border-gray-200 focus:border-orange-primary focus:ring-orange-primary h-12 text-base"
              disabled={isSubmitting}
              required
            />
          </div>
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full border-gray-200 focus:border-orange-primary focus:ring-orange-primary h-12 text-base"
              disabled={isSubmitting}
              required
              inputMode="email"
            />
          </div>
          <div className="space-y-2">
            <Input
              type="tel"
              placeholder="Teléfono"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full border-gray-200 focus:border-orange-primary focus:ring-orange-primary h-12 text-base"
              disabled={isSubmitting}
              required
              inputMode="tel"
            />
          </div>
          <div className="space-y-2">
            <Textarea
              placeholder="¿Qué te gustaría saber sobre nuestros programas?"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full border-gray-200 focus:border-orange-primary focus:ring-orange-primary min-h-[100px] text-base"
              disabled={isSubmitting}
              required
            />
          </div>
          <AnimatePresence mode="wait">
            {isSubmitting && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-blue-50 border border-blue-200 rounded-lg p-4"
              >
                <div className="flex items-center gap-3">
                  <Loader2 className="h-5 w-5 text-blue-600 animate-spin" />
                  <div className="flex-1">
                    <p className="text-blue-800 font-medium">Enviando tu mensaje...</p>
                    <p className="text-blue-600 text-sm">Esto solo tomará unos segundos</p>
                  </div>
                </div>
              </motion.div>
            )}

            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <Alert className="bg-green-50 border-green-200">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-800">
                    ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
                  </AlertDescription>
                </Alert>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <Alert className="bg-red-50 border-red-200">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-800">
                    Hubo un error al enviar el formulario. {errorMessage ? (<>
                      <span className="font-medium">Detalle:</span> {errorMessage}
                    </>) : 'Por favor, intenta de nuevo.'}
                  </AlertDescription>
                </Alert>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            whileHover={!isSubmitting ? { scale: 1.02 } : {}}
            whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            className="pt-2"
          >
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-orange-primary to-orange-dark hover:from-orange-dark hover:to-orange-primary text-white font-semibold py-3 px-4 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed h-12 text-base touch-manipulation"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Enviando mensaje...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Solicitud
                </>
              )}
            </Button>
          </motion.div>
        </form>
      </DialogContent>
    </Dialog>
  )
}