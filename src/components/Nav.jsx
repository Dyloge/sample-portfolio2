import React from 'react';
import styled from 'styled-components';
import logo from '../image/1.png';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (

            <StyledNav>
                <div>
                    <Link to='/'>
                        <StyledLogoContainer>
                            <StyledLogo src={logo} alt="" />
                        </StyledLogoContainer>
                    </Link>
                    <StyledTitleContainer>
                        <Link id= 'logo' to='/'>Amir Najafi</Link>
                        <h6>Front-end Web Developer</h6>
                    </StyledTitleContainer>
                </div>
                <ul>
                    <li><Link to='/'>About Me</Link></li>
                    <li><Link to='/sample'>Sample Projects</Link></li>
                    <li><Link to='/future'>Future Plans</Link></li>
                </ul>
            </StyledNav>
            

    )
}
const StyledNav=styled.nav `
min-height:10vh;
display:flex;
margin:auto;
justify-content: space-between;
align-items: center;
padding: 0.3rem 2rem;

color: #b43030;


a{
    color:white;
    text-decoration: none;
}
h6{
    color:white;
    text-decoration: none;
    font-weight:lighter;
    font-size: 13px;
    font-family: 'Gruppo', cursive;
}
ul {
    display:flex;
    list-style: none;
}
#logo {
    font-family: 'Gruppo', cursive;


}
li {
    padding-left: 5rem;
    position: relative;
    font-size:0.8rem;
    color:white;
    font-family: 'Gruppo', cursive;
}
`
const StyledLogoContainer=styled.div `
float:left;
display:block;

`
const StyledLogo=styled.img `
width:50px;
height:50px;
filter: invert(23%) sepia(76%) saturate(1629%) hue-rotate(337deg) brightness(94%) contrast(95%);
`
const StyledTitleContainer=styled.div `
float:left;
margin-left: 0.5rem;
`