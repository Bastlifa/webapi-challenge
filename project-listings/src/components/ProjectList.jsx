import React, {useEffect, useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import {addProject, getProjects} from "../actions"
import { ProjectListingsDiv, ProjectListingDivSmall, EditButton } from './Styles'
import {Link } from 'react-router-dom'
import AddProjectForm from './AddProjectForm'

const ProjectList = _ =>
{
    const [inputs, setInputs] = useState({ name: "", description: "" })
    let [isEditing, setIsEditing] = useState(false)
    const [projID, setProjID] = useState()
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
        
    const handleEdit = project =>
    {
        inputs.name = project.name
        inputs.description = project.description
        setIsEditing(true)
        setProjID(project.id)
    }

    return (
        <>
            <ProjectListingsDiv>
                {compProjects.map(project => 
                    {
                        return(
                        
                            <ProjectListingDivSmall key={project.id}>
                                <div style={{width: '800px'}}>
                                    <h3>
                                        <Link to={`/projects/${project.id}`} >
                                            {project.name}
                                        </Link>
                                    </h3>

                                </div>
                                <EditButton onClick={_ => handleEdit(project)}>Edit</EditButton>
                            </ProjectListingDivSmall>
                        )
                    }
                )}
            </ProjectListingsDiv>
            <AddProjectForm inputs={inputs} setInputs={setInputs} isEditing={isEditing} projID={projID}/>
        </>
    )
}

export default ProjectList