export function SectionHeading({
  index,
  kicker,
  title,
  description,
}: {
  index: string;
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 flex flex-col gap-4">
      <span className="font-mono text-[13px] tracking-wide text-accent-ink">
        {index} · {kicker}
      </span>
      <h2 className="m-0 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="m-0 max-w-2xl text-lg leading-relaxed text-ink-secondary">
          {description}
        </p>
      )}
    </div>
  );
}
