import React from "react"

import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Link from "gatsby-link"

export default function Template({ data, pageContext }) {
  const post = data.markdownRemark
  const { next, prev } = pageContext

  return (
    <div
      style={{
        background:
          "linear-gradient(0deg, rgba(250,250,250,1) 0%, rgba(255,255,255,1) 100%)",
      }}
    >
      <Layout>
        <SEO title={`${post.frontmatter.title}`} />
        <div className="blog-template">
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
          <br />
          <hr />
          <div className="page-btns">
            {prev && (
              <div className="blog-post-prev-btn">
                <Link to={prev.frontmatter.path}>
                  <button>Previous</button>
                </Link>
              </div>
            )}
            {next && (
              <div className="blog-post-next-btn">
                <Link to={next.frontmatter.path}>
                  <button>Next</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </Layout>
    </div>
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
