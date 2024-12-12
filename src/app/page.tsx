import About from "./component/about";
import Contact from "./component/contact";
import Hero from "./component/hero";
import Project from "./component/project";
import Skills from "./component/skills";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Contact/>
      <Project/>
      <Skills/>
    </div>
  );
}

