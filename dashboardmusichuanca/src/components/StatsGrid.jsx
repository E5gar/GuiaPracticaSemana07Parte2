import stats from '../data/stats'

const StatsGrid = () => (
  <section
    id="resumen"
    className="border-y border-line bg-soft px-6 py-20 md:px-9 md:py-[120px] dark:border-night-line dark:bg-night-soft"
  >
    <div className="mx-auto max-w-6xl">
      <div className="max-w-[620px]">
        <p className="flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.2em] text-charcoal dark:text-paper-dim">
          <span className="h-px w-10 bg-warm" />
          01 / Resumen
        </p>
        <h2 className="mt-6 font-serif text-4xl font-semibold leading-[1.1] tracking-[-0.02em] md:text-5xl">
          Octubre en MusicCentro, a mitad de mes
        </h2>
      </div>
      <ul className="mt-14 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4 dark:border-night-line">
        {stats.map(({ id, label, value, detail, icon: Icon }) => (
          <li
            key={id}
            className="border-b border-r border-line bg-white p-8 dark:border-night-line dark:bg-night"
          >
            <Icon size={20} strokeWidth={1.5} className="text-warm" />
            <p className="mt-8 text-[11px] font-medium uppercase tracking-[0.16em] text-charcoal dark:text-paper-dim">
              {label}
            </p>
            <p className="mt-3 font-serif text-5xl font-semibold leading-none tracking-[-0.02em]">
              {value}
            </p>
            <p className="mt-4 text-[13px] leading-[1.8] text-charcoal dark:text-paper-dim">
              {detail}
            </p>
          </li>
        ))}
      </ul>
    </div>
  </section>
)

export default StatsGrid