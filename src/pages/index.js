import { Link } from 'gatsby'
import React from 'react'
import { Layout, SEO } from '../components/layout/'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/about/">Go to About me</Link>
  </Layout>
)

export default IndexPage
