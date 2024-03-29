export function Button({onclick,label}){
    return <div className="p-1">
        <button type="button" onClick={onclick} class="focus:outline-none text-teal-100 bg-teal-400 hover:bg-teal-300 focus:ring-4 focus:ring-teal-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">{label}</button>
    </div>
}