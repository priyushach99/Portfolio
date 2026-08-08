import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main
className="
bg-black
text-white
overflow-hidden
"
>
	  <Navbar />
      <Hero />
      <About />
	  <Experience/>
      <Skills />
      <Projects />
    </main>
  );
}