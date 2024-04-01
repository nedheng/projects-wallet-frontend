import { useEffect, useState } from "react";
import { Balance } from "../components/Balance";
import { TopBar } from "../components/TopBar";
import { Users } from "../components/Users";
import axios from "axios";


export default function Dashboard(){
   
    
    
    const [balance,setBalance] = useState()
    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/account/balance",{
                    headers:{
                            Authorization: "Bearer "+ localStorage.getItem('token')
                        }
                }).then((res)=>{
                    setBalance(res.data.balance)
                })
    },[])
    
    
    return (
        <div className="h-screen bg-teal-100">
            <TopBar user={name}></TopBar>
            <Balance balance={balance}></Balance>
            <div className="">
                <Users></Users>
            </div>
            
        </div>
    )
}