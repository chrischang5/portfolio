import { React, useState } from "react";

import { BsFillMoonStarsFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Link } from "./Link";
import { Namecard } from "./Namecard";
import { BrowserRouter as Router } from "react-router-dom";

function Nav(props) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav className="fixed z-20 flex h-16 w-full items-center justify-between lg:justify-center bg-accent-950 px-10">
      {/* <Namecard /> */}

      {/* hamburger icon */}
      <button className="focus:outline-non inline-flex h-10 w-10 items-center justify-center rounded-md border outline-none lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <div className="mt-10 hidden lg:mt-0 lg:inline-flex lg:w-auto ">
        <div id="router" className="flex basis-1/2 text-light lg:flex-row">
          <a href="#" className="w-32 flex-initial">
            aboot me!
          </a>
          <a href="#" className="w-32 flex-initial">
            hello world
          </a>
          <a href="#" className="w-32 flex-initial">
            hello world
          </a>
          <a href="#" className="w-32 flex-initial">
            hello world
          </a>
        </div>
      </div>
      {/* <div id="router" className="basis-1/2">
          <Router>
            <Link route="about" />
            <Link route="experience" />
            <Link route="projects" />
            <Link route="contact" />
          </Router>
        </div> */}
      <IconContext.Provider
        id="icons"
        value={{
          color: "white",
          className: "global-class-name",
        }}
      >
        <button onClick={props.toggleDarkMode}>
          <BsFillMoonStarsFill size={25} />
        </button>
      </IconContext.Provider>
    </nav>
  );
}
export default Nav;
