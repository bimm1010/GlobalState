import { useReducer } from "react";
import Context from "./Context.js";
import reducer, { initialState } from "./reducer";

function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default Provider

