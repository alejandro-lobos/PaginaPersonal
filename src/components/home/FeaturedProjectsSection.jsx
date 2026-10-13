import SectionHeading from "@/components/home/SectionHeading";

const projects = [
  {
    status: "En diseño",
    title: "Plataforma para Entrenadores Deportivos",
    description:
      "Aplicación móvil diseñada para ayudar a entrenadores a planificar entrenamientos, gestionar equipos, controlar rotaciones y analizar estadísticas.",
  },
  {
    status: "En evolución",
    title: "AlejandroLobos.com V2",
    description:
      "Reconstrucción de mi ecosistema digital personal para centralizar proyectos, aprendizaje y contenido.",
  },
  {
    status: "Exploración",
    title: "Automatizaciones e Inteligencia Artificial",
    description:
      "Experimentos y herramientas enfocadas en productividad, automatización y desarrollo moderno.",
  },
];

export default function FeaturedProjectsSection() {
  return (
    <section
      id="proyectos"
      aria-labelledby="projects-title"
      className="scroll-mt-20 bg-slate-50 px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="projects-title"
          eyebrow="Trabajo seleccionado"
          title="Proyectos destacados."
          description="Productos e ideas que estoy diseñando, construyendo y explorando."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 sm:p-8"
            >
              <span className="w-fit rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-700">
                {project.status}
              </span>
              <h3 className="mt-6 text-xl font-semibold tracking-[-0.04em] text-slate-950">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
