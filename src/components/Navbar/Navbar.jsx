import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  const li = "h-10 py-2 flex-initial w-36";
  return (
    <>
      <header className="bg-vs-black-500 top-0 z-10">
        <nav>
          <ul className="text-white">
            <div class="flex flex-auto justify-center flex-nowrap space-x-11 text-center">
              <li className={li}>
                <Link to="/">
                  <span>Home</span>
                </Link>
              </li>
              <li className={li}>
                <Link to="/about">
                  <span>About Me</span>
                </Link>
              </li>
              <li className={li}>
                <Link to="/contact">
                  <span>Home</span>
                </Link>
              </li>
              <li className={li}>
                <Link to="/experience">
                  <span>Experience</span>
                </Link>
              </li>
              <li className={li}>
                <Link to="/projects">
                  <span>Projects</span>
                </Link>
              </li>
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
