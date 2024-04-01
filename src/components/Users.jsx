import { useEffect, useState } from "react";
import { Button } from "./Button";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export function Users(){
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(()=>{
        axios.get("https://nedhen-wallet-backend.onrender.com/api/v1/user/bulk?filter=" + filter)
        .then( response => {
            setUsers(response.data.user)
        })
    },[filter])

    return <div className="flex flex-col p-6">
            <div className="text-2xl font-bold text-teal-400 pb-5 flex justify-center">Users</div>
            <div className="px-96">
                <input onChange={e=>{
                    setFilter(e.target.value)
                }} type="text" placeholder={"Search users"}  className="w-full p-2 border rounded border-slate-200 text-sm placeholder-opacity-50 placeholder-teal-300 "/>
            </div>
            <div className="pt-5 p-2 flex-col px-96">
                {users.map(user => <User user={user} />)}
            </div>
        </div>
}

function User({user}){
    const navigate = useNavigate();

    return <div className="flex justify-between items-center">
                <div className="text-teal-400 font-medium">{user.firstName} {user.lastName}
                </div>
                <Button label={"Send Money"} onclick={()=>{
                    navigate("/send?id=" + user._id + "&name=" + user.firstName)
                }}></Button>
            </div>
}