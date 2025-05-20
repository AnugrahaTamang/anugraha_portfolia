import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonialsDemo";
import React from "react";
import Project from "./Project/page";
import Skill from "./Skill/page";
import ContactLinks from "@/components/ContactLinks";
import About from "./About/page";
import Footer from "@/components/Footer";
const Home = () => {
  return (
    <div>
      <AnimatedTestimonialsDemo />
      <Project />
      <Skill />
      <ContactLinks />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
