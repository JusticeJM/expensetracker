import { useState, createContext, useContext, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({children}) =>{
    const [user, setUser] = useState(null);

    function loginUser(userData){
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    }

    function logoutUser() {
        setUser(null);
        localStorage.removeItem('user');
    }

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if(storedUser) {
            setUser(JSON.parse(storedUser));
        }
    },[]);

    return(
        <UserContext.Provider value={{user, loginUser, logoutUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    return useContext(UserContext)
}

