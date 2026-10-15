import { useState } from 'react'
import { LayoutGrid, List, TriangleAlert } from 'lucide-react'
import catalog from '../data/catalog'
import { useLocalStorage } from '../hooks/useLocalStorage'

const genreOptions = ['Todos', ...new Set(catalog.map((item) => item.genre))]

const formatPrice = (value) => `S/ ${value.toFixed(2)}`

const stockLabel = (stock) => (stock <= 5 ? `Quedan ${stock}` : `${stock} en stock`)

const viewButtonClass = (active) =>
  `inline-flex h-10 w-10 items-center justify-center border transition-colors duration-[250ms] ${
    active
      ? 'border-ink bg-ink text-white dark:border-paper dark:bg-paper dark:text-night'
      : 'border-line text-ink hover:border-ink dark:border-night-line dark:text-paper dark:hover:border-paper'
  }`

const chipClass = (active) =>
  `border-b pb-1 text-[11px] font-medium uppercase tracking-[0.14em] transition-colors duration-[250ms] ${
    active
      ? 'border-ink text-ink dark:border-paper dark:text-paper'
      : 'border-transparent text-charcoal hover:border-warm dark:text-paper-dim'
  }`

const CatalogSection = () => {
  const [activeGenre, setActiveGenre] = useState('Todos')
  const [view, setView] = useLocalStorage('musiccentro-catalog-view', 'grid')

  const visibleItems =
    activeGenre === 'Todos' ? catalog : catalog.filter((item) => item.genre === activeGenre)

  return (
    <section id="catalogo" className="px-6 py-24 md:px-9 md:py-[155px]">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[620px]">
            <p className="flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.2em] text-charcoal dark:text-paper-dim">
              <span className="h-px w-10 bg-warm" />
              02 / Catálogo
            </p>
            <h2 className="mt-6 font-serif text-4xl font-semibold leading-[1.1] tracking-[-0.02em] md:text-5xl">
              Lo que hoy tenemos
            </h2>
            <p className="mt-6 text-[15px] leading-[1.9] text-charcoal dark:text-paper-dim">
              Inventario con precio y existencias.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Vista en cuadrícula"
              aria-pressed={view === 'grid'}
              onClick={() => setView('grid')}
              className={viewButtonClass(view === 'grid')}
            >
              <LayoutGrid size={16} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="Vista en lista"
              aria-pressed={view === 'list'}
              onClick={() => setView('list')}
              className={viewButtonClass(view === 'list')}
            >
              <List size={16} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
          {genreOptions.map((genre) => (
            <button
              key={genre}
              type="button"
              aria-pressed={activeGenre === genre}
              onClick={() => setActiveGenre(genre)}
              className={chipClass(activeGenre === genre)}
            >
              {genre}
            </button>
          ))}
        </div>

        {view === 'grid' ? (
          <ul className="mt-10 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3 dark:border-night-line">
            {visibleItems.map((item) => (
              <li
                key={item.id}
                className="group border-b border-r border-line p-6 dark:border-night-line"
              >
                <figure className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.title}, ${item.artist}`}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover grayscale transition duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
                  />
                </figure>
                <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.16em] text-charcoal dark:text-paper-dim">
                  {item.format} / {item.genre}
                </p>
                <h3 className="mt-3 font-serif text-2xl font-semibold leading-[1.15] tracking-[-0.01em]">
                  {item.title}
                </h3>
                <p className="mt-1 text-[13px] text-charcoal dark:text-paper-dim">{item.artist}</p>
                <div className="mt-6 flex items-center justify-between border-t border-line pt-4 dark:border-night-line">
                  <span className="text-[15px] font-medium">{formatPrice(item.price)}</span>
                  <span className="flex items-center gap-2 text-[12px] text-charcoal dark:text-paper-dim">
                    {item.stock <= 5 && <TriangleAlert size={14} strokeWidth={1.5} />}
                    {stockLabel(item.stock)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="mt-10 border-t border-line dark:border-night-line">
            {visibleItems.map((item) => (
              <li
                key={item.id}
                className="group flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-line py-5 dark:border-night-line"
              >
                <img
                  src={item.image}
                  alt={`${item.title}, ${item.artist}`}
                  loading="lazy"
                  className="h-16 w-20 object-cover grayscale transition duration-500 group-hover:grayscale-0"
                />
                <div className="min-w-[200px] flex-1">
                  <h3 className="font-serif text-xl font-semibold tracking-[-0.01em]">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-charcoal dark:text-paper-dim">{item.artist}</p>
                </div>
                <p className="w-28 text-[11px] font-medium uppercase tracking-[0.16em] text-charcoal dark:text-paper-dim">
                  {item.format} / {item.genre}
                </p>
                <span className="w-24 text-[15px] font-medium">{formatPrice(item.price)}</span>
                <span className="flex w-28 items-center gap-2 text-[12px] text-charcoal dark:text-paper-dim">
                  {item.stock <= 5 && <TriangleAlert size={14} strokeWidth={1.5} />}
                  {stockLabel(item.stock)}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default CatalogSection