
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { TransactionDetails } from "../components/TransactionDetails";


export default function Send(){
    return (
        <div className="h-screen bg-teal-200 flex justify-center ">
            <div className="flex flex-col justify-center w-1/6">
                <div className="text-center rounded-t-lg shadow-custom">
                    <Heading label={"Send Money"}></Heading>
                </div>
                <div className="rounded-b-lg  bg-teal-100 w-90 text-center p-2 h-max px-4 shadow-custom">
                <TransactionDetails reciver={"Nedhen"}></TransactionDetails>
                <Button label={"Send Money"}></Button>
                </div>
                
            </div>
        </div>
    )
}