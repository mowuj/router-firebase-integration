import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <h2>Please Login</h2>
            <form action="">
                
                <input type="email" name="" id="" placeholder='Your Email' />
                <br />
                <input type="password" name="" id="" placeholder='Enter Your Password' />
                <br />
                <input type="submit" value="Login" />
            </form>
            <div style={{margin:'20px'}}>
                <button onClick={signInWithGoogle}>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;