import React from "react"
import styled from 'styled-components'

import FamilyImage from "../components/ImageComponents/FamilyImage"
import SEO from "../components/seo"

const Tagline = styled.p`
  text-align: center;
  font-weight: 200;
  font-style: italic;
  font-size: 1.5em;
  color: var(--grey0);
  padding: 0 50px;
`

const ServiceTag = styled.p`
  text-align: center;
  padding: 0 50px;
`

const IndexPage = ({location}) => (
  <>
    <SEO title="Home" />
    <Tagline>
      Tech Smart provides on-site, in-store, and remote service for desktop and mobile device repair, data backup/recovery, network troubleshooting, and more. 
    </Tagline>
    <FamilyImage />
    <ServiceTag>
      Locally serving the Savannah, Midway, Hinesville, and Pooler areas    
    </ServiceTag>
  </>
)

export default IndexPage
