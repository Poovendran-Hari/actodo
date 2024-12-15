import { useState } from "react"
import Todoitem from "./todoitem"
function Todolist(props) {
    
    const activityArr = props.activityArr
    const setActivityArr= props.setActivityArr 
    return (
        <div className="bg-[#BDB4EA] border rounded-md p-4 flex-grow">
            <h1 className="text-2xl font-medium">Today's Activity</h1>
            {
                activityArr.length == 0?<p>You haven't added any activity Yet...!</p>:""
            }
            {
                activityArr.map(function(item,index){
                    return <Todoitem id={item.id} activity ={item.activity} index={index} activityArr={activityArr} setArr={setActivityArr} />
                })
            }
        </div>
    )
}
export default Todolist