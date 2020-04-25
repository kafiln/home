/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
`

const Header = styled.header`
  /* height: 100vh; */
`
const Main = styled.main`
  /* height: 100vh; */
`

const Aside = styled.aside``

const Footer = styled.footer``
const Content = styled.div``

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container className="bg-red-200 flex flex-col ">
      <Header className="px-4 bg-red-400">Kafil</Header>
      <Main className="px-4 bg-gray-300 flex-grow flex flex-col sm:flex-row container mx-auto">
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
