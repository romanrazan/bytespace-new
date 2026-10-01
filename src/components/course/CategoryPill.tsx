export function CategoryPill({ label, active = false }: { label: string; active?: boolean }) {
  return <button className={`category-pill ${active ? "category-pill--active" : ""}`}>{label}</button>;
}
