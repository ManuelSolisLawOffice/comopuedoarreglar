'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
    consent: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Aquí implementarías el envío real del formulario
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
        consent: false,
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  return (
    <section id="contacto" className="py-20 bg-[#B2904D]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              SOLICITE SU <span className="text-black">CONSULTA</span>
            </h2>
            <p className="text-lg text-white">
              Llene este formulario y le llamaremos en unos 10 minutos en horas de trabajo. 
              También puede llamarnos y estaremos encantados de contestar sus preguntas.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-2xl p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-lg font-medium mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#B2904D] 
                    focus:outline-none transition-colors"
                  placeholder="Nombre"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-lg font-medium mb-2">
                  Apellido *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#B2904D] 
                    focus:outline-none transition-colors"
                  placeholder="Apellido"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-lg font-medium mb-2">
                  Número de Teléfono *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#B2904D] 
                    focus:outline-none transition-colors"
                  placeholder="Número de Teléfono"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-medium mb-2">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#B2904D] 
                    focus:outline-none transition-colors"
                  placeholder="Correo Electrónico"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium mb-2">
                ¿Cómo te podemos Ayudar? Danos detalles de tu caso. *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#B2904D] 
                  focus:outline-none transition-colors resize-none"
                placeholder="Danos Detalles de Tu Caso"
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1 w-5 h-5 text-[#B2904D] focus:ring-[#B2904D] border-gray-300 rounded"
              />
              <label htmlFor="consent" className="text-sm text-gray-700">
                Acepto recibir mensajes de texto de marketing y otros mensajes del Law Office of 
                Manuel Solis al número proporcionado. Pueden aplicarse tarifas de mensajes y datos. 
                El consentimiento no es una condición para recibir servicios. Para más información, 
                por favor revise nuestra{' '}
                <a href="/politica-de-privacidad" className="text-[#B2904D] hover:underline">
                  Política de Privacidad
                </a>
                .
              </label>
            </div>

            {submitStatus === 'success' && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                ¡Gracias! Hemos recibido su mensaje y nos pondremos en contacto pronto.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                Hubo un error al enviar el formulario. Por favor, inténtelo de nuevo.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#B2904D] text-white py-4 px-8 rounded-lg font-semibold text-lg 
                hover:bg-[#9a7a3d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}