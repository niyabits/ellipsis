import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Home" />
        <div className="home">
          <div className="home-branding">
            <img
              src={require("../../content/assets/logo.png")}
              alt="ellipsis logo"
              width="284px"
            />
            <p>
              Because thoughts may pause <br />
              but never end ...
            </p>
            <a href="#posts">
              <button>posts</button>
            </a>
          </div>
        </div>
        <div className="span" id="posts" />
        <div className="posts" style={{ padding: "0 20px" }}>
          <div className="container">
            <div className="post-heading">
              <h2>Latest Posts</h2>
              <span className="post-heading-accent">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
            </div>
            {data.allMarkdownRemark.edges
              .map(post => (
                <div key={post.node.id}>
                  <Link to={post.node.frontmatter.path}>
                    <h3>{post.node.frontmatter.title}</h3>
                  </Link>
                  <small>
                    Posted by{" "}
                    <span className="author">
                      {post.node.frontmatter.author}
                    </span>{" "}
                    on {post.node.frontmatter.date}
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
              ))
              .splice(0, 3)}
          </div>
        </div>
        <div id="footer">
          <Footer />
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
