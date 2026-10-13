import ArrowLink from "@/components/home/ArrowLink";

export default function VolleyballSection() {
  return (
    <section
      id="voleibol"
      aria-labelledby="volleyball-title"
      className="scroll-mt-20 overflow-hidden bg-slate-950 px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">
            Liderazgo en equipo
          </p>
          <h2
            id="volleyball-title"
            className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl"
          >
            El crecimiento también se entrena.
          </h2>
          <p className="mt-6 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            El voleibol es otra forma de aprender, colaborar y avanzar en
            equipo. Como entrenador, acompaño el desarrollo de personas dentro
            y fuera de la cancha.
          </p>
          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-200">
              Actualmente entrenando
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              <li className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-white">
                <span aria-hidden="true">🏐 </span>Equipo Cadete Femenino
              </li>
              <li className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-white">
                <span aria-hidden="true">🏐 </span>Equipo Alevín Mixto
              </li>
            </ul>
          </div>
          <ArrowLink
            href="mailto:alejandro.lobosarenas@gmail.com?subject=Voleibol"
            className="mt-7 text-indigo-300 hover:text-white"
          >
            Hablemos de voleibol
          </ArrowLink>
        </div>

        <div
          aria-hidden="true"
          className="relative mx-auto aspect-[1.15/1] w-full max-w-lg overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-indigo-500/20 via-slate-900 to-slate-900 p-6 sm:p-10"
        >
          <div className="absolute inset-6 rounded-[1.5rem] border border-indigo-300/25 sm:inset-10" />
          <svg
            viewBox="0 0 420 340"
            fill="none"
            className="relative h-full w-full text-indigo-200/80"
          >
            <path d="M40 40h340v260H40z" stroke="currentColor" strokeWidth="2" />
            <path d="M100 40v260M320 40v260M40 170h340" stroke="currentColor" strokeWidth="1.5" />
            <path d="M176 40v260M244 40v260" stroke="currentColor" strokeDasharray="5 7" strokeWidth="1.5" />
            <circle cx="210" cy="170" r="28" fill="#818cf8" fillOpacity=".18" stroke="#c7d2fe" strokeWidth="2" />
            <path d="M198 159c11 3 18 13 17 24m10-31c-8 9-8 22 1 31m-30-3c9-7 22-7 31 1" stroke="#e0e7ff" strokeLinecap="round" strokeWidth="1.5" />
            <circle cx="92" cy="111" r="5" fill="#c7d2fe" />
            <circle cx="325" cy="229" r="5" fill="#c7d2fe" />
          </svg>
          <span className="absolute bottom-6 left-7 text-xs font-medium uppercase tracking-[0.16em] text-indigo-100/70 sm:bottom-8 sm:left-10">
            Personas · práctica · equipo
          </span>
        </div>
      </div>
    </section>
  );
}
