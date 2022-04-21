import React from "react";

import palettebl from "./img/paletteblack.png";
import palettewh from "./img/palettewhite.png";

class Navbar extends React.Component {
  render() {
    const { onClick, currentNav, toggleIsColour, needsBlack } = this.props;
    const clickStyle1 = currentNav === 0 ? "nav--about" : "";
    const clickStyle2 = currentNav === 1 ? "nav--cv" : "";
    const clickStyle3 = currentNav === 2 ? "nav--projects" : "";

    let palette = palettewh;
    if (needsBlack) {
      palette = palettebl;
    }
    return (
      <main className="navbar">
        <div>
          <nav id={clickStyle1} onClick={() => onClick(0)}>
            <h2>ABOUT ME</h2>
          </nav>
          <nav id={clickStyle2} onClick={() => onClick(1)}>
            <h2>CV</h2>
          </nav>
          <nav id={clickStyle3} onClick={() => onClick(2)}>
            <h2>PROJECTS</h2>
          </nav>
        </div>
        <section className="nav--socials">
          <img
            src={palette}
            alt="paletteicon"
            id="nav--palette"
            onClick={toggleIsColour}
          />
        </section>
      </main>
    );
  }
}
export default Navbar;
