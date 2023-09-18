import Section from "./Section";
import Title from "./Title";

export function About() {
  return (
    <Section id="about">
      <Title title="About Me" />
      <div className="flex flex-col items-center justify-center space-x-10 space-y-10 md:flex-row">
        <div className="text-inter basis-1/2 text-paragraph text-dark dark:text-light">
          Hi! I'm Chris. I'm a fourth year student studying Computer Engineering
          at the University of British Columbia in Vancouver, Canada.
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
