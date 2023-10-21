import { React, useState } from "react";

import { BsFillMoonStarsFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Link } from "./Link";
import { Namecard } from "./Namecard";
import { BrowserRouter as Router } from "react-router-dom";

function Nav(props) {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  return (
    <>
      <nav className="sticky top-0 z-50 flex h-16 flex-row items-center justify-between bg-accent-950 px-6">
        <Namecard />

        <div
          className="space-y-2 bg-accent-400"
          onClick={() => {
            console.log("hello world!");
            setIsNavOpen((prev) => !prev);
          }}
        >
          <span className="block h-1 w-8 bg-primary-100"></span>
          <span className="block h-1 w-8 bg-primary-100"></span>
          <span className="block h-1 w-8 bg-primary-100"></span>
        </div>

        {/* <div id="router" className="basis-1/2">
        <Router>
          <div className="flex justify-around space-x-2 sm:flex-row">
            <Link route="about" />
            <Link route="experience" />
            <Link route="projects" />
            <Link route="contact" />
          </div>
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
      {isNavOpen ? <div className="sticky">
        <Router>
          <div className="flex-row">
            <Link route="about" />
            <Link route="experience" />
            <Link route="projects" />
            <Link route="contact" />
          </div>
        </Router>
      </div> : null}
    </>
  );
}
export default Nav;
