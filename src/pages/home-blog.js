import React from "react"

import Link from "gatsby-link"
import { graphql } from "gatsby"

const HomeBlog = ({ data }) => (
  <div>
    <h1>Latest Posts</h1>
    {data.allMarkdownRemark.edges
      .map(post => (
        <div key={post.node.id}>
          <h3>{post.node.frontmatter.title}</h3>
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
      .splice(0, 5)}
  </div>
)

export const pageQuery = graphql`
  query HomeLinksQuery {
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

export default HomeBlog
