import Nav from './Nav'
import Logo from './ImageComponents/Logo'
import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookSquare,
  faTwitterSquare
} from '@fortawesome/free-brands-svg-icons'
import { globalHistory as history } from '@reach/router'

const HeaderElement = styled.header`
  width: 100%;
  margin: 0;
  padding: 0;
`

const HeaderTopBar = styled.div`
  width: 100%;
  height: 50px;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  background: var(--grey4);

  & > * {
    height: 100%;
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    clip-path: polygon(50px 0, 100% 0%, 200px 100%, 0% 100%);
  }

  & > div:nth-child(1) {
    z-index: 10;
    background: var(--grey3);
  }

  & > div:nth-child(2) {
    margin: 0 -50px;
    z-index: 20;
    background: var(--grey2);
    color: #00A1E1;
  }

  & > div:nth-child(3) {
    clip-path: polygon(50px 0, 100% 0%, 100% 100%, 0% 100%);
    background: var(--grey1);
  }

  @media(max-width: 710px){
        flex-direction: column;
        height: auto;
        align-items: center;
        clip-path: none;
        & > div {
          height: auto;
          width: 100%;
          clip-path: none;
        }
        & > div:nth-child(3) {
          clip-path: none;
          background: var(--grey1);
        }
  }
`

const HeaderBody = styled.div`
  background: white;
  display: flex;
  justify-content: space-between;
  @media(max-width: 710px){
        flex-direction: column;
        align-items: center;
    }
`

const HeaderLogo = styled.div`
  width: 400px;
  padding: 20px;
`

const HeaderButtons = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;

  & > a > button {
    margin: 10px;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 40px;
    border: none;
    background: var(--accent-color);
    color: white;
  }
`

const Header = () => {
  const currentPath = history.location.pathname.replace('/','')

  return (
    <HeaderElement>
      <HeaderTopBar>
        <div>
          <a href="https://www.facebook.com/gotechsmart">
            <FontAwesomeIcon 
              color="#C4C4C4" 
              style={{'margin':'10px'}} 
              transform='down-1' 
              icon={faFacebookSquare} 
              size="2x" />
            </a>
          <a href="https://twitter.com/TechSmart6">
            <FontAwesomeIcon 
              color="#C4C4C4" 
              style={{'margin':'10px'}} 
              transform='down-1' 
              icon={faTwitterSquare} 
              size="2x" />
            </a>
        </div>
        <div>(912) 756 - 8324</div>
        <div>Mon-Fri 8am -5p</div>
      </HeaderTopBar>
      <HeaderBody>
        <HeaderLogo>
          <Link to='/'><Logo /></Link>
        </HeaderLogo>
          <HeaderButtons>
            <a href="http://www.gotechsmart.com/repairstatus/"><button>Check Status</button></a>
            <a href="http://www.gotechsmart.com/servicerequests/"><button>Check in Your Machine</button></a>
          </HeaderButtons>
      </HeaderBody>
      <Nav current={currentPath} />
    </HeaderElement>
  )
}

export default Header
