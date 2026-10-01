import Image from "next/image";
import { BarChart3, Clock3, MessageCircle, Star } from "lucide-react";
import type { Course } from "@/types";

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="course-card">
      <div className="course-card__image">
        <Image src={course.image} alt="" fill loading="eager" sizes="(max-width: 740px) 88vw, (max-width: 1100px) 42vw, 360px" />
        <div className="course-card__meta">
          <span>{course.lessons} Lessons</span>
          <span><Clock3 size={11} />{course.duration}</span>
          <span><MessageCircle size={11} />{course.comments} Comments</span>
        </div>
      </div>
      <div className="course-card__body">
        <div className="course-card__title-row">
          <h3>{course.title}</h3>
          <span className="course-card__rating">{course.rating}<Star size={13} fill="currentColor" /></span>
        </div>
        <p className="course-card__creator">by <a href="#creators">{course.creator}</a></p>
        <div className="course-card__social">
          <span className="level-pill"><BarChart3 size={13} />{course.level}</span>
          <span className="avatar-stack">
            {course.students.map((student, index) => <Image key={`${course.id}-${student}-${index}`} src={student} alt="" width={25} height={25} />)}
            <b>{course.studentCount}</b>
          </span>
        </div>
        <div className="course-card__price"><strong>${course.price}</strong><span>/lifetime</span></div>
      </div>
    </article>
  );
}
