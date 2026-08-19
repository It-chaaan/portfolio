import { Hero } from "../components/pages/Hero";
import { Contact } from "../components/pages/Contact";
import { Projects } from "../components/pages/Projects";
import { About } from "../components/pages/About";
import { Skills } from "../components/pages/Skills";
import { Experience } from "../components/pages/Experience";
import { Education } from "../components/pages/Education";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
