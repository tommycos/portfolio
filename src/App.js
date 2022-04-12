import React, { useState } from "react";
import Navbar from "./navbar/Navbar";
import About from "./about/About";
import Cv from "./cv/Cv";
import Projects from "./projects/Projects";
import ColourBox from "./navbar/ColourBox";
import data from "./navbar/data/colourData";
//import { CSSTransition } from "react-transition-group";

export default function App() {
  const [navClick, setNavClick] = useState(0);
  const [isColour, setIsColour] = useState(false);
  const [needsBlack, setNeedsBlack] = useState(false);

  const boxCreate = data.map((data) => {
    return (
      <ColourBox
        key={data.id}
        isColour={isColour}
        {...data}
        whatTheme={() => determineTheme(data.needsBlack)}
      />
    );
  });

  function changeNav(click) {
    setNavClick((prevNavClick) => (prevNavClick = click));
  }

  function toggleIsColour() {
    setIsColour((prevIsColour) => !prevIsColour);
  }

  function determineTheme(needs) {
    setNeedsBlack((prevNeed) => (prevNeed = needs));
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
    </main>
  );
}
/* <CSSTransition
        in={isColour}
        timeout={300}
        classNames="colour-transition"
        unmountOnExit
      >      </CSSTransition>*/
