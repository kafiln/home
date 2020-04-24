import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>My Name</h1>
    <h2>Welcome to My blog</h2>
    <p>Some really funny things I have to say about me</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
