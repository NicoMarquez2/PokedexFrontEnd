import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
    return(
        <div className="error">
            <h1>error 404</h1>
            <p>This pokemon is not available</p>
            <Link to={'/'}><span>Back to home</span></Link>
        </div>
    )
}

export default Error