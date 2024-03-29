import { Button } from "./Button";

export function Users(){
    return <div className="flex flex-col p-6">
        <div className="text-2xl font-bold text-teal-400 pb-5 flex justify-center">Users</div>
        <div className="px-96">
            <input type="text" placeholder={"Search users"}  className="w-full p-2 border rounded border-slate-200 text-sm placeholder-opacity-50 placeholder-teal-300 "/>
        </div>
        <div className="pt-5 p-2 flex-col px-96">
        <div className="flex justify-between items-center">
            <div className="text-teal-400 font-medium">Nedhen G</div>
            <Button label={"Send Money"}></Button>
        </div>
        <div className="flex justify-between items-center">
            <div className="text-teal-400 font-medium">John adad</div>
            <Button label={"Send Money"}></Button>
        </div>
        <div className="flex justify-between items-center">
            <div className="text-teal-400 font-medium">Hfb HJhfouaeb</div>
            <Button label={"Send Money"}></Button>
        </div>
        </div>
    </div>
}