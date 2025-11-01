import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

interface ContactFormProps {
  children: React.ReactNode
}

export function ContactForm({ children }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log("Form submitted:", formData)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-orange-primary mb-2">
            Más Información
          </DialogTitle>
          <DialogDescription className="text-base text-gray-600">
            Completa el formulario y te contactaremos para brindarte toda la información sobre AFAI Academy.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Input
              placeholder="Nombre completo"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full border-gray-200 focus:border-orange-primary focus:ring-orange-primary"
              required
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full border-gray-200 focus:border-orange-primary focus:ring-orange-primary"
              required
            />
          </div>
          <div>
            <Input
              type="tel"
              placeholder="Teléfono"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full border-gray-200 focus:border-orange-primary focus:ring-orange-primary"
              required
            />
          </div>
          <div>
            <Textarea
              placeholder="¿Qué te gustaría saber sobre AFAI Academy?"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full border-gray-200 focus:border-orange-primary focus:ring-orange-primary min-h-[100px]"
              required
            />
          </div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-primary to-orange-dark hover:from-orange-dark hover:to-orange-primary text-white font-semibold py-2 px-4 rounded-md transition-all duration-300"
            >
              Enviar Consulta
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </form>
      </DialogContent>
    </Dialog>
  )
}