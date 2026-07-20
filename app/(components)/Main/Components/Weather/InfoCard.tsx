import { Minus } from "lucide-react"

type InfoCardProps = {
    label:string,
    value: number,
    unit : string
    className?:string
}


export default function InfoCard({label, value, unit, className=""} : InfoCardProps){

    return( 
        <div className={`${className}  bg-light-bg border border-border-color rounded-xl aspect-4/3 w-full max-h-30 px-4 py-4`}>
            <div className="flex flex-col justify-between h-full">
                <h3 className="text-gray-400 wrap-break-word">{label}</h3>
                <h2 className="text-gray-300 max-w-max">{value + unit}</h2>
            </div>
        </div>
    )
}

export const InfoCardSkeleton = ({label}:{label:string}) => {
    
    return(
        <div className={` bg-light-bg border border-border-color rounded-xl aspect-4/3 w-full h-30 px-4 py-4`}>
            <div className="flex flex-col justify-between h-full">
                <h3 className="text-gray-400 wrap-break-word">{label}</h3>
                <h2>—</h2>
            </div>
        </div>
    )
}