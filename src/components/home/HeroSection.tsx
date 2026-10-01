import Image from "next/image";
import { BookOpen, Search, Star, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Navbar } from "@/components/layout/Navbar";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function HeroSection() {
  return (
    <section className="hero blue-grid">
      <Navbar />
      <SectionContainer className="hero__inner">
        <div className="hero__copy">
          <span className="eyebrow eyebrow--light"><span /> Learn with the best creators</span>
          <h1>Get Access to<br /><em>Hundreds Courses</em><br />Available</h1>
          <p>Explore practical classes designed by experts, meet a curious community, and build skills that move your career forward.</p>
          <form className="hero-search" action="#courses">
            <Search size={20} />
            <label htmlFor="course-search" className="sr-only">Search courses</label>
            <input id="course-search" placeholder="What do you want to learn?" />
            <Button type="submit">Search</Button>
          </form>
          <div className="hero__trust">
            <div className="avatar-stack avatar-stack--large">
              {[1, 2, 3, 4].map((id) => <Image key={id} src={`/images/avatar-${id}.jpg`} width={34} height={34} alt="" />)}
            </div>
            <span><b>4.8/5</b><br />from 2,000+ learners</span>
          </div>
        </div>
        <div className="hero-art" aria-label="Student learning online">
          <span className="shape shape--orbit" />
          <span className="shape shape--lime" />
          <span className="shape shape--dots" />
          <div className="hero-art__portrait"><Image src="/images/hero-student.jpg" alt="A smiling ByteSpace learner" fill loading="eager" sizes="(max-width: 900px) 80vw, 550px" /></div>
          <div className="float-card float-card--course">
            <span className="float-card__icon"><BookOpen /></span>
            <div><strong>UI/UX Design</strong><span>200 Courses</span><small><Users size={12} /> 1000+ Students</small></div>
          </div>
          <div className="float-card float-card--progress">
            <span className="float-card__icon"><TrendingUp /></span>
            <div><strong>Learning Progress</strong><span>55%</span><i><b /></i></div>
          </div>
          <div className="float-card float-card--students">
            <div><strong>Happy Students</strong><span><Star size={14} fill="currentColor" /> 4.8 Rating</span></div>
            <div className="avatar-stack">{[2, 3, 4].map((id) => <Image key={id} src={`/images/avatar-${id}.jpg`} width={27} height={27} alt="" />)}<b>2K+</b></div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
