import { Button } from '@material-ui/core';
import React from 'react'
import "./Login.css";
import {auth, provider} from "../Firebase/Firebase";
import { useStateValue } from '../ContextApi/StateProvider';
import {actionTypes} from "../ContextApi/reducer";
 
function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type : actionTypes.SET_USER,
                user : result.user
            })
        })
        .catch(error => alert(error.message))
    };
    return (
        <div className="login">
            <div className="login-logo">
             <img src="https://www.vippng.com/png/detail/13-132738_round-facebook-logo-black-and-white.png" alt=""/>
             <div className="lower-logo">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTm74V6YlbpGSmIPbB2to2t9UdX5wvimbvuJw&usqp=CAU" />   
             </div>
            </div>
            <Button type="submit" onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
