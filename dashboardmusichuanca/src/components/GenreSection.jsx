import genres from '../data/genres';

const GenreSection = () => (
  <section
    id="generos"
    className="border-y border-line bg-soft px-6 py-24 md:px-9 md:py-[155px] dark:border-night-line dark:bg-night-soft"
  >
    <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1fr_1.7fr] lg:gap-[70px]">
      <div className="self-start lg:sticky lg:top-[120px]">
        <p className="flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.2em] text-charcoal dark:text-paper-dim">
          <span className="h-px w-10 bg-warm" />
          03 / Géneros
        </p>
        <h2 className="mt-6 font-serif text-4xl font-semibold leading-[1.1] tracking-[-0.02em] md:text-5xl">
          8 géneros musicales, una misma tienda
        </h2>
        <p className="mt-6 max-w-[420px] text-[15px] leading-[1.9] text-charcoal dark:text-paper-dim">
          MusicCentro no se limita a un solo tipo de música. Contamos con contenido tanto nacional
          como internacional.
        </p>
      </div>
      <ul className="border-t border-line dark:border-night-line">
        {genres.map((genre, index) => (
          <li
            key={genre.id}
            className="group grid grid-cols-[48px_1fr] items-center gap-x-4 gap-y-3 border-b border-line py-7 sm:grid-cols-[48px_1fr_112px] dark:border-night-line"
          >
            <span className="font-serif text-2xl font-medium text-warm">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <h3 className="font-serif text-[25px] font-semibold tracking-[-0.02em]">
                {genre.name}
              </h3>
              <p className="mt-1 max-w-[420px] text-[13px] leading-[1.8] text-charcoal dark:text-paper-dim">
                {genre.description}
              </p>
              <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.16em] text-charcoal dark:text-paper-dim">
                {genre.titles} títulos
              </p>
            </div>
            <img
              src={genre.image}
              alt={`Género ${genre.name}`}
              loading="lazy"
              className="col-span-2 aspect-[4/3] w-full object-cover grayscale transition duration-500 group-hover:grayscale-0 sm:col-span-1"
            />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default GenreSection;
