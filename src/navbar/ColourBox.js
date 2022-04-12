import React from "react";

class ColourBox extends React.Component {
  render() {
    const {
      isColour,
      mainBg,
      themeName,
      mainTheme,
      altTheme,
      mainFont,
      altFont,
      whatTheme,
    } = this.props;

    const colourised = {
      visibility: !isColour ? "hidden" : "",
      transition: !isColour ? "visibility 350ms ease-out" : "",
      backgroundColor: mainBg,
      color: mainFont,
    };

    function changeTheme() {
      document.documentElement.style.setProperty("--main-bg-colour", mainBg);
      document.documentElement.style.setProperty(
        "--main-theme-colour",
        mainTheme
      );
      document.documentElement.style.setProperty(
        "--alt-theme-colour",
        altTheme
      );
      document.documentElement.style.setProperty(
        "--main-font-colour",
        mainFont
      );
      document.documentElement.style.setProperty("--alt-font-colour", altFont);
      whatTheme();
    }
    return (
      <div className="box--active" style={colourised} onClick={changeTheme}>
        <span>{themeName}</span>
        <span>Palette</span>
      </div>
    );
  }
}
export default ColourBox;
