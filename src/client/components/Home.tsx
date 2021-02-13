import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import apiService, { User } from '../../utils/apiService';

const Home = () => {

    const [loggedIn, setLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        let user = localStorage.getItem('token');
        user ? setLoggedIn(true) : setLoggedIn(false);
    }, []);

    const logout = async () => {
        localStorage.clear();
        let url = `/auth/logout/${User.userid}`;
        await apiService(url);
        alert('logged out');
        location.reload();
    }

    return(
        <div className="container">
            <div className="wrapper">
                <h1>Welcome to the Bookstore!</h1>
                { !loggedIn ? <Link to='/login' className="btn btn-success m-5">Login</Link> : <button onClick={logout} className="btn btn-warning">Log Out</button> }
            </div>
            <div>
                { loggedIn ? <Link to='/books/new' className="btn btn-primary m-5">Add A Book</Link> : null }
            </div>
        </div>
    )

}

export default Home;