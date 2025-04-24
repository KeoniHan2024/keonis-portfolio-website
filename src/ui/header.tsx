import "../css/header.css";
import "../css/global.css";
// import { useRef, useState } from "react";

function Header() {
//   const dropDownRef = useRef<HTMLElement>(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const dropdownClick = () => {
//     setIsVisible(!isVisible);
//   };
  return (
    <>
      <div className="header">
        <div className="left-section">
          <p className="logo-text">Keoni Han</p>
        </div>
        <div className="middle-section">
          <a href="/keonis-portfolio-website/about">
            <p className="header-text">About me</p>
          </a>
          <p className="header-text">Projects</p>
          <a href="/keonis-portfolio-website/social-media">
            <p className="header-text">Social Media</p>
          </a>
        </div>
        <div className="right-section">
          <p className="header-text">Contact Me</p>
        </div>
      </div>

      {/* <div className="header-mobile">
        <h1>Keoni Han</h1>
        <button
          className="dropdown-button"
          id="dropdownToggle"
          onClick={dropdownClick}
        >
          <img
          className="menu-img"
            alt="svgImg"
            src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MHB4IiBoZWlnaHQ9IjUwcHgiPjxwYXRoIGQ9Ik0gMCA5IEwgMCAxMSBMIDUwIDExIEwgNTAgOSBaIE0gMCAyNCBMIDAgMjYgTCA1MCAyNiBMIDUwIDI0IFogTSAwIDM5IEwgMCA0MSBMIDUwIDQxIEwgNTAgMzkgWiIvPjwvc3ZnPg=="
          />
        </button>
      </div>

      {isVisible && (
        <nav id="dropdownMenu" className="navBar" ref={dropDownRef}>
          <a href="#">Home</a>
          <a href="#">Exercises</a>
          <a href="#">Progress</a>
        </nav>
      )} */}
    </>
  );
}

export default Header;
