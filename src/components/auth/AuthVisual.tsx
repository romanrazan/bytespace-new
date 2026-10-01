import Image from "next/image";
import { BookOpen, Clock3, Star } from "lucide-react";

export function AuthVisual({ mode }: { mode: "login" | "signup" }) {
  return (
    <div className="auth-visual">
      <span className="auth-visual__ring" aria-hidden="true" />
      <span className="auth-visual__dots" aria-hidden="true" />
      <div className="auth-visual__copy">
        <span className="eyebrow eyebrow--light">Welcome to ByteSpace</span>
        <h1>{mode === "login" ? "Sign in with ease" : "Sign up and come in"}</h1>
        <p>
          {mode === "login"
            ? "Your next lesson is waiting. Pick up where you left off and keep moving forward."
            : "Join a curious community and turn the skills you want into progress you can see."}
        </p>
      </div>
      <div className="auth-course-stack" aria-hidden="true">
        <article className="auth-course auth-course--back">
          <Image src="/images/course-data.jpg" alt="" fill loading="eager" sizes="300px" />
          <div>
            <small>
              <BookOpen /> 17 Lessons
            </small>
            <strong>The Power of Big Data</strong>
            <span>
              <Star size={12} fill="currentColor" /> 4.7
            </span>
          </div>
        </article>
        <article className="auth-course auth-course--front">
          <Image src="/images/course-figma.jpg" alt="" fill loading="eager" sizes="300px" />
          <div>
            <small>
              <Clock3 /> 2 hours 16 mins
            </small>
            <strong>Learn Figma from Basic</strong>
            <span>
              <Star size={12} fill="currentColor" /> 4.8
            </span>
          </div>
        </article>
      </div>
    </div>
  );
}
