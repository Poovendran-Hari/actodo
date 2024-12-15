import React from "react";
import Addtodoform from "./components/Addtodofor";
import Todolist from "./components/Todolist";
import { useState } from "react";
function Todocontainer() {
    
    const [activityArr,setActivityArr] = useState([
        {
            id:1,
            activity: "Go for a walk"
        },
        {
            id:2,
            activity: "Take a Bath"
        },
        {
            id:3,
            activity:"Breathing exercise"
        }
    ])

    return (
        <div>
            <div className="flex gap-5 flex-wrap">
                <Addtodoform activityArr={activityArr} setActivityArr={setActivityArr}/>
                <Todolist activityArr={activityArr} setActivityArr={setActivityArr} />
            </div>
        </div>
    )

}

export default Todocontainer