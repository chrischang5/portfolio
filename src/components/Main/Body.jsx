import { About } from "./About";
import { Contact } from "./Contact";
import { Experience } from "./Experience";
import { Projects } from "./Projects";

export function Body(props) {
  return (
    <div className="grid grid-cols-5 bg-primary-100 dark:bg-primary-950 md:h-fit md:w-full md:grid-cols-11">
      <div className="col-span-1 md:col-span-2" />
      <div className="col-span-3 md:col-span-7">
        <About />
        <Experience />
        <Projects />
        <Contact darkMode={props.darkMode} />
      </div>
      <div className="col-span-1 md:col-span-2" />
    </div>
  );
}
