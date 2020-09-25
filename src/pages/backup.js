import React from "react"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Card"

import HarddriveRepairImage from "../components/ImageComponents/HarddriveRepairImage"
import HarddriveImage from "../components/ImageComponents/HarddriveImage"
import CarboniteImage from "../components/ImageComponents/CarboniteImage"


const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const CarboniteButton = styled.button`
  width: 75%;
  background: #6B1BA5;
  border: 0;
  border-radius: 20px;
  padding: 5px;
  color: white;
  margin-top: 40px;
  margin-left: 30px;
`

const RepairsPage = () => (
  <>
    <SEO title="Backup & Recovery" />
    <h1>Data Backup & Recovery</h1>
    <Container>
      <Card title='Data Recovery' description='We can recover and transfer lost data from useable devices'>
        <HarddriveRepairImage />
      </Card>
      <Card title='Backup & Disaster Recovery' description='Tech Smart provides comprehensive backup systems  to protect your data'>
        <HarddriveImage />
      </Card>
      <Card title='Learn More about our Partner'>
        <CarboniteImage />
        <a href="http://partners.carbonite.com/GoTechSmart"><CarboniteButton>Click Here</CarboniteButton></a>
      </Card>
    </Container>
  </>
)

export default RepairsPage
