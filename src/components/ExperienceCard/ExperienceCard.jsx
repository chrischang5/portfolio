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
    <div className="group m-4 h-fit w-full bg-primary-200 dark:bg-primary-925 sm:bg-primary-100 sm:dark:bg-primary-950">
      <div className="sm:delay-50 flex flex-col p-4 sm:transition sm:duration-100 sm:ease-in-out sm:group-hover:-translate-y-0.5 sm:group-hover:scale-105 sm:group-hover:bg-primary-200 sm:dark:group-hover:bg-primary-925">
        <div className="grid grid-cols-1 grid-rows-3 items-center sm:grid-cols-2 sm:grid-rows-2">
          <h1 className="font-poppins text-subtitle font-bold text-dark dark:text-light sm:col-start-1">
            {company}
          </h1>
          <span className="order-2 col-start-1 text-start font-poppins text-date font-light text-dark dark:text-light sm:order-1 sm:col-start-2 sm:text-end">
            {start} - {end}
          </span>
          <h1 className="order-1 col-end-2 font-inter text-paragraph font-light text-dark dark:text-light sm:col-start-1">
            {role}
          </h1>
        </div>
        <ul className="list-outside list-disc px-12 py-6 font-inter marker:text-dark marker:dark:text-light">
          {bullets.map((text) => {
            return (
              <li key={text}>
                <span className="text-dark dark:text-light">{text}</span>
              </li>
            );
          })}
        </ul>
        <ul className="mr-1.5 mt-2 flex flex-wrap justify-start space-x-1 px-4">
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
    </div>
  );
}
export default ExperienceCard;
