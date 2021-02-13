import * as React from 'react';
import { RouteComponentProps, useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {

    const history = useHistory();

    return(
        <div className="navbar bg-dark">
            <button onClick={() => history.push('/')} className="btn btn-primary">Home</button>
            <div className="ml-auto">
                <Link to="/books" className="btn btn-primary">Book List</Link>
            </div>
        </div>
    )

}

export default Navbar;