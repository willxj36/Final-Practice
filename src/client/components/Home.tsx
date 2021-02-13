import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface HomeProps {}

const Home = () => {

    const [loggedIn, setLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        let user = localStorage.getItem('token');
        user ? setLoggedIn(true) : setLoggedIn(false);
    }, []);

    return(
        <div className="container">
            <div className="wrapper">
                <h1>Welcome to the Bookstore!</h1>
                { loggedIn ? <Link to='/login' className="btn btn-success m-5">Login</Link> : null }
            </div>
        </div>
    )

}

export default Home;