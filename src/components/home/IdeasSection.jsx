import ArrowLink from "@/components/home/ArrowLink";
import SectionHeading from "@/components/home/SectionHeading";

export default function IdeasSection() {
  return (
    <section
      id="ideas"
      aria-labelledby="ideas-title"
      className="scroll-mt-20 bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
        <SectionHeading
          id="ideas-title"
          eyebrow="Notas y aprendizajes"
          title="Ideas que nacen de construir, entrenar y aprender."
          description="Este espacio reunirá reflexiones sobre tecnología, productos digitales y voleibol. Por ahora, puedes seguir lo que comparto en mis canales profesionales."
        />
        <div className="flex flex-col items-start gap-5 border-t border-slate-200 pt-6 lg:justify-self-end lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <p className="max-w-md text-sm leading-6 text-slate-600">
            Sin publicaciones de relleno: compartiré aquí contenido cuando
            tenga una experiencia o aprendizaje útil que aportar.
          </p>
          <ArrowLink href="https://www.linkedin.com/in/alejandro-lobos-arenas/">
            Conectar en LinkedIn
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}
