import React, {useEffect} from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const links = [
    {label: "Diagnostic/Repair", pathName: 'repair'},
    {label: "Backup/Recovery", pathName: "backup"},
    {label: "Network", pathName: "network"},
    {label: "Custom", pathName: "custom"}
]

const NavElement = styled.nav`
    width: 100%;
    height: 50px;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: black;
    display: flex;

    @media(max-width: 710px){
        height: auto;
        flex-direction: column;
    }
`

const HeaderLinkContainer = styled.div`
    height: 100%;
    width: ${100 / links.length}%;
    display: flex;
    align-items: center;
    color: white;
    padding: 0;
    margin: 0;
    border: none;

    & > * {
        height: 100%;
        padding: 0;
        margin: 0;
        background: ${props => props.isActive ? '#C4C4C4': 'inherit'};
        color: ${props => props.isActive ? '#00A1E1': 'inherit'};
    }

    @media(max-width: 710px){
        height: 2rem;
        width: 100%;
        justify-content: center;
    }
`

const HeaderLinkLeft = styled.div`
    width: 30px;
    clip-path: ${props => props.isFirst ? 'polygon(100% 0, 100% 100%, 0 100%)' : 'none'};
    @media(max-width: 710px){
        display: none;
    }
`

const HeaderLinkRight = styled.div`
    width: 30px;
    clip-path: ${props => props.isNotLast ? 'polygon(100% 0, 0 0, 0 100%)' : 'none'};
    @media(max-width: 710px){
        display: none;
    }
`



export default ({current}) => {

    let currentPath = null;

    useEffect(()=>{
        let path = Array.from(document.querySelectorAll('a.headerLink')).filter(node => node.attributes.getNamedItem('aria-current'))[0].href
        currentPath = path.slice(path.indexOf('/', 7) + 1)
    },[])

    return (
        <NavElement>
        {links.map((link, idx) => (
            <HeaderLinkContainer isActive={currentPath === link.pathName ? true : false}>
                <HeaderLinkLeft 
                    isFirst={idx !== 0 ? true : false}>
                </HeaderLinkLeft>
                <Link style={{'width':'100%'}}className='headerLink' to={`/${link.pathName}`}>{link.label}</Link>
                <HeaderLinkRight 
                    isNotLast={idx !== links.length - 1 ? true : false}>
                </HeaderLinkRight>
            </HeaderLinkContainer>
        ))}
        </NavElement>
    )
}