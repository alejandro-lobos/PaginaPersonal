import ArrowLink from "@/components/home/ArrowLink";
import SectionHeading from "@/components/home/SectionHeading";

const areas = [
  {
    number: "01",
    title: "Productos digitales",
    description:
      "Desarrollo aplicaciones y productos digitales para transformar ideas y necesidades en soluciones.",
    href: "#proyectos",
    linkLabel: "Ver proyectos",
    icon: (
      <>
        <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" />
        <path d="M8 8h8M8 12h5M8 16h3" />
      </>
    ),
  },
  {
    number: "02",
    title: "Tecnología",
    description:
      "Soy Ingeniero Civil Informático y trabajo en el sector de las telecomunicaciones.",
    href: "#sobre-mi",
    linkLabel: "Conocer mi experiencia",
    icon: (
      <>
        <circle cx="12" cy="12" r="2.5" />
        <path d="M5.6 5.6a9 9 0 0 0 0 12.8M18.4 5.6a9 9 0 0 1 0 12.8M8.4 8.4a5 5 0 0 0 0 7.2m7.2-7.2a5 5 0 0 1 0 7.2" />
      </>
    ),
  },
  {
    number: "03",
    title: "Voleibol",
    description:
      "Como entrenador, acompaño el aprendizaje y desarrollo de personas y equipos.",
    href: "#voleibol",
    linkLabel: "Conocer mi enfoque",
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M5.4 6.6c2.6.4 4.6 2.4 5.1 5m8.1-1.2c-2.5.8-4.2 3-4.3 5.6M9.2 20c.1-2.8 1.8-5.2 4.3-6.1" />
      </>
    ),
  },
];

export default function FocusAreasSection() {
  return (
    <section
      aria-labelledby="areas-title"
      className="bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="areas-title"
          eyebrow="Tres áreas, un mismo propósito"
          title="Distintos desafíos. Una misma forma de avanzar."
          description="Combino pensamiento técnico, curiosidad y trabajo con personas para llevar las ideas a la práctica."
        />

        <div className="mt-12 grid divide-y divide-slate-200 border-y border-slate-200 md:grid-cols-3 md:divide-x md:divide-y-0">
          {areas.map((area) => (
            <article
              key={area.number}
              className="group flex flex-col items-start py-8 md:px-7 md:py-9 first:md:pl-0 last:md:pr-0"
            >
              <div className="flex w-full items-center justify-between">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-7 w-7 text-indigo-700"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                >
                  {area.icon}
                </svg>
                <span className="text-xs font-medium tabular-nums text-slate-400">
                  {area.number}
                </span>
              </div>
              <h3 className="mt-7 text-xl font-semibold tracking-[-0.03em] text-slate-950">
                {area.title}
              </h3>
              <p className="mt-3 min-h-14 text-sm leading-6 text-slate-600">
                {area.description}
              </p>
              <ArrowLink href={area.href} className="mt-6">
                {area.linkLabel}
              </ArrowLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
