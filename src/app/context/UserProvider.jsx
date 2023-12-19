import { useEffect, useState } from 'react';
import { getUserFromSession } from '../../api/auth.api';
import LoadingSpinner from '../common/layouts/LoadingSpinner';
import { createContext } from "react";
import { logout } from "../../api/auth.api";


export const UserContext = createContext()

const UserProvider = ({ children }) => {
    const [serverError, setServerError] = useState(null)

    const [isLoading, setIsLoading] = useState(true);

    const [user, setUser] = useState(null);

    const updateUser = (newUser) => {
        setUser(newUser);
    };

    const doLogout = () => {
        logout()
            .catch(err => {
                setServerError(new Error(err))
            })
            .finally(() => {
                updateUser(null)
            })
    }

    useEffect(() => {
        if (user) return
        getUserFromSession()
            .then(user => setUser(user))
            .catch(err => setServerError(new Error(err)))
            .finally(() => setIsLoading(false))
    }, []);


    if (isLoading) {
        return <LoadingSpinner fullPage />
    }

    return (
        <UserContext.Provider value={{ user, doLogout, updateUser, serverError }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;