import React from "react"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Card"

import GamingImage from "../components/ImageComponents/GamingImage"
import VHSImage from "../components/ImageComponents/VHSImage"


const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const RepairsPage = () => (
  <>
    <SEO title="Custom" />
    <h1>Custom Builds & Other Services</h1>
    <Container>
      <Card title='Custom PC Builds' description='We build state-of-the-art Gaming and Business PCs that deliver blazing speeds'>
        <GamingImage />
      </Card>
      <Card title='VHS Conversion' description='Bring in your video tapes and we will professionally convert them to digital DVD'>
        <VHSImage />
      </Card>
    </Container>
  </>
)

export default RepairsPage
