import Link from "next/link";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className={`logo ${inverse ? "logo--inverse" : ""}`} aria-label="ByteSpace home">
      <span className="logo__mark" aria-hidden="true"><span /></span>
      <span>ByteSpace</span>
    </Link>
  );
}
