export default function ContactSection() {
  return (
    <section
      id="contacto"
      aria-labelledby="contact-title"
      className="scroll-mt-20 bg-indigo-600 px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-100">
            Contacto
          </p>
          <h2
            id="contact-title"
            className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl"
          >
            ¿Construimos algo útil?
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-indigo-100 sm:text-lg sm:leading-8">
            Estoy abierto a conversar sobre productos digitales, tecnología,
            telecomunicaciones y colaboración.
          </p>
        </div>
        <a
          href="mailto:alejandro.lobosarenas@gmail.com"
          className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Hablemos
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="none"
            className="h-4 w-4"
          >
            <path
              d="M4.167 10h11.666m0 0-5-5m5 5-5 5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.6"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
