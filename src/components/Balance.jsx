export function Balance({balance}){
    return <div className="flex justify-between p-6 bg-teal-200 text-teal-400">
        <div className="text-2xl font-bold">Available Balance ₹{balance}</div>
        
    </div>
}