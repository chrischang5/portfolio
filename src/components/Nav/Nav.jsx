import {
  BsFillMoonStarsFill,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import {React, useState} from "react";

import { IconContext } from "react-icons";
import { Link } from "./Link";
import { Namecard } from "./Namecard";
import { BrowserRouter as Router } from "react-router-dom";

function Nav(props) {
  return (
    <nav className="flex flex-row sticky top-0 z-50 h-16 items-center justify-around bg-accent-950">
      <Namecard />
      <div id="router" className="basis-1/2">
        <Router>
          <div className="flex flex-row space-x-2 justify-around">
            <Link route="about" />
            <Link route="experience" />
            <Link route="projects" />
            <Link route="contact" />
          </div>
        </Router>
      </div>
      <div
        id="icons"
        className="basis-1/4 flex flex-row justify-center items-center space-x-10"
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
          {/* <a
            href="https://github.com/chrischang5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub size={25} />
          </a>
          <a
            href="https://www.linkedin.com/in/chrischang150/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin size={25} />
          </a> */}
        </IconContext.Provider>
      </div>
    </nav>
  );
}
export default Nav;
