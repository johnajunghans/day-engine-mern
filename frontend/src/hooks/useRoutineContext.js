import { RoutineContext } from "../context/RoutineContext";
import { useContext } from "react";

export const useRoutineContext = () => {
    const context = useContext(RoutineContext);

    if (!context) {
        throw Error('Routine context may only be used inside of a component that is nested within the routineContextProvider');
    }

    return context;
}