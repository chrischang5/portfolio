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
    <div className="flex flex-col light:bg-primary-100 dark:bg-primary-950 p-4 hover:bg-primary-200 dark:hover:bg-primary-925 transition ease-in-out delay-50 hover:-translate-y-1.5 group-hover:scale-105 duration-100">
      {/* <img src="./Untitled.png" className="h-auto max-w-full" alt="hi" /> */}
      {/* <div className="w-full h-[200px] bg-project-preview"></div> */}
      <div className="flex flex-nowrap justify-between items-center space-x-3">
        <h1 className="font-poppins font-bold text-subtitle text-dark dark:text-light">
          {name}
        </h1>
        <span className="font-poppins font-light text-date text-dark dark:text-light">
          {start} - {end}
        </span>
      </div>
      <h1 className="pt-2 font-inter font-light text-paragraph text-dark dark:text-light">
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
              className="transition ease-in-out hover:-translate-y-1.5 hover:scale-105 duration-100 flex items-center rounded-full mx-1 my-1 px-1.5 py-1 bg-accent-950"
              key={skill}
            >
              <span className="font-inter text-pill align-middle text-center text-accent-100 flex-grow">
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
