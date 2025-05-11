import { createContext, useReducer } from "react";
import { ThemeReducer } from "../Reducers/ThemeReducer";


export const ThemeContext = createContext();
export function ThemeProvider({ children }) {
    const [state, dispatch] = useReducer(ThemeReducer, {
        color: "bg-amber-100"

    });

    function changeColor(value) {
        dispatch({ type: "CHANGE_COLOR", payload: value });
    }



    return (
        <ThemeContext.Provider value={{
            ...state, changeColor

        }}>
            {children}
        </ThemeContext.Provider>
    );
}