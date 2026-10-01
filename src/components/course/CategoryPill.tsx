export function CategoryPill({ label, active = false, onClick }: { label: string; active?: boolean; onClick?: () => void }) {
  return <button type="button" className={`category-pill ${active ? "category-pill--active" : ""}`} aria-pressed={active} onClick={onClick}>{label}</button>;
}
