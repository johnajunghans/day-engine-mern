import { useEffect, useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useRoutineContext } from "./useRoutineContext";

export const useLogin = () => {

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const { user, dispatch } = useAuthContext();
    const { dispatch: routineDispatch } = useRoutineContext();

    const login = async (email, password) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch('http://localhost:4000/api/users/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })
        console.log(response)
        const json = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError(json.error)
        }

        if (response.ok) {
            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            // update Auth Context
            dispatch({type: 'LOGIN', payload: json})
        } 
        
    }

    useEffect(() => {
            
        const fetchRoutines = async () => {
            
            const routineResponse = await fetch('http://localhost:4000/api/routines', {
                method: 'GET',
                headers: {'Authorization': `bearer ${user.token}`}   
            })

            const routineJson = await routineResponse.json();

            if (!routineResponse.ok) {
                setIsLoading(false);
                setError(json.error)
            }

            if (routineResponse.ok) {
                routineDispatch({type: 'GET_ROUTINES', payload: routineJson});

                setIsLoading(false);
            }
        }

        if (user) {
            fetchRoutines();
        }

    }, [user])

    return { login, isLoading, error }
}