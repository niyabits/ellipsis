import React from "react"
import "../components/style.css"

const footer = () => (
  <footer
    style={{
      marginTop: "192px",
      marginBottom: "128px",
      display: "flex",
      justifyContent: "space-between",
    }}
  >
    <div className="branding">
      © {new Date().getFullYear()},{` `}
      Ellipsis &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
      <a
        href="https://www.instagram.com/__ellipsis_/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={require("../images/instagram.svg")}
          alt="instagram"
          width="22px"
          style={{
            position: "absolute",
            marginTop: "4px",
          }}
        />
      </a>
    </div>
    <div className="email">
      {" "}
      <a
        href="mailto:word.ellipsis@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        word.ellipsis@gmail.com
      </a>
    </div>
  </footer>
)

export default footer
