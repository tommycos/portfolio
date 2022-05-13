import React from "react";
import face from "./img/myface.jpg";

class About extends React.Component {
  render() {
    return (
      <main id="about--main">
        <img src={face} alt="mugshot" id="about--face" />
        <section>
          <h2 className="about--lead">Hello, my name is Tomislav Cosic</h2>
          <h2 className="about--lead">I strive to become a web developer.</h2>
          <p>
            My interests lie not only in front-end but also in back-end
            development so as to one day be considered a full stack developer.
          </p>
        </section>
      </main>
    );
  }
}
export default About;
