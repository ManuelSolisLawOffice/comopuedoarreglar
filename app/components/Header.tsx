'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// Importamos ChevronDown para el indicador de submenú
import { Menu, X, ChevronDown } from 'lucide-react' 

// --- COLORES ORIGINALES ---
const PRIMARY_COLOR_ORIGINAL = '#B2904D'; // Dorado (fondo principal)
const ACCENT_COLOR_DARK = '#002342'; // Azul Oscuro (texto principal y hover)

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const menuItems = [
    { 
      name: 'OFICINAS', href: '/oficinas', type: 'link'
    },
    { 
      name: 'ÁREAS LEGALES', 
      href: '', 
      type: 'dropdown',
      key: 'areas',
      submenu: [
        { name: 'Accidentes', href: '/servicios/accidentes' },
        { name: 'Migración', href: '/servicios/inmigracion' },
        { name: 'Seguros', href: '/servicios/seguros' },
        { name: 'Ley Criminal', href: '/servicios/ley-criminal' },
        { name: 'Familia', href: '/servicios/familia' },
        { name: 'Planificación Familiar', href: '/servicios/planificacion' },
      ]
    },
    { name: 'CLIENTES DETENIDOS', href: '/clientes-detenidos', type: 'link' },
    { name: 'TESTIMONIOS', href: '/Testimonios', type: 'link' },
    { 
      name: 'ABOGADOS', 
      href: '/abogados',
      type: 'link'
    },
    { 
      name: 'INFORMACIÓN', 
      href: '', 
      type: 'dropdown',
      key: 'info',
      submenu:[
        { name: 'Recursos', href: '/informacion/recursos' },
        { name: 'Noticias', href: '/informacion/noticias' },
        { name: 'Preguntas Frecuentes', href: '/informacion/faq' }
      ] 
    },
  ]

  const handleDropdownClick = (key: string, hasSubmenu: boolean) => {
    if (hasSubmenu) {
        // Toggle el submenú en móvil
        setOpenSubmenu(openSubmenu === key ? null : key);
    } else {
        // Cierra el menú en móvil para enlaces directos
        setIsMenuOpen(false);
        setOpenSubmenu(null);
    }
  };

  return (
    // RESTAURADO EL COLOR DORADO como fondo principal
    <header className={`fixed top-0 w-full bg-[${PRIMARY_COLOR_ORIGINAL}] z-50 shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex-shrink-0">
            <Image
              // Asumimos que la imagen sigue siendo visible sobre el dorado
              src="/logo-manuel-solis.png" 
              alt="Logo Manuel Solis"
              width={276}
              height={80}
              className="h-14 w-auto" 
              priority
            />
          </Link>

          {/* --- MENÚ DE ESCRITORIO --- */}
          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <div 
                key={item.name} 
                className="relative group h-full flex items-center" 
              >
                {/* Contenedor del enlace principal / botón de despliegue */}
                {item.type === 'dropdown' ? (
                    // Botón de despliegue sin href
                    <div
                        className={`text-white hover:text-[${ACCENT_COLOR_DARK}] font-bold transition-colors text-sm uppercase cursor-pointer flex items-center tracking-wider`}
                    >
                        {item.name}
                        {/* Indicador visual de que es un despliegue */}
                        <ChevronDown size={14} className={`ml-1 transition-transform duration-200 group-hover:rotate-180`} />
                    </div>
                ) : (
                    // Enlace normal
                    <Link
                        href={item.href}
                        className={`text-white hover:text-[${ACCENT_COLOR_DARK}] font-bold transition-colors text-sm uppercase tracking-wider`}
                    >
                        {item.name}
                    </Link>
                )}

                {/* Submenú de escritorio: Diseño limpio con acentos oscuros */}
                {item.submenu && (
                  <div className="absolute left-0 top-full mt-0 pt-2 w-64 
                                  bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl 
                                  opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                                  transition-all duration-300 z-50 border border-gray-100">
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          // Texto Azul Oscuro, hover en Dorado/Azul
                          className={`block px-4 py-2 text-[${ACCENT_COLOR_DARK}] hover:bg-[${ACCENT_COLOR_DARK}]/5 hover:text-[${PRIMARY_COLOR_ORIGINAL}] transition-colors text-sm font-medium`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            {/* Botón de Idioma */}
            <Link
              href="/en"
              className={`flex items-center text-white hover:text-[${ACCENT_COLOR_DARK}] font-bold text-sm uppercase tracking-wider`}
            >
              <span className="mr-2">🇺🇸</span>
              ENGLISH
            </Link>
          </nav>

          {/* --- BOTÓN MENÚ MÓVIL --- */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden text-white p-2 border border-white/30 rounded-lg hover:bg-white/10 transition-colors`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* --- MENÚ MÓVIL DESPLEGADO --- */}
        {/* El color de fondo del menú móvil también es el color dorado original */}
        {isMenuOpen && (
          <nav className={`lg:hidden pb-4 transition-all duration-300 bg-[${PRIMARY_COLOR_ORIGINAL}]`}>
            {menuItems.map((item) => (
              <div key={item.name} className="border-b border-white/10 last:border-b-0">
                <div
                    className="flex items-center justify-between"
                    onClick={() => handleDropdownClick(item.key || item.name, !!item.submenu)}
                >
                    <Link
                        // Si es desplegable, previene la navegación en móvil para abrir el submenú
                        href={item.submenu ? '' : item.href} 
                        className={`block py-3 text-white font-bold hover:text-[${ACCENT_COLOR_DARK}] transition-colors ${item.submenu ? 'w-full' : ''}`}
                        onClick={item.submenu ? (e) => e.preventDefault() : () => handleDropdownClick(item.name, false)}
                    >
                        {item.name}
                    </Link>
                    {item.submenu && (
                        <ChevronDown 
                            size={18} 
                            className={`text-white transition-transform duration-300 ${openSubmenu === item.key ? 'rotate-180' : ''}`}
                        />
                    )}
                </div>

                {/* Submenú móvil */}
                {item.submenu && openSubmenu === item.key && (
                  <div className="pl-4 border-l border-white/20 ml-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        // Enlaces del submenú en color blanco con acento oscuro al hacer hover
                        className={`block py-2 text-white/80 hover:text-[${ACCENT_COLOR_DARK}] text-sm transition-colors`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
             {/* Botón de Idioma Móvil */}
            <Link
              href="/en"
              className={`flex items-center py-3 text-white hover:text-[${ACCENT_COLOR_DARK}] font-bold text-sm uppercase tracking-wider`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="mr-2">🇺🇸</span>
              ENGLISH
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}