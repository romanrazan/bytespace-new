import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AuthForm } from "@/components/auth/AuthForm";
import { AuthVisual } from "@/components/auth/AuthVisual";
import { Logo } from "@/components/ui/Logo";

export function AuthLayout({ mode }: { mode: "login" | "signup" }) {
  return (
    <main className="auth-page">
      <section className="auth-page__brand blue-grid">
        <div className="auth-page__top">
          <Logo inverse />
          <Link href="/">
            <ArrowLeft size={16} /> Back to home
          </Link>
        </div>
        <AuthVisual mode={mode} />
      </section>
      <section className="auth-page__form">
        <div className="auth-page__mobile-logo">
          <Logo />
        </div>
        <AuthForm mode={mode} />
      </section>
    </main>
  );
}
