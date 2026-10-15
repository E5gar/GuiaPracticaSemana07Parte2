import { ArrowDown, ArrowRight } from 'lucide-react'

const Hero = () => (
  <section id="top" className="px-6 pb-24 pt-36 md:px-9 md:pb-[120px] md:pt-44">
    <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-[70px]">
      <div>
        <p className="flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.2em] text-charcoal dark:text-paper-dim">
          <span className="h-px w-10 bg-warm" />
          Disquera independiente / Chilca, Huancayo
        </p>
        <h1 className="mt-8 font-serif text-5xl font-medium leading-[0.98] tracking-[-0.02em] md:text-7xl">
          Todos los géneros en <em className="italic">una sola esquina</em> de Chilca
        </h1>
        <p className="mt-8 max-w-[540px] text-[15px] leading-[1.9] text-charcoal dark:text-paper-dim">
          Vinilos, CD y casetes de huayno, cumbia, rock, música tropical, jazz y electrónica.
          Este panel reúne el inventario, la agenda y los pendientes diarios de MusicCentro.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#catalogo"
            className="group inline-flex h-[52px] items-center gap-3 border border-ink bg-ink px-6 text-[11px] font-medium uppercase tracking-[0.08em] text-white transition-colors duration-[250ms] hover:border-warm hover:bg-warm hover:text-ink dark:border-paper dark:bg-paper dark:text-night dark:hover:border-warm dark:hover:bg-warm"
          >
            Ver catálogo
            <ArrowDown
              size={16}
              strokeWidth={1.5}
              className="transition-transform duration-[250ms] group-hover:translate-y-[5px]"
            />
          </a>
          <a
            href="#pendientes"
            className="group inline-flex h-[52px] items-center gap-3 border border-line bg-white px-6 text-[11px] font-medium uppercase tracking-[0.08em] text-ink transition-colors duration-[250ms] hover:border-warm hover:bg-soft dark:border-night-line dark:bg-transparent dark:text-paper dark:hover:border-warm dark:hover:bg-night-soft"
          >
            Gestionar pendientes
            <ArrowRight
              size={16}
              strokeWidth={1.5}
              className="transition-transform duration-[250ms] group-hover:translate-x-[5px]"
            />
          </a>
        </div>
      </div>
      <figure>
        <img
          src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80"
          alt="Lorem ipsum dolor"
          className="aspect-[4/3] w-full object-cover grayscale"
        />
        <figcaption className="mt-4 flex items-center justify-between border-t border-line pt-4 text-[11px] font-medium uppercase tracking-[0.16em] text-charcoal dark:border-night-line dark:text-paper-dim">
          <span>MusicCentro</span>
          <span>Av. Huancavelica N° 606</span>
        </figcaption>
      </figure>
    </div>
  </section>
)

export default Hero