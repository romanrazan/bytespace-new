"use client";

import Link from "next/link";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/ui/Logo";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Logo inverse />
        <button className="navbar__toggle" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
        <nav className={`navbar__nav ${open ? "navbar__nav--open" : ""}`} aria-label="Main navigation">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="#courses" onClick={() => setOpen(false)}>Courses</Link>
          <Link href="#creators" onClick={() => setOpen(false)}>Creators</Link>
        </nav>
        <div className={`navbar__actions ${open ? "navbar__actions--open" : ""}`}>
          <Link href="/login">Sign In</Link>
          <Link href="/signup">Join Us</Link>
          <Link href="#courses" aria-label="Shopping bag"><ShoppingBag size={18} /></Link>
        </div>
      </div>
    </header>
  );
}
