import { React, useState } from "react";

import { BsFillMoonStarsFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Link } from "./Link";
import { Namecard } from "./Namecard";
import { BrowserRouter as Router } from "react-router-dom";

const routes = ["about", "experience", "projects", "contact"];

function Nav(props) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const closeNav = () => setIsNavOpen(false);

  return (
    <Router>
      <nav className="fixed top-0 z-20 flex h-16 w-full items-center justify-between bg-accent-950 px-6 md:px-10">
        {/* Hamburger: mobile only */}
        <button
          className="order-1 inline-flex h-10 w-10 items-center justify-center rounded-md border border-light outline-none focus:outline-none md:hidden"
          aria-label={isNavOpen ? "Close menu" : "Open menu"}
          aria-expanded={isNavOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsNavOpen((open) => !open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="h-6 w-6"
          >
            {isNavOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>

        {/* Namecard: centred on mobile, left on desktop */}
        <div className="order-2 flex justify-center md:order-1 md:basis-1/4">
          <Namecard />
        </div>

        {/* Desktop links */}
        <div
          id="router"
          className="order-3 hidden flex-row justify-around space-x-2 md:order-2 md:flex md:basis-1/2"
        >
          {routes.map((route) => (
            <Link key={route} route={route} />
          ))}
        </div>

        {/* Dark mode toggle */}
        <div
          id="icons"
          className="order-4 flex items-center justify-center md:basis-1/4"
        >
          <IconContext.Provider
            value={{
              color: "white",
              className: "global-class-name",
            }}
          >
            <button onClick={props.toggleDarkMode} aria-label="Toggle dark mode">
              <BsFillMoonStarsFill size={25} />
            </button>
          </IconContext.Provider>
        </div>

        {/* Mobile dropdown */}
        {isNavOpen && (
          <div
            id="mobile-menu"
            className="absolute left-0 top-16 flex w-full flex-col items-center space-y-2 bg-accent-950 pb-4 md:hidden"
          >
            {routes.map((route) => (
              <Link key={route} route={route} onClick={closeNav} />
            ))}
          </div>
        )}
      </nav>
    </Router>
  );
}
export default Nav;
