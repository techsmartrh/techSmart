import React from "react"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Card"

import CAT5Image from "../components/ImageComponents/CAT5Image"
import RouterImage from "../components/ImageComponents/RouterImage"
import NetworkImage from "../components/ImageComponents/NetworkImage"


const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const RepairsPage = () => (
  <>
    <SEO title="Network" />
    <h1>Network Troubleshooting</h1>
    <Container>
      <Card title='Network Specialists' description='We help you develop a strategic implementation plan for your network'>
        <CAT5Image />
      </Card>
      <Card title='Home or Office' description='We service home and office solutions '>
        <RouterImage />
      </Card>
      <Card title='Wired or Wireless' description='We configure and service wireless and wired networks to keep you connected'>
        <NetworkImage />
      </Card>
    </Container>
  </>
)

export default RepairsPage
