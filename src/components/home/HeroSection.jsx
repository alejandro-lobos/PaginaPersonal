import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-gradient-to-br from-white via-white to-indigo-50/80"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl sm:right-0 sm:top-28"
      />
      <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-10 px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:min-h-[780px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:px-12 lg:pt-28">
        <div className="relative z-10 max-w-3xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-3.5 py-2 text-xs font-medium text-slate-700 shadow-sm">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-indigo-600"
            />
            Tecnología · Producto · Voleibol
          </p>
          <h1
            id="hero-title"
            className="text-5xl font-semibold leading-[1.04] tracking-[-0.065em] text-slate-950 sm:text-6xl lg:text-7xl"
          >
            Conecto ideas.
            <br />
            Construyo soluciones.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
            Soy Alejandro Lobos, Ingeniero Civil Informático. Creo productos
            digitales, exploro tecnología aplicada a problemas reales y entreno
            voleibol.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#proyectos"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Explorar proyectos
            </a>
            <a
              href="#sobre-mi"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-500 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Conocer mi trabajo
            </a>
          </div>
          <p className="mt-8 text-sm text-slate-500">
            Tecnología y personas, trabajando en la misma dirección.
          </p>
        </div>

        <div className="relative mx-auto flex w-full max-w-md items-end justify-center lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute bottom-3 h-[78%] w-[78%] rounded-full bg-gradient-to-br from-indigo-100 via-sky-100 to-white ring-1 ring-indigo-100/80"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-9 left-3 h-16 w-16 rounded-2xl border border-indigo-200 bg-white/80 shadow-sm sm:left-8"
          />
          <div
            aria-hidden="true"
            className="absolute right-2 top-12 h-20 w-20 rounded-full border border-sky-200 bg-white/60 sm:right-8"
          />
          <Image
            src="/images/ale.jpg"
            alt="Alejandro Lobos"
            width={1190}
            height={1280}
            priority
            sizes="(max-width: 1024px) 80vw, 40vw"
            className="relative z-10 max-h-[540px] w-auto max-w-full object-contain object-bottom drop-shadow-[0_24px_40px_rgba(15,23,42,0.12)]"
          />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"
      />
    </section>
  );
}
