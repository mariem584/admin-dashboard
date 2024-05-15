import { createContext, useReducer } from "react"
import DarkModeResducer from "./darkModeReducer"

const INITIAL_STATE = {
    darkMode: false
}

export const DarkModeContext = createContext(INITIAL_STATE)

export const DarkModeContextProvider = ({children}) =>{
    const[state , dispatch] = useReducer(DarkModeResducer , INITIAL_STATE)

    return(
        <DarkModeContext.Provider value={{darkMode: state.darkMode , dispatch}}>{children}</DarkModeContext.Provider>
    )

}