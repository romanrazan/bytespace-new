export type Course = {
  id: number;
  title: string;
  image: string;
  creator: string;
  rating: number;
  price: number;
  lessons: number;
  duration: string;
  comments: number;
  level: string;
  students: string[];
  studentCount: string;
};

export type Testimonial = {
  id: number;
  name: string;
  role: string;
  avatar: string;
  quote: string;
};
