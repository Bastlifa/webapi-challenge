import React, {useEffect, useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import {getProject, getProjectActions} from "../actions"
import { ProjectListingDiv } from './Styles'

const Project = props =>
{
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const [curProj, setCurProj] = useState([])
    const [curProjActions, setCurProjActions] = useState()

    useEffect(_ =>
        {
            dispatch(getProject(props.match.params.id))
            dispatch(getProjectActions(props.match.params.id))
        }, [])
    useEffect(_ =>
        {
            setCurProj(state.curProject)
            setCurProjActions(state.curProjActions)
            console.log(state.curProjActions)
        }, [state.curProject, state.curProjActions])
    

    return (
        <>
            {curProj && 
            <ProjectListingDiv>
                <h1>{curProj.name}</h1>
                <h3>{curProj.description}</h3>
                <h2>Actions:</h2>
                {curProjActions && curProjActions.map(action =>
                {
                    return(
                        <div style={{display: 'flex', flexFlow: 'column nowrap'}}>
                            <h3>{action.description}</h3>
                            <p>{action.notes}</p>
                        </div>
                    )
                })}
            </ProjectListingDiv>}
        </>
    )
}

export default Project