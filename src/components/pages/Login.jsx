import { use, useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"


function Login(props) {
    const navigate = useNavigate()
    const [tname, settname] = useState()
    const [tpass, settpass] = useState()
    const [ruser, setruser] = useState(true)
    const users = props.newuser1
    const rmain = props.newuser1.uname


    function newuser(evt) {
        settname(evt.target.value)

    }

    function newpass(evt) {
        settpass(evt.target.value)
    }
    var userfound = false
    function handlelanding() {
        users.forEach(function (item) {
            if (tname === item.uname && tpass === item.upass) {
                console.log("Login successful")
                userfound = true
                navigate("/landing", { state: { udata: tname } })
            }

        })
        if (userfound == false) {
            console.log("Login failed")
            setruser(false)
        }

    }

    return (<div className="bg-black p-10">
        <div className="bg-white p-10 rounded-md flex flex-col gap-2">
            <div className="flex flex-col gap-1">
                <h1 className="font-bold text-3xl">Hey,Kanishka</h1>
                {
                    ruser ? <p>I can help you to manage your activities after Login</p> : <p className="text-red-500">Please  <Link to="/signup" className=" underline font-semibold">Sign Up</Link> before login </p>
                }
            </div>
            <div className="flex flex-col gap-2">
                <input value={tname} onChange={newuser} placeholder="Username" className="w-52 p-1 border bg-transparent border-black rounded-md"></input>
                <input value={tpass} onChange={newpass} placeholder="Password" className="w-52 p-1 border bg-transparent border-black rounded-md"></input>
                <button onClick={handlelanding} className="bg-[#8272DA] text-blue-50 w-24 p-1 rounded-md">Login</button>
                <p>Don't Have an account ?  <Link to="/signup" className="underline font-semibold">Sign Up</Link> </p>
            </div>
        </div>

    </div>)
}

export default Login