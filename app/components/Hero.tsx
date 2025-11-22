import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    // 1. Aumentado el padding superior a md:pt-52
    <section className="relative pt-36 pb-12 md:pt-36 md:pb-16 bg-white"> 
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-4 md:space-y-6">
            {/* 2. Aumentado ligeramente el tamaño de la letra h1 (lg:text-6xl) */}
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-normal leading-tight"> 
              Abogados de Inmigración <br className="hidden md:block" />
              Oficinas Legales de{' '}
              <span className="text-[#B2904D] font-bold">Manuel Solis</span>
            </h1>
            
            {/* 2. Aumentado (esto aun lo dejare a considerar para futuro con los cambios)ligeramente el tamaño de la letra h2 (md:text-3xl) */}
            <h2 className="text-xl md:text-3xl text-gray-700 font-normal">
              Soluciones legales confiables para el mundo real
            </h2>

            <div className="py-4"> 
              <p className="text-xl font-bold mb-1">
                Más de
              </p>
              <p className="text-3xl md:text-4xl font-bold text-[#A0522D] mb-1">
                50,000 CASOS GANADOS
              </p>
              <p className="text-lg font-bold">
                PARA NUESTROS CLIENTES
              </p>
            </div>

            <p className="text-md text-gray-700 leading-relaxed">
              Nuestros <strong className="font-semibold">abogados de inmigración</strong> están aquí para asistirle con su situación legal. 
              Le invitamos a conocer más sobre nosotros y ver por qué somos la opción más confiable para resolver 
              sus desafíos legales
            </p>

            <Link
              href="#contacto"
              className="inline-block bg-[#B2904D] text-white px-8 py-3 rounded-md font-semibold text-base
                hover:bg-[#9a7a3d] transition-all duration-300 shadow-md hover:shadow-lg 
                transform hover:scale-105"
            >
              Contactarnos
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            {/* 2. Aumentado ligeramente el tamaño de la imagen (w-[350px] h-[430px]) 
                 3. Eliminada la clase shadow-lg para que el borde sea lizo */}
            <div className="relative w-[350px] h-[430px] md:w-[400px] md:h-[500px] overflow-hidden 
                          rounded-xl bg-[#333130]"> 
              <Image
                src="/abogado-manuel-solis.jpg"
                alt="Abogado Manuel Solis"
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
                priority
              />
              
              {/* Experience Badge */}
              {/* Eliminada la clase shadow-lg para que el borde sea lizo */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-center p-3 rounded-md 
                              transform hover:scale-105 transition-all duration-300 w-[150px]">
                <p className="text-3xl font-bold text-[#B2904D]">34</p>
                <p className="text-sm font-medium text-gray-800">Años de <br/> Experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}