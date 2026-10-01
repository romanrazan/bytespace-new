"use client";

import Link from "next/link";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Logo inverse />
        <button
          type="button"
          className="navbar__toggle"
          onClick={() => setOpen((value) => !value)}
          aria-controls="mobile-navigation"
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X /> : <Menu />}
        </button>
        <div id="mobile-navigation" className={`navbar__menu ${open ? "navbar__menu--open" : ""}`}>
          <nav className="navbar__nav" aria-label="Main navigation">
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>
            <Link href="/#courses" onClick={closeMenu}>
              Courses
            </Link>
            <Link href="/#creator-cta" onClick={closeMenu}>
              Creators
            </Link>
          </nav>
          <div className="navbar__actions">
            <Link href="/login" onClick={closeMenu}>
              Sign In
            </Link>
            <Link href="/signup" onClick={closeMenu}>
              Join Us
            </Link>
            <Link href="/#courses" aria-label="Shopping bag" onClick={closeMenu}>
              <ShoppingBag size={18} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
