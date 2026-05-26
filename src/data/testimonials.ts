// src/data/testimonials.ts
import johnAvatar from "../../assets/images/jhon-lee.svg";
import sarahAvatar from "../../assets/images/sarah-tan.svg";
import emilyAvatar from "../../assets/images/emily-chen.svg";

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  stars: number;
  comment: string;
}

export const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: "Sarah Tan",
    role: "Product Manager",
    company: "Finovate",
    avatar: sarahAvatar,
    stars: 5,
    comment: "“The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.”",
  },
  {
    id: 2,
    name: "John Lee",
    role: "Creative Director",
    company: "Innovate Corp",
    avatar: johnAvatar,
    stars: 5,
    comment: "“Working with this team was a game-changer for our project. They understood our vision and turned it into reality efficiently and effectively.”",
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Marketing Head",
    company: "Tech Solutions",
    avatar: emilyAvatar,
    stars: 5,
    comment: "“The collaboration was seamless, and the results surpassed our expectations. Their expertise transformed our ideas into a successful product.”",
  },
];