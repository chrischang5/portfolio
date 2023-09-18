import InlineIcon from "../Icon/InlineIcon";
import React from "react";

function ProjectCard({
  name,
  subtitle = "",
  start,
  end,
  link = "",
  link_prompt = "Check it out!",
  desc = "",
  skills = [],
}) {
  return (
    <div className="light:bg-primary-100 delay-50 flex h-auto flex-col p-4 transition duration-100 ease-in-out hover:-translate-y-1.5 hover:bg-primary-200 group-hover:scale-105 dark:bg-primary-950 dark:hover:bg-primary-925">
      {/* <img src="./Untitled.png" className="h-auto max-w-full" alt="hi" /> */}
      {/* <div className="w-full h-[200px] bg-project-preview"></div> */}
      <div className="flex flex-col flex-nowrap justify-between space-x-3 md:flex-row md:items-center">
        <h1 className="font-poppins text-subtitle font-bold text-dark dark:text-light">
          {name}
        </h1>
        <span className="font-poppins text-date font-light text-dark dark:text-light">
          {start} - {end}
        </span>
      </div>
      <h1 className="pt-2 font-inter text-paragraph font-light text-dark dark:text-light">
        {subtitle}
      </h1>
      {link ? (
        <a
          className="text-link flex items-center"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <InlineIcon />
          <p className="text-pill">{link_prompt}</p>
        </a>
      ) : (
        <></>
      )}
      <div className="py-3 text-pill text-dark dark:text-light">{desc}</div>
      <ul className="flex flex-wrap justify-start space-x-1">
        {skills.map((skill) => {
          return (
            <li
              className="mx-1 my-1 flex items-center rounded-full bg-accent-950 px-1.5 py-1 transition duration-100 ease-in-out hover:-translate-y-1.5 hover:scale-105"
              key={skill}
            >
              <span className="flex-grow text-center align-middle font-inter text-pill text-accent-100">
                {skill}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default ProjectCard;
