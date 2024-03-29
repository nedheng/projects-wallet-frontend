import{Link} from "react-router-dom"
export function BottomWarning({lable,linkText,to}){
    return <div className="flex justify-center font-medium text-sm text-teal-400">
        <div>
            {lable}
        </div>
        <div className="px-2">
            <Link className="cursor-pointer underline" to={to}>
            {linkText}
            </Link>
        </div>
    </div>
}