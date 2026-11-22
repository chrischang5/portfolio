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
            "Led a team of 3 developers and collaborated with cross-functional stakeholders to scope, design, and deliver a 3D swept-geometry feature that lets users generate CAD models of infrastructure such as rails, tunnels, and pipes.",
            "Accelerated ticket quality assurance (QA) across 3 development teams, cutting review time by over 50% from hours to minutes, by initiating development of an automated AI test harness.",
            "Rewrote a C++ 2D geometry snapping algorithm, fixing 8 existing bugs and refactoring it into a modular design that was extended to build the 3D snapping and priority snapping features.",
            "Mentored a student intern over an 8-month term as primary code reviewer and technical advisor, guiding the research, design, and implementation of 6 geometry-to-geometry distance calculations.",
          ]}
          start="June 2025"
          end="Present"
          skills={["C++", "Visual Studio", "Git", "Github", "Claude Code"]}
        />
        <ExperienceCard
          role="Software Developer I"
          company="Safe Software"
          bullets={[
            "Maintained production C++ code by diagnosing and resolving 30 crashes, memory-safety defects, performance bottlenecks.",
            "Designed and implemented 2D geometry validation and repair algorithms based on Open Geospatial Consortium (OGC) standards, enabling users to successfully export spatial data to Oracle Spatial, Snowflake, and Microsoft SQL Server platforms.",
          ]}
          start="June 2024"
          end="May 2025"
          skills={["C++", "Visual Studio", "Git", "Github"]}
        />
        <ExperienceCard
          role="Quality Analyst Intern"
          company="Safe Software"
          bullets={[
            "Extended regression test infrastructure with 5 configurable options written in C++ that accounted for cross-platform differences in test results, eliminating false fails in 60 regression tests.",
            "Authored 200+ automated regression tests using white-box and black-box testing strategies, expanding test coverage for 100+ features.",
          ]}
          start="January 2023"
          end="August 2023"
          skills={["C++", "Visual Studio", "Python", "Git", "Github"]}
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
          skills={["Python", "Git", "GitHub Actions", "DML", "Simics"]}
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
          skills={["JavaScript", "Cypress.io", "Jenkins", "Git"]}
        />
      </div>
    </Section>
  );
}
