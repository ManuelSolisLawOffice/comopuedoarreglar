import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

export const metadata = {
  title: 'Clientes Detenidos - Manuel Solis Law',
  description: 'Si su ser querido ha sido detenido por el Departamento de Inmigración, estamos aquí para ayudarlo. Más de 30 años de experiencia.',
}

export default function ClientesDetenidos() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section con imagen de fondo */}
      <section className="relative pt-64 pb-10 overflow-hidden">
        {/* Imagen de fondo */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/apretondemanos.png)',
          }}
        />
        
        {/* Overlay oscuro ligerísimo */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 leading-tight animate-fade-in">
              ¿USTED O UN SER QUERIDO <br className="hidden md:block" />
              HA SIDO <span className="text-black">DETENIDO?</span>
            </h1>
            <div className="h-1 w-32 bg-white mx-auto rounded-full mb-14"></div>
          </div>
        </div>

        {/* Onda decorativa inferior (MODIFICADA A RECTA) */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="h-10 w-full bg-white"></div> {/* Div simple y recto de color blanco */}
        </div>
      </section>

      {/* Sección: Localizando a seres queridos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8 animate-slide-in-left">
              <div className="w-2 h-16 bg-[#B2904D] rounded-full"></div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Localizando a seres queridos <span className="text-[#B2904D]">detenidos</span>
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6 animate-fade-in">
              <p className="text-lg md:text-xl">
                Si su ser querido ha sido detenido por el Departamento de Inmigración, es esencial actuar 
                rápidamente para encontrar su ubicación e iniciar los procedimientos necesarios.
              </p>

              <div className="bg-gradient-to-r from-[#B2904D]/10 to-transparent border-l-4 border-[#B2904D] p-6 rounded-r-lg my-8 transform hover:scale-[1.02] transition-transform duration-300">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  Nuestro personal puede ayudarlo a:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#B2904D] mr-2">✓</span>
                    <span>Localizar a su familiar detenido</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#B2904D] mr-2">✓</span>
                    <span>Buscar su liberación bajo fianza</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#B2904D] mr-2">✓</span>
                    <span>Iniciar los procedimientos legales necesarios</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg">
                El Despacho Legal de Manuel Solis ha manejado exitosamente más de 50,000 casos en los 
                últimos 30 años. Estamos listos para ayudarlo a obtener el mejor resultado posible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Por qué el tiempo es crucial */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
                Por qué el tiempo es <span className="text-[#B2904D]">crucial</span> en casos de inmigración
              </h2>
              <div className="h-1 w-24 bg-[#B2904D] mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Card 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in">
                <div className="w-16 h-16 bg-[#B2904D] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Actuación Inmediata</h3>
                <p className="text-gray-600 text-center">
                  Cada minuto cuenta. Contactarnos rápido puede marcar la diferencia en el resultado de su caso.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-delay">
                <div className="w-16 h-16 bg-[#B2904D] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Experiencia Legal</h3>
                <p className="text-gray-600 text-center">
                  Nuestros abogados expertos lo guiarán a través del proceso con conocimiento especializado.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-delay-2">
                <div className="w-16 h-16 bg-[#B2904D] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Apoyo Completo</h3>
                <p className="text-gray-600 text-center">
                  Estamos con usted en cada paso del camino, brindando apoyo legal integral.
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6 animate-fade-in">
              <p className="text-lg leading-relaxed">
                <span className="text-[#B2904D] font-semibold">El tiempo es esencial en cualquier caso de inmigración</span>, 
                y mientras más espera, más difícil se vuelve lograr un resultado favorable. Por eso es crucial 
                contactarnos lo antes posible. Nuestros abogados expertos lo guiarán a través del proceso y le 
                brindarán el asesoramiento legal que necesita para enfrentar esta delicada situación.
              </p>

              <div className="bg-[#B2904D] text-white p-8 rounded-2xl shadow-xl text-center transform hover:scale-[1.02] transition-transform duration-300">
                <p className="text-2xl font-bold mb-4">¿Necesita ayuda inmediata?</p>
                <a 
                  href="tel:+18669795146" 
                  className="inline-flex items-center gap-2 text-3xl font-bold hover:text-gray-200 transition-colors"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +1-866-979-5146
                </a>
                <p className="text-sm mt-2 text-white/90">(9AM a 9PM CST)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Solicitantes de asilo */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="animate-slide-in-right">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Solicitantes de asilo: <span className="text-[#B2904D]">Navegando el proceso</span>
              </h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  Los solicitantes de asilo deben participar en entrevistas rigurosas, conocidas como 
                  entrevistas de <strong>&quot;miedo creíble&quot;</strong> o <strong>&quot;miedo razonable&quot;</strong>.
                </p>
                <p>
                  Nuestros abogados experimentados pueden guiarlo a través del proceso, asegurándose de 
                  que esté bien preparado para estas entrevistas críticas.
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#B2904D] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Preparación completa para entrevistas de asilo</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#B2904D] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Asesoría legal especializada</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#B2904D] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Acompañamiento durante todo el proceso</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Un despacho legal con sus mejores intereses */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Un despacho legal con sus <span className="text-[#B2904D]">mejores intereses</span> en mente
              </h2>
              <div className="h-1 w-24 bg-[#B2904D] mx-auto rounded-full"></div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl animate-fade-in-delay">
              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p className="text-lg leading-relaxed">
                  Es fundamental contar con la ayuda de un despacho legal con un historial exitoso, ya que 
                  el enfoque del Departamento de Inmigración no es ayudarlo. Nuestros abogados lo prepararán 
                  para cualquier entrevista o audiencia y lo informarán sobre posibles 
                  <span className="text-[#B2904D] font-semibold"> áreas de alivio para las que pueda ser elegible 
                  según las leyes de inmigración de los Estados Unidos.</span>
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-[#B2904D]/10 p-6 rounded-xl border-l-4 border-[#B2904D]">
                    <h3 className="font-bold text-gray-900 mb-2 text-xl">50,000+ Casos Exitosos</h3>
                    <p className="text-gray-700">
                      Más de tres décadas de experiencia sirviendo a la comunidad
                    </p>
                  </div>
                  <div className="bg-[#B2904D]/10 p-6 rounded-xl border-l-4 border-[#B2904D]">
                    <h3 className="font-bold text-gray-900 mb-2 text-xl">Atención Personalizada</h3>
                    <p className="text-gray-700">
                      Cada caso es tratado con la máxima dedicación y profesionalismo
                    </p>
                  </div>
                </div>

                <p className="text-lg leading-relaxed">
                  En el Despacho Legal de Manuel Solis, tratamos a nuestros clientes con amabilidad, 
                  objetividad y convicción para lograr su éxito.
                </p>

                <p className="text-lg leading-relaxed">
                  Sabemos que su caso de inmigración es de suma importancia y trabajaremos incansablemente 
                  para ayudarlo a obtener el mejor resultado posible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario de Contacto */}
      <div id="contacto">
        <ContactForm />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  )
}