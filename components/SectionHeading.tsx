export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8">
      {eyebrow ? <div className="chip">{eyebrow}</div> : null}
      <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-2xl text-base text-muted md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
