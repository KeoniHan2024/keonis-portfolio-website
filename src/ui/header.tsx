import "../css/header.css";
import "../css/global.css";
import { useRef, useState } from "react";

function Header() {
  const dropDownRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const dropdownClick = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <div className="header">
        <div className="left-section">
          <a href="/">
            <p className="logo-text">Keoni Han</p>
          </a>
        </div>
        <div className="middle-section">
          {/* <a href="/about">
            <p className="header-text">Education</p>
          </a> */}
          <a href="/projects">
            <p className="header-text">Projects</p>
          </a>
          {/* <a href="/social-media">
            <p className="header-text">Social Media</p>
          </a> */}
        </div>
        <div className="right-section">
          <a href="mailto:keonihan@gmail.com">
            <p className="header-text">Contact Me</p>
          </a>
        </div>
      </div>

      <div className="header-mobile">
        <a href="#">
          <p className="logo-text">Keoni</p>
        </a>  
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
        <nav id="dropdownMenu" className={`navBar  ${isVisible ? 'visible' : ''}`} ref={dropDownRef}>
          {/* <a href="/"> <p className="header-text">About me</p></a> */}
          <a href="/projects"> <p className="header-text">Projects</p></a>
          <a href="mailto:keonihan@gmail.com"> <p className="header-text">Contact Me</p></a>
        </nav>
    </>
  );
}

export default Header;
