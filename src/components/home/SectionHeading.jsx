export default function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  light = false,
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p
          className={`mb-4 text-xs font-semibold uppercase tracking-[0.18em] ${
            light ? "text-indigo-300" : "text-indigo-700"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={`text-3xl font-semibold tracking-[-0.045em] sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-xl text-base leading-7 sm:text-lg sm:leading-8 ${
            light ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
