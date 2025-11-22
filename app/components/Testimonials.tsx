'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star, Play } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: 'Octavio Varela',
    case: 'Residencia Permanente',
    rating: 5,
    comment: 'Feliz, sentí que todo lo que perdí cuando ingresé al país, se me devolvió y con un regalo',
    videoThumbnail: '/testimonials/octavio.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=cTJ9M5PT-S4',
  },
  {
    id: 2,
    name: 'María González',
    case: 'Asilo Político',
    rating: 5,
    comment: 'Excelente servicio, muy profesionales y atentos en cada paso del proceso',
    videoThumbnail: '/testimonials/maria.jpg',
    videoUrl: '#',
  },
  {
    id: 3,
    name: 'Juan Pérez',
    case: 'Visa U',
    rating: 5,
    comment: 'Gracias al equipo de Manuel Solís pude obtener mi visa y comenzar una nueva vida',
    videoThumbnail: '/testimonials/juan.jpg',
    videoUrl: '#',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section id="testimonios" className="py-24 bg-white"> {/* Fondo blanco y más padding */}
      <div className="container mx-auto px-4">
        
        {/* TÍTULO CON EFECTO DE MOVIMIENTO/DECORATIVO */}
        <div className="flex items-center justify-center mb-16">
          
          {/* Elemento Decorativo Izquierdo (Simula dinamismo) */}
          <div className="hidden md:block w-16 h-1 bg-[#B2904D] mx-8 transform rotate-6 opacity-70"></div>
          
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800">
              Lo que dicen <br />
              <span className="text-[#B2904D]">nuestros clientes</span>
            </h2>
          </div>

          {/* Elemento Decorativo Derecho (Simula dinamismo) */}
          <div className="hidden md:block w-16 h-1 bg-[#B2904D] mx-8 transform rotate-[-6deg] opacity-70"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Tarjeta principal de testimonio */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid md:grid-cols-2">
              
              {/* Video Section */}
              <div className="relative aspect-video md:aspect-auto bg-gray-900 group">
                <Image
                  src={current.videoThumbnail}
                  alt={current.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105" // Efecto sutil al pasar el mouse
                />
                
                {/* Botón de Play (Enlace directo) */}
                <a
                  href={current.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center"
                  aria-label="Reproducir video"
                >
                  <div className="bg-[#B2904D] rounded-full p-6 transition-all transform hover:scale-110 shadow-xl">
                    <Play className="w-12 h-12 text-white" fill="white" />
                  </div>
                </a>
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-12 flex flex-col justify-between">
                <div>
                    <h3 className="text-3xl font-bold mb-2 text-[#B2904D]">{current.name}</h3> {/* Nombre en dorado */}
                    <h4 className="text-xl text-gray-700 font-semibold mb-4">{current.case}</h4>

                    {/* Rating */}
                    <div className="flex gap-1 mb-6">
                    {[...Array(current.rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-[#B2904D] text-[#B2904D]" />
                    ))}
                    </div>

                    <p className="text-xl text-gray-800 mb-10 italic border-l-4 border-[#B2904D] pl-4 leading-relaxed"> {/* Diseño: Cita con borde dorado */}
                    &quot;{current.comment}&quot;
                    </p>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  {/* Botón Anterior */}
                  <button
                    onClick={prevSlide}
                    className="p-3 rounded-full bg-[#B2904D] text-white hover:bg-[#9a7a3d] transition-colors shadow-md"
                    aria-label="Anterior testimonio"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  {/* Puntos de Navegación */}
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentIndex
                            ? 'bg-[#B2904D] w-8' // Punto activo más ancho y en dorado
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`Ir a testimonio ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Botón Siguiente */}
                  <button
                    onClick={nextSlide}
                    className="p-3 rounded-full bg-[#B2904D] text-white hover:bg-[#9a7a3d] transition-colors shadow-md"
                    aria-label="Siguiente testimonio"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}