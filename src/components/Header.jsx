import React from "react";
import ReactDOM from "react-dom/client";

function Header(props){
    
    return(
        
        <div>
            <h1 className="text-3xl font-medium">Hello {props.newname}!</h1>
            <p>I help you in manage your activities :</p>
        </div>
    )
}
export default Header