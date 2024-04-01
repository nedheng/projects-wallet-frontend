import axios from "axios"
import { useSearchParams } from "react-router-dom";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { TransactionDetails } from "../components/TransactionDetails";
import { useState } from "react";


export default function Send(){
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name")
    const [amount, setAmount] = useState();
    return (
        <div className="h-screen bg-teal-200 flex justify-center ">
            <div className="flex flex-col justify-center w-1/6">
                <div className="text-center rounded-t-lg shadow-custom">
                    <Heading label={"Send Money"}></Heading>
                </div>
                <div className="rounded-b-lg  bg-teal-100 w-90 text-center p-2 h-max px-4 shadow-custom">
                <TransactionDetails reciver={name}></TransactionDetails>
                <div className="">
                <input onChange={e =>{
                    setAmount(e.target.value)
                    }} type="text" placeholder={"Enter amount"}  className="w-full px-2 py-1 border rounded border-slate-400 text-sm placeholder-opacity-75 placeholder-teal-200 "/>
                </div>
                <Button label={"Send Money"} onclick={()=>{
                    console.log("click")
                    axios.post("http://localhost:3000/api/v1/account/transfer",{
                         to: id,
                         amount
                    },{
                        headers: {
                            Authorization: "Bearer "+ localStorage.getItem("token")
                        }
                    })
                }}></Button>
                </div>
                
            </div>
        </div>
    )
}