import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import {SampleProjectState} from '../SampleProjectState';

export default function ProjectDetail() {
    const history=useHistory();
    const url = history.location.pathname;
    const [projects, setProjects] = useState(SampleProjectState);
    const [project, setProject] = useState(null);
    useEffect (() => {
        const currentProject = projects.filter((stateProject) => stateProject.url ===url);
        setProject(currentProject[0]);
    }, [projects,url]);



    return (
        <>
        {project && (
        <StyledDetailes>
            <StyledHeadline>
                <h2>{project.title}</h2>
                <img src={project.mainImg} alt='project'></img>
            </StyledHeadline>
            <StyledTechnologies>
                {project.technologies.map ((technology) => (
                    <Technology item={technology.item} description={technology.description} key={technology.item}/>
                ))}
            </StyledTechnologies>
            <ImageDisplay>
                <img src={project.secondaryImg}alt="project" />
            </ImageDisplay>

            
        </StyledDetailes>
        )}
        </>
        
    )
}

const StyledDetailes=styled.div `
 
`
const StyledHeadline=styled.div `
    min-height:90vh;
    padding-top:20vh;
    position:relative;
    h2{
        position:absolute;
        top:10%;
        left: 50%;
        transform: translate(-50%, -10%);
    }
    img{
        width:100%;
        height:70vh;
        object-fit: cover;
    }
`
const StyledTechnologies=styled.div `
min-height: 80vh;
display: flex;
margin: 5rem 2rem;
align-items: center;
justify-content: space-around;

`
//Technology Component
const Technology= ({item,description})=> {
    return (
        <StyledTechnology>
            <h3>{item}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </StyledTechnology>
    )
}
const StyledTechnology= styled.div`
    padding: 5rem;
    h3{
        font-size: 2rem;
    }
    .line {
        width:100%;
        background: #b43030;
        height: 0.2rem;
        margin: 1rem 0rem;
    }
    p{
        padding: 2rem 0rem;
    }
`
const ImageDisplay=styled.div `
    min-height: 50vh;
    img {
        width:100%;
        height: 100vh;
        object-fit: cover;
    }

`

