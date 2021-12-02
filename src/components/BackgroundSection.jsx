import React from 'react';
import styled from 'styled-components';
import { StyledAbout, StyledDescription } from '../styles';





export default function BackgroundSection() {
    return (
        <StyledFaq>
            <h2>My <span className='colored-text'>Background</span></h2>
            <StyledAccordionContainer>
                <StyledAccordionItem>
                    <StyledInput  type="checkbox" id="chck1"></StyledInput>
                    <StyledQuestion className='tab-label' for="chck1">Theatre</StyledQuestion>
                    <StyledAnswer className="tab-content">
                        Lorem<span className='colored-text'>dolor sit amet</span> ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!
                    </StyledAnswer>
                </StyledAccordionItem>

                <StyledAccordionItem>
                    <StyledInput type="checkbox" id="chck2"></StyledInput>
                    <StyledQuestion className='tab-label' for="chck2">Condensed matter physics</StyledQuestion>
                    <StyledAnswer className="tab-content">
                        Lorem ipsum dolor sit amet consectetur adipisicing <span className='colored-text'>dolor sit amet</span>elit. A, in!
                    </StyledAnswer>
                </StyledAccordionItem>

                <StyledAccordionItem>
                    <StyledInput  type="checkbox" id="chck3"></StyledInput>
                    <StyledQuestion className='tab-label' for="chck3">Seismology</StyledQuestion>

                    <StyledAnswer className="tab-content">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum,<span className='colored-text'>dolor sit amet</span> reiciendis!
                    </StyledAnswer>
                </StyledAccordionItem>

                <StyledAccordionItem>
                    <StyledInput  type="checkbox" id="chck4"></StyledInput>
                    <StyledQuestion className='tab-label' for="chck4">Digital humanities</StyledQuestion>
                    
                    <StyledAnswer className="tab-content">
                        Lorem ipsum<span className='colored-text'>dolor sit amet</span> dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!
                        
                    </StyledAnswer>
                </StyledAccordionItem>

            </StyledAccordionContainer>
        </StyledFaq>
    )
}
const StyledFaq=styled(StyledAbout)`
display: block;
h2{
    padding-bottom:2rem;
    font-weight: lighter;
}
`
const StyledInput=styled.input `
  position: absolute;
  opacity: 0;
  z-index: -1;
`
const StyledAccordionContainer=styled.div `
  border-radius: 8px;
  overflow: hidden;

`
const StyledAccordionItem=styled.div `
    width: 100%;
    margin: 10px;
    color: white;
    overflow: hidden;
    .tab-label::after {
        font-family: "Font Awesome 5 Free";
	content: '\f054';
	font-weight: bold;
    color: #b43030;
    margin-left: 10px;
    }
    input:checked {
  + .tab-label {

    &::after {
      transform: rotate(90deg);
      content: '\f078';
      color: #b43030;
      margin-left: 10px;
    }
  }
  ~ .tab-content {
    max-height: 100vh;
    padding: 1em;
  }
}
`
const StyledQuestion=styled.label `
text-transform: uppercase;
display: block;
cursor: pointer;




`
const StyledAnswer=styled.div`
    max-height: 0;
    padding: 0 10em;
    transition: all .5s ease;

`
const StyledLine=styled.hr `
border: 1px solid #797979;

`