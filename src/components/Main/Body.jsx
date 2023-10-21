import { About } from "./About";
import { Contact } from "./Contact";
import { Experience } from "./Experience";
import { Projects } from "./Projects";

export function Body(props) {
  return (
    <div className="grid h-fit w-auto grid-cols-11 bg-primary-100 dark:bg-primary-950">
      <div className="col-span-1 sm:col-span-2" />
      <div className="col-span-9 sm:col-span-7">
        <About />
        <Experience />
        <Projects />
        <Contact darkMode={props.darkMode} />
      </div>
      <div className="col-span-1 sm:col-span-2" />
    </div>
  );
}
