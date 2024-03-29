export function InputBox({label, placeholder}){
    return <div className="text-base font-semibold text-left py-2 text-teal-400">
        {label}
        <div>
            <input type="text" placeholder={placeholder}  className="w-full px-2 py-1 border rounded border-slate-200 text-sm placeholder-opacity-50 placeholder-teal-200"/>
        </div>
    </div>
}