import * as React from 'react';
import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

interface NavbarProps extends RouteComponentProps {
    loggedIn: boolean,
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>,
}

const Navbar: React.FC<NavbarProps> = ({ history, loggedIn, setLoggedIn }) => {

    // useEffect(() => {
    //     (async () => {

    //     })();
    // }, []);

    // useEffect(() => {}, []);

    return(
        <div className="navbar navbar-primary">
            <button onClick={() => history.push('/')} className="btn btn-primary">Home</button>
            <div className="ml-auto">
                <Link to="/books" className="btn btn-primary">Book List</Link>
            </div>
        </div>
    )

}

export default Navbar;