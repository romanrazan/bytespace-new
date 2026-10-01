import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import type { LinkProps } from "next/link";

type SharedButtonProps = {
  children: ReactNode;
  variant?: "lime" | "dark" | "outline";
  className?: string;
};

type ButtonAsButtonProps = SharedButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> & {
    href?: never;
  };

type ButtonAsLinkProps = SharedButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "className" | "href"> & {
    href: LinkProps["href"];
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export function Button(props: ButtonProps) {
  if (props.href !== undefined) {
    const { href, variant = "lime", className = "", children, ...linkProps } = props;
    const classes = `button button--${variant} ${className}`.trim();

    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { variant = "lime", className = "", children, ...buttonProps } = props;
  const classes = `button button--${variant} ${className}`.trim();
  const { type = "button", ...nativeButtonProps } = buttonProps;

  return (
    <button type={type} className={classes} {...nativeButtonProps}>
      {children}
    </button>
  );
}
