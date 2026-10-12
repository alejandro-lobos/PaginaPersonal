const footerLinks = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#voleibol", label: "Voleibol" },
  { href: "#ideas", label: "Ideas" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
        <a
          href="#inicio"
          className="w-fit text-sm font-semibold tracking-[-0.03em] text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600"
        >
          Alejandro Lobos<span className="text-indigo-600">.</span>
        </a>

        <nav aria-label="Navegación del pie de página" className="flex flex-wrap gap-x-6 gap-y-3">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-600 transition hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Alejandro Lobos
        </p>
      </div>
    </footer>
  );
}
