import { BsGithub, BsLinkedin } from "react-icons/bs";

import { GrMail } from "react-icons/gr";
import { IconContext } from "react-icons";
import Section from "./Section";
import Title from "./Title";

export function Contact(props) {
  return (
    <Section id="contact">
      <Title title="contact" />
      <div id="icons" className="flex flex-col py-10">
        <a
          href="mailto:christopherchang150@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex text-paragraph space-x-8"
        >
          <IconContext.Provider
            value={{
              color: props.darkMode ? "white" : "black",
            }}
          >
            <GrMail size={25} />
          </IconContext.Provider>
          <p className="text-dark dark:text-light">Email</p>
        </a>
        <a
          href="https://www.linkedin.com/in/chrischang150/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex text-paragraph space-x-8"
        >
          <IconContext.Provider
            value={{
              color: props.darkMode ? "white" : "black",
            }}
          >
            <BsLinkedin size={25} />
          </IconContext.Provider>
          <p className="text-dark dark:text-light">
            LinkedIn
          </p>
        </a>
        <a
          href="https://github.com/chrischang5"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex text-paragraph space-x-8"
        >
          <IconContext.Provider
            value={{
              color: props.darkMode ? "white" : "black",
            }}
          >
            <BsGithub size={25} />
          </IconContext.Provider>
          <p className="text-dark dark:text-light">
            GitHub
          </p>
        </a>
      </div>
    </Section>
  );
}
