import React from "react";
import face from "./img/myface.jpg";

class About extends React.Component {
  render() {
    return (
      <main id="about--main">
        <img src={face} alt="mugshot" id="about--face" />
        <p>This is my about me page, WELCOME</p>
      </main>
    );
  }
}
export default About;
