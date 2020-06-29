import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Header from './header'

const Container = styled.div`
  height: 100vh;
`

const Main = styled.main`
  /* height: 100vh; */
`

const Aside = styled.aside``

const Footer = styled.footer``
const Content = styled.div``

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query siteData {
      imageSharp(fluid: { originalName: { eq: "logo.png" } }) {
        fixed {
          src
        }
      }
      site {
        siteMetadata {
          title
          author
          description
          socials {
            name
            url
          }
        }
      }
    }
  `)

  return (
    <Container className="bg-red-200 flex flex-col ">
      <Header
        logo={data.imageSharp.fixed.src}
        title={data.site.siteMetadata.title}
      ></Header>
      <Main className="px-4 bg-gray-300 flex-grow flex flex-col sm:flex-row">
        <Aside className="bg-teal-300 h-40 sm:w-56 sm:h-full"></Aside>
        <Content className="bg-teal-900 flex-grow">{children}</Content>
      </Main>
      <Footer className=" px-4 bg-red-400">Some footer informations</Footer>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
