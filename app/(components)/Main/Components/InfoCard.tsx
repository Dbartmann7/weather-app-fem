type InfoCardProps = {
    label:string,
    value: string,
    className?:string
}


export default function InfoCard({label, value, className=""} : InfoCardProps){

    return( 
        <div className={`${className} bg-light-bg border border-border-color rounded-xl aspect-4/3 w-40 px-4 py-4`}>
            <div className="flex flex-col justify-between h-full">
                <h3 className="text-gray-400">{label}</h3>
                <h2 className="text-gray-300 max-w-max">{value}</h2>
            </div>
        </div>
    )
}