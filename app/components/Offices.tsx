import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react'
import Image from 'next/image'

const offices = [
  // 1. HOUSTON (OFICINA PRINCIPAL) - Usa /offices/houston.jpg
  {
    city: 'HOUSTON',
    subtitle: 'OFICINA PRINCIPAL',
    address: '6657 Navigation Blvd, Houston, Texas 77011',
    phone: '(713) 701-1731',
    email: 'houston@manuelsolis.com',
    mapUrl: 'https://maps.app.goo.gl/g3JosFZG1xqsksqX9',
    image: '/offices/houston.jpg',
  },
  // 2. HARLINGEN - Usa /offices/houston.jpg
  {
    city: 'HARLINGEN',
    subtitle: 'ABOGADO DE INMIGRACIÓN',
    address: '320 E. Jackson St., Harlingen, Texas 78550',
    phone: '(956) 597-7090',
    email: 'harlingen@manuelsolis.com',
    mapUrl: 'https://maps.app.goo.gl/ShBS5fPeP8r2bgAbA',
    image: '/offices/houston.jpg',
  },
  // 3. NUEVA OFICINA DE HOUSTON (BELLAIRC/CHINO) - Usa /offices/houston.jpg
  {
    city: 'HOUSTON BELLAIRE',
    subtitle: 'SERVICIO EN CHINO',
    address: '9600 Bellaire Blvd, Suite 237, Houston, TX 77036',
    phone: '(713) 701-1731',
    email: 'bellaire@manuelsolis.com',
    mapUrl: 'http://googleusercontent.com/maps.google.com/new-houston',
    image: '/offices/houston.jpg',
  },
  {
    city: 'DALLAS',
    subtitle: 'TEXAS',
    address: '1120 Empire Central place, Dallas, Texas 75247',
    phone: '(214) 753-8315',
    email: 'dallas@manuelsolis.com',
    mapUrl: 'https://maps.app.goo.gl/uTSrWbvfzvutgQF38',
    image: '/offices/dallas.jpg',
  },
  {
    city: 'EL PASO',
    subtitle: 'TEXAS',
    address: '3632 Admiral Street, El Paso, Texas 79925',
    phone: '(915) 233-7127',
    email: 'elpaso@manuelsolis.com',
    mapUrl: 'https://maps.app.goo.gl/Q8Ev3byF5N1MRuyH7',
    image: '/offices/dallas.jpg',
  },
  // LOS ANGELES - Usará /offices/losangeles.jpg
  {
    city: 'LOS ANGELES',
    subtitle: 'CALIFORNIA',
    address: '8337 Telegraph Rd, Unit 115, Pico Rivera, California 90660',
    phone: '(213) 784-1554',
    email: 'losangeles@manuelsolis.com',
    mapUrl: 'https://maps.app.goo.gl/UtmFeALXTroYF53i6',
    image: '/offices/losangeles.jpg', // Imagen sin cambios
  },
  // CHICAGO - Usará /offices/chicago.jpg
  {
    city: 'CHICAGO',
    subtitle: 'ILLINOIS',
    address: '6000 West Cermak Road, Cicero, Illinois 60804',
    phone: '(312) 477-0389',
    email: 'chicago@manuelsolis.com',
    mapUrl: 'https://maps.app.goo.gl/XEKaiEeFnj9aykbT8',
    image: '/offices/chicago.jpg', // Imagen sin cambios
  },
  // DENVER - Usará /offices/losangeles.jpg
  {
    city: 'DENVER',
    subtitle: 'COLORADO',
    address: '5400 Ward Road, Building IV, Arvada, Colorado 80002',
    phone: '(720) 358-8973',
    email: 'denver@manuelsolis.com',
    mapUrl: 'https://maps.app.goo.gl/nfaq5jQHbMP6ewYRA',
    image: '/offices/losangeles.jpg', // IMAGEN CAMBIADA
  },
  // MEMPHIS - Usará /offices/chicago.jpg
  {
    city: 'MEMPHIS',
    subtitle: 'TENNESSEE',
    address: '3385 Airways Boulevard, Suite 320, Memphis, Tennessee 38116',
    phone: '(901) 557-8357',
    email: 'memphis@manuelsolis.com',
    mapUrl: 'https://maps.app.goo.gl/xH3CXmU1fJb6t9U56',
    image: '/offices/chicago.jpg', // IMAGEN CAMBIADA
  },
].sort((a, b) => a.city.localeCompare(b.city)) 

export default function Offices() {
  return (
    <section id="oficinas" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestras <span className="text-[#B2904D]">Oficinas</span>
          </h2>
          <p className="text-xl text-gray-600">
            Haga clic en una de las ciudades siguientes para leer más
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden 
                         hover:shadow-2xl hover:translate-y-[-4px] transition-all duration-300" 
            >
              {/* Image */}
              <div className="relative h-48">
                <Image
                  src={office.image}
                  alt={`Oficina ${office.city}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-[#B2904D]">
                  {office.city}
                  <span className="block text-sm text-gray-600 font-medium mt-1">
                    {office.subtitle}
                  </span>
                </h3>

                <div className="space-y-3 pt-2 border-t border-gray-100">
                  
                  {/* Dirección */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#B2904D] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-sm">{office.address}</p>
                  </div>

                  {/* Obtener Dirección (Mapa) */}
                  <a
                    href={office.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#B2904D] hover:text-[#9a7a3d] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">Obtener dirección</span>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${office.email}`}
                    className="flex items-center gap-3 text-gray-700 hover:text-[#B2904D] transition-colors"
                  >
                    <Mail className="w-5 h-5 text-[#B2904D]" />
                    <span className="text-sm">{office.email}</span>
                  </a>

                  {/* Teléfono */}
                  <a
                    href={`tel:${office.phone.replace(/[^0-9]/g, '')}`}
                    className="flex items-center gap-3 text-gray-700 hover:text-[#B2904D] transition-colors"
                  >
                    <Phone className="w-5 h-5 text-[#B2904D]" />
                    <span className="text-sm font-semibold">{office.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}