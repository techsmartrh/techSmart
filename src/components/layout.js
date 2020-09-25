/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import styled, { createGlobalStyle } from 'styled-components'

import Header from "./header"
import Footer from "./footer"
// import "./layout.css"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  :root{
    --accent-color: #00A1E1;
    --grey0: #444;
    --grey1: #C4C4C4 ;
    --grey2: #DADADA ;
    --grey3: #E5E5E5 ;
    --grey4: #F6F6F6 ;
  }

  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  html {
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    background: var(--grey0);
    display: flex;
    justify-content: center;
    align-items: center;
    ${'' /* font-family: 'Roboto';
    font-size: 18px; */}
    flex-direction: column;
  }

  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    max-width: 1206px;
  }

  .headerLink {
    width: 80%;
    height: 100%;
    padding: 0;
    margin: 0;
    color: inherit;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: color .25s ease-in-out;
  }

  .headerLink:hover{
    color: var(--accent-color);
    transition: color .25s ease-in-out;
  }

  .activeLink *{
    background: var(--grey1);
    color: var(--accent-color);
  }

`

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
      <GlobalStyle />
      <Header />
      <MainElement>{children}</MainElement>
      <Footer />
    </>
  )
}

export default Layout
