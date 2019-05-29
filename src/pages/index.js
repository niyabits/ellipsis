import React from "react"

import SEO from "../components/seo"
import "../components/style.css"
import Menu from "../components/menu"

import Link from "gatsby-link"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
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
    <div id="posts">
      <div className="container">
        <h2>Latest Posts</h2>
        {data.allMarkdownRemark.edges
          .map(post => (
            <div key={post.node.id}>
              <h4>{post.node.frontmatter.title}</h4>
              <small>
                Posted by {post.node.frontmatter.author} on{" "}
                {post.node.frontmatter.date}
              </small>
              <br />
              <br />
              <Link to={post.node.frontmatter.path}>Read More</Link>
              <br />
              <br />
              <hr />
            </div>
          ))
          .splice(0, 3)}
      </div>
    </div>
  </div>
)

export const pageQuery = graphql`
  query HomePageLinksQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            author
            date
          }
        }
      }
    }
  }
`

export default IndexPage
