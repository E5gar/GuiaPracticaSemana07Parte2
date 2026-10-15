import { Clock, Ticket } from 'lucide-react'
import agenda from '../data/agenda'

const AgendaSection = () => (
  <section id="agenda" className="px-6 py-24 md:px-9 md:py-[155px]">
    <div className="mx-auto max-w-6xl">
      <div className="max-w-[620px]">
        <p className="flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.2em] text-charcoal dark:text-paper-dim">
          <span className="h-px w-10 bg-warm" />
          04 / Agenda
        </p>
        <h2 className="mt-6 font-serif text-4xl font-semibold leading-[1.1] tracking-[-0.02em] md:text-5xl">
          Sábados con música en vivo y vinilos en cabina
        </h2>
        <p className="mt-6 text-[15px] leading-[1.9] text-charcoal dark:text-paper-dim">
          Los próximos encuentros programados en la tienda hasta fin de año.
        </p>
      </div>
      <ul className="mt-14 border-t border-line dark:border-night-line">
        {agenda.map((event) => (
          <li
            key={event.id}
            className="grid gap-6 border-b border-line py-10 md:grid-cols-[160px_1fr_190px] md:items-center dark:border-night-line"
          >
            <div>
              <p className="font-serif text-6xl font-medium leading-none tracking-[-0.02em]">
                {event.day}
              </p>
              <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.16em] text-charcoal dark:text-paper-dim">
                {event.weekday} / {event.month}
              </p>
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-charcoal dark:text-paper-dim">
                {event.type}
              </p>
              <h3 className="mt-2 font-serif text-[25px] font-semibold leading-[1.2] tracking-[-0.02em]">
                {event.title}
              </h3>
              <p className="mt-2 max-w-[520px] text-[13px] leading-[1.8] text-charcoal dark:text-paper-dim">
                {event.detail}
              </p>
            </div>
            <div className="flex flex-col gap-3 text-[13px] text-charcoal dark:text-paper-dim">
              <span className="flex items-center gap-3">
                <Clock size={16} strokeWidth={1.5} />
                {event.time}
              </span>
              <span className="flex items-center gap-3">
                <Ticket size={16} strokeWidth={1.5} />
                {event.entry}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
)

export default AgendaSection