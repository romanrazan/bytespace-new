"use client";

import Link from "next/link";
import { Eye } from "lucide-react";
import { useState } from "react";

export function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const [showPassword, setShowPassword] = useState(false);
  const login = mode === "login";
  return (
    <div className="auth-card">
      <span className="eyebrow">{login ? "Welcome back" : "Welcome to ByteSpace"}</span>
      <h2>{login ? "Sign In" : "Create an Account"}</h2>
      <p>{login ? "Enter your details to continue learning." : "A world of practical learning is one step away."}</p>
      <form onSubmit={(event) => event.preventDefault()}>
        {!login && <label>Full Name<input type="text" autoComplete="name" placeholder="Enter your full name" required /></label>}
        <label>Email Address<input type="email" autoComplete="email" placeholder="Enter your email" required /></label>
        <label>Password<span className="password-field"><input type={showPassword ? "text" : "password"} autoComplete={login ? "current-password" : "new-password"} placeholder="Enter your password" required minLength={8} /><button type="button" onClick={() => setShowPassword((value) => !value)} aria-label={showPassword ? "Hide password" : "Show password"}><Eye size={18} /></button></span></label>
        {login && <div className="auth-card__options"><label><input type="checkbox" /> Remember me</label><a href="#">Forgot password?</a></div>}
        <button className="auth-card__submit" type="submit">{login ? "Sign In" : "Continue"}</button>
      </form>
      <div className="auth-divider"><span>or continue with</span></div>
      <div className="social-auth"><button type="button"><b>f</b> Facebook</button><button type="button"><b>G</b> Google</button></div>
      <p className="auth-card__switch">{login ? "New user?" : "Already have an account?"} <Link href={login ? "/signup" : "/login"}>{login ? "Create an account" : "Login"}</Link></p>
    </div>
  );
}
