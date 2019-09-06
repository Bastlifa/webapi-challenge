import axios from 'axios'

export const GET_PROJECTS_START = "GET_PROJECTS_START"
export const GET_PROJECTS_SUCCESS = "GET_PROJECTS_SUCCESS"
export const GET_PROJECTS_FAIL = "GET_PROJECTS_FAIL"

export const GET_PROJECT_START = "GET_PROJECT_START"
export const GET_PROJECT_SUCCESS = "GET_PROJECT_SUCCESS"
export const GET_PROJECT_FAIL = "GET_PROJECT_FAIL"

export const POST_PROJECT_START = "POST_PROJECT_START"
export const POST_PROJECT_SUCCESS = "POST_PROJECT_SUCCESS"
export const POST_PROJECT_FAIL = "POST_PROJECT_FAIL"

export const PUT_PROJECT_START = "PUT_PROJECT_START"
export const PUT_PROJECT_SUCCESS = "PUT_PROJECT_SUCCESS"
export const PUT_PROJECT_FAIL = "PUT_PROJECT_FAIL"

export const DELETE_PROJECT_START = "DELETE_PROJECT_START"
export const DELETE_PROJECT_SUCCESS = "DELETE_PROJECT_SUCCESS"
export const DELETE_PROJECT_FAIL = "DELETE_PROJECT_FAIL"

export const GET_PROJECT_ACTIONS_START = "GET_PROJECT_ACTIONS_START"
export const GET_PROJECT_ACTIONS_SUCCESS = "GET_PROJECT_ACTIONS_SUCCESS"
export const GET_PROJECT_ACTIONS_FAIL = "GET_PROJECT_ACTIONS_FAIL"

export const GET_ACTIONS_START = "GET_ACTIONS_START"
export const GET_ACTIONS_SUCCESS = "GET_ACTIONS_SUCCESS"
export const GET_ACTIONS_FAIL = "GET_ACTIONS_FAIL"

export const GET_ACTION_START = "GET_ACTION_START"
export const GET_ACTION_SUCCESS = "GET_ACTION_SUCCESS"
export const GET_ACTION_FAIL = "GET_ACTION_FAIL"

export const POST_ACTION_START = "POST_ACTION_START"
export const POST_ACTION_SUCCESS = "POST_ACTION_SUCCESS"
export const POST_ACTION_FAIL = "POST_ACTION_FAIL"

export const PUT_ACTION_START = "PUT_ACTION_START"
export const PUT_ACTION_SUCCESS = "PUT_ACTION_SUCCESS"
export const PUT_ACTION_FAIL = "PUT_ACTION_FAIL"

export const DELETE_ACTION_START = "DELETE_ACTION_START"
export const DELETE_ACTION_SUCCESS = "DELETE_ACTION_SUCCESS"
export const DELETE_ACTION_FAIL = "DELETE_ACTION_FAIL"

const baseURL = `http://localhost:8000/api/`

export const getProjects = _ => dispatch =>
{
    dispatch({ type: GET_PROJECTS_START })

    axios
        .get(`${baseURL}projects`)
            .then(res =>
                {
                    console.log("res from getProjects:", res)
                    dispatch({ type: GET_PROJECTS_SUCCESS, payload: res.data })
                })
            .catch(err =>
                {
                    console.log("err from getProjects:", err)
                    dispatch({ type: GET_PROJECTS_FAIL, payload: err })
                })
}

export const getProject = id => dispatch =>
{
    dispatch({ type: GET_PROJECT_START })

    axios
        .get(`${baseURL}projects/${id}`)
            .then(res =>
                {
                    console.log("res from getProject:", res)
                    dispatch({ type: GET_PROJECT_SUCCESS, payload: res.data })
                })
            .catch(err =>
                {
                    console.log("err from getProject:", err)
                    dispatch({ type: GET_PROJECT_FAIL, payload: err })
                })
}

export const getProjectActions = id => dispatch =>
{
    dispatch({ type: GET_PROJECT_ACTIONS_START })

    axios
        .get(`${baseURL}projects/${id}/actions`)
            .then(res =>
                {
                    console.log("res from getProjectActions:", res)
                    dispatch({ type: GET_PROJECT_ACTIONS_SUCCESS, payload: res.data })
                })
            .catch(err =>
                {
                    console.log("err from getProjectActions:", err)
                    dispatch({ type: GET_PROJECT_ACTIONS_FAIL, payload: err })
                })
}

export const postProject = inputs => dispatch =>
{
    dispatch({ type: POST_PROJECT_START })

    axios
        .post(`${baseURL}projects`, inputs)
            .then(res =>
                {
                    console.log("res from postProject:", res)
                    dispatch({ type: POST_PROJECT_SUCCESS, payload: res })
                })
            .catch(err =>
                {
                    console.log("err from postProject:", err)
                    dispatch({ type: POST_PROJECT_FAIL, payload: err })
                })
}