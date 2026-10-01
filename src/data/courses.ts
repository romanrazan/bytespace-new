import type { Course } from "@/types";

const learners = ["/images/avatar-1.jpg", "/images/avatar-2.jpg", "/images/avatar-3.jpg", "/images/avatar-4.jpg"];

export const courses: Course[] = [
  { id: 1, title: "Learn Figma from Basic", image: "/images/course-figma.jpg", creator: "purepearl studio", rating: 4.5, price: 25, lessons: 17, duration: "2 hours 16 mins", comments: 59, level: "Beginner", students: learners, studentCount: "26+" },
  { id: 2, title: "Build Digital Asset", image: "/images/course-digital.jpg", creator: "purepearl studio", rating: 4.8, price: 25, lessons: 17, duration: "2 hours 16 mins", comments: 59, level: "Intermediate", students: [learners[1], learners[0], learners[3], learners[2]], studentCount: "32+" },
  { id: 3, title: "The Power of Big Data", image: "/images/course-data.jpg", creator: "purepearl studio", rating: 4.7, price: 25, lessons: 17, duration: "2 hours 16 mins", comments: 59, level: "Beginner", students: [learners[2], learners[1], learners[0], learners[3]], studentCount: "26+" },
  { id: 4, title: "Balancing Productivity", image: "/images/course-productivity.jpg", creator: "purepearl studio", rating: 4.5, price: 25, lessons: 17, duration: "2 hours 16 mins", comments: 59, level: "Beginner", students: learners, studentCount: "48+" },
  { id: 5, title: "Mastering Money Management", image: "/images/course-money.jpg", creator: "purepearl studio", rating: 4.6, price: 25, lessons: 17, duration: "2 hours 16 mins", comments: 59, level: "Beginner", students: [learners[3], learners[2], learners[1], learners[0]], studentCount: "26+" },
  { id: 6, title: "From Idea to Startup Success", image: "/images/course-startup.jpg", creator: "purepearl studio", rating: 4.9, price: 25, lessons: 17, duration: "2 hours 16 mins", comments: 59, level: "Beginner", students: [learners[0], learners[3], learners[2], learners[1]], studentCount: "64+" },
];

export const courseCategories = [
  "Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media",
  "UI/UX Design", "Creative Marketing", "Digital Illustration", "Film & Video", "Crafts",
  "Freelance & Entrepreneurship", "Graphic Design", "Photography", "Productivity",
  "Web Development", "Data Science", "Cooking", "+ More",
];
