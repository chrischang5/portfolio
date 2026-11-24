import ExperienceCard from "../ExperienceCard/ExperienceCard";
import Section from "./Section";
import Title from "./Title";

export function Experience() {
  return (
    <Section id="experience">
      <Title title="experience" />
      <div className="flex flex-col items-center justify-center py-10 text-light">
        <ExperienceCard
          role="Software Developer II"
          company="Safe Software"
          bullets={[
            "Led a team of 3 developers and collaborated with product managers, customer success, and UX to scope, design, implement, and deliver a C++ 3D sweep feature, enabling users to model infrastructure such as rails, tunnels, and pipes.",
            "Reduced average per-ticket QA time by 90% for 3 development teams by building a Claude Code skill to automate verification of bug fixes, test plan generation, and end-to-end user testing.",
            "Improved a legacy 2D vertex-snapping feature by reimplementing the C++ algorithm, resulting in 8 resolved bugs, then developed a priority snap feature, so users have finer control over snapping.",
            "Mentored an intern over 8 months as primary code reviewer, guiding the design and implementation of 6 C++ geometry distance algorithms.",
          ]}
          start="June 2025"
          end="Present"
          skills={["C++", "Visual Studio", "Git", "Github", "Claude Code"]}
        />
        <ExperienceCard
          role="Software Developer I"
          company="Safe Software"
          bullets={[
            "Fixed 30 memory-safety defects and resolved profiled performance bottlenecks in a production C++ codebase, accelerating customer workflows by up to 50%.",
            "Designed and implemented C++ algorithms to detect and repair invalid and self-intersecting geometries, enabling users to write geospatial data to Oracle Spatial.",
          ]}
          start="June 2024"
          end="May 2025"
          skills={["C++", "Visual Studio", "Git", "Github"]}
        />
        <ExperienceCard
          role="Quality Analyst Intern"
          company="Safe Software"
          bullets={[
            "Extended end-to-end test infrastructure with 5 features written in C++ to handle cross-platform result differences, eliminating false failures in 60 tests.",
            "Authored over 200 automated regression tests using white-box and black-box strategies, expanding test coverage for over 100 features.",
          ]}
          start="January 2023"
          end="September 2023"
          skills={["C++", "Visual Studio", "Python", "Git", "Github"]}
        />
        <ExperienceCard
          role="Emulation Engineering Intern"
          company="Intel"
          bullets={[
            "Developed and released a Python emulation model of a firmware-to-hardware communication mailbox, enabling the firmware team to test before hardware was available.",
            "Implemented and tested 15 features in an internal development tool using Python and Pytest, enabling generation of emulation code from hardware specifications.",
            "Automated regression testing, dependency updates, and code coverage reporting with GitHub Actions CI workflows.",
          ]}
          start="May 2022"
          end="December 2022"
          skills={["Python", "Git", "GitHub Actions", "DML", "Simics"]}
        />
        <ExperienceCard
          role="Software Engineer Intern"
          company="CareCru"
          bullets={[
            "Built a Jenkins CI pipeline running Cypress end-to-end tests for 3 user features, raising test coverage by 10%.",
          ]}
          start="June 2021"
          end="September 2021"
          skills={["JavaScript", "Cypress.io", "Jenkins", "Git"]}
        />
      </div>
    </Section>
  );
}
