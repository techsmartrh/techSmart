import React from "react"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Card"

import LaptopImage from "../components/ImageComponents/LaptopImage"
import KeyboardImage from "../components/ImageComponents/KeyboardImage"
import RepairImage from "../components/ImageComponents/RepairImage"


const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const RepairsPage = () => (
  <Layout>
    <SEO title="Diagnostics & Repair" />
    <h1>Device Repair</h1>
    <Container>
      <Card title='Free Standard Diagnostic' description='$35 For Full Diagnostic Report'>
        <LaptopImage />
      </Card>
      <Card title='Remote Service Available' description='We can remotely login to your computer to diagnose and fix many issues'>
        <KeyboardImage />
      </Card>
      <Card title='Mobile Device Repair' description='Repair repair mobile device screens and digitizers with OEM and 3rd Party parts'>
        <RepairImage />
      </Card>
    </Container>
  </Layout>
)

export default RepairsPage
