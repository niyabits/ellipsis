import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Link from "gatsby-link"
import { graphql } from "gatsby"
import "../components/global.css"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <div className="posts">
      <div className="container" style={{ paddingTop: 0 }}>
        <div className="post-heading blog-page-heading">
          <h1>Blog</h1>
        </div>
        {data.allMarkdownRemark.edges.map(post => (
          <div key={post.node.id}>
            <Link to={post.node.frontmatter.path}>
              <h3>{post.node.frontmatter.title}</h3>
            </Link>
            <small>
              Posted by{" "}
              <span class="author">{post.node.frontmatter.author}</span> on{" "}
              {post.node.frontmatter.date}
            </small>
            <br />
            <br />
            <span className="read-more">
              <Link to={post.node.frontmatter.path}>Read More</Link>
            </span>
            <br />
            <br />
            <hr />
          </div>
        ))}
      </div>
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            author
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

export default BlogPage
