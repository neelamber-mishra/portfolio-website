import React from "react";

function Header({ toggleSidebar }) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="#portfolio">Logo</a>
          </li>
          <li className="hideonmobile">
            <a href="#home">Home</a>
          </li>
          <li className="hideonmobile">
            <a href="#about">About</a>
          </li>
          <li className="hideonmobile">
            <a href="#projects">Projects</a>
          </li>
          <li className="hideonmobile">
            <a href="#contact">Contact</a>
          </li>
          <li className="showmobile">
            <a onClick={toggleSidebar} href="#" style={{ cursor: "pointer" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="26px"
                viewBox="0 -960 960 960"
                width="26px"
                fill="black" // Use "black" or "#000000"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
