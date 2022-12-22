import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Link, useNavigate } from "react-router-dom";
import  { Redirect } from 'react-router-dom'


const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    let navigate = useNavigate('')
    const [isLoading, setIsLoading] = useState(false)

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
            setTimeout(() => {
                setIsLoading(false)
                if(data.token){
                    /*props.setLogIn()*/
                    localStorage.setItem('userToken',data.token)
                    localStorage.setItem('userId', data.userId)
                    navigate('/')
                } else {
                    setMessage(data.message)
                }
              }, 1000);
              setIsLoading(true)
        })
    }

    return(
        <React.Fragment>
            {isLoading ? <img className="loadingGeneral" src={"./Referencias/loading-13.gif"}/> : <div className="auth">
                <div className="authHeader">
                    <Link to={"/"}><img src="/Referencias/arrow-left.svg" /></Link>
                    <Link to = {"/register"}><button className="button">REGISTER</button></Link>
                </div>
                <form className="authForm" onSubmit={(e)=>e.preventDefault()}>
                    <label htmlFor="loginEmail">E-mail</label>
                    <input name="loginEmail" type="mail" onInput={handleEmail}/>

                    <label htmlFor="loginPassword">Password</label>
                    <input name="loginPassword" type="password" onInput={handlePassword}/>

                    <button type="button" className="button" onClick={handleButton}>Log In</button>
                    <p>{message && message}</p>
                </form>
                <div>
                    <img className="authImg" src='/Referencias/colorPokeball.png'></img>
                </div>    
            </div>}
        </React.Fragment>

        
        
    )
}

export default Login