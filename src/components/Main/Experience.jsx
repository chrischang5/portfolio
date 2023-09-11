import ExperienceCard from "../ExperienceCard/ExperienceCard";
import Section from "./Section";
import Title from "./Title";

export function Experience() {
  return (
    <Section id="experience">
      <Title title="experience" />
      <div className="flex flex-col justify-center items-center text-light py-10">
        <ExperienceCard
          role="Quality Analyst Intern"
          company="Safe Software"
          bullets={[
            "Designed and implemented five new features in test suite infrastructure, contributing to a 100% reduction in false fails for five tests.",
            "Created over 200 automated regression tests, resulting in 10 regressions being flagged and fixed.",
            "Applied white-box and black-box testing strategies to validate functionality of 100 internal and using-facing features.",
          ]}
          start="January 2023"
          end="August 2023"
          skills={[
            "C++",
            "Visual Studio",
            "Git",
            "Windows",
            "Linux",
            "MacOS",
            "FME",
          ]}
        />
        <ExperienceCard
          role="Emulation Engineering Co-op"
          company="Intel"
          bullets={[
            "Developed, tested, and released a DML and Python-based emulation model for a mailbox communication device three weeks ahead of schedule.",
            "Implemented and tested over 15 features for an internal development tool using Python and a PyTest unit test suite, achieving 100%-line coverage.",
            "Configured GitHub Actions workflows to automatically run regression tests, update software dependencies, and report code coverage.",
          ]}
          start="May 2022"
          end="December 2022"
          skills={[
            "Python",
            "Git",
            "GitHub Actions",
            "DML",
            "Simics",
          ]}
        />
        <ExperienceCard
          role="Software Engineer Co-op"
          company="CareCru"
          bullets={[
            "Implemented scripts to test use cases of three user features using JavaScript and Cypress.io",
            "Integrated test scripts with Jenkins to perform user feature testing automatically and improve API test coverage by 10%.",
            "Collaborated in an agile environment to plan user stories, project requirements, project timelines.",
          ]}
          start="June 2020"
          end="August 2020"
          skills={[
            "JavaScript",
            "Cypress.io",
            "Jenkins",
            "Git",
          ]}
        />
      </div>
    </Section>
  );
}
