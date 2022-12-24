import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = (props) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [createdMessage, setCreatedMessage] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const url ="http://localhost:8080/register"

    const handleName = (e) =>{
        e.preventDefault()
        setName(e.target.value)
    }

    const handleEmail = (e) =>{
        e.preventDefault()
        setEmail(e.target.value)
    }
    
    const handlePassword = (e) =>{
        e.preventDefault()
        setPassword(e.target.value)
    }

    const handleButton = async ()=>{
        let userToRegister = {
            name: name,
            email: email,
            password: password
        }



        await fetch(url, {
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userToRegister)
        })
        .then((response) => {
            setTimeout(() => {
                console.log(isLoading)
                setIsLoading(false)
                if(response.status == 500){
                    setCreatedMessage("An error has occurred")
                } else if(response.status == 204){
                    setCreatedMessage("User created succesfully, please back to login and sing in.")
                } else {
                    setCreatedMessage("Email already register")
                }
            }, 1000)
            setIsLoading(true)
        })
    }

    return(
        <React.Fragment>
            {isLoading ? <img className="loadingGeneral" src={"./Referencias/loading-13.gif"}/> : <div className="auth">
            <div>
                <Link to={"/login"}><img src="/Referencias/arrow-left.svg" /></Link>
            </div>
            <form className="authForm" onSubmit={(e)=>e.preventDefault()}>
                <label htmlFor="registerName">Name</label>
                <input name="registerName" type="text"  onInput={handleName}/>

                <label htmlFor="registerEmail">E-mail</label>
                <input name="registerEmail" type="mail"  onInput={handleEmail}/>

                <label htmlFor="registerPassword">Password</label>
                <input name="registerPassword" type="password" onInput={handlePassword}/>

                <p>{createdMessage && createdMessage}</p>

                <button className="button" type="submit" onClick={handleButton}>Register</button>
            </form>
            <div>
                <img className="registerImg" src='/Referencias/colorPokeball.png'></img>
            </div>           
        </div>}
        </React.Fragment>
    )
}

export default Register