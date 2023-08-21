import { createContext, useReducer } from "react";

export const RoutineContext = createContext();

export const routineReducer = (state, action) => {
    switch (action.type) {
        case 'GET_ROUTINES':
            return {routines: action.payload}
        default: 
            return state;
    }
};


export const RoutineContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(routineReducer, {
        routines: null
    });

    console.log('Routine Context state: ', state)

    return (
        <RoutineContext.Provider value={{...state, dispatch}}>
            { children }
        </RoutineContext.Provider>
    )
}
