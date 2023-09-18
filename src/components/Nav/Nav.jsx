import { React, useState } from "react";

import { BsFillMoonStarsFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Link } from "./Link";
import { Namecard } from "./Namecard";
import { BrowserRouter as Router } from "react-router-dom";

function Nav(props) {
  return (
    <nav className="sticky top-0 z-50 flex h-16 flex-row items-center justify-around bg-accent-950">
      <Namecard />
      <div id="router" className="basis-1/2">
        <Router>
          <div className="flex flex-row justify-around space-x-2">
            <Link route="about" />
            <Link route="experience" />
            <Link route="projects" />
            <Link route="contact" />
          </div>
        </Router>
      </div>
      <div
        id="icons"
        className="flex basis-1/4 flex-row items-center justify-center space-x-10"
      >
        <IconContext.Provider
          value={{
            color: "white",
            className: "global-class-name",
          }}
        >
          <button onClick={props.toggleDarkMode}>
            <BsFillMoonStarsFill size={25} />
          </button>
        </IconContext.Provider>
      </div>
    </nav>
  );
}
export default Nav;
