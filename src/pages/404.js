import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Link from "gatsby-link"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Not Found :/</h1>
    <p>You just hit a page that doesn&#39;t exist... the sadness.</p>
    <br />
    <br />
    <Link to="/">Go to Home</Link>
  </Layout>
)

export default NotFoundPage
