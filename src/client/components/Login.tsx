import * as React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { login } from '../../utils/apiService';

const Login: React.FC = () => {

    const history = useHistory();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    useEffect(() => {
        let token = localStorage.getItem('token');
        token ? history.push('/') : null
    }, []);

    const handleLogin = async () => {
        await login(email, password);
    }

    return(
        <div>
            <form>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.currentTarget.value)} type="text" name="email" id="email"/>
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.currentTarget.value)} type="password" name="password" id="password"/>
                <button onClick={handleLogin} className="btn btn-primary">Log In</button>
            </form>
        </div>
    )

}

export default Login;