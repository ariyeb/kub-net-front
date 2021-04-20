import React, { useState } from 'react';
import { sendUsersRequest } from '../server/login';

const Login = ({ setUserData }) => {
    const [isLogin, setIsLogin] = useState(false);

    const onSubmit = (event) => {
        event.preventDefault();
        const email = event.target.children[0].value;
        const password = event.target.children[1].value;
        sendUsersRequest(email, password, isLogin)
            .then(res => {
                console.log(res.token);
                setUserData(res);
            });
    };

    return (
        <div>
            <form onSubmit={ onSubmit }>
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Password" />
                <input type="radio" id="subscribe" name="mode" value="subscribe" checked onChange={ () => { } } onClick={ () => { setIsLogin(false); } } />
                <label htmlFor="subscribe">Subscribe</label>
                <input type="radio" id="login" name="mode" value="login" onClick={ () => { setIsLogin(true); } } />
                <label htmlFor="login">Login</label>
                <button type="submit" >Submit</button>
            </form >
        </div >
    );
};

export default Login;