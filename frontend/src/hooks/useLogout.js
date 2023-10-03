import { useAuthContext } from "./useAuthContext"
import { useRoutineContext } from "./useRoutineContext";

export const useLogout = () => {

    const { dispatch } = useAuthContext();
    const { dispatch: routineDispatch } = useRoutineContext();

    const logout = async () => {
        dispatch({type: 'LOGOUT'})
        routineDispatch({type: 'LOGOUT'})
        localStorage.removeItem('user');
    }

    return logout;
}