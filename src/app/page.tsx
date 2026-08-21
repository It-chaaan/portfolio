import { Hero } from "../components/pages/Hero";
import { Contact } from "../components/pages/Contact";
import { Projects } from "../components/pages/Projects";
import { Skills } from "../components/pages/Skills";
import { Experience } from "../components/pages/Experience";
import { Education } from "../components/pages/Education";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
