import React, {useState} from "react";
import './Login.css';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function Login(){
  const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
        .then(auth => {
          history('/');
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
      e.preventDefault();
      createUserWithEmailAndPassword(auth, email, password)
        .then(auth => {
          if (auth) {
            history('/');
          }
        })
        .catch(error => alert(error.message))
    }
    return(
      <div className="login">
           <Link to={'/'} style={{textDecoration: "none"}}>
              <div className="login_logo">
                <StorefrontIcon className='login_logoImage' fontSize='large'/>
                <h2 className="login_logoTitle">eShop</h2>
              </div>
            </Link>

            <div className="login_container">
              <h1>Sign In</h1>
              <form>
                <h5>Email</h5>
                <input type={"text"} value={email} onChange={e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type={"password"} value={password} onChange={e => setPassword(e.target.value)} />

                <button type="submit" className="login_SignInButton" onClick={signIn}>Sign In</button>
              </form>
              <p>
                By Signing in you agree to the eShop websitr conditions of use and sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice. 
              </p>
              <button className="login_registerButton" onClick={register}>Create Your eShop Account</button>
            </div>
      </div>
    );
}

export default Login;