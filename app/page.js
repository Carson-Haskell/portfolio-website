import Navbar from "@/components/Navbar/Navbar";
import Main from "@/components/Main/Main";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
    </>
  );
}
