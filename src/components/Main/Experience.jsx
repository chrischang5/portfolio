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
            "Led 3 developers to design, build, and test a C++ 3D sweep algorithm that models pipes, rails, and walls, fulfilling a top user request open since 2018.",
            "Reduced average per-ticket QA from 2 hours to 10 minutes for 3 development teams by building a Claude Code skill that reviews test plans for coverage gaps, generates and runs exploratory tests, and verifies that bug fixes resolve the reported issue.",
            "Rewrote a C++ 2D vertex-snapping algorithm for modularity, resolving 8 bugs, and extended the algorithm to let users control which vertices take priority.",
            "Mentored an intern over 8 months as primary code reviewer, guiding the design and implementation of 6 C++ geometry distance algorithms shipped to production.",
          ]}
          start="June 2025"
          end="Present"
          skills={["C++", "Visual Studio", "Git", "Github", "Claude Code"]}
        />
        <ExperienceCard
          role="Software Developer I"
          company="Safe Software"
          bullets={[
            "Fixed 30 memory-safety defects and resolved 20 profiled performance bottlenecks in production C++, including reducing one customer’s CAD data processing time from 7 hours to 1.5 seconds.",
            "Designed and implemented C++ algorithms to detect and repair self-intersecting and invalid geometries, enabling users to write geospatial data to Oracle Spatial.",
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
          end="August 2023"
          skills={["C++", "Visual Studio", "Python", "Git", "Github"]}
        />
        <ExperienceCard
          role="Emulation Engineering Intern"
          company="Intel"
          bullets={[
            "Developed and released a Python emulation model of a firmware-to-hardware communication mailbox, enabling the firmware team to test before hardware was available.",
            "Implemented and tested 15 features in an internal development tool using Python and Pytest, enabling automatic generation of emulation boilerplate code from hardware register specifications.",
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
          start="June 2020"
          end="August 2020"
          skills={["JavaScript", "Cypress.io", "Jenkins", "Git"]}
        />
      </div>
    </Section>
  );
}
