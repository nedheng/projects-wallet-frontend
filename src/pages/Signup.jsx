import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";

export default function Signup(){
    return (
        <div className="h-screen bg-teal-200 flex justify-center ">
            <div className="flex flex-col justify-center ">
                <div className="text-center rounded-t-lg shadow-custom">
                <Heading label={"Sign up"}></Heading>
                </div>
                <div className="rounded-b-lg  bg-teal-100 w-90 text-center p-2 h-max px-4 shadow-custom">
                <SubHeading label={"Enter your information to create an account"}></SubHeading>
                <InputBox label={"First Name"} placeholder={"Nedhen"}></InputBox>
                <InputBox label={"Last Name"} placeholder={"Giridharan"}></InputBox>
                <InputBox label={"Email"} placeholder={"nedhen@gmail.com"}></InputBox>
                <InputBox label={"Password"} placeholder={"12345678"}></InputBox>
                <div>
                <Button label={"Sign Up"}></Button>
                </div>
                <BottomWarning lable={"Already have an account?"} linkText={"Login"} to={"/signin"}></BottomWarning>
                </div>
            </div>
        </div>
    )
}