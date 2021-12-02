import React from 'react';
import Amir from '../image/Amir Najafi.jpg';
import styled from 'styled-components';
import { StyledAbout, StyledDescription } from '../styles';
import {motion} from 'framer-motion';

export default function AboutSection() {

    //Animation
    const titleAnimation = {
        hidden: {opacity:0},
        show: {opacity: 1 ,transition :{duration:4}}
    };



    return (
        <div>
            <StyledAbout className='about'>
                <StyledDescription>
                    <div className="title">
                        <div className="hide">
                            <motion.h2 variants={titleAnimation} initial = "hidden" animate="show" ><span className='colored-text'>Self-education</span> is, I firmly believe,</motion.h2>
                        </div>
                        <div className="hide">
                            <h2>the only kind of education there is.</h2>
                        </div>
                        <div className="hide">
                            <h6>Isaac Asimov</h6>
                        </div>
                    </div>

                    <button className='btn'><span>Contact Me</span></button>
                </StyledDescription>
                <StyledHeroContainer>
                    <StyledMainContainer className='main-container'>
                        <StyledPicContainer>
                            <a href="#"><StyledPic src={Amir} /></a>
                        </StyledPicContainer>
                        <StyledCourseContainer className='course-container'>
                            <StyledCourseInfo>
                                <StyledCourseIntro>Check out My Online Course</StyledCourseIntro>
                                <StyledCourseTitle>React, simplified</StyledCourseTitle>
                                <StyledCourseSlogan>
                                    React from scratch for beginners
                                </StyledCourseSlogan>
                                <StyledCurrentPrice>$28.00</StyledCurrentPrice>
                                <StyledOldPrice>$44.99</StyledOldPrice>
                                <StyledBuyBtn>Buy now</StyledBuyBtn>
                            </StyledCourseInfo>
                        </StyledCourseContainer>
                    </StyledMainContainer>
                </StyledHeroContainer>
            </StyledAbout>
        </div>
    )
}

//Styled Components


const StyledHeroContainer = styled.div`
	margin: auto;
    display: flex;


`
const StyledMainContainer = styled.div`
	width: 270px;
	height: 540px;
	position: relative;
	margin: 0 20px;
    opacity: 1;
	animation: bounceIn 1.2s linear;
`
const StyledPicContainer = styled.div`
	width: 230px;
	position: absolute;
	left: 20px;
	z-index: 1;
    margin:auto;
`
const StyledPic = styled.img`
	width: 100%;
	box-shadow: 0 5px 20px 3px rgba(0, 0, 0, 0.6);
`
const StyledCourseIntro = styled.div`
    text-transform: uppercase;
    color:#b43030;
`
const StyledCourseContainer = styled.div`
	background: #fff;
	width: 270px;
	height: 520px;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 5px;
	position: absolute;
	box-shadow: 0 5px 20px 3px rgba(0, 0, 0, 0.6);
	opacity: 0; 
    font-weight:0.5rem;
    background-color:#000000;
`
const StyledCourseInfo = styled.div`
	width: 100%;
	position: absolute;
	bottom: 0;
	text-align: center;
`
const StyledCourseTitle = styled.h4`
	text-transform: uppercase;
    color: white;
`
const StyledCourseSlogan = styled.p`
    color: #a8a8a8;
    font-size: 0.7rem;
`
const StyledCurrentPrice = styled.p`
    color: #b43030;
    font-size: 0.7rem;
    font-weight: bold;
`
const StyledOldPrice = styled.p`
	color: #a8a8a8;
	text-decoration: line-through;
    font-size: 0.6rem;
`
const StyledBuyBtn = styled.button`
	cursor: pointer;
	width: 100%;
	background: #2f2f2f;
	color: white;
	padding: 15px 0;
	font-size: 1rem;
	font-weight: bold;
	text-transform: uppercase;
	border: 0;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
    &:hover {
        background-color: #5a5959;
    }
`



