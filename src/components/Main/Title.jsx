import React from "react";

function Title({ title }) {
  return (
    <h1 className="mb-8 mt-12 text-ellipsis text-center font-poppins text-title font-bold tracking-wider text-dark dark:text-light sm:text-left">
      {title.toUpperCase()}
    </h1>
  );
}

export default Title;
