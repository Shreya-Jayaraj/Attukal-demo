import {useState} from 'react';
import './Login.css';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return ( 
        <div className='content-container'>
            <form className='forms'> 
                <h1> Login </h1>
                <label>Username: </label>
                <input
                    type="text"
                    required
                    placeholder = ""
                    onChange = {(e)=>setUsername(e.target.value)}
                /> 
                <label>Password: </label>
                <input
                    type="password"
                    required
                    placeholder = ""
                    onChange = {(e)=>setPassword(e.target.value)}
                />
                <button> Submit </button>
            </form>
        </div>
     );
}
 
export default Login;