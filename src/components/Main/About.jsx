import { Contact } from "./Contact";
import Section from "./Section";
import Title from "./Title";
import chrisPhoto from "./chris.JPG";

export function About() {
  return (
    <Section id="about">
      <Title title="About Me" />
      <div className="flex flex-col items-center justify-center gap-10 sm:flex-row">
        <div className="text-inter basis-1/2 text-paragraph text-dark dark:text-light">
          Hi! I'm Chris. I studied Computer Engineering at UBC. I'm currently working as a Software Engineer in the Metro Vancouver area!
        </div>
        <div className="basis-1/2" id="photo">
          <img
            className="rounded-lg"
            src={chrisPhoto}
            alt="Photo of Chris Chang"
          />
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <Contact />
      </div>
    </Section>
  );
}
