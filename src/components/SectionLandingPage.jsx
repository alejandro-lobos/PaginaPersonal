import Link from "next/link";

export default function SectionLandingPage({ eyebrow, title, description }) {
  return (
    <>
      <header className="border-b border-slate-200/70 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <Link
            href="/"
            className="text-sm font-semibold tracking-[-0.03em] text-slate-950"
          >
            Alejandro Lobos<span className="text-indigo-600">.</span>
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
          >
            Volver al inicio
          </Link>
        </div>
      </header>
      <main className="min-h-[70vh] bg-white px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <section className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            {description}
          </p>
        </section>
      </main>
    </>
  );
}
