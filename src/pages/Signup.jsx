import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLasttName] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    return (
        <div className="h-screen bg-teal-200 flex justify-center ">
            <div className="flex flex-col justify-center ">
                <div className="text-center rounded-t-lg shadow-custom">
                <Heading label={"Sign up"}></Heading>
                </div>
                <div className="rounded-b-lg  bg-teal-100 w-90 text-center p-2 h-max px-4 shadow-custom">
                <SubHeading label={"Enter your information to create an account"}></SubHeading>
                <InputBox label={"First Name"} placeholder={"Nedhen"} onchange={e =>{
                    setFirstName(e.target.value)
                }}></InputBox>
                <InputBox label={"Last Name"} placeholder={"Giridharan"} onchange={e=>{
                    setLasttName(e.target.value)
                }}></InputBox>
                <InputBox label={"Email"} placeholder={"nedhen@gmail.com" } onchange={e=>{
                    setUserName(e.target.value)
                }}></InputBox>
                <InputBox label={"Password"} placeholder={"12345678"} onchange={e=>{
                    setPassword(e.target.value)
                }}></InputBox>
                <div>
                <Button label={"Sign Up"} onclick={async()=>{
                    const reaponse = await axios.post("http://localhost:3000/api/v1/user/signup", {
                        username,
                        firstName,
                        lastName,
                        password
                    });
                    localStorage.setItem("token",reaponse.data.token)
                    navigate("/dashboard")
                }}></Button>
                </div>
                <BottomWarning lable={"Already have an account?"} linkText={"Login"} to={"/signin"}></BottomWarning>
                </div>
            </div>
        </div>
    )
}