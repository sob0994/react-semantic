import { createContext, useReducer } from "react";
import { AppCons, AppReducer } from "./AppReducer";
import { AppState } from "./AppState";

export const AppContext = createContext();
export const AppC = AppCons

const AppContextProvider = ({children}) =>{

    const [app, dispatch] = useReducer(AppReducer, AppState)
    return(
        <AppContext.Provider value={{app, dispatch}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider