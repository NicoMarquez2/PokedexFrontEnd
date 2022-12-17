import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
    return(
        <div className="buttonsNavbar">
            <div >
            {localStorage.userToken ? 
            <button className="button" onClick={props.handleLogOut}>LOGOUT</button> : 
            <Link to = {"/login"}><button className="button">LOGIN</button></Link>}
            </div>
            <Link to={"/compare"}><button className="button">COMPARE POKEMON</button></Link> 
        </div>       
    )
}

export default Navbar