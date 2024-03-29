import { Balance } from "../components/Balance";
import { TopBar } from "../components/TopBar";
import { Users } from "../components/Users";

export default function Dashboard(){
    return (
        <div className="h-screen bg-teal-100">
            <TopBar user={"Nedhen"}></TopBar>
            <Balance balance={500}></Balance>
            <div className="">
                <Users></Users>
            </div>
            
        </div>
    )
}