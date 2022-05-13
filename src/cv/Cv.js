import React from "react";

class Cv extends React.Component {
  render() {
    return (
      <main id="cv--main">
        <h3>Personal Data</h3>
        <div>
          <ul className="cv--list">
            <li>Name</li>
            <li>Date of birth</li>
            <li>Place of birth</li>
            <li>E-Mail</li>
          </ul>
          <ul className="cv--list">
            <li>Tomislav Cosic</li>
            <li>19.09.1995</li>
            <li>Pula, Croatia</li>
            <li>cos.tomislav@gmail.com</li>
          </ul>
        </div>
        <h3>Education</h3>
        <div>
          <ul className="cv--list">
            <li>since 10/2014</li>
            <li>07/2014</li>
            <li>08/2008 - 07/2014</li>
          </ul>
          <ul className="cv--list">
            <li>Freie Universität Berlin, B.Sc. Computer Science</li>
            <li>Acquired high school degree</li>
            <li>
              Europäisches Gymnasium Bertha-von-Suttner (high school), Berlin
            </li>
          </ul>
        </div>
        <h3>Skills</h3>
        <div>
          <ul className="cv--list">
            <li>Programming languages</li>
            <li>Code editor of choice</li>
          </ul>
          <ul className="cv--list">
            <li>Javascript, ReactJS, CSS, HTML, Java, Python, C#</li>
            <li>Visual Studio Code</li>
          </ul>
        </div>
        <h3>Languages</h3>
        <div>
          <ul className="cv--list">
            <li>Fluent</li>
            <li>Enough to get by</li>
          </ul>
          <ul className="cv--list">
            <li>German, English</li>
            <li>Croatian</li>
          </ul>
        </div>
      </main>
    );
  }
}
export default Cv;
