import * as React from 'react';
import { useState, useEffect } from 'react';

interface LoginProps {
    loggedIn: boolean,
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

const Login = ({ loggedIn, setLoggedIn }) => {

    // useEffect(() => {
    //     (async () => {

    //     })();
    // }, []);

    // useEffect(() => {}, []);

    return(
        <div>Login</div>
    )

}

export default Login;