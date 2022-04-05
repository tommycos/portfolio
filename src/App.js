import React, { useState } from "react";
import Navbar from "./navbar/Navbar";
import About from "./about/About";
import Cv from "./cv/Cv";
import Projects from "./projects/Projects";

export default function App() {
  const [navClick, setNavClick] = useState(0);

  function changeNav(click) {
    setNavClick((prevNavClick) => (prevNavClick = click));
  }

  return (
    <main>
      <Navbar onClick={changeNav} currentNav={navClick} />
      {navClick === 0 && <About />}
      {navClick === 1 && <Cv />}
      {navClick === 2 && <Projects />}
    </main>
  );
}
