import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/globals_reducer'
import { globals_url as url } from '../utils/constants'
import {
    SIDEBAR_OPEN,
    SIDEBAR_CLOSE,
    GET_GLOBALS_BEGIN,
    GET_GLOBALS_SUCCESS,
    GET_GLOBALS_ERROR,
} from '../actions'


const initialState = {
    isSidebarOpen: false,
    globals_loading: false,
    globals_error: false,
    globals: []
}

const GlobalsContext = React.createContext()

export const GlobalsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const openSidebar = () => {
        dispatch({ type: SIDEBAR_OPEN })
    }
    const closeSidebar = () => {
        dispatch({ type: SIDEBAR_CLOSE })
    }

    const fetchGlobals = async (url) => {
        dispatch({ type: GET_GLOBALS_BEGIN })
        try {
            //const response = await axios.get(url)
            const response = await (await fetch(url)).json()
            console.log(response);
            const data = await response.json();
            console.log(data + " data");
            dispatch({ type: GET_GLOBALS_SUCCESS, payload: data })
        } catch (error) {
            console.log(error);
            dispatch({ type: GET_GLOBALS_ERROR })
        }
    }

    useEffect(() => {
        fetchGlobals(url)
    }, [])

    return (
        <GlobalsContext.Provider
            value={{
                ...state,
                openSidebar,
                closeSidebar,
            }}
        >
            {children}
        </GlobalsContext.Provider>
    )
}
// make sure use
export const useGlobalsContext = () => {
    return useContext(GlobalsContext)
}