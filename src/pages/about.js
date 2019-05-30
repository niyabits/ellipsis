import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/style.css"

const about = () => (
  <Layout>
    <SEO title="About" />
    <div className="about">
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque neque cum
        ipsum eius nihil provident explicabo laborum enim recusandae dolorem.{" "}
        <br />
        <br />
        Ad consequatur laudantium, odio veritatis in quam molestias doloremque,
        id tenetur saepe illo iure hic repellat fugiat eaque ex optio nisi
        voluptatum, voluptas quisquam commodi consequuntur vel.
        <br />
        <br />
        Id, nulla alias officiis consequatur eligendi deserunt asperiores
        mollitia iusto possimus fuga ducimus ipsa veritatis soluta quaerat eos
        repellat, adipisci fugit labore temporibus eius. Voluptates praesentium
        dolorum quis hic nemo numquam iste dignissimos!
      </p>
    </div>
  </Layout>
)

export default about
