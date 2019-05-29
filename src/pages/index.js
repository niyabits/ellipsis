import React from "react"

import SEO from "../components/seo"
import "../components/style.css"
import Menu from "../components/menu"

const IndexPage = () => (
  <div>
    <Menu />
    <SEO title="Home" />
    <div className="home">
      <div className="home-branding">
        <img
          src={require("../images/logo.jpg")}
          alt="ellipsis logo"
          width="350px"
        />
        <p>
          Because thought may pause <br />
          but never end ...
        </p>
        <a href="#posts">
          <button>posts</button>
        </a>
      </div>
    </div>
  </div>
)

export default IndexPage
