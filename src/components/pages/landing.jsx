import React from "react";
import Todocontainer from "../../Todocontainer";
import Header from "../Header";
import Card from "../Card"
import { useLocation } from "react-router-dom";
function Landing() {
    const  rname= useLocation()
    

    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <Header newname={rname.state.udata} />
                <div className="flex justify-between gap-7 flex-wrap">
                    <Card bgstyle={"#8272DA"} title={"23"} subtitle={"Chennai"} />
                    <Card bgstyle={"#FD6663"} title={"December"} subtitle={"14:03:20"} />
                    <Card bgstyle={"#FCA201"} title={"Built using"} subtitle={"React"} />

                </div>
                <Todocontainer />
            </div>
        </div>
    );
}

export default Landing