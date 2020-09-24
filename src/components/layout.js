/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import styled from 'styled-components'

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const MainElement = styled.main`
  background: white;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <MainElement>{children}</MainElement>
      <Footer />
    </>
  )
}

export default Layout
