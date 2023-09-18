import ProjectCard from "../ProjectCard/ProjectCard";
import Section from "./Section";
import Title from "./Title";

export function Projects() {
  return (
    <Section id="projects">
      <Title title="projects" />
      <div className="mt-auto grid grid-flow-col md:grid-flow-row md:grid-cols-2 items-center justify-center gap-10 py-10 text-light">
        <ProjectCard
          name="UBC Solar Simulation"
          subtitle="UBC Solar"
          start="January 2021"
          end="May 2022"
          link="https://github.com/UBC-Solar/Simulation"
          desc="UBC Solar is a student-led engineering design team at the University of British Columbia. The Simulation is a program that aims to predict, optimize, vehicle performance in the American Solar Challenge (ASC) and Formula Sun Grand Prix (FSGP). I implemented a variety of features for the Simulation such as the FSGP Simulation functionality, mathematical models to approximate vehicle component behaviour, and performance speedup for critical sections"
          skills={[
            "Python",
            "PyTest",
            "Matlab",
            "Golang",
            "Git",
            "Github Actions",
          ]}
        />
        <ProjectCard
          name="Personal Portfolio"
          start="August 2023"
          end="Ongoing"
          link="https://chrischang5.github.io/portfolio/"
          desc={
            "This project was to kill two birds with one stone: Learn web development and create a personal website. You're on this project now!"
          }
          skills={["React", "JavaScript", "Tailwind"]}
        />
      </div>
    </Section>
  );
}
