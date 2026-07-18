export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-ink-100 bg-ink-900 py-14 text-white dark:border-ink-700">
      <div className="container-page">
        <p className="section-eyebrow !text-crimson-400">{eyebrow}</p>
        <h1 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">{title}</h1>
        {description && <p className="mt-3 max-w-2xl text-ink-300">{description}</p>}
      </div>
    </section>
  );
}
