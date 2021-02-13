import * as React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { register } from '../../utils/apiService';

const Register: React.FC = () => {

    const history = useHistory();

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    useEffect(() => {
        let token = localStorage.getItem('token');
        token ? history.push('/books') : null
    }, []);

    const handleRegister = () => {
        register(email, password, name);
        history.push('/books');
    }

    return(
        <div>
            <label htmlFor="name">Name</label>
            <input onChange={(e) => setName(e.currentTarget.value)} type="text" name="name" id="name"/>
            <label htmlFor="email">Email</label>
            <input onChange={(e) => setEmail(e.currentTarget.value)} type="text" name="email" id="email"/>
            <label htmlFor="password">Password</label>
            <input onChange={(e) => setPassword(e.currentTarget.value)} type="password" name="password" id="password"/>
            <button onClick={handleRegister} className="btn btn-primary">Register</button>
        </div>
    )

}

export default Register;