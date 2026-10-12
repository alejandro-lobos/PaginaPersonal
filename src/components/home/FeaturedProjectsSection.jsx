import Image from "next/image";
import ArrowLink from "@/components/home/ArrowLink";
import SectionHeading from "@/components/home/SectionHeading";

export default function FeaturedProjectsSection() {
  return (
    <section
      id="proyectos"
      aria-labelledby="projects-title"
      className="scroll-mt-20 bg-slate-50 px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="projects-title"
            eyebrow="Trabajo seleccionado"
            title="Ideas que llegaron a convertirse en algo real."
            description="Proyectos y experiencias que forman parte de mi recorrido construyendo soluciones digitales."
          />
          <ArrowLink
            href="https://github.com/alejandro-lobos"
            className="sm:mb-2"
          >
            Explorar GitHub
          </ArrowLink>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-5">
          <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white lg:col-span-3">
            <div className="relative min-h-64 overflow-hidden bg-slate-100 sm:min-h-80">
              <Image
                src="/images/start-up-trabajo.jpg"
                alt="Vista del sitio web desarrollado para Qaudal"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition duration-500 group-hover:scale-[1.025]"
              />
              <span className="absolute left-5 top-5 rounded-full border border-white/50 bg-white/90 px-3 py-1.5 text-xs font-medium text-slate-700 backdrop-blur">
                Desarrollo web · React · TypeScript
              </span>
            </div>
            <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-8">
              <div className="max-w-lg">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-indigo-700">
                  Experiencia de producto
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                  Qaudal
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Recopilé requisitos y desarrollé la base de datos y la página
                  de ventas de la empresa junto a un equipo multidisciplinario.
                </p>
              </div>
              <a
                href="#contacto"
                className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Consultar sobre el proyecto
              </a>
            </div>
          </article>

          <article className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white lg:col-span-2">
            <div className="relative min-h-64 flex-1 overflow-hidden bg-slate-900 sm:min-h-80">
              <Image
                src="/images/PaginaPersonal.jpg"
                alt="Captura de la versión anterior de esta web personal"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top transition duration-500 hover:scale-[1.025]"
              />
              <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-slate-950/80 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
                Next.js · React
              </span>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-indigo-700">
                Proyecto personal
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                Mi web personal
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Un espacio propio para reunir mi trabajo, mis intereses y lo
                que voy aprendiendo.
              </p>
              <ArrowLink
                href="https://github.com/alejandro-lobos/PaginaPersonal"
                className="mt-6"
              >
                Ver repositorio
              </ArrowLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
