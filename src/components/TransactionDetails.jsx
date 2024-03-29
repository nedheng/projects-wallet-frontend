export function TransactionDetails({reciver}){
    return <div className="p-6 ">
        <div className="text-2xl font-bold text-left py-2 text-teal-400">
            {reciver}
        </div>
        <div className="text-m font-medium text-left py-2 text-teal-400">Amount in Rs     
        </div>
        <div>
            <input type="text" placeholder={"Enter amount"}  className="w-full px-2 py-1 border rounded border-slate-400 text-sm placeholder-opacity-75 placeholder-teal-200 "/>
        </div>
    </div>
}