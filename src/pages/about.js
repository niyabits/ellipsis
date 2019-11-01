import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/global.css"

const about = () => (
  <Layout>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 768,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
        marginTop: "120px",
      }}
    >
      <SEO title="About" />
      <div className="about">
        <div>
          <h1>About</h1>
          <p>
            Ellipsis ? <br />
            A literary venture for students to live their passion. <br />
            <br />
            Why Ellipsis ? <br />
            Because thoughts may pause but never end...
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default about
