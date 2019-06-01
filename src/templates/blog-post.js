import React from "react"

import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Link from "gatsby-link"

export default function Template({ data, pageContext }) {
  const post = data.markdownRemark
  const { next, prev } = pageContext
  return (
    <Layout>
      <SEO title={`${post.frontmatter.title}`} />
      <div className="blog-template">
        <br />
        <hr />
        <br />
        <h1 className="blog-title">{post.frontmatter.title}</h1>
        <small className="blog-info">
          Posted by{" "}
          <span className="blog-author">{post.frontmatter.author}</span> on{" "}
          <span className="date">{post.frontmatter.date}</span>
        </small>
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
          className="blog-content"
        />
        <br />
        <hr />
        <br />
        <div className="page-btns">
          <div className="blog-post-prev-btn">
            {prev && (
              <button>
                <Link to={prev.frontmatter.path}>
                  ← &nbsp;&nbsp;Previous Post
                </Link>{" "}
              </button>
            )}
          </div>
          <div className="blog-post-next-btn">
            {next && (
              <button>
                <Link to={next.frontmatter.path}>
                  Next Post &nbsp;&nbsp;→ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </Link>
              </button>
            )}
          </div>
        </div>
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
