import React from "react";
import face from "./img/myface.jpg";

export default function About() {
  return (
    <main id="about--main">
      <img src={face} alt="mugshot" id="about--face" />
      <p>This is my about me page, WELCOME</p>
    </main>
  );
}
