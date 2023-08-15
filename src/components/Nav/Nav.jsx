import {
  BsFillMoonStarsFill,
  BsLinkedin,
  BsGithub,
  BsLink,
} from "react-icons/bs";

import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

function Nav() {
  return (
    <nav className="col-span-2 bg-primary-500">
      <div className="sticky top-0 text-white h-screen font-mono">
        <h1 className="text-5xl p-10 text-center">
          &lt;/Chris Chang&gt;
        </h1>
        <Router>
          <ul className="space-y-4 px-8">
            <li className="group">
              <div className="group-hover:bg-vsblack-500">
                <HashLink to="#about">
                  <div className="px-2 transition ease-in-out delay-50 group-hover:translate-x-4 group-hover:ease-in">
                    <span className="text-2xl">
                      &lt;/about&gt;
                    </span>
                  </div>
                </HashLink>
              </div>
            </li>
            <li className="group">
              <div className="group-hover:bg-vsblack-500">
                <HashLink to="#experience">
                  <div className="px-2 transition ease-in-out delay-50 group-hover:translate-x-4 group-hover:ease-in">
                    <span className="text-2xl">
                      &lt;/experience&gt;
                    </span>
                  </div>
                </HashLink>
              </div>
            </li>
            <li className="group">
              <div className="group-hover:bg-vsblack-500">
                <HashLink to="#projects">
                  <div className="px-2 transition ease-in-out delay-50 group-hover:translate-x-4 group-hover:ease-in">
                    <span className="text-2xl">
                      &lt;/projects&gt;
                    </span>
                  </div>
                </HashLink>
              </div>
            </li>
            <li className="group">
              <div className="group-hover:bg-vsblack-500">
                <HashLink to="#contact">
                  <div className="px-2 transition ease-in-out delay-50 group-hover:translate-x-4 group-hover:ease-in">
                    <span className="text-2xl">
                      &lt;/contact&gt;
                    </span>
                  </div>
                </HashLink>
              </div>
            </li>
          </ul>
        </Router>
        <div className="absolute bottom-0 left-0 w-full">
          <div className="flex justify-center p-4 m-10 space-x-8">
            <BsGithub size={30} />
            <BsLinkedin size={30} />
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
