import { use, useState } from "react"

function Addtodoform(props) {

    const activityArr = props.activityArr
    const setActivityArr =props.setActivityArr

    const [newActivity,setnewActivity]=useState("")
    
    function handlechange(evt){
        setnewActivity(evt.target.value)
    }

    function handleadd(){
        setActivityArr([...activityArr,{id:activityArr.lenght+1,activity:newActivity}])
        setnewActivity("")
    }

    return (

        <div className="flex flex-col gap-2">
            <h1 className=" text-2xl  font-medium">Manage Activities</h1>
            <div>
                <input onChange={handlechange} value={newActivity} className="border border-black p-1 bg-transparent" placeholder="Next activity ?"></input>
                <button onClick={handleadd} className="border border-black bg-black text-cyan-50 p-1">Add</button>
            </div>
        </div>
    )
}
export default Addtodoform