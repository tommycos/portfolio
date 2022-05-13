import React, { useState } from "react";
import Navbar from "./navbar/Navbar";
import About from "./about/About";
import Cv from "./cv/Cv";
import Projects from "./projects/Projects";
import ColourBox from "./navbar/ColourBox";
import Footer from "./footer/Footer";
import data from "./navbar/data/colourData";
//import { CSSTransition } from "react-transition-group";

export default function App() {
  const [navClick, setNavClick] = useState(0);
  const [isColour, setIsColour] = useState(false);
  const [needsBlack, setNeedsBlack] = useState(false);
  const [lightGit, setLightGit] = useState(false);

  const boxCreate = data.map((data) => {
    return (
      <ColourBox
        key={data.id}
        isColour={isColour}
        {...data}
        whatTheme={() => determineTheme(data.needsBlack, data.lightGit)}
      />
    );
  });

  function changeNav(click) {
    setNavClick((prevNavClick) => (prevNavClick = click));
  }

  function toggleIsColour() {
    setIsColour((prevIsColour) => !prevIsColour);
  }

  function determineTheme(needs, git) {
    setNeedsBlack((prevNeed) => (prevNeed = needs));
    setLightGit((prevGit) => (prevGit = git));
  }
  let dropdown = "dropdown";
  if (isColour) {
    dropdown = "dropdown--active";
  }
  return (
    <main>
      <div id={dropdown}>{boxCreate}</div>

      <Navbar
        onClick={changeNav}
        currentNav={navClick}
        toggleIsColour={toggleIsColour}
        needsBlack={needsBlack}
      />
      {navClick === 0 && <About />}
      {navClick === 1 && <Cv />}
      {navClick === 2 && <Projects />}
      <Footer onClick={changeNav} lightGit={lightGit} />
    </main>
  );
}
