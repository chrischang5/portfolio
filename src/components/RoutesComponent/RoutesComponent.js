import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";

export function RoutesComponent() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route
        exact
        path="/experience"
        element={<Experience />}
      ></Route>
      <Route
        exact
        path="/about"
        element={<About />}
      ></Route>
      <Route
        exact
        path="/contact"
        element={<Contact />}
      ></Route>
      <Route
        exact
        path="/projects"
        element={<Projects />}
      ></Route>
    </Routes>
  );
}
