// src/app/informacion/faq/page.tsx
'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ContactForm from '../../components/ContactForm' 
import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useState } from 'react'

// NOTA: El bloque 'export const metadata' ha sido removido para evitar el error de Next.js.

// --- Componente Reutilizable para el Acordeón de Preguntas ---

interface FaqItem {
  title: string;
  content: string;
}

function Accordion({ title, content }: FaqItem) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-4 text-left flex items-center justify-between text-lg font-semibold text-gray-800 hover:text-[#B2904D] transition-colors duration-200"
      >
        <span>{title}</span>
        <div className="flex items-center gap-2">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-[#B2904D]" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </div>
      </button>

      {isOpen && (
        <div 
          className="px-4 py-4 bg-gray-50 text-gray-700 text-base leading-relaxed"
          dangerouslySetInnerHTML={{ __html: content }} 
        />
      )}
    </div>
  );
}

// --- Datos de Preguntas Frecuentes (En Español) ---

const faqData = {
  leyCivil: [
    {
      title: "Tengo derecho a recibir indemnización por la muerte de mi marido en los Estados Unidos si yo vivo en México?",
      content:
        "La respuesta sencilla es SÍ. Usted puede recibir como viuda la indemnización que le corresponde a su marido si ha sufrido una muerte injusta debido a un accidente de carro, laboral o debido a una negligencia médica. No dude en ponerse en contacto con nosotros lo más pronto posible ya que existe un límite de tiempo para reclamar estas cantidades y las compañías de seguros no suelen ser muy cooperativos.",
    },
    {
      title: "Tuve un accidente hace más de un año y quiero reclamar daños médicos que me han surgido con el tiempo. ¿Puedo todavía hacerlo?",
      content:
        "Desgraciadamente ha dejado pasar mucho tiempo. Cuando sufrimos un accidente, el tiempo es fundamental y debemos comunicar cuanto antes al seguro los daños que pretendemos reclamar. Es cierto que en algunos casos podemos reclamar daños pasado un tiempo, pero debe estar muy justificado. Recuerde, cuando sufra un accidente, contacte un abogado cuanto antes para que le puedan asesorar. Quizá le recomienden que vaya a un médico especializado que puede prever los daños que en el futuro pueden surgir a causa del accidente.",
    },
  ],
  leyCriminal: [
    {
      title: "¿Cómo sé que he sido arrestado?",
      content:
        "Usted está bajo arresto si un oficial de policía lo detiene bajo “custodia”. Esto significa que usted cree razonablemente que no es libre de alejarse de la escena del contacto con el oficial. No todo contacto con un oficial de policía significa que está bajo arresto. Sin duda, si le ponen esposas, está bajo arresto.",
    },
    {
      title: "¿Cuáles son las consecuencias de manejar ebrio?",
      content:
        "Conducir ebrio conlleva graves sanciones. Aunque el tribunal puede ser más flexible con los infractores en su primera vez, incluso en los casos de primer delito las posibles sentencias incluyen multas severas y tiempo en la cárcel. Sin embargo, si las circunstancias lo justifican, el tribunal puede elegir opciones menos restrictivas, que incluyen libertad condicional, servicio comunitario o consejería profesional sobre el uso y abuso del alcohol. La pérdida del derecho a manejar, al menos temporalmente, está casi garantizada.",
    },
    {
      title: "¿Para qué necesito un abogado si me voy a declarar culpable de manejar ebrio?",
      content:
        "Incluso si se declara culpable de conducir ebrio, es imperativo que busque el consejo de un abogado experimentado para que pueda minimizar su sentencia y maximizar sus oportunidades de avanzar hacia un futuro más brillante. Se necesita un abogado de defensa penal para igualar el equilibrio de poder entre el acusado y la fiscalía y para asegurar que se preservan los derechos constitucionales garantizados a todos los acusados.",
    },
    {
      title: "¿Qué pasa durante la acusación?",
      content:
        "Primero, se le pedirá que se declare culpable o no culpable. Le recomendamos que se declare no culpable para que tenga tiempo suficiente para contratar a un abogado y evaluar todas las opciones disponibles para su caso. El tribunal también abordará las condiciones de su liberación que se impondrán mientras su caso esté pendiente. Estas condiciones pueden incluir: pagar fianza, participar en un programa de tratamiento de drogas o alcohol o asistir a reuniones de autoayuda como AA; una orden de no contacto; o incluso monitoreo electrónico en el hogar.",
    },
    {
      title: "Me han detenido conduciendo ebrio, ¿puedo negarme a que me hagan un análisis del aliento?",
      content:
        "Aunque la respuesta puede variar según el estado, en muchos casos, un rechazo es en sí mismo una infracción penal sujeta a severas sanciones. Además, si se prueba el caso en su contra, puede haber sanciones adicionales por la negativa, más allá de las del delito de conducir ebrio.",
    },
    {
      title: "Me han revocado mi licencia de manejo por conducir ebrio, ¿qué puede pasar si sigo manejando sin licencia?",
      content:
        "Si una persona cuya licencia ha sido revocada o suspendida debido a una conducción en estado de ebriedad elige conducir sin una licencia válida y es detenido, puede sufrir consecuencias más graves, incluidas multas y encarcelamiento. El curso de acción más prudente es contar con amigos y familiares para transportarse o usar el transporte público.",
    },
    {
      title: "Me he negado a responder a las preguntas del oficial de policía. ¿Puede esto dañar mi caso?",
      content:
        "No, usted tiene el derecho absoluto de negarse a incriminarse haciendo declaraciones. Si su caso fue a juicio, el fiscal y el oficial ni siquiera podrían mencionar el hecho de que le hicieron preguntas pero que no respondió.",
    },
    {
      title: "No fui a mi cita en la corte. ¿Qué debo hacer?",
      content:
        "Primero, comuníquese con un abogado que pueda ayudarlo a lidiar con la orden que se emitió cuando no se presentó a la hora de su cita en la corte. También tiene la opción de entregarse a la cárcel o pagar la fianza.",
    },
    {
      title: "No tengo antecedentes criminales. ¿Puede esto ayudar en mi caso?",
      content:
        "Tener un historial criminal limpio puede ayudarlo a negociar su caso. Sin embargo, su historial criminal, o falta de historial, generalmente no sería relevante si su caso va a juicio.",
    },
    {
      title: "Nunca me leyeron mis derechos. ¿Puede ayudarme en mi caso?",
      content:
        "Posiblemente. Puede que lleve a la supresión de cualquier declaración que haya hecho al oficial después de su arresto.",
    },
  ],
  leyFamiliar: [
    {
      title: "¿Cómo se calcula la manutención de los hijos?",
      content:
        "Se usa una computadora para hacer los cálculos. Los factores más importantes son la cantidad de hijos, los ingresos de cada padre y la cantidad de tiempo que los niños pasan con cada padre. Un tribunal tiene poca autoridad para desviarse de la fórmula.",
    },
    {
      title: "El matrimonio de nuestros hijos fracasó y nuestra exnuera tiene la custodia de nuestros nietos. Estábamos muy cerca de nuestros nietos y ahora rara vez los vemos. ¿Pueden los abuelos obtener una orden judicial para tener visitas?",
      content:
        "Probablemente no. Ustedes tendrían que encajar en una categoría muy estrecha para poder siquiera pedirla. Pero aun si lo hace, el tribunal tendrá que determinar que lo mejor para los niños es tener visitas con ustedes. Así que, lamentablemente, su dolor de corazón no es un factor.",
    },
    {
      title: "Mi esposo y yo queremos divorciarnos. ¿Debemos tener un abogado cada uno si estamos de acuerdo?",
      content:
        "Técnicamente, usted y el cónyuge del que se está divorciando son partes opuestas en una demanda. Esto sigue siendo cierto independientemente de si han aceptado amigablemente los términos de su divorcio. Representar a ambos al mismo tiempo se consideraría un conflicto de intereses para un abogado.<p>Sin embargo, en las Oficinas del Abogado Manuel Solís podemos ayudarles como **MEDIADORES**. En este caso, un abogado experto en casos de Familia les ayudará a entender bien la ley vigente, preparar la documentación, identificar posibles conflictos, mediar para llegar a un acuerdo financiero, mantener la comunicación con las partes implicadas y llevar a buen término su divorcio.</p>",
    },
    {
      title: "Mi ex ha mudado a su novia a su casa. No quiero que nuestros hijos estén cerca de ella. Ella es la razón por la nos separamos. ¿Puedo evitar que él tenga a los niños allí si ella está allí?",
      content:
        "No. No, a menos que pueda mostrar que ella podría causarles a los niños algún daño potencial. El hecho de que ella haya deshecho su matrimonio no es suficiente.",
    },
    {
      title: "Mi ex lleva retraso en el pago de la manutención de los niños. ¿Puedo prohibirle que vea a los niños hasta que pague?",
      content:
        "No. La visita también es para el beneficio de los niños. Tienen derecho a verlo y tener una relación con él, incluso si no está pagando la manutención de los hijos. Impedir las visitas perjudica a los niños.",
    },
    {
      title: "Mi ex siempre paga tarde su manutención. Tengo que llamarlo cada vez para recordarle que me mande el cheque. ¿Qué puedo hacer?",
      content:
        "Una orden para una asignación salarial es fácil de obtener ahora. Es una orden de la corte para que el empleador de su ex deduzca el dinero de su cheque de pago y lo pague directamente a usted. El dinero se enviará según el calendario de nómina de la empresa, no necesariamente según el calendario que ordenó el tribunal, pero al menos usted no tendrá que pasar por el proceso degradante de llamar y pedir el dinero. Si su ex trabaja por cuenta propia o trabaja sin figurar como empleado de la empresa, una orden de asignación de salario no servirá de nada. Sin embargo, si su historial de pagos es muy malo, es posible que pueda obtener un pedido para que deposite dinero por adelantado.",
    },
    {
      title: "Mi ex y yo tenemos diferentes religiones. ¿Puedo obligar a mi ex a criar al niño en mi religión?",
      content:
        "No. El tribunal les permitirá a ambos exponer al niño a ambas religiones y luego el niño, cuando sea mayor, podrá elegir con qué religión quiere continuar, si es que quiere hacerlo.",
    },
    {
      title: "Mi exesposa vive con un hombre. ¿Puedo dejar de pagar su manutención conyugal?",
      content:
        "Tal vez. La cohabitación es diferente a tener un compañero de cuarto, ya que crea la presunción de una menor necesidad de manutención. La corte probablemente reducirá la orden de manutención si no la suspende por completo.",
    },
    {
      title: "Tengo la custodia de mi hija. Se gradúa de High School este año. ¿Puedo obligar a su padre a pagar la manutención para que pueda ir a la universidad?",
      content:
        "No. Las órdenes de manutención infantil terminan cuando el niño tiene 18 años y ha completado High School o hasta los 19, siempre y cuando el niño asista a High School por tiempo completo. Con suerte, el padre querrá que su hijo(a) vaya a la universidad también y esté dispuesto a pagar parte del costo.",
    },
    {
      title: "Tuve un hijo pero no estaba casada con su padre. Se niega a pagar manutención porque dice que me pidió que abortara y no lo hice ¿Qué debo hacer?",
      content:
        "Primero, debe presentar un caso de paternidad para establecer legalmente que él es el padre. Luego, puede obtener una orden de manutención de los hijos igual que si hubiera estado casado. Usted también tendrá que ocuparse de las cuestiones relativas a la custodia y los derechos de visitas. No se demore. La orden no puede hacerse retroactiva más allá de la fecha de presentación de los documentos en el tribunal.",
    },
  ],
  leyInmigracion: [
    {
      title: "¿En qué consiste una fianza?",
      content:
        "La fianza es una cantidad de dinero que se deposita en la corte como una especie de seguro de que usted se presentará a todas sus comparecencias ante la corte y seguirá todas las órdenes de la corte. También puede pagar el 10% de este monto de fianza a una compañía de fianzas (con garantía). Si paga una fianza en efectivo en la corte, recibirá todo este dinero al final de su caso. Si utiliza una compañía de fianzas, no se le devolverá la tarifa del 10%.",
    },
    {
      title: "¿Qué debo hacer para solicitar asilo en los Estados Unidos?",
      content:
        "El requisito más importante para obtener asilo en los Estados Unidos es demostrar que tiene temor de persecución en su país o temor por su vida. Esto no se puede hacer de manera inexacta o ligera y el temor tiene que quedar bien establecido. Los documentos ayudan mucho, pero es cierto que se pueden ganar casos de asilo sólo con el testimonio de la persona y testigos de la persecución que sufre en su país de origen.<p>Si es capaz de establecer correctamente que ha sufrido persecución en el pasado, sin embargo, es una buena forma de probar el miedo a la persecución o temor por su vida del que hablábamos antes. Pero es importante que recuerde que, aunque no haya sufrido persecución, si es capaz de demostrar temor fundado de que le van a perseguir o teme por su vida, podría ser beneficiario de una visa de asilo. La gran ventaja de demostrar una persecución pasada, es que es ahora el Gobierno de los Estados Unidos el que debe demostrar que las circunstancias han cambiado si quiere negar el caso, mientras que, si no se puede demostrar una persecución pasada, la carga de la prueba recae en el beneficiario, que debe documentar muy bien las razones por las que piensa que en su país va a sufrir persecución.</p><p>Si se encuentra en situación legal en los Estados Unidos, puede realizar la petición de asilo y quedar en situación legal incluso si le niegan el caso, obviamente, hasta que se le acabe la situación legal con la que se encontraba. Pero si entró ilegalmente en el país o se encuentra ilegalmente en el país, una vez le denegaran el caso, le pondrían en procedimientos de deportación. La cuestión es que, una vez que esté en procedimientos de deportación, delante de un juez, puede no solo volver a aplicar para pedir asilo con el juez sino también pedir la cancelación de la deportación y alivios bajo la Convención Contra la Tortura (Convention Against Torture), por lo que tiene todavía posibilidades de pelear su caso de asilo.</p>",
    },
    {
      title: "¿Qué es el Boletín de Visas?",
      content:
        "El Boletín de Visas, emitido cada mes por el Departamento de Estado de EE. UU., muestra cuáles solicitudes de “green card” pueden avanzar, en función de cuándo se presentó originalmente la petición I-130 que inicia el proceso de la “green card”. El Boletín de Visas existe porque el Congreso limita la cantidad de “green cards” que se pueden emitir cada año en ciertas categorías, lo que ha creado varios retrasos.",
    },
    {
      title: "¿Qué es una “Green Card” por matrimonio?",
      content:
        "La mayoría de los ciudadanos estadounidenses y los titulares de la “green card” de los Estados Unidos tienen derecho por ley a patrocinar a sus cónyuges para una “green card”, también conocida como “estado de residente permanente”. El costo total, el tiempo de espera y otros detalles del proceso de la green card de matrimonio varían basado en varios factores.",
    },
    {
      title: "¿Qué es una Green Card (Tarjeta Verde)?",
      content:
        "Una Green Card “tarjeta verde”, emitida por los Servicios de Ciudadanía e Inmigración de los Estados Unidos (USCIS), proporciona prueba de la condición de residente permanente legal, con autorización para vivir y trabajar en cualquier lugar de los Estados Unidos. La mayoría de las Green Card deben renovarse cada 10 años, pero las Green Card condicionales basadas en matrimonio o inversiones deben reemplazarse después de los primeros 2 años.",
    },
    {
      title: "Crucé ilegalmente pero tengo un familiar que me puede pedir. ¿Me pueden detener?",
      content:
        "Si, mientras no tengas un estatus migratorio pueden detenerte y ponerte en procedimientos de deportación. Sin embargo, dependiendo de quién sea su familiar, puede que usted no tenga que salir del país para obtener el estatus de residente permanente. Pero esto solo ocurre con los ciudadanos y sus familiares inmediatos. Lo más probable es que usted tenga que salir del país y que, además, le pongan un castigo por haber entrado y permanecido ilegalmente en los Estados Unidos con un castigo de tiempo de tres, cinco o diez años. A veces puede ser un castigo permanente. En las Oficinas del Abogado Manuel Solís podemos ayudarle a pedir un perdón para ese castigo si califica para ello y ayudarle a dar todos los pasos necesarios para evitar que lo detengan antes de que pueda arreglar su situación migratoria. Si todo sale bien, podríamos conseguir que sólo tuviera que salir del país por dos semanas para hacer la entrevista consular y entrar legalmente en los Estados Unidos como Residente Permanente.",
    },
    {
      title: "Estoy ilegalmente en el país y me han detenido ¿Qué debo hacer?",
      content:
        "Lo primero que debe hacer es **mantener la calma** y **buscar ayuda legal**. No firme ningún documento ni responda a ninguna pregunta, usted está en su derecho de permanecer en silencio. Si le ofrecen la salida voluntaria NO LA ACEPTE. En las Oficinas del Abogado Manuel Solís tenemos mucha experiencia en casos de deportación y podemos pelear su caso para evitar la deportación y pedir la residencia permanente si califica para ello.",
    },
    {
      title: "Estoy sufriendo maltrato en mi hogar pero soy ilegal en los Estados Unidos ¿Puedo denunciar?",
      content:
        "Si. Pero no sólo eso, usted podría calificar para un tipo de protección llamado **VAWA** que le podría no solo proteger de su agresor, sino ayudarle a obtener la Residencia Permanente en los Estados Unidos si el agresor es su esposo/a, hijo/a o padre/madre y es Residente Permanente o ciudadano americano. En las Oficinas del Abogado Manuel Solís tenemos mucha experiencia en este tipo de casos y podemos ayudarle a saber si califica para este tipo de protección.",
    },
    {
      title: "He sido denunciado por violencia doméstica y soy Residente Permanente ¿puede esto afectar a mi situación migratoria?",
      content:
        "Las denuncias de violencia doméstica tienen consecuencias migratorias muy graves. Es crucial que su abogado sepa que usted no es ciudadano y que entienda las posibles consecuencias de inmigración o consulte con un abogado de inmigración en su caso.",
    },
    {
      title: "Tengo un hermano que es ciudadano. ¿Puede pedirme a mí y a mi familia para obtener la Residencia Permanente?",
      content:
        "Si. Si su hermano es ciudadano americano puede solicitar una Residencia Permanente para usted, su esposa y sus hijos solteros menores.",
    },
  ],
  leySeguros: [
    {
      title: "¿Cuánto tarda el proceso de reclamo de seguro?",
      content:
        "Desde unos pocos meses hasta unos pocos años. La cantidad de tiempo que toma resolver su reclamo varía con cada pérdida. Estas variables incluyen las coberturas y límites en su póliza, los procedimientos de su compañía de seguros, la cantidad y el tipo de daño, la personalidad de los ajustadores asignados a su reclamo y la cantidad de tiempo que toma preparar y presentar su reclamo con documentos de apoyo e información. Lo más probable es que su póliza contenga plazos para presentar pruebas, reparar / reemplazar y recolectar el valor total.",
    },
    {
      title: "¿Debo de hacer algo antes de limpiar los escombros tras un desastre que ha afectado a mi propiedad cubierta?",
      content:
        "Fotografíe todos los elementos reconocibles en los escombros antes de que sean retirados, en particular los elementos que su asegurador retira para su limpieza / recuperación. Su asegurador puede traer una compañía para limpiar y almacenar artículos. Sus tarifas generalmente se deducen de los beneficios de su seguro por los contenidos.<p>A menudo surgen desacuerdos sobre si los artículos dañados son recuperables y si se pueden limpiar o si tiene más sentido reemplazarlos. Examine los artículos que su asegurador o compañía de limpieza considere rescatables. Si cree que realmente no se pueden limpiar, o si los costos de limpieza y almacenamiento excederán el costo de reemplazarlos, calcule con el ajustador. Después de que estos costos se deduzcan de su cobertura de seguro de contenido, le quedará menos dinero para reemplazar los artículos destruidos. Es una buena idea pedirle a la compañía de seguros una confirmación por escrito de que han inspeccionado completamente la ubicación de la pérdida a su entera satisfacción y están de acuerdo en que puede avanzar con la eliminación de escombros y la limpieza del sitio.</p>",
    },
    {
      title: "¿Qué fechas son importantes de recordar cuando se hace un reclamo al seguro?",
      content:
        "Las pólizas varían: algunas requieren que se presente una Prueba de pérdida ejecutada dentro de los **60 días** posteriores a la pérdida, otras requieren que se presente una Prueba de pérdida ejecutada dentro de los **60 días** posteriores a la solicitud del seguro.<p>Otro plazo importante para tener en cuenta es la fecha en la que debe presentarse una demanda si usted y el seguro no pueden resolver el reclamo. Algunas pólizas requieren que la acción se presente dentro de **un año** después de la fecha de la pérdida, otras **dos años**. Si no ha cumplido con las condiciones de la póliza antes de demandar, su demanda puede ser “desestimada”.</p><p>Además, algunas pólizas reflejan que los pagos de costos de reemplazo se realizarán si la reconstrucción o las reparaciones requeridas se completan dentro de los **180 días** posteriores a la emisión de un pago del valor real en efectivo (“ACV”). Es posible que no sea posible completar el trabajo de construcción dentro de los 180 días posteriores a un pago de ACV, y una solicitud por escrito para una exención de la disposición o una extensión debe presentarse al seguro lo antes posible.</p>",
    },
    {
      title: "¿Quién tiene que limpiar los escombros de mi lote después de que mi propiedad asegurada haya sufrido daños graves?",
      content:
        "Usted, como titular de la póliza, es responsable de limpiar los escombros de su lote. Las políticas varían: si tiene una cobertura adecuada, el costo de este trabajo está cubierto. Si su propiedad fue dañada o destruida en un desastre natural, consulte con los funcionarios de su gobierno local para ver si están coordinando un programa de eliminación de escombros. Una de las coberturas adicionales más comunes en las pólizas es una cantidad adicional de dinero para la eliminación de escombros. Debe leer la cobertura detenidamente, pero esto podría ser un monto pagadero por encima de los límites de su cobertura de vivienda básica.",
    },
    {
      title: "¿Tengo derecho a recibir vivienda temporalmente después de un desastre que ha destruido mi casa?",
      content:
        "Su proveedor puede organizar una vivienda temporal inmediatamente después de una pérdida catastrófica que afecte a múltiples asegurados durante una semana más o menos, pero la vivienda temporal a largo plazo, hasta que se resuelva su reclamo y la vivienda permanente esté disponible, es su responsabilidad.",
    },
    {
      title: "El ajustador del seguro dice que mis cosas se pueden limpiar o reparar y que no es necesario reemplazarlas. ¿Cómo puedo saber si eso es cierto?",
      content:
        "Puede que no sea cierto. Busque la opinión de una empresa de restauración de buena reputación o un profesional calificado. Si la pérdida está relacionada con un incendio, el daño por calor, humo y agua puede ser significativo si los artículos no se consumieron totalmente en el incendio. El olor a humo es difícil de eliminar y es una simplificación excesiva y conveniente para el ajustador con el fin de que afirme o espere que se limpien los artículos dañados. En las Oficinas del Abogado Manuel Solís le ofrecemos una inspección **GRATUITA** de los daños que ha sufrido para poder así negociar en su nombre con el ajustador de su compañía de seguros y que no le engañen.",
    },
    {
      title: "Se me ha inundado la casa y mi seguro dice que no me cubre los daños. ¿Qué debo hacer?",
      content:
        "Debe consultar con un abogado para determinar si tiene o no derecho a cobrar una indemnización por daños. A veces, los seguros intentarán pagar lo menos posible ante un siniestro, por eso es una buena idea asesorarse profesionalmente. En las Oficinas del Abogado Manuel Solís le hacemos una valoración **GRATUITA** de los daños que ha sufrido y sólo le cobramos el servicio de representación si usted obtiene una indemnización. La cantidad es un porcentaje sobre lo que ha recibido y el porcentaje dependerá de si vamos a corte o no.",
    },
  ],
};


export default function PreguntasFrecuentesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Encabezado con imagen de fondo y filtro negro */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Background Image (Debe existir en /public/apretondemanos.png) */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/apretondemanos.png)',
          }}
        />
        
        {/* Dark, light black overlay (Filtro negro ligero) */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              PREGUNTAS FRECUENTES
            </h1>
            <p className="text-xl text-white/90 animate-fade-in-delay">
              Respuestas rápidas a sus dudas legales más comunes
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content Sections */}
      <div className="container mx-auto px-4 py-16">
        
        {/* Ley Civil */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 border-b-4 border-[#B2904D] pb-2">
            Ley Civil
          </h2>
          <div className="space-y-4 rounded-xl border border-gray-100 shadow-lg p-4">
            {faqData.leyCivil.map((item, index) => (
              <Accordion key={index} title={item.title} content={item.content} />
            ))}
          </div>
        </div>
        
        <hr className="my-10" />

        {/* Ley Criminal */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 border-b-4 border-[#B2904D] pb-2">
            Ley Criminal
          </h2>
          <div className="space-y-4 rounded-xl border border-gray-100 shadow-lg p-4">
            {faqData.leyCriminal.map((item, index) => (
              <Accordion key={index} title={item.title} content={item.content} />
            ))}
          </div>
        </div>

        <hr className="my-10" />

        {/* Ley Familiar */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 border-b-4 border-[#B2904D] pb-2">
            Ley Familiar
          </h2>
          <div className="space-y-4 rounded-xl border border-gray-100 shadow-lg p-4">
            {faqData.leyFamiliar.map((item, index) => (
              <Accordion key={index} title={item.title} content={item.content} />
            ))}
          </div>
        </div>

        <hr className="my-10" />
        
        {/* Ley de Inmigración */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 border-b-4 border-[#B2904D] pb-2">
            Ley de Inmigración
          </h2>
          <div className="space-y-4 rounded-xl border border-gray-100 shadow-lg p-4">
            {faqData.leyInmigracion.map((item, index) => (
              <Accordion key={index} title={item.title} content={item.content} />
            ))}
          </div>
        </div>

        <hr className="my-10" />
        
        {/* Ley de Seguros */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 border-b-4 border-[#B2904D] pb-2">
            Ley de Seguros
          </h2>
          <div className="space-y-4 rounded-xl border border-gray-100 shadow-lg p-4">
            {faqData.leySeguros.map((item, index) => (
              <Accordion key={index} title={item.title} content={item.content} />
            ))}
          </div>
        </div>

      </div>
      
      {/* Contact Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                    SOLICITE SU <span className="text-[#B2904D]">CONSULTA</span>
                </h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                    Llene este formulario y le llamaremos en unos 10 minutos en horas de trabajo. También puede llamarnos y estaremos encantados de contestar sus preguntas.
                </p>
            </div>
            
            <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-2xl">
                <ContactForm /> 
            </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}