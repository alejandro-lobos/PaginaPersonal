import SectionHeading from "@/components/home/SectionHeading";

const currentFocus = [
  {
    number: "01",
    title: "Plataforma para entrenadores deportivos",
    description:
      "Diseñando una aplicación móvil para entrenadores centrada en planificación, gestión de equipos y análisis de partidos.",
  },
  {
    number: "02",
    title: "Web personal",
    description:
      "Construyendo mi ecosistema digital y documentando los proyectos que estoy creando.",
  },
  {
    number: "03",
    title: "Inteligencia artificial y automatización",
    description:
      "Explorando nuevas formas de acelerar el desarrollo de productos y procesos.",
  },
];

export default function NowSection() {
  return (
    <section
      aria-labelledby="now-title"
      className="bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <SectionHeading
            id="now-title"
            eyebrow="En movimiento"
            title="En qué estoy trabajando ahora."
            description="Ideas en diseño, proyectos en construcción y nuevas herramientas en exploración."
          />
        </div>

        <ol className="divide-y divide-slate-200 border-y border-slate-200">
          {currentFocus.map((item) => (
            <li
              key={item.number}
              className="grid grid-cols-[3rem_1fr] gap-4 py-6 sm:grid-cols-[4rem_1fr] sm:gap-6 sm:py-7"
            >
              <span className="pt-1 text-xs font-medium tabular-nums text-slate-400">
                {item.number}
              </span>
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.025em] text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
