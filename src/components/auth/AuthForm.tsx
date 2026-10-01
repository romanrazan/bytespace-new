"use client";

import Link from "next/link";
import { Eye } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import { Input } from "@/components/ui/Input";

export function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const [showPassword, setShowPassword] = useState(false);
  const [feedback, setFeedback] = useState("");
  const login = mode === "login";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFeedback(`${login ? "Sign in" : "Account creation"} is not available in this frontend demo.`);
  }

  function handleSocialLogin(provider: "Facebook" | "Google") {
    setFeedback(`${provider} sign-in is not available in this frontend demo.`);
  }

  return (
    <div className="auth-card">
      <span className="eyebrow">{login ? "Welcome back" : "Welcome to ByteSpace"}</span>
      <h2>{login ? "Sign In" : "Create an Account"}</h2>
      <p>{login ? "Enter your details to continue learning." : "A world of practical learning is one step away."}</p>
      <form onSubmit={handleSubmit}>
        {!login && (
          <Input
            id="full-name"
            name="name"
            label="Full Name"
            type="text"
            autoComplete="name"
            placeholder="Enter your full name"
            required
          />
        )}
        <Input
          id="email"
          name="email"
          label="Email Address"
          type="email"
          autoComplete="email"
          placeholder="Enter your email"
          required
        />
        <Input
          id="password"
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          autoComplete={login ? "current-password" : "new-password"}
          placeholder="Enter your password"
          required
          minLength={8}
          inputWrapperClassName="password-field"
          endAdornment={
            <button
              type="button"
              onClick={() => setShowPassword((value) => !value)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              <Eye size={18} />
            </button>
          }
        />
        {login && (
          <div className="auth-card__options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="mailto:support@bytespace.example?subject=Password%20help">Forgot password?</a>
          </div>
        )}
        <button className="auth-card__submit" type="submit">
          {login ? "Sign In" : "Continue"}
        </button>
      </form>
      <div className="auth-divider">
        <span>or continue with</span>
      </div>
      <div className="social-auth">
        <button type="button" onClick={() => handleSocialLogin("Facebook")}>
          <b>f</b> Facebook
        </button>
        <button type="button" onClick={() => handleSocialLogin("Google")}>
          <b>G</b> Google
        </button>
      </div>
      <p className="auth-demo-feedback" role="status" aria-live="polite">
        {feedback}
      </p>
      <p className="auth-card__switch">
        {login ? "New user?" : "Already have an account?"}{" "}
        <Link href={login ? "/signup" : "/login"}>{login ? "Create an account" : "Login"}</Link>
      </p>
    </div>
  );
}
