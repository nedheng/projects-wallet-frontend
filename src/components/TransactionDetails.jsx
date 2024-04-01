import { useState } from "react"

export function TransactionDetails({reciver}){
    

    return <div className="p-6 ">
        <div className="text-2xl font-bold text-left py-2 text-teal-400">
            {reciver}
        </div>
        <div className="text-m font-medium text-left py-2 text-teal-400">Amount in Rs     
        </div>
        
    </div>
}