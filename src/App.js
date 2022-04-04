import React, { useState } from "react";
import Navbar from "./navbar/Navbar";

export default function App() {
  const [navClick, setNavClick] = useState(0);

  function changeNav(click) {
    setNavClick((prevNavClick) => click);
  }

  return (
    <main>
      <Navbar onClick={changeNav} currentNav={navClick} />
      {navClick === 0 && <p>This is my ABOUT ME</p>}
      {navClick === 1 && <p>This is my CV</p>}
      {navClick === 2 && <p>These are my Projects</p>}
    </main>
  );
}