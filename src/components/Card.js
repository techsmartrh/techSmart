import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
    width: 275px;
    height: 375px;
    box-shadow: 5px 5px 10px var(--grey0);
    border-radius: 5px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Card = ({children, title, description}) => {

    return (
        <CardContainer>
            <div style={{'width': '100%', 'height':'66%'}}>{children}</div>
            <div style={{'fontWeight': 'bold', margin: '5px'}}>{title}</div>
            <div style={{'textAlign': 'center', 'width':'100%', 'margin': '10px'}}>{description}</div>
        </CardContainer>
    )
}

export default Card;