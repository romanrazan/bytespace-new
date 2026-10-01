"use client";

import { useId, useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight } from "lucide-react";

export function NewsletterForm() {
  const inputId = useId();
  const feedbackId = useId();
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const normalizedEmail = email.trim();
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail);

    if (!validEmail) {
      setFeedback({ type: "error", message: "Enter a valid email address." });
      return;
    }

    setFeedback({ type: "success", message: "Thanks for subscribing to ByteSpace updates." });
    setEmail("");
  }

  return (
    <>
      <form className="newsletter" onSubmit={handleSubmit} noValidate>
        <label className="sr-only" htmlFor={inputId}>
          Email address
        </label>
        <input
          id={inputId}
          type="email"
          inputMode="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          aria-describedby={feedback ? feedbackId : undefined}
          aria-invalid={feedback?.type === "error"}
        />
        <button type="submit">
          Subscribe <ArrowRight size={16} />
        </button>
      </form>
      {feedback && (
        <p
          id={feedbackId}
          className={`newsletter__feedback newsletter__feedback--${feedback.type}`}
          role="status"
        >
          {feedback.message}
        </p>
      )}
    </>
  );
}
