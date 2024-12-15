import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup(props) {
    const navigate = useNavigate()
    const user = props.newuser1
    const newuser2 = props.setusers

    const [tname, settname] = useState()
    const [tpass, settpass] = useState()

    function handleuser(evt) {
        settname(evt.target.value)

    }

    function handlepass(evt) {
        settpass(evt.target.value)
    }

    function addUSer() {
        newuser2([...user, { uname: tname, upass: tpass }])
        navigate("/")
    }




    return (<div className="bg-black p-10">
        <div className="bg-white p-10 rounded-md flex flex-col gap-2">
            <div className="flex flex-col gap-1">
                <h1 className="font-bold text-3xl">Hey,Poovendran</h1>
                <p>You can Signup here....!</p>
            </div>
            <div className="flex flex-col gap-2">
                <input onChange={handleuser} value={tname} placeholder="Username" className="w-52 p-1 border bg-transparent border-black rounded-md"></input>
                <input onChange={handlepass} value={tpass} placeholder="Password" className="w-52 p-1 border bg-transparent border-black rounded-md"></input>
                <input placeholder="Confirm Password" className="w-52 p-1 border bg-transparent border-black rounded-md"></input>
                <button onClick={addUSer} className="bg-green-600 text-blue-50 w-24 p-1 rounded-md">Sign Up</button>
                <p>Already Have an account ?  <Link to="/" className="underline font-semibold">Login</Link> </p>
            </div>
        </div>

    </div>)
}


export default Signup