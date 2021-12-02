import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FirstGif from '../image/FirstGif.gif'
import SecondGif from '../image/SecondGif.gif';
import ThirdGif from '../image/ThirdGif.gif';
import ForthGif from '../image/ForthGif.gif';

export default function SampleProjects() {
    return (
        <StyledSamples>
            <StyledSample>
                <h1>Project1</h1>
                <div className="line"></div>
                <Link to='/sample/project-1'>
                    <StyledSampleImage src={FirstGif} alt="first gif"/>
                </Link>
            </StyledSample>
            <StyledSample>
                <h1>Project2</h1>
                <div className="line"></div>
                <Link to='/sample/project-2'>
                    <StyledSampleImage src={SecondGif} alt="second gif" />
                </Link>
            </StyledSample>
            <StyledSample>
                <h1>Project3</h1>
                <div className="line"></div>
                <Link to='/sample/project-3'>
                    <StyledSampleImage src={ThirdGif} alt="third gif" />
                </Link>
            </StyledSample>
            <StyledSample>
                <h1>Project4</h1>
                <div className="line"></div>
                <Link to='/sample/project-4'>
                    <StyledSampleImage src={ForthGif} alt="forth gif" />
                </Link>
            </StyledSample>  
        </StyledSamples>
    )
}

const StyledSamples= styled.div `
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 2rem;
    

`
const StyledSample = styled.div `
    padding-bottom: 10rem;
    h1 {
        padding: 1rem 0rem;
    }
    .line {
        width:100%;
        background: #b43030;
        height: 0.2rem;
        margin: 1rem 0rem;
    }
`


const StyledSampleImage=styled.img `
    width: 100%;
    height: 70vh;
    object-fit: cover;
`
