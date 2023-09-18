import { React, useState } from "react";

import { Body } from "./Body";
import Nav from "../Nav/Nav";

function Main() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((current) => !current);
  };
  return (
    <main className={`${darkMode ? "dark" : ""}`}>
      <Nav toggleDarkMode={toggleDarkMode} />
      <Body darkMode={darkMode} />
    </main>
  );
}

export default Main;
