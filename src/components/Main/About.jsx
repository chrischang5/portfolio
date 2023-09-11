import Section from "./Section";
import Title from "./Title";

export function About() {
  return (
    <Section id="about">
      <Title title="About Me" />
      <div className="flex flex-row justify-center items-center space-x-10">
        <div className="basis-1/2 text-dark dark:text-light text-inter text-paragraph">
          Hi!

          I'm Chris.

          I'm a fourth year student studying Computer Engineering at the University of British Columbia in Vancouver, Canada. 
        </div>
        <div className="basis-1/2" id="photo">
          <img
            className="rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
            alt="image description"
          />
        </div>
      </div>
    </Section>
  );
}
