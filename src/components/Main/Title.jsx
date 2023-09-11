import React from "react";

function Title({ title }) {
  return (
    <h1 className="mt-12 font-poppins font-bold tracking-wider text-title text-dark dark:text-light">
      {title.toUpperCase()}
    </h1>
  );
}

export default Title;
