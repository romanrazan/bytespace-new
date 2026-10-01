"use client";

import Image from "next/image";
import { BookOpen, Search, Star, TrendingUp, Users } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Navbar } from "@/components/layout/Navbar";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { useCourseExplorer } from "@/components/course/CourseExplorerProvider";

export function HeroSection() {
  const { submitSearch } = useCourseExplorer();
  const [search, setSearch] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    submitSearch(search);
  }

  return (
    <section className="hero blue-grid">
      <Navbar />
      <SectionContainer className="hero__inner">
        <div className="hero__copy">
          <h1>
            Get Access to Hundreds
            <br />
            Courses Available
          </h1>
          <p>
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>
          <form className="hero-search" role="search" onSubmit={handleSubmit}>
            <Search size={20} aria-hidden="true" />
            <label htmlFor="course-search" className="sr-only">
              Search by course, topic, or creator
            </label>
            <input
              id="course-search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Course, topic, creator"
            />
            <Button type="submit">Search</Button>
          </form>
        </div>
        <div className="hero-art" aria-label="Student learning online with a headset and laptop">
          <span className="hero-shape hero-shape--lime" aria-hidden="true" />
          <span className="hero-shape hero-shape--white-left" aria-hidden="true" />
          <span className="hero-shape hero-shape--white-right" aria-hidden="true" />
          <span className="hero-shape hero-shape--lime-corner" aria-hidden="true" />
          <span className="hero-squiggle hero-squiggle--left" aria-hidden="true" />
          <span className="hero-squiggle hero-squiggle--right" aria-hidden="true" />
          <div className="hero-art__portrait">
            <Image
              src="/images/figma/learner-headset-transparent.webp"
              alt="Smiling ByteSpace learner wearing a headset and holding a laptop"
              fill
              priority
              loading="eager"
              sizes="(max-width: 820px) 88vw, 660px"
            />
          </div>
          <div className="float-card float-card--course">
            <span className="float-card__icon">
              <BookOpen />
            </span>
            <div>
              <strong>UI/UX Design</strong>
              <span>200 Courses</span>
              <small>
                <Users size={12} /> 1000+ Students
              </small>
            </div>
          </div>
          <div className="float-card float-card--progress">
            <span className="float-card__icon">
              <TrendingUp />
            </span>
            <div>
              <strong>Learning Progress</strong>
              <span>55%</span>
              <i>
                <b />
              </i>
            </div>
          </div>
          <div className="float-card float-card--students">
            <div>
              <strong>Happy Students</strong>
              <span>
                4.5 (240) <Star size={14} fill="currentColor" />
              </span>
            </div>
            <div className="avatar-stack">
              {[1, 2, 3, 4].map((id) => (
                <Image key={id} src={`/images/avatar-${id}.jpg`} width={27} height={27} alt="" />
              ))}
              <b>2K+</b>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
