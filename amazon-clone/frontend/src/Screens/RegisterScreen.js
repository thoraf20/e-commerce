
import React,{useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { register } from '../actions/userAction';


export default function RegisterScreen(props){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    const userRegister = useSelector(state=> state.userRegister);
    const { loading, userInfo, error} = userRegister;
    const dispatch = useDispatch();

    useEffect(() => {
        if(userInfo){
            props.history.push("/");
        }
        return () => {
    
        };
    }, [userInfo]);

    const submitHnadler = (e) => {
        e.preventDefault();
        dispatch(register(name, email, password));
    }

    return <div className="form">
        <form onSubmit={submitHnadler}>
            <ul className="form-container">
                <li>
                    <h2>Create Account</h2>
                </li>
                <li>
                    {loading && <div>Loading...</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                    <label for="name">
                        Name
                    </label>
                    <input type="name" name="name" id="name" onChange={(e) => setName(e.target.value)} />
                </li>
                <li>
                    <label for="email">
                        Email
                    </label>
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                </li>
                <li>
                    <label for="password">
                        Password
                    </label>
                    <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                </li>
                <li>
                    <label for="rePassword">
                        Confirm-Password
                    </label>
                    <input type="rePassword" name="rePassword" id="rePassword" onChange={(e) => setRePassword(e.target.value)} />
                </li>
                <li>
                    <button className="button-primary">Register</button> 
                </li>
                <li>
                    Already have an account?<Link to="/signin">Sign-In</Link>
                </li>
            </ul>
        </form>
    </div>


}