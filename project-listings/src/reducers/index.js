import {  
    GET_PROJECTS_START,
    GET_PROJECTS_SUCCESS,
    GET_PROJECTS_FAIL,
    GET_PROJECT_START,
    GET_PROJECT_SUCCESS,
    GET_PROJECT_FAIL,
    POST_PROJECT_START,
    POST_PROJECT_SUCCESS,
    POST_PROJECT_FAIL,
    PUT_PROJECT_START,
    PUT_PROJECT_SUCCESS,
    PUT_PROJECT_FAIL,
    DELETE_PROJECT_START,
    DELETE_PROJECT_SUCCESS,
    DELETE_PROJECT_FAIL,
    GET_PROJECT_ACTIONS_START,
    GET_PROJECT_ACTIONS_SUCCESS,
    GET_PROJECT_ACTIONS_FAIL,
    GET_ACTIONS_START,
    GET_ACTIONS_SUCCESS,
    GET_ACTIONS_FAIL,
    GET_ACTION_START,
    GET_ACTION_SUCCESS,
    GET_ACTION_FAIL,
    POST_ACTION_START,
    POST_ACTION_SUCCESS,
    POST_ACTION_FAIL,
    PUT_ACTION_START,
    PUT_ACTION_SUCCESS,
    PUT_ACTION_FAIL,
    DELETE_ACTION_START,
    DELETE_ACTION_SUCCESS,
    DELETE_ACTION_FAIL,
} from '../actions'

const initialState = 
{
    error: "",
    projects: [],
    actions: [],
    isLoading: false,
    curProject: null
}

export const reducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case GET_PROJECTS_START:
            return {
                ...state,
                isLoading: true,
                error: "",
            }
        case GET_PROJECTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                projects: action.payload,
                error: "",
            }
        case GET_PROJECTS_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        case GET_PROJECT_START:
            return {
                ...state,
                isLoading: true,
                error: "",
            }
        case GET_PROJECT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                curProject: action.payload,
                error: "",
            }
        case GET_PROJECT_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        default:
            return state
    }
}