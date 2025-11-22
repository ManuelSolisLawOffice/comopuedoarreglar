import Link from 'next/link'
import { Scale, FileText, Users, Gavel, Home, FileCheck, ArrowRight } from 'lucide-react'

// NOTA: Se ha agregado un campo `href` a los servicios para poder enlazar la tarjeta completa.
const services = [
  {
    title: 'Accidentes',
    icon: Scale,
    href: '/areas-legales/accidentes',
    items: [
      'Accidentes de aviación',
      'Accidentes automovilísticos',
      'Accidentes de vehículos de 18 ruedas',
      'Negligencia médica',
      'Explosión de plantas industriales',
    ],
  },
  {
    title: 'Migración',
    icon: FileText,
    href: '/areas-legales/migracion',
    items: [
      'Defensa contra la deportación',
      'Residencia por un familiar',
      'Petición de residencia por parte del empleador',
      'Asilo',
      'U-Visa / VAWA',
      'Naturalización',
    ],
  },
  {
    title: 'Seguros',
    icon: Home,
    href: '/areas-legales/seguros',
    items: [
      'Reclamaciones por granizo',
      'Reclamaciones por tormentas de viento',
      'Reclamaciones por incendio',
      'Reclamaciones por tornado',
    ],
  },
  {
    title: 'Ley Criminal',
    icon: Gavel,
    href: '/areas-legales/ley-criminal',
    items: [
      'Violencia Doméstica',
      'Asalto',
      'DWI - Manejo en estado de ebriedad',
      'Hurto',
      'Prostitución',
    ],
  },
  {
    title: 'Familia',
    icon: Users,
    href: '/areas-legales/familia',
    items: [
      'Divorcios',
      'Custodia',
      'Manutención de los hijos',
    ],
  },
  {
    title: 'Planificación Patrimonial',
    icon: FileCheck,
    href: '/areas-legales/planificacion-patrimonial',
    items: [
      'Testamentos',
    ],
  },
]

export default function Services() {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-white"> 
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800">
            Nuestras <span className="text-[#B2904D]">Áreas Legales</span>
          </h2>
          <p className="text-xl text-gray-600">
            Expertos en diversas áreas del derecho para proteger sus derechos.
          </p>
        </div>

        {/* CLAVE DE LA SOLUCIÓN:
          1. md:grid-cols-2 lg:grid-cols-3: Define la cuadrícula.
          2. items-stretch: Hace que los elementos hijos (las tarjetas) se estiren para tener la misma altura.
        */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              // El Link debe ser un bloque para que la tarjeta se estire correctamente
              <Link
                key={index}
                href={service.href} 
                className="block" 
              >
                <div
                  className="bg-gray-50 p-8 rounded-xl shadow-lg border-2 border-transparent 
                             hover:border-[#B2904D] hover:shadow-2xl transition-all duration-300 
                             transform hover:-translate-y-2 group h-full flex flex-col justify-between" // CLAVE: h-full y flex/flex-col/justify-between
                >
                  <div className="flex items-center mb-6 border-b border-gray-200 pb-4">
                    <div className="bg-[#B2904D] p-3 rounded-full group-hover:bg-[#9a7a3d] transition-colors duration-300 shadow-md">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold ml-4 text-gray-800 group-hover:text-[#B2904D] transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>

                  {/* Lista de Ítems */}
                  <div> {/* Este div asegura que la lista empuje el botón hacia abajo */}
                    <ul className="space-y-3">
                      {service.items.slice(0, 4).map((item, idx) => ( // Limitar a 4 ítems
                        <li key={idx} className="flex items-center group/item text-gray-700">
                          <ArrowRight className="w-4 h-4 text-[#B2904D] mr-3 flex-shrink-0 group-hover/item:text-[#9a7a3d] transition-colors" />
                          <span className="font-medium text-sm">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Botón/Enlace de "Saber Más" alineado en la parte inferior */}
                    {service.items.length > 4 && (
                      <div className="pt-4 mt-4 border-t border-gray-100">
                         <span className="text-sm font-semibold text-[#B2904D] hover:text-[#9a7a3d] transition-colors">
                            Ver todos los temas ({service.items.length})
                         </span>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/areas-legales"
            className="inline-flex items-center bg-[#B2904D] text-white px-10 py-4 rounded-full font-semibold text-lg
              hover:bg-[#9a7a3d] transition-all duration-300 shadow-xl hover:shadow-2xl 
              transform hover:scale-[1.02]"
          >
            Ver Todas las Áreas Legales
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}