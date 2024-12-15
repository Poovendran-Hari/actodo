import React from "react";
import ReactDOM from "react-dom/client";

function Card(props) {
    return (
        
            <div style={{ backgroundColor: props.bgstyle }} className="px-10 py-5 my-5 border rounded-md text-center flex-grow">
                <h1 className=" font-medium text-2xl ">{props.title}</h1>
                <p>{props.subtitle}</p>
            </div>
    )
}

export default Card