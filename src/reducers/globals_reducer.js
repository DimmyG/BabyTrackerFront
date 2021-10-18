import {
    SIDEBAR_OPEN,
    SIDEBAR_CLOSE,
    GET_GLOBALS_BEGIN,
    GET_GLOBALS_SUCCESS,
    GET_GLOBALS_ERROR
} from '../actions'

const globals_reducer = (state, action) => {
    if (action.type === SIDEBAR_OPEN) {
        return { ...state, isSidebarOpen: true }
    }
    if (action.type === SIDEBAR_CLOSE) {
        return { ...state, isSidebarOpen: false }
    }    

    if (action.type === GET_GLOBALS_BEGIN) {
        return { ...state, globals_loading: true }
    }
    if (action.type === GET_GLOBALS_SUCCESS) {
        return {
            ...state,
            globals_loading: false,
            globals: action.payload
        }
    }
    if (action.type === GET_GLOBALS_ERROR) {
        return { ...state, globals_loading: false, globals_error: true }
    }
    throw new Error(`No Matching "${action.type}" - action type`)
}

export default globals_reducer