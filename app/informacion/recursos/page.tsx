// src/app/recursos/page.tsx
'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useState } from 'react'

export default function RecursosPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section (Ajustado a tamaño más grande y fondo de imagen con filtro negro ligero) */}
      <section className="relative pt-64 pb-64 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/apretondemanos.png)',
          }}
        />
        
        {/* Dark, light black overlay (bg-black/30) */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              RECURSOS
            </h1>
            <p className="text-xl text-white/90 animate-fade-in-delay">
              Información valiosa para tu proceso de naturalización
            </p>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <div className="container mx-auto px-4 py-16">
        
        {/* Video 1: Questions 1-20 */}
        <VideoSection
          title="PREGUNTAS 1 - 20"
          videoThumbnail="/testimonials/recursos-1.jpg"
          videoUrl="https://manuelsolis.com/wp-content/uploads/2023/12/20-Civics-Test-Questions-PP.-I_1.mp4"
          questions={questions1to20}
        />

        {/* Video 2: Questions 21-40 */}
        <VideoSection
          title="PREGUNTAS 21 - 40"
          videoThumbnail="/testimonials/recursos-2.jpg"
          videoUrl="https://manuelsolis.com/wp-content/uploads/2023/12/20-Civics-Test-Questions-PP.-II_1.mp4"
          questions={questions21to40}
        />

        {/* Video 3: Questions 41-60 */}
        <VideoSection
          title="PREGUNTAS 41 - 60"
          videoThumbnail="/testimonials/recursos-3.jpg"
          videoUrl="https://manuelsolis.com/wp-content/uploads/2023/12/20-Ciivics-Questions-P-III_1.mp4"
          questions={questions41to60}
        />

        {/* Video 4: Questions 61-80 */}
        <VideoSection
          title="PREGUNTAS 61 - 80"
          videoThumbnail="/testimonials/recursos-4.jpg"
          videoUrl="https://manuelsolis.com/wp-content/uploads/2023/12/20-Civicts-Test-Questions-IV_1.mp4"
          questions={questions61to80}
        />

        {/* Video 5: Questions 81-100 */}
        <VideoSection
          title="PREGUNTAS 81 - 100"
          videoThumbnail="/testimonials/recursos-5.jpg"
          videoUrl="https://manuelsolis.com/wp-content/uploads/2023/12/20-Civics-Test-Questions-P-V_1.mp4"
          questions={questions81to100}
        />

        {/* Video 6: Questions 101-128 */}
        <VideoSection
          title="PREGUNTAS 101 - 128"
          videoThumbnail="/testimonials/recursos-6.jpg"
          videoUrl="https://manuelsolis.com/wp-content/uploads/2023/12/28-Civic-Test-Questions-P-VI_1.mp4"
          questions={questions101to128}
        />

      </div>

      <Footer />
    </main>
  )
}

// Component for each video section
function VideoSection({ 
  title, 
  videoThumbnail, 
  videoUrl, 
  questions 
}: { 
  title: string
  videoThumbnail: string
  videoUrl: string
  questions: { question: string; answers: string[] }[]
}) {
  return (
    <div className="mb-20 animate-fade-in-up">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
        
        {/* Title */}
        <div className="bg-gradient-to-r from-[#B2904D] to-[#8B6F3E] p-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
            {title}
          </h2>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video bg-gray-900 group">
          <video 
            controls 
            poster={videoThumbnail}
            className="w-full h-full"
            preload="metadata"
          >
            <source src={videoUrl} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>

        {/* Accordion */}
        <AccordionSection questions={questions} />
      </div>
    </div>
  )
}

// Accordion Component
function AccordionSection({ questions }: { questions: { question: string; answers: string[] }[] }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-t border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
      >
        <span className="text-lg font-semibold text-gray-800">
          Mostrar preguntas y respuestas
        </span>
        <div className="flex items-center gap-2">
          {isOpen ? (
            <ChevronUp className="w-6 h-6 text-[#B2904D]" />
          ) : (
            <ChevronDown className="w-6 h-6 text-[#B2904D]" />
          )}
        </div>
      </button>

      {isOpen && (
        <div className="p-6 bg-white animate-slide-down">
          <div className="space-y-6">
            {questions.map((item, index) => (
              <div key={index} className="border-l-4 border-[#B2904D] pl-4 hover:bg-gray-50 transition-colors duration-200 rounded-r-lg p-3">
                <p className="font-bold text-gray-900 mb-3 text-lg">
                  {item.question}
                </p>
                <ul className="space-y-2">
                  {item.answers.map((answer, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="text-[#B2904D] mt-1">•</span>
                      <span>{answer}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// Questions Data (Todas en Español)
const questions1to20 = [
  {
    question: "¿Cuál es la ley suprema de la nación?",
    answers: ["La Constitución"]
  },
  {
    question: "¿Cuántas enmiendas tiene la Constitución?",
    answers: ["Veintisiete (27)"]
  },
  {
    question: "¿Cuál es el sistema económico de los Estados Unidos?",
    answers: ["Economía capitalista", "Economía de mercado"]
  },
  {
    question: "Mencione un poder del Congreso de los EE. UU.",
    answers: ["Redactar leyes", "Declarar la guerra", "Hacer el presupuesto federal"]
  },
  {
    question: "¿Cuál es el nombre del Presidente de la Cámara de Representantes ahora?",
    answers: ["(Visite uscis.gov/es/ciudadania/prueba-civica para el nombre del Presidente de la Cámara de Representantes.)"]
  },
  {
    question: "¿Por cuántos años es elegido el Presidente de los Estados Unidos?",
    answers: ["Cuatro (4)"]
  },
  {
    question: "¿Cuál es el nombre del Presidente de los Estados Unidos ahora?",
    answers: ["(Visite uscis.gov/es/ciudadania/prueba-civica para el nombre del Presidente de los Estados Unidos.)"]
  },
  {
    question: "¿Cuál es el nombre del Vicepresidente de los Estados Unidos ahora?",
    answers: ["(Visite uscis.gov/es/ciudadania/prueba-civica para el nombre del Vicepresidente de los Estados Unidos.)"]
  },
  {
    question: "¿Quién puede vetar los proyectos de ley?",
    answers: ["El Presidente (de los Estados Unidos)"]
  },
  {
    question: "¿Cuál es el tribunal más alto de los Estados Unidos?",
    answers: ["La Corte Suprema"]
  },
  {
    question: "¿Quién es el Gobernador de su estado ahora?",
    answers: ["Las respuestas variarán. [Los residentes del Distrito de Columbia deben contestar que D.C. no tiene Gobernador. Los residentes de territorios de EE. UU. deben nombrar al Gobernador del territorio.]"]
  },
  {
    question: "¿A qué demostramos lealtad cuando decimos el Juramento a la Bandera?",
    answers: ["Los Estados Unidos", "La bandera"]
  },
  {
    question: "¿Qué grupo de personas fue traído a los Estados Unidos y vendido como esclavos?",
    answers: ["Africanos", "Gente de África"]
  },
  {
    question: "¿Quién escribió la Declaración de Independencia?",
    answers: ["(Thomas) Jefferson"]
  },
  {
    question: "George Washington es famoso por muchas cosas. Mencione una.",
    answers: ["Padre de nuestra Patria", "Primer Presidente de los Estados Unidos", "General del Ejército Continental", "Presidente de la Convención Constitucional"]
  },
  {
    question: "Abraham Lincoln es famoso por muchas cosas. Mencione una.",
    answers: ["Liberó a los esclavos (Proclamación de Emancipación)", "Salvó (o preservó) la Unión", "Lideró a los Estados Unidos durante la Guerra Civil", "16º Presidente de los Estados Unidos", "Dio el Discurso de Gettysburg"]
  },
  {
    question: "Martin Luther King, Jr. es famoso por muchas cosas. Mencione una.",
    answers: ["Luchó por los derechos civiles", "Trabajó por la igualdad para todos los estadounidenses", "Trabajó para asegurar que las personas no fueran juzgadas por el color de su piel, sino por el contenido de su carácter."]
  },
  {
    question: "¿Qué evento importante ocurrió el 11 de septiembre de 2001 en los Estados Unidos?",
    answers: ["Terroristas atacaron los Estados Unidos", "Terroristas tomaron el control de dos aviones y los estrellaron contra el World Trade Center en Nueva York", "Terroristas tomaron el control de un avión y lo estrellaron contra el Pentágono en Arlington, Virginia", "Terroristas tomaron el control de un avión que estaba dirigido a Washington, D.C., y lo estrellaron en un campo en Pensilvania"]
  },
  {
    question: "¿Por qué la bandera tiene 13 franjas?",
    answers: ["Porque había 13 colonias originales", "Porque las franjas representan a las colonias originales"]
  },
  {
    question: "Mencione tres días festivos nacionales de EE. UU.",
    answers: ["Día de Año Nuevo", "Día de Martin Luther King, Jr.", "Día de los Presidentes", "Día de la Recordación (Memorial Day)", "Día de la Independencia", "Día del Trabajo (Labor Day)", "Día de la Raza (Columbus Day)", "Día de los Veteranos", "Día de Acción de Gracias (Thanksgiving)", "Navidad"]
  }
]

const questions21to40 = [
  {
    question: "¿Cuál es la forma de gobierno de los Estados Unidos?",
    answers: ["República", "República federal basada en la Constitución", "Democracia representativa"]
  },
  {
    question: "Mencione una cosa que hace la Constitución de los EE. UU.",
    answers: ["Establece el gobierno", "Define los poderes del gobierno", "Define las partes del gobierno", "Protege los derechos del pueblo"]
  },
  {
    question: "La Constitución de los EE. UU. comienza con las palabras “Nosotros el Pueblo”. ¿Qué significa “Nosotros el Pueblo”?",
    answers: ["Autogobierno", "Soberanía popular", "Consentimiento de los gobernados", "El pueblo debe gobernarse a sí mismo", "(Ejemplo de) contrato social"]
  },
  {
    question: "¿Cómo se hacen cambios a la Constitución de los EE. UU.?",
    answers: ["Enmiendas", "El proceso de enmienda"]
  },
  {
    question: "¿Qué protege la Carta de Derechos (Bill of Rights)?",
    answers: ["(Los derechos básicos) de los estadounidenses", "(Los derechos básicos) de las personas que viven en los Estados Unidos"]
  },
  {
    question: "¿Por qué es importante la Declaración de Independencia?",
    answers: ["Dice que Estados Unidos es libre del control británico.", "Dice que todas las personas son creadas iguales.", "Identifica derechos inherentes.", "Identifica libertades individuales."]
  },
  {
    question: "¿Qué documento fundacional dijo que las colonias americanas eran libres de Gran Bretaña?",
    answers: ["Declaración de Independencia"]
  },
  {
    question: "Mencione dos ideas importantes de la Declaración de Independencia y la Constitución de los EE. UU.",
    answers: ["Igualdad", "Libertad", "Contrato social", "Derechos naturales", "Gobierno limitado", "Autogobierno"]
  },
  {
    question: "¿Las palabras “Vida, Libertad y la búsqueda de la Felicidad” están en qué documento fundacional?",
    answers: ["Declaración de Independencia"]
  },
  {
    question: "¿Qué es el “estado de derecho”?",
    answers: ["Todos deben seguir la ley.", "Los líderes deben obedecer la ley.", "El gobierno debe obedecer la ley.", "Nadie está por encima de la ley."]
  },
  {
    question: "Muchos documentos influyeron en la Constitución de los EE. UU. Mencione uno.",
    answers: ["Declaración de Independencia", "Artículos de la Confederación", "Los Papeles Federalistas", "Los Papeles Antifederalistas", "Declaración de Derechos de Virginia", "Órdenes Fundamentales de Connecticut", "Pacto de Mayflower", "La Gran Ley de Paz Iroquesa"]
  },
  {
    question: "Hay tres ramas de gobierno. ¿Por qué?",
    answers: ["Para que una parte no se vuelva demasiado poderosa", "Controles y balances (Checks and balances)", "Separación de poderes"]
  },
  {
    question: "Mencione las tres ramas de gobierno.",
    answers: ["Legislativa, ejecutiva y judicial", "Congreso, presidente y los tribunales"]
  },
  {
    question: "¿El Presidente de los Estados Unidos está a cargo de qué rama del gobierno?",
    answers: ["Rama ejecutiva"]
  },
  {
    question: "¿Qué parte del gobierno federal escribe las leyes?",
    answers: ["(El) Congreso (de los EE. UU.)", "(La) legislatura (de EE. UU. o nacional)", "Rama legislativa"]
  },
  {
    question: "¿Cuáles son las dos partes del Congreso de los EE. UU.?",
    answers: ["Senado y Cámara (de Representantes)"]
  },
  {
    question: "¿Cuántos senadores de EE. UU. hay?",
    answers: ["Cien (100)"]
  },
  {
    question: "¿Cuánto dura el término de un senador de EE. UU.?",
    answers: ["Seis (6) años"]
  },
  {
    question: "¿Quién es uno de los senadores de EE. UU. de su estado ahora?",
    answers: ["Las respuestas variarán. [Los residentes del Distrito de Columbia y los residentes de territorios de EE. UU. deben contestar que D.C. (o el territorio donde vive el solicitante) no tiene senadores de EE. UU.]"]
  },
  {
    question: "¿Cuántos miembros votantes hay en la Cámara de Representantes?",
    answers: ["Cuatrocientos treinta y cinco (435)"]
  }
]

const questions41to60 = [
  {
    question: "¿Cuánto dura el término de un miembro de la Cámara de Representantes?",
    answers: ["Dos (2) años"]
  },
  {
    question: "¿Por qué los representantes de EE. UU. sirven términos más cortos que los senadores de EE. UU.?",
    answers: ["Para seguir más de cerca la opinión pública"]
  },
  {
    question: "¿Cuántos senadores tiene cada estado?",
    answers: ["Dos (2)"]
  },
  {
    question: "¿Por qué cada estado tiene dos senadores?",
    answers: ["Representación igualitaria (para los estados pequeños)", "El Gran Compromiso (Compromiso de Connecticut)"]
  },
  {
    question: "Mencione a su representante de EE. UU.",
    answers: ["Las respuestas variarán. (Visite house.gov para encontrar su Representante de EE. UU.)"]
  },
  {
    question: "¿A quién representa un senador de EE. UU.?",
    answers: ["Ciudadanos de su estado"]
  },
  {
    question: "¿Quién elige a los senadores de EE. UU.?",
    answers: ["Ciudadanos de su estado"]
  },
  {
    question: "¿A quién representa un miembro de la Cámara de Representantes?",
    answers: ["Ciudadanos en su distrito (congresional)", "Ciudadanos en su distrito"]
  },
  {
    question: "¿Quién elige a los miembros de la Cámara de Representantes?",
    answers: ["Ciudadanos de su distrito (congresional)"]
  },
  {
    question: "Algunos estados tienen más representantes que otros estados. ¿Por qué?",
    answers: ["(Debido a) la población del estado", "(Porque) tienen más gente", "(Porque) algunos estados tienen más gente"]
  },
  {
    question: "El Presidente de los Estados Unidos puede servir solo dos términos. ¿Por qué?",
    answers: ["(Debido a) la 22ª Enmienda", "Para evitar que el presidente se vuelva demasiado poderoso"]
  },
  {
    question: "Si el presidente ya no puede servir, ¿quién se convierte en presidente?",
    answers: ["El Vicepresidente (de los Estados Unidos)"]
  },
  {
    question: "Mencione un poder del presidente.",
    answers: ["Firma proyectos de ley para convertirlos en leyes", "Veta proyectos de ley", "Hace cumplir las leyes", "Comandante en Jefe (del ejército)", "Jefe diplomático"]
  },
  {
    question: "¿Quién es el Comandante en Jefe del ejército de los EE. UU.?",
    answers: ["El Presidente (de los Estados Unidos)"]
  },
  {
    question: "¿Quién firma los proyectos de ley para convertirlos en leyes?",
    answers: ["El Presidente (de los Estados Unidos)"]
  },
  {
    question: "¿Quién nombra a los jueces federales?",
    answers: ["El Presidente (de los Estados Unidos)"]
  },
  {
    question: "La rama ejecutiva tiene muchas partes. Mencione una.",
    answers: ["Presidente (de los Estados Unidos)", "Gabinete", "Departamentos y agencias federales"]
  },
  {
    question: "¿Qué hace el Gabinete del Presidente?",
    answers: ["Aconseja al Presidente (de los Estados Unidos)"]
  },
  {
    question: "¿Cuáles son dos puestos a nivel de Gabinete?",
    answers: ["Fiscal General", "Secretario de Agricultura", "Secretario de Comercio", "Secretario de Defensa", "Secretario de Educación", "Secretario de Energía", "Secretario de Salud y Servicios Humanos", "Secretario de Seguridad Nacional", "Secretario de Vivienda y Desarrollo Urbano", "Secretario del Interior", "Secretario del Trabajo", "Secretario de Estado", "Secretario de Transporte", "Secretario del Tesoro", "Secretario de Asuntos de los Veteranos", "Vicepresidente (de los Estados Unidos)"]
  },
  {
    question: "¿Por qué es importante el Colegio Electoral?",
    answers: ["Decide quién es elegido presidente.", "Proporciona un compromiso entre la elección popular del presidente y la selección por el congreso."]
  }
]

const questions61to80 = [
  {
    question: "¿Cuál es una parte de la rama judicial?",
    answers: ["Corte Suprema", "Tribunales Federales"]
  },
  {
    question: "¿Qué hace la rama judicial?",
    answers: ["Revisa las leyes", "Explica las leyes", "Resuelve disputas (desacuerdos) sobre la ley", "Decide si una ley va en contra de la Constitución (de los EE. UU.)"]
  },
  {
    question: "¿Cuántos asientos hay en la Corte Suprema?",
    answers: ["Nueve (9)"]
  },
  {
    question: "¿Cuántos jueces de la Corte Suprema se necesitan generalmente para decidir un caso?",
    answers: ["Cinco (5)"]
  },
  {
    question: "¿Por cuánto tiempo sirven los jueces de la Corte Suprema?",
    answers: ["(De por) vida", "Nombramiento de por vida", "(Hasta la) jubilación"]
  },
  {
    question: "Los jueces de la Corte Suprema sirven de por vida. ¿Por qué?",
    answers: ["Para ser independientes (de la política)", "Para limitar la influencia externa (política)"]
  },
  {
    question: "¿Quién es el Presidente del Tribunal Supremo de los Estados Unidos ahora?",
    answers: ["(Visite uscis.gov/es/ciudadania/prueba-civica para el nombre del Presidente del Tribunal Supremo de los Estados Unidos.)"]
  },
  {
    question: "Mencione un poder que es solo para el gobierno federal.",
    answers: ["Imprimir papel moneda", "Acuñar monedas", "Declarar la guerra", "Crear un ejército", "Hacer tratados", "Establecer política exterior"]
  },
  {
    question: "Mencione un poder que es solo para los estados.",
    answers: ["Proporcionar escolarización y educación", "Proporcionar protección (policía)", "Proporcionar seguridad (departamentos de bomberos)", "Otorgar una licencia de conducir", "Aprobar la zonificación y el uso de la tierra"]
  },
  {
    question: "¿Cuál es el propósito de la 10ª Enmienda?",
    answers: ["(Establece que los) poderes no dados al gobierno federal pertenecen a los estados o al pueblo."]
  },
  {
    question: "¿Cuál es la capital de su estado?",
    answers: ["Las respuestas variarán. (Visite usa.gov/estados-y-territorios para encontrar la capital de su estado.)"]
  },
  {
    question: "Hay cuatro enmiendas a la Constitución de los EE. UU. sobre quién puede votar. Describa una de ellas.",
    answers: ["Los ciudadanos de dieciocho (18) años o más (pueden votar).", "No tienes que pagar (un impuesto de votación) para votar.", "Cualquier ciudadano puede votar. (Las mujeres y los hombres pueden votar.)", "Un ciudadano varón de cualquier raza (puede votar)."]
  },
  {
    question: "¿Quién puede votar en elecciones federales, postularse para un cargo federal y servir en un jurado en los Estados Unidos?",
    answers: ["Ciudadanos", "Ciudadanos de los Estados Unidos", "Ciudadanos estadounidenses"]
  },
  {
    question: "¿Cuáles son tres derechos de toda persona que vive en los Estados Unidos?",
    answers: ["Libertad de expresión", "Libertad de palabra", "Libertad de reunión", "Libertad de petición al gobierno", "Libertad de religión", "El derecho a portar armas"]
  },
  {
    question: "Mencione dos promesas que los nuevos ciudadanos hacen en el Juramento de Lealtad.",
    answers: ["Renunciar a la lealtad a otros países", "Defender la Constitución (de los EE. UU.)", "Obedecer las leyes de los Estados Unidos", "Servir en el ejército (si es necesario)", "Servir (ayudar, hacer trabajo importante para) la nación (si es necesario)", "Ser leal a los Estados Unidos"]
  },
  {
    question: "¿Cómo pueden las personas convertirse en ciudadanos de los Estados Unidos?",
    answers: ["Naturalizarse", "Derivar la ciudadanía", "Nacer en los Estados Unidos"]
  },
  {
    question: "¿Cuáles son dos ejemplos de participación cívica en los Estados Unidos?",
    answers: ["Votar", "Postularse para un cargo", "Unirse a un partido político", "Ayudar con una campaña", "Unirse a un grupo cívico", "Unirse a un grupo comunitario", "Darle a un funcionario electo su opinión (sobre un tema)", "Contactar a funcionarios electos", "Apoyar u oponerse a un tema o política", "Escribir a un periódico"]
  },
  {
    question: "¿Cuál es una forma en que los estadounidenses pueden servir a su país?",
    answers: ["Votar", "Pagar impuestos", "Obedecer la ley", "Servir en el ejército", "Postularse para un cargo", "Trabajar para el gobierno local, estatal o federal"]
  },
  {
    question: "¿Por qué es importante pagar impuestos federales?",
    answers: ["Requerido por ley", "Todas las personas pagan para financiar al gobierno federal", "Requerido por la Constitución (de los EE. UU.) (16ª Enmienda)", "Deber cívico"]
  },
  {
    question: "Es importante que todos los hombres de 18 a 25 años se registren para el Servicio Selectivo. Mencione una razón.",
    answers: ["Requerido por ley", "Deber cívico", "Hace que el reclutamiento sea justo, si es necesario"]
  }
]

const questions81to100 = [
  {
    question: "Los colonos vinieron a América por muchas razones. Mencione una.",
    answers: ["Libertad", "Libertad política", "Libertad religiosa", "Oportunidad económica", "Escapar de la persecución"]
  },
  {
    question: "¿Qué grupo de personas fue traído a los Estados Unidos y vendido como esclavos?",
    answers: ["Africanos", "Gente de África"]
  },
  {
    question: "¿Qué guerra libraron los estadounidenses para obtener la independencia de Gran Bretaña?",
    answers: ["Revolución Americana", "La Guerra Revolucionaria (Americana)", "Guerra por la Independencia (Americana)"]
  },
  {
    question: "Mencione una razón por la que los estadounidenses declararon su independencia de Gran Bretaña.",
    answers: ["Impuestos altos", "Impuestos sin representación", "Soldados británicos se quedaron en las casas de los estadounidenses (alojamiento, acuartelamiento)", "No tenían autogobierno", "Masacre de Boston", "Motín del Té de Boston (Ley del Té)", "Ley del Timbre", "Ley del Azúcar", "Leyes de Townshend", "Leyes Intolerables (Coercitivas)"]
  },
  {
    question: "¿Cuándo se adoptó la Declaración de Independencia?",
    answers: ["4 de julio de 1776"]
  },
  {
    question: "La Revolución Americana tuvo muchos eventos importantes. Mencione uno.",
    answers: ["(Batalla de) Bunker Hill", "Declaración de Independencia", "Washington Cruzando el Delaware (Batalla de Trenton)", "(Batalla de) Saratoga", "Campamento de Valley Forge", "(Batalla de) Yorktown (Rendición británica en Yorktown)"]
  },
  {
    question: "Había 13 estados originales. Mencione cinco.",
    answers: ["Nueva Hampshire", "Massachusetts", "Rhode Island", "Connecticut", "Nueva York", "Nueva Jersey", "Pensilvania", "Delaware", "Maryland", "Virginia", "Carolina del Norte", "Carolina del Sur", "Georgia"]
  },
  {
    question: "¿Qué documento fundacional fue escrito en 1787?",
    answers: ["(La) Constitución (de los EE. UU.)"]
  },
  {
    question: "Los Papeles Federalistas apoyaron la aprobación de la Constitución de los EE. UU. Mencione uno de los escritores.",
    answers: ["(James) Madison", "(Alexander) Hamilton", "(John) Jay", "Publius"]
  },
  {
    question: "¿Por qué fueron importantes los Papeles Federalistas?",
    answers: ["Ayudaron a la gente a entender la Constitución (de los EE. UU.).", "Apoyaron la aprobación de la Constitución (de los EE. UU.)."]
  },
  {
    question: "Benjamin Franklin es famoso por muchas cosas. Mencione una.",
    answers: ["Fundó las primeras bibliotecas públicas gratuitas", "Primer Director General de Correos de los Estados Unidos", "Ayudó a escribir la Declaración de Independencia", "Inventor", "Diplomático de EE. UU."]
  },
  {
    question: "Thomas Jefferson es famoso por muchas cosas. Mencione una.",
    answers: ["Escritor de la Declaración de Independencia", "Tercer presidente de los Estados Unidos", "Duplicó el tamaño de los Estados Unidos (Compra de Luisiana)", "Primer Secretario de Estado", "Fundó la Universidad de Virginia", "Escritor del Estatuto de Virginia para la Libertad Religiosa"]
  },
  {
    question: "James Madison es famoso por muchas cosas. Mencione una.",
    answers: ["Padre de la Constitución", "Cuarto presidente de los Estados Unidos", "Presidente durante la Guerra de 1812", "Uno de los escritores de los Papeles Federalistas"]
  },
  {
    question: "Alexander Hamilton es famoso por muchas cosas. Mencione una.",
    answers: ["Primer Secretario del Tesoro", "Uno de los escritores de los Papeles Federalistas", "Ayudó a establecer el Primer Banco de los Estados Unidos", "Asistente del General George Washington", "Miembro del Congreso Continental"]
  },
  {
    question: "¿Qué territorio compró Estados Unidos a Francia en 1803?",
    answers: ["Territorio de Luisiana", "Luisiana"]
  },
  {
    question: "Mencione una guerra librada por los Estados Unidos en el siglo XIX (1800s).",
    answers: ["Guerra de 1812", "Guerra México-Estadounidense", "Guerra Civil", "Guerra Hispano-Estadounidense"]
  },
  {
    question: "Mencione la guerra de EE. UU. entre el Norte y el Sur.",
    answers: ["La Guerra Civil"]
  },
  {
    question: "La Guerra Civil tuvo muchos eventos importantes. Mencione uno.",
    answers: ["(Batalla de) Fort Sumter", "Proclamación de Emancipación", "(Batalla de) Vicksburg", "(Batalla de) Gettysburg", "La Marcha de Sherman", "(Rendición en) Appomattox", "(Batalla de) Antietam/Sharpsburg", "Lincoln fue asesinado."]
  },
  {
    question: "¿Qué hizo la Proclamación de Emancipación?",
    answers: ["Liberó a los esclavos", "Liberó a los esclavos en la Confederación", "Liberó a los esclavos en los estados confederados", "Liberó a los esclavos en la mayoría de los estados del sur"]
  },
  {
    question: "¿Qué guerra de EE. UU. terminó con la esclavitud?",
    answers: ["La Guerra Civil"]
  }
]

const questions101to128 = [
  {
    question: "¿Qué enmienda otorga la ciudadanía a todas las personas nacidas en los Estados Unidos?",
    answers: ["14ª Enmienda"]
  },
  {
    question: "¿Cuándo obtuvieron todos los hombres el derecho al voto?",
    answers: ["Después de la Guerra Civil", "Durante la Reconstrucción", "(Con la) 15ª Enmienda", "1870"]
  },
  {
    question: "Mencione una líder del movimiento por los derechos de las mujeres en el siglo XIX (1800s).",
    answers: ["Susan B. Anthony", "Elizabeth Cady Stanton", "Sojourner Truth", "Harriet Tubman", "Lucretia Mott", "Lucy Stone"]
  },
  {
    question: "Mencione una guerra librada por los Estados Unidos en el siglo XX (1900s).",
    answers: ["Primera Guerra Mundial", "Segunda Guerra Mundial", "Guerra de Corea", "Guerra de Vietnam", "Guerra del Golfo (Pérsico)"]
  },
  {
    question: "¿Por qué entró Estados Unidos en la Primera Guerra Mundial?",
    answers: ["Porque Alemania atacó barcos (civiles) de EE. UU.", "Para apoyar a las Potencias Aliadas (Inglaterra, Francia, Italia y Rusia)", "Para oponerse a las Potencias Centrales (Alemania, Austria-Hungría, el Imperio Otomano y Bulgaria)"]
  },
  {
    question: "¿Cuándo obtuvieron todas las mujeres el derecho al voto?",
    answers: ["1920", "Después de la Primera Guerra Mundial", "(Con la) 19ª Enmienda"]
  },
  {
    question: "¿Qué fue la Gran Depresión?",
    answers: ["La recesión económica más larga de la historia moderna"]
  },
  {
    question: "¿Cuándo comenzó la Gran Depresión?",
    answers: ["El Gran Crash (1929)", "El colapso del mercado de valores de 1929"]
  },
  {
    question: "¿Quién fue presidente durante la Gran Depresión y la Segunda Guerra Mundial?",
    answers: ["(Franklin) Roosevelt"]
  },
  {
    question: "¿Por qué entró Estados Unidos en la Segunda Guerra Mundial?",
    answers: ["(Bombardeo de) Pearl Harbor", "Los japoneses atacaron Pearl Harbor", "Para apoyar a las Potencias Aliadas (Inglaterra, Francia y Rusia)", "Para oponerse a las Potencias del Eje (Alemania, Italia y Japón)"]
  },
  {
    question: "Dwight Eisenhower es famoso por muchas cosas. Mencione una.",
    answers: ["General durante la Segunda Guerra Mundial", "Presidente al final de (durante) la Guerra de Corea", "34º presidente de los Estados Unidos", "Firmó la Ley Federal de Ayuda en Carreteras de 1956 (Creó el Sistema Interestatal)"]
  },
  {
    question: "¿Cuál fue el principal rival de los Estados Unidos durante la Guerra Fría?",
    answers: ["Unión Soviética", "URSS", "Rusia"]
  },
  {
    question: "Durante la Guerra Fría, ¿cuál fue una de las principales preocupaciones de los Estados Unidos?",
    answers: ["Comunismo", "Guerra nuclear"]
  },
  {
    question: "¿Por qué entró Estados Unidos en la Guerra de Corea?",
    answers: ["Para detener la propagación del comunismo"]
  },
  {
    question: "¿Por qué entró Estados Unidos en la Guerra de Vietnam?",
    answers: ["Para detener la propagación del comunismo"]
  },
  {
    question: "¿Qué hizo el movimiento por los derechos civiles?",
    answers: ["Luchó para poner fin a la discriminación racial"]
  },
  {
    question: "¿Por qué entró Estados Unidos en la Guerra del Golfo Pérsico?",
    answers: ["Para obligar al ejército iraquí a retirarse de Kuwait"]
  },
  {
    question: "Mencione un conflicto militar de EE. UU. después de los ataques del 11 de septiembre de 2001.",
    answers: ["Guerra (Global) contra el Terrorismo", "Guerra en Afganistán", "Guerra en Irak"]
  },
  {
    question: "Mencione una tribu india americana en los Estados Unidos.",
    answers: ["Cherokee", "Navajo", "Sioux", "Chippewa", "Choctaw", "Pueblo", "Apache", "Iroquois", "Creek", "Blackfeet", "Seminole", "Cheyenne", "Arawak", "Shawnee", "Mohegan", "Huron", "Oneida", "Lakota", "Crow", "Teton", "Hopi", "Inupiat", "(Para una lista completa de tribus, visite bia.gov.)"]
  },
  {
    question: "Mencione un ejemplo de una innovación estadounidense.",
    answers: ["Bombilla", "Automóvil (coches, motor de combustión interna)", "Rascacielos", "Avión", "Línea de ensamblaje", "Aterrizaje en la luna", "Circuito integrado (IC)"]
  },
  {
    question: "¿Cuál es la capital de los Estados Unidos?",
    answers: ["Washington, D.C."]
  },
  {
    question: "¿Dónde está la Estatua de la Libertad?",
    answers: ["Nueva York (Puerto)", "Isla de la Libertad [También aceptable son Nueva Jersey, cerca de la ciudad de Nueva York y en el (Río) Hudson.]"]
  },
  {
    question: "¿Por qué la bandera tiene 50 estrellas?",
    answers: ["(Porque hay) una estrella por cada estado", "(Porque) cada estrella representa un estado", "(Porque hay) 50 estados"]
  },
  {
    question: "¿Cuál es el nombre del himno nacional?",
    answers: ["The Star-Spangled Banner"]
  },
  {
    question: "El primer lema de la Nación fue E Pluribus Unum. ¿Qué significa?",
    answers: ["De muchos, uno", "Todos nos convertimos en uno"]
  },
  {
    question: "¿Qué es el Día de la Independencia?",
    answers: ["Un día festivo para celebrar la independencia de EE. UU. (de Gran Bretaña)", "El cumpleaños del país"]
  },
  {
    question: "¿Qué es el Día de la Recordación (Memorial Day)?",
    answers: ["Un día festivo para honrar a los soldados que murieron en servicio militar"]
  },
  {
    question: "¿Qué es el Día de los Veteranos (Veterans Day)?",
    answers: ["Un día festivo para honrar a las personas en el ejército (de los EE. UU.)", "Un día festivo para honrar a las personas que han servido (en el ejército de los EE. UU.)"]
  }
]