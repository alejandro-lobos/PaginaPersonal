import Image from "next/image";
import ArrowLink from "@/components/home/ArrowLink";
import SectionHeading from "@/components/home/SectionHeading";

export default function AboutSection() {
  return (
    <section
      id="sobre-mi"
      aria-labelledby="about-title"
      className="scroll-mt-20 bg-slate-50 px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20">
        <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-200 to-indigo-100">
          <div className="relative aspect-[4/5]">
            <Image
              src="/images/ale.jpg"
              alt=""
              fill
              sizes="(max-width: 1024px) 80vw, 32vw"
              className="object-contain object-bottom"
            />
          </div>
        </div>

        <div>
          <SectionHeading
            id="about-title"
            eyebrow="Sobre mí"
            title="Crear, aprender y crecer en equipo."
            description="Soy Alejandro Lobos, Ingeniero Civil Informático. Me enfoco en crear productos digitales, aprender continuamente y aplicar tecnología a problemas reales."
          />
          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Actualmente trabajo en el sector de las telecomunicaciones. También
            soy entrenador de voleibol, donde desarrollo liderazgo y acompaño
            el crecimiento de los equipos.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
            <ArrowLink href="mailto:alejandro.lobosarenas@gmail.com">
              Escribirme
            </ArrowLink>
            <a
              href="/documents/Alejandro%20Lobos.pdf"
              download="Alejandro Lobos.pdf"
              className="rounded-sm text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 transition hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600"
            >
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
