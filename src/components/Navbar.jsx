import { useState } from "react";

const navigation = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#voleibol", label: "Voleibol" },
  { href: "#ideas", label: "Ideas" },
  { href: "#sobre-mi", label: "Sobre mí" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12"
      >
        <a
          href="#inicio"
          onClick={closeMenu}
          className="rounded-sm text-sm font-semibold tracking-[-0.03em] text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600 sm:text-base"
        >
          Alejandro Lobos<span className="text-indigo-600">.</span>
        </a>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 transition hover:border-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:hidden"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5"
          >
            {isOpen ? (
              <path
                d="m6 6 12 12M18 6 6 18"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.8"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.8"
              />
            )}
          </svg>
        </button>

        <div
          id="primary-navigation"
          className={`${isOpen ? "absolute inset-x-4 top-[4.5rem] flex flex-col rounded-2xl border border-slate-200 bg-white p-3 shadow-xl" : "hidden"} md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 text-sm font-medium text-slate-600 transition hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:px-0 md:py-2"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={closeMenu}
            className="mt-1 inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:mt-0"
          >
            Hablemos
          </a>
        </div>
      </nav>
    </header>
  );
}
