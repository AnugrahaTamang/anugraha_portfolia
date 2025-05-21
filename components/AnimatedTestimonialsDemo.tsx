"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote: `Hello! I'm Anugraha Tamang, a developer with a strong foundation in JavaScript, Node.js, and Express.js. I'm passionate about clean code, building efficient backend systems, and solving real-world problems through technology. I enjoy working in collaborative environments where ideas grow through shared learning. My goal is to contribute meaningfully to projects that have a practical impact, and continuously expand my skills as a developer.`,
      name: "Anugraha Tamang",
      designation: "Software Developer",
      src: "/one.png",
    },
    {
      quote:
        "I have a background in Computer Science from my higher secondary education (+2 level), which laid the foundation for my interest in technology. Currently, I am in the final semester of my Bachelor's in Information Communication Technology and Education (BICTE), where I have gained hands-on experience in both educational technologies and core computing concepts.",
      name: "Anugraha Tamang",
      designation: "Education",
      src: "/two.jpg",
    },
    {
      quote:
        "I'm inspired by the power of learning and growth. I believe that consistency, curiosity, and resilience are the keys to making meaningful progress — both personally and professionally. I draw inspiration from people who build impactful solutions and stay grounded in their purpose.",
      name: "Anugraha",
      designation: "Living Hope",
      src: "/anu.jpeg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
