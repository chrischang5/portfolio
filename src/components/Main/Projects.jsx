import ProjectCard from "../ProjectCard/ProjectCard";
import Section from "./Section";
import Title from "./Title";

export function Projects() {
  const desc =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, architecto eius? Voluptatum doloribus ex nobis, libero repudiandae officia aliquam consectetur asperiores quia excepturi omnis ratione unde laborum.";
  return (
    <Section id="projects">
      <Title title="projects" />
      <div className="grid grid-flow-row grid-cols-2 gap-10 justify-center items-center py-10 text-light">
        <ProjectCard
          name="UBC Solar Simulation"
          subtitle="UBC Solar"
          start="January 2021"
          end="May 2022"
          desc="As Simulation Lead"
          skills={["Python", "PyTest", "Matlab", "Golang", "Git", "Github Actions"]}
        />
        <ProjectCard
          name="Project Name"
          start="January 2099"
          end="June 2019"
          desc={desc}
          skills={["JavaScript", "HTML", "C++", "GitHub"]}
        />
        <ProjectCard
          name="Project Name"
          start="January 2099"
          end="June 2019"
          desc={desc}
          skills={["JavaScript", "HTML", "C++", "GitHub"]}
        />
        <ProjectCard
          name="Project Name"
          start="January 2099"
          end="June 2019"
          desc={desc}
          skills={["JavaScript", "HTML", "C++", "GitHub"]}
        />
        <ProjectCard
          name="Project Name"
          start="January 2099"
          end="June 2019"
          desc={desc}
          skills={["JavaScript", "HTML", "C++", "GitHub"]}
        />
      </div>
    </Section>
  );
}
