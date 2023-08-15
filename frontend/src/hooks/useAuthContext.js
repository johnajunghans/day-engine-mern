import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if(!context) {
        throw Error('Auth context may only be used inside of a component that is nested within the AuthContextProvider')
    }

    return context
}