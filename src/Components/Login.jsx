import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Link, Navigate, redirect, Router } from "react-router-dom";

const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const url ="http://localhost:8080/login"

    const handleEmail = (e) =>{
        e.preventDefault()
        setEmail(e.target.value)
    }

    const handlePassword = (e) =>{
        e.preventDefault()
        setPassword(e.target.value)
    }

    const handleButton = async () => {
        let user = {
            email: email,
            password: password
        }

        await fetch(url,{
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then((response) => response.json())
        .then((data)=>{
            if(data.token){
                /*props.setLogIn()*/
                localStorage.setItem('userToken',data.token)
                localStorage.setItem('userId', data.userId)
            } else {
                setMessage(data.message)
            }
        })
    }

    return(

        <div>
            <Link to={"/"}>
                <img src="/Referencias/arrow-left.svg" className="arrow" />
            </Link>
            <form className="loginForm" onSubmit={(e)=>e.preventDefault()}>
                <label htmlFor="loginEmail">E-mail</label>
                <input name="loginEmail" type="mail" onInput={handleEmail}/>

                <label htmlFor="loginPassword">Password</label>
                <input name="loginPassword" type="password" onInput={handlePassword}/>

                <button type="button" onClick={handleButton}>Log In</button>
                <p>{message && message}</p>
            </form>

        </div>
        
    )
}

export default Login