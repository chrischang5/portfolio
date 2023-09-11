import React from "react";

function ExperienceCard({
  role,
  company,
  start,
  end,
  bullets = [],
  skills = [],
}) {
  return (
    <div className="w-full h-fit m-4 bg-primary-100 dark:bg-primary-950 group">
      <div className="p-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-925 transition ease-in-out delay-50 group-hover:-translate-y-0.5 group-hover:scale-105 duration-100">
        <div className="p-4 flex flex-nowrap justify-between items-center h-12">
          <h1 className="font-poppins font-bold text-subtitle text-dark dark:text-light">
            {company}
          </h1>
          <span className="font-poppins font-light text-date text-dark dark:text-light">
            {start} - {end}
          </span>
        </div>
        <h1 className="pt-2 px-4 font-inter font-light text-paragraph text-dark dark:text-light">
          {role}
        </h1>
        <ul className="font-inter list-disc marker:text-dark marker:dark:text-light list-outside py-6 px-12">
          {bullets.map((text) => {
            return (
              <li key={text}>
                <span className="text-dark dark:text-light">{text}</span>
              </li>
            );
          })}
        </ul>
        <ul className="flex flex-wrap justify-start mr-1.5 mt-2 space-x-1 px-4">
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
    </div>
  );
}
export default ExperienceCard;
