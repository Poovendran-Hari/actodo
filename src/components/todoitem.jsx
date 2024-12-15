function Todoitem(props) {
    const activityArray = props.activityArr
    const setActivityArr = props.setArr

    function handleDelete(deleteid){
        var temparr = activityArray.filter(function(item){
            if(item.id === deleteid)
            {
                return false
            }
            else{
                return true
            }
        })
        setActivityArr(temparr)

    }

    return (
        <div className="flex justify-between">
            <p>{props.index + 1}.{props.activity}</p>
            <button className="text-red-400 " onClick={()=>handleDelete(props.id)}>Delete</button>
        </div>
    )
}
export default Todoitem