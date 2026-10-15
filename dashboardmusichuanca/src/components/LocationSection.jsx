import { ArrowUpRight, Clock, Mail, MapPin, Phone } from 'lucide-react'

const details = [
  {
    id: 'address',
    icon: MapPin,
    label: 'Dirección',
    value: 'Av. Huancavelica N° 606, Chilca, Huancayo, Junín, Perú',
  },
  {
    id: 'hours',
    icon: Clock,
    label: 'Horario',
    value: 'Lunes a sábado de 10:00 a 20:00. Domingo de 11:00 a 17:00.',
  },
  {
    id: 'phone',
    icon: Phone,
    label: 'Teléfono',
    value: '+51 931 425 914',
  },
  {
    id: 'mail',
    icon: Mail,
    label: 'Correo',
    value: 'contacto@musiccentro.pe',
  },
]

const LocationSection = () => (
  <section id="ubicacion" className="px-6 py-24 md:px-9 md:py-[155px]">
    <div className="mx-auto max-w-6xl">
      <div className="max-w-[620px]">
        <p className="flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.2em] text-charcoal dark:text-paper-dim">
          <span className="h-px w-10 bg-warm" />
          06 / Ubicación
        </p>
        <h2 className="mt-6 font-serif text-4xl font-semibold leading-[1.1] tracking-[-0.02em] md:text-5xl">
          Pasa por nuestra tienda
        </h2>
      </div>
      <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-[70px]">
        <div className="self-start border border-line bg-white p-8 shadow-[0_18px_45px_rgba(20,20,20,0.035)] md:p-[42px] dark:border-night-line dark:bg-night-soft">
          <ul className="flex flex-col gap-8">
            {details.map(({ id, icon: Icon, label, value }) => (
              <li key={id} className="flex gap-5">
                <Icon size={18} strokeWidth={1.5} className="mt-1 shrink-0 text-warm" />
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-charcoal dark:text-paper-dim">
                    {label}
                  </p>
                  <p className="mt-2 text-[15px] leading-[1.7]">{value}</p>
                </div>
              </li>
            ))}
          </ul>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Av.+Huancavelica+606+Chilca+Huancayo"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex h-[52px] items-center gap-3 border border-line px-6 text-[11px] font-medium uppercase tracking-[0.08em] text-ink transition-colors duration-[250ms] hover:border-warm hover:bg-soft dark:border-night-line dark:text-paper dark:hover:border-warm dark:hover:bg-night"
          >
            Cómo llegar
            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
              className="transition-transform duration-[250ms] group-hover:translate-x-[5px]"
            />
          </a>
        </div>
        <iframe
          title="Mapa de MusicCentro en Av. Huancavelica N° 606, Chilca"
          src="https://maps.google.com/maps?q=Av.%20Huancavelica%20606%2C%20Chilca%2C%20Huancayo&z=16&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="aspect-[4/3] w-full border border-line grayscale dark:border-night-line"
        />
      </div>
    </div>
  </section>
)

export default LocationSection