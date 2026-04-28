export function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header>
      <h2 className="text-base font-semibold tracking-tight">{title}</h2>
      {subtitle ? <p className="text-sm text-[color:var(--muted)]">{subtitle}</p> : null}
    </header>
  );
}
