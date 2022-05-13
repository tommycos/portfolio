import React, { Component } from "react";
import gitdark from "./img/gitdark.png";
import gitlight from "./img/gitlight.png";
import linkedin from "./img/linkedin.png";
class Footer extends Component {
  render() {
    const { onClick, lightGit } = this.props;
    let github = gitdark;
    if (lightGit) {
      github = gitlight;
    }
    let date = new Date();
    let currentDate = date.getFullYear();

    return (
      <div className="footer--container">
        <p>
          <strong>2022-{currentDate}</strong>
          <br></br>
          <text className="link" onClick={() => onClick(0)}>
            Tomislav Cosic
          </text>
        </p>
        <p>
          <strong>Contact</strong>
          <br></br>
          <a href="mailto: cos.tomislav@gmail.com" className="link">
            cos.tomislav@gmail.com
          </a>
        </p>
        <a
          href="https://www.linkedin.com/in/tomislav-cosic-0033aa235/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="linkedin" />
        </a>

        <a href="https://github.com/tommycos" target="_blank" rel="noreferrer">
          <img src={github} alt="github" />
        </a>
      </div>
    );
  }
}
export default Footer;
