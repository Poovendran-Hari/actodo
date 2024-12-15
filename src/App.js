import Header from "./components/Header";
import Card from "./components/Card";
import Todocontainer from "./Todocontainer";
import { useState } from "react";
import { BrowserRouter,Route,Router,Routes } from "react-router-dom";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Landing from "./components/pages/landing";
function App() {

  const [user, setuser] = useState([
    {
      uname: "Poovendran",
      upass: "Poovendran"
    }
  ])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login newuser1={user} setusers={setuser} />}></Route>
          <Route path='/signup' element={<Signup newuser1={user} setusers={setuser} />}></Route>
          <Route path='/landing' element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
