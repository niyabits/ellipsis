import React from "react"

import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Link from "gatsby-link"

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO title={`${post.frontmatter.title}`} />
      <div className="blog-template">
        <Link to="/blog">Back</Link>
        <br />
        <br />
        <hr />
        <h1 className="blog-title">{post.frontmatter.title}</h1>
        <h4 className="blog-info">
          Posted by{" "}
          <span className="blog-author">{post.frontmatter.author}</span> on{" "}
          {post.frontmatter.date}
        </h4>
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
          className="blog-content"
        />
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        author
        path
      }
    }
  }
`
