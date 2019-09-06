import React, {useState} from "react"
import { postProject } from '../actions'
import { useDispatch } from 'react-redux'

const AddProjectForm = () =>
{
    const dispatch = useDispatch()
    const [inputs, setInputs] = useState({ name: "", description: "" })
    const handleChange = event =>
    {
        setInputs({ ...inputs, [event.target.name]: event.target.value })
    }
    const handleSubmit = event =>
    {
        // event.preventDefault()
        dispatch(postProject(inputs))
    }
    return (
        <div>
            <form onSubmit={handleSubmit} style={{display: 'flex', flexFlow: 'column', width: '200px', margin: '10px auto'}}>
                <input type="text" name="name" value={inputs.name} onChange={handleChange} placeholder="name"/>
                <input type="text" name="description" value={inputs.description} onChange={handleChange} placeholder="description"/>
                <button type="submit">Submit!</button>
            </form>
        </div>
    )
}

export default AddProjectForm