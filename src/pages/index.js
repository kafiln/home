import { Link } from 'gatsby'
import React from 'react'
import { Image, Layout, SEO } from '../components/layout/'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/about/">Go to About me</Link>
  </Layout>
)

export default IndexPage
