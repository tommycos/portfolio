import React from "react";
import github from "./img/github.png";
import linkedin from "./img/linkedin.png";
import mail from "./img/mail.png";

class Navbar extends React.Component {
  render() {
    const { onClick, currentNav } = this.props;
    const clickStyle1 = currentNav === 0 ? "nav--about" : "";
    const clickStyle2 = currentNav === 1 ? "nav--cv" : "";
    const clickStyle3 = currentNav === 2 ? "nav--projects" : "";
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
        <div className="nav--socials">
          <a
            href="https://www.linkedin.com/in/tomislav-cosic-0033aa235/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="mailto:cos.tomislav@gmail.com">
            <img src={mail} alt="mail" id="nav--mail" />
          </a>
          <a
            href="https://github.com/tommycos"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="github" />
          </a>
        </div>
      </main>
    );
  }
}
export default Navbar;
