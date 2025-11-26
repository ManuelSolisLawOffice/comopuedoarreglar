'use client';

import Link from 'next/link'
// Importar Types explícitos para Framer Motion
import { motion, Variants, Transition } from 'framer-motion'; 
import { Scale, FileText, Users, Gavel, Home, FileCheck, ArrowRight, Star } from 'lucide-react' 

// --- DATA ORIGINAL ---
const services = [
  {
    title: 'Accidentes',
    icon: Scale,
    href: '/servicios/accidentes', 
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
    href: '/servicios/inmigracion', 
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
    href: '/servicios/seguros', 
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
    href: '/servicios/ley-criminal', 
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
    href: '/servicios/familia', 
    items: [
      'Divorcios',
      'Custodia',
      'Manutención de los hijos',
    ],
  },
  {
    title: 'Planificación Patrimonial',
    icon: FileCheck,
    href: '/servicios/planificacion', 
    items: [
      'Testamentos',
    ],
  },
]

// --- TIPIFICANDO EXPLÍCITAMENTE LAS VARIANTES ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    // La transición ahora usa el tipo compatible Transition
    transition: { 
      type: "spring",
      stiffness: 100
    } as Transition, // Usamos aserción para asegurar la compatibilidad si es necesario
  },
};
// --- FIN DE TIPIFICACIÓN ---


export default function Services() {

  return (
    <section id="servicios" className="py-32 relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* --- ENCABEZADO --- */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-gray-200/60 backdrop-blur-xl shadow-sm mb-8"
            >
              <Star size={14} className="text-[#B2904D] fill-[#B2904D]" />
              <span className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">EXPERIENCIA COMPROBADA</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-black text-[#002342] mb-6">
              Nuestras <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B2904D] to-[#D4AF37]">Áreas Legales</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expertos en diversas áreas del derecho para proteger sus derechos.
            </p>
          </motion.div>
        {/* --- FIN ENCABEZADO --- */}
        
        <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div key={index} variants={itemVariants} className="block">
                <Link
                  href={service.href} 
                  className="block h-full" 
                >
                  <motion.div
                    className="bg-white/70 backdrop-blur-md p-8 rounded-[2rem] shadow-xl border border-gray-100 transition-all duration-300 transform hover:scale-[1.02] group h-full flex flex-col justify-between
                                shadow-[0_20px_40px_-15px_rgba(0,0,0,0.25)] 
                                hover:border-[#B2904D] hover:shadow-[0_30px_60px_-15px_rgba(0,35,66,0.5),_0_0_0_3px_rgba(178,144,77,0.5)]"
                    whileHover={{ y: -5 }}
                  >
                    <div>
                        <div className="flex items-center mb-6 border-b border-gray-100 pb-4">
                            {/* Icono Principal */}
                            <div className="w-14 h-14 bg-[#002342] p-3 rounded-xl group-hover:bg-gradient-to-br group-hover:from-[#B2904D] group-hover:to-[#D4AF37] transition-colors duration-300 shadow-lg flex items-center justify-center">
                                <Icon className="w-6 h-6 text-white" />
                            </div>
                            {/* Título */}
                            <h3 className="text-2xl font-serif font-bold ml-4 text-[#002342] group-hover:text-[#B2904D] transition-colors duration-300">
                                {service.title}
                            </h3>
                        </div>

                        {/* Lista de Ítems (SIN FLECHAS) */}
                        <div>
                            <ul className="space-y-3">
                                {service.items.slice(0, 4).map((item, idx) => ( 
                                    <li key={idx} className="flex items-start text-gray-700">
                                        <div className="w-1.5 h-1.5 bg-[#B2904D] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <span className="font-medium text-sm">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
        
      </div>
    </section>
  )
}