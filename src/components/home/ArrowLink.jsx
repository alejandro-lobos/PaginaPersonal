export default function ArrowLink({ href, children, className = "" }) {
  return (
    <a
      href={href}
      className={`group inline-flex w-fit items-center gap-2 rounded-sm text-sm font-semibold text-indigo-700 transition hover:text-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600 ${className}`}
    >
      {children}
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        fill="none"
        className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
  );
}
