import React, {useEffect, useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import {addProject, getProjects} from "../actions"
import { ProjectListingsDiv, ProjectListingDiv } from './Styles'
import {Link } from 'react-router-dom'
import AddProjectForm from './AddProjectForm'

const ProjectList = _ =>
{
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const [compProjects, setCompProjects] = useState([])
    useEffect(_ =>
        {
            dispatch(getProjects())
        }, [])
    useEffect(_ =>
        {
            setCompProjects(state.projects)
            console.log(state.projects)
        }, [state.projects])
        
        console.log(compProjects)
    return (
        <>
            <ProjectListingsDiv>
                {compProjects.map(project => 
                    {
                        return(
                        <Link to={`/projects/${project.id}`} key={project.id}>
                            <ProjectListingDiv><h3>{project.name}</h3></ProjectListingDiv>
                        </Link>
                        )
                    }
                )}
            </ProjectListingsDiv>
            <AddProjectForm />
        </>
    )
}

export default ProjectList