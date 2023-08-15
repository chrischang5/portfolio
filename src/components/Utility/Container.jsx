import React from "react";

function Container({ children }) {
  return (
    <div className="container h-screen mx-auto text-left lg:px-40">
      {children}
    </div>
  );
}

export default Container;
