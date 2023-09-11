import { BsGithub, BsLinkedin } from "react-icons/bs";

import { GrMail } from "react-icons/gr";
import { IconContext } from "react-icons";
import Section from "./Section";
import Title from "./Title";

export function Contact() {
  return (
    <Section id="contact">
      <Title title="contact" />
      <div 
        id="icons"
        className="flex flex-col text-dark dark:text-light py-10"
      >
        <a
          href="mailto:christopherchang150@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex text-paragraph space-x-8"
        >
          <GrMail size={25} />
          <p>Email</p>
        </a>
        <a
          href="https://www.linkedin.com/in/chrischang150/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex text-paragraph space-x-8"
        >
          <BsLinkedin size={25} />
          <p>LinkedIn</p>
        </a>
        <a
          href="https://github.com/chrischang5"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex text-paragraph space-x-8"
        >
          <BsGithub size={25} />
          <p>GitHub</p>
        </a>
      </div>
    </Section>
  );
}
