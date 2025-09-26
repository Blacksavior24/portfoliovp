"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    alert("¡Mensaje enviado correctamente! Te contactaré pronto.")
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* === mismo background que stack.tsx (sin overlay blanco) === */}
      <div className="pointer-events-none absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-tr from-accent-500/10 to-primary-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-secondary-400 to-accent-400 bg-clip-text text-transparent">
            Contacto
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él y ver cómo puedo ayudarte.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-slate-900/70 backdrop-blur-md border border-slate-700 rounded-2xl p-8 shadow-lg shadow-primary-500/10">
              <h3 className="text-2xl font-semibold mb-6 text-white">Información de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-200">Email</p>
                    <p className="text-slate-300">emersonevillataq@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-200">Teléfono</p>
                    <p className="text-slate-300">+51 928 924 575</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-200">Ubicación</p>
                    <p className="text-slate-300">Puno, Perú</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/70 backdrop-blur-md border border-slate-700 rounded-2xl p-8 shadow-lg shadow-primary-500/10">
              <h4 className="text-lg font-semibold mb-6 text-white">¿Por qué trabajar conmigo?</h4>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mr-4 flex-shrink-0" />
                  <span>Experiencia sólida en desarrollo full stack</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-4 flex-shrink-0" />
                  <span>Enfoque en código limpio y mantenible</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full mr-4 flex-shrink-0" />
                  <span>Comunicación clara y constante</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-4 flex-shrink-0" />
                  <span>Entrega puntual de proyectos</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mr-4 flex-shrink-0" />
                  <span>Soporte post-desarrollo</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-slate-900/70 backdrop-blur-md border border-slate-700 shadow-lg shadow-primary-500/10 rounded-2xl">
            <CardHeader className="bg-transparent">
              <CardTitle className="text-white text-xl">Envíame un mensaje</CardTitle>
              <CardDescription className="text-slate-300">
                Completa el formulario y te responderé lo antes posible.
              </CardDescription>
            </CardHeader>
            <CardContent className="bg-transparent p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-slate-200 font-medium">Nombre</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="bg-slate-800/60 border-slate-700 text-white placeholder:text-slate-400 focus:border-purple-500 focus:ring-purple-500/20"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-200 font-medium">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className="bg-slate-800/60 border-slate-700 text-white placeholder:text-slate-400 focus:border-purple-500 focus:ring-purple-500/20"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-slate-200 font-medium">Asunto</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Asunto del mensaje"
                    className="bg-slate-800/60 border-slate-700 text-white placeholder:text-slate-400 focus:border-purple-500 focus:ring-purple-500/20"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-slate-200 font-medium">Mensaje</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntame sobre tu proyecto..."
                    className="min-h-[140px] bg-slate-800/60 border-slate-700 text-white placeholder:text-slate-400 focus:border-purple-500 focus:ring-purple-500/20 resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : (<><Send className="mr-2 h-4 w-4" />Enviar Mensaje</>)}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
