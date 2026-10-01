import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  href?: string;
  variant?: "lime" | "dark" | "outline";
  className?: string;
};

export function Button({ children, href, variant = "lime", className = "", ...props }: Props) {
  const classes = `button button--${variant} ${className}`.trim();
  if (href) return <Link href={href} className={classes}>{children}</Link>;
  return <button className={classes} {...props}>{children}</button>;
}
