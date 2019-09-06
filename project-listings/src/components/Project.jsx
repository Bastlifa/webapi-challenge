import React, {useEffect, useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import {getProject} from "../actions"
import { ProjectListingDiv } from './Styles'

const Project = props =>
{
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const [curProj, setCurProj] = useState()

    useEffect(_ =>
        {
            dispatch(getProject(props.match.params.id))
        }, [])
    useEffect(_ =>
        {
            setCurProj(state.curProject)
        }, [state.curProject])
    

    return (
        <>
            {curProj && 
            <ProjectListingDiv>
                <h1>{curProj.name}</h1>
                <h3>{curProj.description}</h3>
            </ProjectListingDiv>}
        </>
    )
}

export default Project