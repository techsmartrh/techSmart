import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faApple,
  faWindows,
  faCcVisa,
  faCcMastercard,
  faCcDiscover,
  faCcAmex,
} from '@fortawesome/free-brands-svg-icons'

import AwardsImage from './ImageComponents/AwardsImage'

const FooterElement = styled.footer`
  width: 100%;
  height: 150px;
  margin: 0;
  padding: 0;
  background: black;
  display: flex;
  justify-content: space-between;
  color: white;

  @media (max-width: 760px){
    height: auto;
    flex-direction: column;
    div:nth-child(2) {
      order: 3;
    }
  }
`

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 30px;
  justify-content: ${props => props.position === 'center' ? 'flex-end': 'space-around'};
  align-items: ${props => props.position !== 'center' ? 'inherit' : 'center'};

  @media (max-width: 760px){
    align-items: center;

    
  }
`

const Footer = ({location, data}) => {
  console.log(data)
  return (
    <FooterElement>
      <FooterContainer position="left">
        <div>
          2465 Highway 17<br />
          Richmond Hill, GA
        </div>
        <div>info@gotechsmart.com</div>
        <div>
          <FontAwesomeIcon style={{'marginRight':'5px'}} icon={faCcVisa} size="1x" />
          <FontAwesomeIcon style={{'marginRight':'5px'}} icon={faCcMastercard} size="1x" />
          <FontAwesomeIcon style={{'marginRight':'5px'}} icon={faCcAmex} size="1x" />
          <FontAwesomeIcon style={{'marginRight':'5px'}} icon={faCcDiscover} size="1x" />
        </div>
      </FooterContainer>
      <FooterContainer position="center">
        <AwardsImage width='200px' height='200px'/>
        <div id="footerCopyright">&copy; 2020, Tech Smart</div>
      </FooterContainer>
      <FooterContainer position="right">
        <a style={{'color':'white','textDecoration':'none'}} href=""><FontAwesomeIcon color='grey' transform='down-3 left-3 ' icon={faApple} size="2x" />Apple Remote</a>
        <a style={{'color':'white','textDecoration':'none'}} href=""><FontAwesomeIcon color='grey' transform='down-3 left-3 ' icon={faWindows} size="2x" />Windows Remote</a>
      </FooterContainer>
    </FooterElement>
  )
}

export default Footer

export const query = graphql`
  query PageQuery {
    sitePage {
      path
    }
  }
`