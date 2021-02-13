import * as React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { login } from '../../utils/apiService';

const Login: React.FC = () => {

    const history = useHistory();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    useEffect(() => {
        let token = localStorage.getItem('token');
        token ? history.push('/') : null
    }, []);

    const handleLogin = () => {
        login(email, password);
        history.push('/books');
    }

    return (
        <div>
            <div>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.currentTarget.value)} type="text" name="email" id="email" />
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.currentTarget.value)} type="password" name="password" id="password" />
                <button onClick={handleLogin} className="btn btn-primary">Log In</button>
            </div>
            <div>
                <Link to='/register' className="btn btn-secondary">New? Register here</Link>
            </div>
        </div>
    )

}

export default Login;