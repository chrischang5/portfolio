import { About } from "./About";
import { Contact } from "./Contact";
import { Experience } from "./Experience";
import { Projects } from "./Projects";

export function Body() {
  return (
    <div className="grid grid-cols-11 h-fit w-full bg-primary-100 dark:bg-primary-950">
      <div className="col-span-2"/>
      <div className="col-span-7">
        <About />
        <Experience />
        <Projects/>
        <Contact />
      </div>
      <div className="col-span-2"/>
    </div>
  );
}
