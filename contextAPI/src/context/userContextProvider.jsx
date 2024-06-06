import React, { useState } from 'react';
import userContext from './userContext';

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null);

    //the usercontext provider will provide the user and setUser to all the children
    return (
        <userContext.Provider value={{ user, setUser }}>
            {children}
        </userContext.Provider>
    )
}

export default UserContextProvider;
//next step is to wrap the userContextProvider around the App component in the app.jsx file

