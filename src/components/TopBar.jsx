export function TopBar({user}){
    return <div className="flex justify-between p-6 bg-teal-300 text-teal-100">
        <div className="text-4xl font-bold">Your Wallet</div>
        <div className="text-2xl font-medium flex gap-x-2">Hello, 
            <div className=" font-semibold">
            {user}
            </div>
        </div>
    </div>
}